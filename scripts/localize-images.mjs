import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_IMG_DIR = path.resolve(__dirname, '../public/images/unsplash');

async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (e) { }
}

async function walk(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
            results = results.concat(await walk(filePath));
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            results.push(filePath);
        }
    }
    return results;
}

async function run() {
    await ensureDir(PUBLIC_IMG_DIR);
    const files = await walk(SRC_DIR);

    for (const file of files) {
        let content = await fs.readFile(file, 'utf8');
        const regex = /"https:\/\/images\.unsplash\.com\/([^"?]+)(\?[^"]+)?"/g;
        let match;
        let modified = false;

        const matches = [...content.matchAll(regex)];

        for (const match of matches) {
            const fullUrl = match[0].slice(1, -1); // remove quotes
            const photoId = match[1];
            // Safe filename
            const safeName = photoId.replace(/[^a-zA-Z0-9_-]/g, '_') + '.jpg';
            const localPath = `/images/unsplash/${safeName}`;
            const absLocalPath = path.join(PUBLIC_IMG_DIR, safeName);

            // Check if already downloaded
            try {
                await fs.access(absLocalPath);
            } catch {
                console.log(`Downloading ${safeName}...`);
                try {
                    const res = await fetch(fullUrl);
                    if (!res.ok) throw new Error(`Status ${res.status}`);
                    const buffer = await res.arrayBuffer();
                    await fs.writeFile(absLocalPath, Buffer.from(buffer));
                } catch (e) {
                    console.error(`Failed to download ${fullUrl}:`, e.message);
                    continue; // skip replace if download fails
                }
            }

            content = content.replace(new RegExp(`"${fullUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'), `"${localPath}"`);
            modified = true;
        }

        if (modified) {
            await fs.writeFile(file, content, 'utf8');
            console.log(`Updated ${path.basename(file)} to use local images`);
        }
    }
}

run().catch(console.error);
