const fs = require('fs');
const path = require('path');

const dirs = ['.', './js'];
dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));
  files.forEach(f => {
    const filePath = path.join(dir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /(https:\/\/images\.unsplash\.com\/[a-zA-Z0-9_\-\.\/\?=&;]+)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const idx = match.index;
      const snippet = content.substring(Math.max(0, idx - 120), Math.min(content.length, idx + 180)).replace(/[\r\n\t]+/g, ' ');
      console.log(`[${filePath}] URL: ${match[1].split('?')[0]}`);
      console.log(`   Context: ${snippet}\n`);
    }
  });
});
