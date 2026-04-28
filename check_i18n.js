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
const zhData = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages', 'zh.json'), 'utf8'));

const enKeys = new Set(getKeys(enData));
const zhKeys = new Set(getKeys(zhData));

const missingInZh = [...enKeys].filter(k => !zhKeys.has(k));
const missingInEn = [...zhKeys].filter(k => !enKeys.has(k));

console.log('=== Keys in en.json missing from zh.json ===');
if (missingInZh.length) missingInZh.forEach(k => console.log('  ' + k));
else console.log('  None');

console.log('');
console.log('=== Keys in zh.json missing from en.json ===');
if (missingInEn.length) missingInEn.forEach(k => console.log('  ' + k));
else console.log('  None');

console.log('');
console.log(`Total en.json keys: ${enKeys.size}`);
console.log(`Total zh.json keys: ${zhKeys.size}`);
