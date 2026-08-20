const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const knDir = path.join(srcDir, 'kn');

const subdirs = ['blog', 'activities'];

for (const subdir of subdirs) {
  const sourceSubdir = path.join(srcDir, subdir);
  const targetSubdir = path.join(knDir, subdir);
  
  if (!fs.existsSync(targetSubdir)) {
    fs.mkdirSync(targetSubdir, { recursive: true });
  }

  if (fs.existsSync(sourceSubdir)) {
    const files = fs.readdirSync(sourceSubdir);
    
    for (const file of files) {
      if (file.endsWith('.astro')) {
        const filePath = path.join(sourceSubdir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Make 'en' explicit in src/pages/subdir/
        let enContent = content
          .replace(/seo\.([a-zA-Z]+)/g, "seo['en'].$1")
          .replace(/seo\['en'\]\['en'\]/g, "seo['en']")
          .replace(/innerPages\.([a-zA-Z]+)/g, "innerPages['en'].$1")
          .replace(/innerPages\['en'\]\['en'\]/g, "innerPages['en']")
          .replace(/activities\.([a-zA-Z]+)/g, "activities['en'].$1")
          .replace(/activities\['en'\]\['en'\]/g, "activities['en']");

        fs.writeFileSync(filePath, enContent, 'utf8');

        // Create 'kn' version
        let knContent = content
          .replace(/seo\.([a-zA-Z]+)/g, "seo['kn'].$1")
          .replace(/seo\['en'\]/g, "seo['kn']")
          .replace(/innerPages\.([a-zA-Z]+)/g, "innerPages['kn'].$1")
          .replace(/innerPages\['en'\]/g, "innerPages['kn']")
          .replace(/activities\.([a-zA-Z]+)/g, "activities['kn'].$1")
          .replace(/activities\['en'\]/g, "activities['kn']");

        const knFilePath = path.join(targetSubdir, file);
        fs.writeFileSync(knFilePath, knContent, 'utf8');
      }
    }
  }
}

console.log("Subdirectory duplication and replacement complete!");
