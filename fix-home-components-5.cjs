const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // 1. Remove all existing `const lang = getLangFromUrl(Astro.url);`
      content = content.replace(/const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "");
      content = content.replace(/[ \t]*const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "");

      // 2. Find the end of imports (i.e. the line after the last `import ...`)
      if (content.startsWith('---')) {
        const parts = content.split('---');
        if (parts.length >= 3) {
          let frontmatter = parts[1];
          let lines = frontmatter.split('\n');
          let lastImportIndex = -1;
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('import ')) {
              lastImportIndex = i;
            }
          }
          if (lastImportIndex !== -1) {
            lines.splice(lastImportIndex + 1, 0, "const lang = getLangFromUrl(Astro.url);");
          } else {
            // No imports? Just insert at the beginning
            lines.splice(1, 0, "const lang = getLangFromUrl(Astro.url);");
          }
          parts[1] = lines.join('\n');
          content = parts.join('---');
        }
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const componentsDir = path.join(__dirname, 'src', 'components', 'sections', 'home');
processDir(componentsDir);

console.log("Fixed const lang properly after imports!");
