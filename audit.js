const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const publicDir = path.join(__dirname, 'public');

// 1. Check for default Next.js boilerplate files in public/
const boilerplateFiles = ['vercel.svg', 'next.svg', 'window.svg', 'file.svg', 'globe.svg'];
console.log('=== Default Next.js boilerplate files in public/ ===');
boilerplateFiles.forEach(f => {
  const fp = path.join(publicDir, f);
  if (fs.existsSync(fp)) console.log(`  [WARN] Found: public/${f}`);
});

// 2. Extract <title> from all EN HTML pages
console.log('\n=== Page Titles (EN) ===');
function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walkDir(fp, fileList);
    else if (f === 'index.html') fileList.push(fp);
  });
  return fileList;
}

const enPages = walkDir(path.join(outDir, 'en'));
enPages.sort().forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/<title>(.*?)<\/title>/);
  const route = p.replace(path.join(outDir, 'en') + path.sep, '').replace(path.sep + 'index.html', '').replace('index.html', '/');
  const title = match ? match[1] : 'NO TITLE';
  console.log(`  /${route}  =>  ${title}`);
});

// 3. Check ZH page titles
console.log('\n=== Page Titles (ZH) ===');
const zhPages = walkDir(path.join(outDir, 'zh'));
zhPages.sort().forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const match = content.match(/<title>(.*?)<\/title>/);
  const route = p.replace(path.join(outDir, 'zh') + path.sep, '').replace(path.sep + 'index.html', '').replace('index.html', '/');
  const title = match ? match[1] : 'NO TITLE';
  console.log(`  /${route}  =>  ${title}`);
});

// 4. Check route parity
console.log('\n=== Route Parity (EN vs ZH) ===');
const enRoutes = enPages.map(p => p.replace(path.join(outDir, 'en'), '')).sort();
const zhRoutes = zhPages.map(p => p.replace(path.join(outDir, 'zh'), '')).sort();
const enSet = new Set(enRoutes);
const zhSet = new Set(zhRoutes);
const missingZH = enRoutes.filter(r => !zhSet.has(r));
const missingEN = zhRoutes.filter(r => !enSet.has(r));
if (missingZH.length) { console.log('  Missing in ZH:'); missingZH.forEach(r => console.log('    ' + r)); }
if (missingEN.length) { console.log('  Missing in EN:'); missingEN.forEach(r => console.log('    ' + r)); }
if (!missingZH.length && !missingEN.length) console.log('  All routes match ✓');

console.log(`\n  EN pages: ${enPages.length}, ZH pages: ${zhPages.length}`);

// 5. Check for broken image references in HTML
console.log('\n=== Broken Image References ===');
let brokenCount = 0;
const allPages = walkDir(outDir);
allPages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const imgMatches = content.matchAll(/src="(\/images\/[^"]+)"/g);
  for (const m of imgMatches) {
    const imgPath = path.join(outDir, m[1]);
    if (!fs.existsSync(imgPath)) {
      const route = p.replace(outDir + path.sep, '');
      console.log(`  [BROKEN] ${route}: ${m[1]}`);
      brokenCount++;
    }
  }
});
if (!brokenCount) console.log('  No broken image references ✓');
