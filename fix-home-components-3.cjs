const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let originalContent = content;

      // Remove any existing `const lang = ...`
      content = content.replace(/const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "");
      
      // Add `const lang = getLangFromUrl(Astro.url);\n` right before the first `home[lang]`
      content = content.replace(/home\[lang\]/g, "---INSERT_LANG_HERE---\nhome[lang]");
      
      // Replace the FIRST occurrence of `---INSERT_LANG_HERE---` with `const lang = ...`
      content = content.replace(/---INSERT_LANG_HERE---\n/, "const lang = getLangFromUrl(Astro.url);\n");
      
      // Remove all OTHER occurrences of `---INSERT_LANG_HERE---`
      content = content.replace(/---INSERT_LANG_HERE---\n/g, "");

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const componentsDir = path.join(__dirname, 'src', 'components', 'sections', 'home');
processDir(componentsDir);

console.log("Fixed const lang placement again!");
