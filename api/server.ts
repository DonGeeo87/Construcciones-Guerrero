import express from 'express';
import cors from 'cors';
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT || 3026);

// DB persistente
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new DatabaseSync(path.join(DATA_DIR, 'leads.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL DEFAULT 'visita',
    nombre TEXT,
    telefono TEXT,
    comuna TEXT,
    direccion TEXT,
    fecha_visita TEXT,
    horario TEXT,
    tipo_proyecto TEXT,
    descripcion TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'construcciones-guerrero-api' });
});

app.post('/api/leads', (req, res) => {
  const {
    tipo = 'visita',
    nombre = '',
    telefono = '',
    comuna = '',
    direccion = '',
    fecha_visita = '',
    horario = '',
    tipo_proyecto = '',
    descripcion = ''
  } = req.body || {};

  if (!telefono && !nombre) {
    return res.status(400).json({ error: 'Se requiere al menos nombre o teléfono' });
  }

  const stmt = db.prepare(`
    INSERT INTO leads (tipo, nombre, telefono, comuna, direccion, fecha_visita, horario, tipo_proyecto, descripcion)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(tipo, nombre, telefono, comuna, direccion, fecha_visita, horario, tipo_proyecto, descripcion);

  res.status(201).json({ ok: true, id: result.lastInsertRowid });
});

app.get('/api/leads', (_req, res) => {
  const rows = db.prepare('SELECT * FROM leads ORDER BY created_at DESC LIMIT 200').all();
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`API construcciones-guerrero en http://0.0.0.0:${PORT}`);
});
