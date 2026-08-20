const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let originalContent = content;

      // Add lang if not exists
      if (!content.includes('const lang = getLangFromUrl(Astro.url);')) {
        content = content.replace(
          /---\r?\n/,
          "---\nconst lang = getLangFromUrl(Astro.url);\n"
        );
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const componentsDir = path.join(__dirname, 'src', 'components', 'sections', 'home');
processDir(componentsDir);

console.log("Added const lang = ... in home components!");
