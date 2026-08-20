const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let originalContent = content;

      // Remove the bad one in JSX
      content = content.replace(/\{\s*const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "{");
      content = content.replace(/\{\r?\n\s*const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "{\n");
      // Remove any previously added bad `const lang...`
      content = content.replace(/const lang = getLangFromUrl\(Astro\.url\);\r?\n/g, "");
      
      // Add it before the closing `---`
      // We can split by `---` and add it to the first block (which is frontmatter)
      if (content.startsWith('---')) {
         const parts = content.split('---');
         if (parts.length >= 3) {
            // parts[0] is "", parts[1] is frontmatter
            parts[1] = parts[1] + "const lang = getLangFromUrl(Astro.url);\n";
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

console.log("Fixed const lang placement for good!");
