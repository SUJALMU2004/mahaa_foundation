const fs = require('fs');
const path = require('path');

function processDir(dir, depth) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath, depth + 1);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Because we moved from src/pages/... to src/pages/kn/...,
      // we need to add an extra '../' to all relative imports that go outside the current directory.
      // Wait, depth 0 is src/pages/kn.
      // In src/pages/, imports were '../components/...'.
      // Now in src/pages/kn/, they should be '../../components/...'.
      
      // We will replace '../' with '../../', '../../' with '../../../', etc.
      // But we must be careful not to replace things multiple times.
      // A simple regex: replace( /(['"])\.\.\//g, "$1../../" )
      
      // Since all imports going up at least one level start with '../', 
      // adding one '../' at the beginning of each such path works perfectly.
      content = content.replace(/(['"])\.\.\//g, "$1../../");

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

const knDir = path.join(__dirname, 'src', 'pages', 'kn');
processDir(knDir, 0);

console.log("Fixed relative imports in kn directory!");
