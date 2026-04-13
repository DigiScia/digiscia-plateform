const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('c:\\Users\\user\\digiscia-plateform\\frontend\\src', function(filePath) {
  if (filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    content = content.replace(/@import url\('https:\/\/fonts.googleapis.com[^)]+'\);\n?/g, '');
    content = content.replace(/@import url\("https:\/\/fonts.googleapis.com[^)]+"\);\n?/g, '');
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Cleaned: ' + filePath);
    }
  }
});
