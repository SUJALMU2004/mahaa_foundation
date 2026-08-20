const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

function processDir(dir, lang) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'kn') {
        processDir(fullPath, lang);
      }
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix activities arguments
      content = content.replace(/getPublishedActivities\(activities\)/g, `getPublishedActivities(activities['${lang}'])`);
      content = content.replace(/getFeaturedActivity\(activities\)/g, `getFeaturedActivity(activities['${lang}'])`);
      content = content.replace(/getActivityBySlug\(activities,/g, `getActivityBySlug(activities['${lang}'],`);
      content = content.replace(/getRelatedActivities\(activities,/g, `getRelatedActivities(activities['${lang}'],`);
      
      // Also fix any remaining seo['kn'].activities['kn'] issues
      content = content.replace(/seo\['kn'\]\.activities\['kn'\]/g, "seo['kn'].activities");
      content = content.replace(/seo\['en'\]\.activities\['en'\]/g, "seo['en'].activities");

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(srcDir, 'en');
if (fs.existsSync(path.join(srcDir, 'kn'))) {
  processDir(path.join(srcDir, 'kn'), 'kn');
}

console.log("Fixed activities arguments!");
