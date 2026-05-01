const fs = require('fs');
const path = require('path');

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const enData = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages', 'en.json'), 'utf8'));
const zhCNData = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages', 'zh-CN.json'), 'utf8'));
const zhTWData = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages', 'zh-TW.json'), 'utf8'));

const enKeys = new Set(getKeys(enData));
const zhCNKeys = new Set(getKeys(zhCNData));
const zhTWKeys = new Set(getKeys(zhTWData));

const missingInZhCN = [...enKeys].filter(k => !zhCNKeys.has(k));
const missingInZhTW = [...enKeys].filter(k => !zhTWKeys.has(k));

console.log('=== Keys in en.json missing from zh-CN.json ===');
if (missingInZhCN.length) missingInZhCN.forEach(k => console.log('  ' + k));
else console.log('  None');

console.log('');
console.log('=== Keys in en.json missing from zh-TW.json ===');
if (missingInZhTW.length) missingInZhTW.forEach(k => console.log('  ' + k));
else console.log('  None');

console.log('');
console.log(`Total en.json keys: ${enKeys.size}`);
console.log(`Total zh-CN.json keys: ${zhCNKeys.size}`);
console.log(`Total zh-TW.json keys: ${zhTWKeys.size}`);
