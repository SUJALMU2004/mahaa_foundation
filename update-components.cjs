const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // 1. Update imports and add lang translation
      // Find `import { home } from ...`
      if (content.includes("import { home } from") && !content.includes("getLangFromUrl")) {
        content = content.replace(/(import { home } from '[^']+';)/, "$1\nimport { getLangFromUrl, useTranslatedPath } from '../../../i18n/utils';");
        // For components deeper/shallower, this path might be wrong. Let's fix the relative path to i18n
        // If the import of home is `import { home } from '../../../data/home';`, then i18n is `../../../i18n/utils`
        // If it's `import { home } from '../../data/home';`, then i18n is `../../i18n/utils`
        let i18nPath = '../../../i18n/utils';
        if (content.includes("import { home } from '../../data")) i18nPath = '../../i18n/utils';
        if (content.includes("import { home } from '../data")) i18nPath = '../i18n/utils';
        
        content = content.replace("import { getLangFromUrl, useTranslatedPath } from '../../../i18n/utils';", `import { getLangFromUrl, useTranslatedPath } from '${i18nPath}';`);
        
        // Add lang initialization after imports (before the first const extraction from home)
        // Find `const { ... } = home;`
        content = content.replace(/const { ([^}]+) } = home;/, "const lang = getLangFromUrl(Astro.url);\nconst translatePath = useTranslatedPath(lang);\nconst { $1 } = home[lang];");
        modified = true;
      }
      
      // Update innerPages
      if (content.includes("import { innerPages") && !content.includes("getLangFromUrl")) {
        let match = content.match(/import {[^}]*innerPages[^}]*} from '([^']+)';/);
        if (match) {
          let i18nPath = match[1].replace('data/pages', 'i18n/utils');
          if(i18nPath === match[1]) i18nPath = '../../../i18n/utils';
          content = content.replace(match[0], `${match[0]}\nimport { getLangFromUrl, useTranslatedPath } from '${i18nPath}';`);
          content = content.replace(/const ([a-zA-Z0-9_]+) = innerPages\.([a-zA-Z0-9_]+);/, "const lang = getLangFromUrl(Astro.url);\nconst translatePath = useTranslatedPath(lang);\nconst $1 = innerPages[lang].$2;");
          modified = true;
        }
      }

      // 2. Update hrefs to use translatePath if translatePath is defined
      if (content.includes("translatePath") && !content.includes("href={translatePath")) {
        // Replace string hrefs: href="/about" -> href={translatePath('/about', lang)}
        content = content.replace(/href="(\/[^"]*)"/g, "href={translatePath('$1', lang)}");
        // Replace variable hrefs: href={item.href} -> href={translatePath(item.href, lang)}
        content = content.replace(/href={([a-zA-Z0-9_.[\]]+)}/g, "href={translatePath($1, lang)}");
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(componentsDir);
console.log("Done updating components!");
