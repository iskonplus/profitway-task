import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DB_PATH = resolve(__dirname, '../data/db.json');

export async function readDB() {
  try {
    const raw = await readFile(DB_PATH, 'utf-8');
    const parsed = raw.trim() ? JSON.parse(raw) : {};
    return { clients: parsed.clients ?? [] };
  } catch {
    return { clients: [] };
  }
}

export async function writeDB(db) {
  await writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
}