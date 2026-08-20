const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const knDir = path.join(srcDir, 'kn');

if (!fs.existsSync(knDir)) {
  fs.mkdirSync(knDir, { recursive: true });
}

const files = [
  '404.astro',
  'about.astro',
  'activities.astro',
  'contact.astro',
  'donate.astro',
  'gallery.astro',
  'index.astro',
  'our-work.astro',
  'ration-distribution.astro',
  'social-service.astro',
  'tree-plantation.astro',
  'videos.astro',
  'volunteer.astro'
];

for (const file of files) {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make 'en' explicit in src/pages
    let enContent = content
      .replace(/seo\.([a-zA-Z]+)/g, "seo['en'].$1")
      .replace(/seo\['en'\]\['en'\]/g, "seo['en']") // Fix if already replaced
      .replace(/innerPages\.([a-zA-Z]+)/g, "innerPages['en'].$1")
      .replace(/innerPages\['en'\]\['en'\]/g, "innerPages['en']");

    fs.writeFileSync(filePath, enContent, 'utf8');

    // Create 'kn' version
    let knContent = content
      .replace(/seo\.([a-zA-Z]+)/g, "seo['kn'].$1")
      .replace(/seo\['en'\]/g, "seo['kn']")
      .replace(/innerPages\.([a-zA-Z]+)/g, "innerPages['kn'].$1")
      .replace(/innerPages\['en'\]/g, "innerPages['kn']");

    const knFilePath = path.join(knDir, file);
    fs.writeFileSync(knFilePath, knContent, 'utf8');
  }
}

console.log("Duplication and replacement complete!");
