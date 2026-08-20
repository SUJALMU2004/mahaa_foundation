const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let originalContent = content;
      // Fix seo['en'].<prop>['en']
      content = content.replace(/seo\['en'\]\.([a-zA-Z0-9_]+)\['en'\]/g, "seo['en'].$1");
      // Fix seo['kn'].<prop>['kn']
      content = content.replace(/seo\['kn'\]\.([a-zA-Z0-9_]+)\['kn'\]/g, "seo['kn'].$1");

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const pagesDir = path.join(__dirname, 'src', 'pages');
processDir(pagesDir);

console.log("Fixed seo prop nested issues in pages directory!");
