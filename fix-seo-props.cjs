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
      
      // Fix page.seo['en'] and page.seo['kn'] to just page.seo
      let originalContent = content;
      content = content.replace(/page\.seo\['en'\]\.ogTitle/g, "page.seo.ogTitle");
      content = content.replace(/page\.seo\['en'\]\.ogDescription/g, "page.seo.ogDescription");
      content = content.replace(/page\.seo\['en'\]\.ogImage/g, "page.seo.ogImage");
      
      content = content.replace(/page\.seo\['kn'\]\.ogTitle/g, "page.seo.ogTitle");
      content = content.replace(/page\.seo\['kn'\]\.ogDescription/g, "page.seo.ogDescription");
      content = content.replace(/page\.seo\['kn'\]\.ogImage/g, "page.seo.ogImage");

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const pagesDir = path.join(__dirname, 'src', 'pages');
processDir(pagesDir);

console.log("Fixed page.seo props in pages directory!");
