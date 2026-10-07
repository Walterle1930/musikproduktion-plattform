const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'store.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(PUBLIC_DIR));

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      users: [
        { id: 1, name: 'Admin Studio', email: 'admin@audi-flow.de', password: 'admin123', role: 'Admin', team: 'Management' },
        { id: 2, name: 'Mara Producer', email: 'producer@audi-flow.de', password: 'producer123', role: 'Producer', team: 'Production' },
        { id: 3, name: 'Jonas Mixer', email: 'mix@audi-flow.de', password: 'mix123', role: 'Engineer', team: 'Mixing' },
        { id: 4, name: 'Lea Kundenservice', email: 'customer@audi-flow.de', password: 'customer123', role: 'Customer', team: 'Client' },
        { id: 5, name: 'Nina Analyst', email: 'analyst@audi-flow.de', password: 'analyst123', role: 'Analyst', team: 'Quality' }
      ],
      orders: [
        { id: 1, orderNumber: 'AF-2026-1001', customer: 'Lena Musik GmbH', project: 'Summer Pulse', genre: 'Pop', service: 'Produktion', deadline: '2026-10-18', budget: '€2.400', status: 'Review', note: 'Herbstrelease mit Vocal Tuning' },
        { id: 2, orderNumber: 'AF-2026-1002', customer: 'North Echo', project: 'Velvet Nights', genre: 'Electronic', service: 'Mix & Master', deadline: '2026-10-21', budget: '€1.850', status: 'Pending', note: 'Dancefloor-Track für Release' },
        { id: 3, orderNumber: 'AF-2026-1003', customer: 'Nova Label', project: 'Crimson Wave', genre: 'Rock', service: 'Albumproduktion', deadline: '2026-10-26', budget: '€3.600', status: 'Done', note: 'Album-Production mit Mixing' }
      ],
      invoices: [
        { id: 1, invoiceNumber: 'INV-1042', customer: 'Lena Musik GmbH', total: '€2.900', status: 'Bezahlt', dueDate: '2026-10-31' },
        { id: 2, invoiceNumber: 'INV-1043', customer: 'North Echo', total: '€1.850', status: 'Ausstehend', dueDate: '2026-11-02' },
        { id: 3, invoiceNumber: 'INV-1044', customer: 'Nova Label', total: '€3.600', status: 'Bezahlt', dueDate: '2026-11-05' }
      ],
      kanban: {
        columns: [
          { id: 'new', label: 'Neu', count: 4 },
          { id: 'inprogress', label: 'In Arbeit', count: 5 },
          { id: 'review', label: 'Review', count: 3 },
          { id: 'done', label: 'Abgeschlossen', count: 6 }
        ],
        tasks: [
          { id: 1, column: 'new', title: 'Demo-Track aufnehmen', description: 'Rhythm Section, Drums, Bassline', assignee: 'Kunde' },
          { id: 2, column: 'new', title: 'Briefing finalisieren', description: 'Vision, Zielgruppe, Stil', assignee: 'Admin' },
          { id: 3, column: 'inprogress', title: 'Melodie entwickeln', description: 'Vocal Hook + Arrangement', assignee: 'Producer' },
          { id: 4, column: 'inprogress', title: 'Mixing Session', description: 'EQ, Compression, Bus', assignee: 'Engineer' },
          { id: 5, column: 'review', title: 'Mastering Check', description: 'Final loudness review', assignee: 'Analyst' },
          { id: 6, column: 'done', title: 'Release MP3', description: 'Final export + Upload', assignee: 'Studio' },
          { id: 7, column: 'done', title: 'Rechnung versendet', description: 'Invoice #INV-1042', assignee: 'Finance' }
        ]
      },
      analyses: [
        { id: 1, project: 'Summer Pulse', originality: '96.4%', similarity: '0.8%', quality: '4/5', loudness: '9.4' },
        { id: 2, project: 'Velvet Nights', originality: '92.1%', similarity: '1.6%', quality: '3.8/5', loudness: '8.7' }
      ],
      stats: {
        revenue: '€48.2k',
        activeProjects: 86,
        openInvoices: 19,
        checks: 12,
        conversion: '+12.4%',
        activeProjectsDelta: '+8',
        invoiceDelta: '-3',
        checksDelta: '+5'
      }
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
}

function readData() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/dashboard', (req, res) => {
  const data = readData();
  res.json({
    stats: data.stats,
    orders: data.orders.slice(0, 4),
    analyses: data.analyses,
    invoices: data.invoices
  });
});

app.get('/api/orders', (req, res) => {
  const data = readData();
  res.json(data.orders);
});

app.post('/api/orders', (req, res) => {
  const data = readData();
  const payload = req.body;

  const newOrder = {
    id: Date.now(),
    orderNumber: `AF-2026-${String(data.orders.length + 1001).padStart(4, '0')}`,
    customer: payload.customer || 'Neues Studio-Projekt',
    project: payload.project || 'Unbenanntes Projekt',
    genre: payload.genre || 'Pop',
    service: payload.service || 'Produktion',
    deadline: payload.deadline || '2026-11-15',
    budget: payload.budget || '€1.500',
    status: payload.status || 'Pending',
    note: payload.note || 'Projekt neu angelegt.'
  };

  data.orders.unshift(newOrder);
  writeData(data);
  res.status(201).json(newOrder);
});

app.get('/api/invoices', (req, res) => {
  const data = readData();
  res.json(data.invoices);
});

app.post('/api/invoices', (req, res) => {
  const data = readData();
  const payload = req.body;
  const invoice = {
    id: Date.now(),
    invoiceNumber: payload.invoiceNumber || `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    customer: payload.customer || 'Neukunde',
    total: payload.total || '€0',
    status: payload.status || 'Ausstehend',
    dueDate: payload.dueDate || '2026-12-01'
  };

  data.invoices.unshift(invoice);
  writeData(data);
  res.status(201).json(invoice);
});

app.get('/api/kanban', (req, res) => {
  const data = readData();
  res.json(data.kanban);
});

app.post('/api/analysis', (req, res) => {
  const payload = req.body || {};
  const rawText = String(payload.text || '').trim();
  const score = rawText ? Math.max(84, 100 - (rawText.length % 18) * 0.6) : 84;

  const result = {
    originality: `${Number(score).toFixed(1)}%`,
    similarity: `${(100 - score).toFixed(1)}%`,
    quality: `${Math.min(5, (score / 20)).toFixed(1)}/5`,
    loudness: `${(score / 10).toFixed(1)}`
  };

  res.json(result);
});

app.get('/api/users', (req, res) => {
  const data = readData();
  res.json(data.users);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const data = readData();
  const user = data.users.find((entry) => entry.email === email && entry.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Ungültige E-Mail oder Passwort' });
  }

  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    team: user.team
  };

  res.json({ user: safeUser, token: 'demo-token' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AudiFlow Studio läuft auf http://localhost:${PORT}`);
});
