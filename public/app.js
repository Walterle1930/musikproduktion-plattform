* {
  box-sizing: border-box;
}

:root {
  --bg: #07111d;
  --bg-soft: #0d1a2b;
  --panel: rgba(16, 25, 37, 0.86);
  --panel-strong: #111d2d;
  --card: rgba(17, 25, 39, 0.82);
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf4ff;
  --muted: #9bb0c7;
  --primary: #7b5cff;
  --primary-2: #47d1ff;
  --success: #2fe7a7;
  --warning: #ffbf69;
  --danger: #ff6d6d;
  --shadow: 0 30px 60px rgba(3, 8, 16, 0.38);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(123, 92, 255, 0.24), transparent 20%),
    radial-gradient(circle at right bottom, rgba(71, 209, 255, 0.14), transparent 22%),
    var(--bg);
  color: var(--text);
}

a {
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  padding: 22px 0 10px;
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(12, 18, 30, 0.8);
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #9d7bff);
  color: white;
  font-weight: 800;
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-sub {
  color: var(--muted);
  font-size: 12px;
}

.main-nav,
.nav-actions,
.hero-actions,
.header-actions,
.form-actions,
.field-row,
.progress-line,
.card-head,
.score-meta,
.table-head,
.row-item,
.status-item,
.analysis-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.main-nav {
  flex-wrap: wrap;
}

.main-nav a {
  color: var(--muted);
  transition: color 0.2s;
}

.main-nav a:hover {
  color: var(--text);
}

.nav-actions {
  gap: 12px;
}

.card {
  background: rgba(17, 25, 39, 0.82);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid var(--line);
  font-weight: 600;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #8f6cff);
  color: white;
  border: none;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.btn-ghost {
  background: transparent;
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  padding: 54px 0 16px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  color: var(--primary-2);
  letter-spacing: 0.14em;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 22px 0 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1.08rem;
  max-width: 620px;
}

.hero-actions {
  margin-top: 26px;
  flex-wrap: wrap;
}

.stats-row {
  margin-top: 32px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stats-row strong {
  font-size: 1.8rem;
}

.stats-row span {
  color: var(--muted);
}

.hero-panel {
  padding: 22px;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.badge.success,
.badge.primary {
  background: rgba(47, 231, 167, 0.12);
  color: var(--success);
}

.badge.neutral {
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
}

.mini-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 12px;
}

.mini-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
}

.mini-card.accent {
  background: linear-gradient(135deg, rgba(123, 92, 255, 0.15), rgba(71, 209, 255, 0.1));
}

.mini-card span {
  color: var(--muted);
  font-size: 12px;
}

.mini-card strong {
  font-size: 1.5rem;
}

.bars {
  margin-top: 26px;
  display: flex;
  align-items: end;
  gap: 10px;
  height: 120px;
}

.bars span {
  display: block;
  flex: 1;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--primary-2), var(--primary));
}

.progress-track {
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.progress-track span {
  position: absolute;
  inset: 0 auto 0 0;
  display: block;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary-2), var(--primary));
}

.progress-line {
  margin-top: 18px;
}

.progress-line label {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.feature-section {
  margin-top: 70px;
}

.section-head {
  text-align: center;
  margin-bottom: 20px;
}

.section-head.left {
  text-align: left;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 18px;
}

.feature-box {
  padding: 22px 20px;
}

.icon-box {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  font-size: 1.6rem;
  border-radius: 16px;
  background: rgba(123, 92, 255, 0.12);
  border: 1px solid rgba(123, 92, 255, 0.2);
}

.feature-box h3 {
  margin: 18px 0 10px;
  font-size: 1.15rem;
}

.feature-box p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.workspace-grid,
.two-panel {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  margin-top: 60px;
}

.form-card,
.summary-card,
.invoice-card,
.analytics-card,
.data-card,
.analysis-panel,
.board-card,
.top-panel {
  padding: 22px;
}

.stack-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 16px;
}

.field-row {
  display: grid;
  gap: 16px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.94rem;
}

input,
select,
textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  padding: 12px 14px;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.status-list,
.role-box,
.progress-stack,
.analysis-grid {
  margin-top: 20px;
}

.status-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.status-item:last-child {
  border-bottom: none;
}

.status-item div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.status-item small {
  color: var(--muted);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: var(--success); }
.dot.blue { background: var(--primary-2); }
.dot.purple { background: var(--primary); }
.dot.orange { background: var(--warning); }

.value {
  font-weight: 800;
}

.role-box {
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.role-box h4 {
  margin: 0 0 12px;
}

.role-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.role-tags span,
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
}

.tag.green { color: var(--success); background: rgba(47, 231, 167, 0.12); }
.tag.blue { color: var(--primary-2); background: rgba(71, 209, 255, 0.12); }
.tag.orange { color: var(--warning); background: rgba(255, 191, 105, 0.12); }
.tag.purple { color: #c6bbff; background: rgba(123, 92, 255, 0.12); }

.board-section {
  margin-top: 70px;
}

.kanban-board {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
}

.kanban-column {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 14px;
  min-height: 260px;
}

.column-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 12px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 14px;
}

.column-head strong {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  font-size: 12px;
}

.task-card {
  background: rgba(17, 25, 39, 0.86);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 12px;
  margin-bottom: 12px;
}

.task-card h4 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.task-card p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.93rem;
}

.invoice-table {
  margin-top: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.table-head,
.row-item {
  padding: 15px 16px;
}

.table-head {
  background: rgba(255,255,255,0.03);
  color: var(--muted);
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.08em;
}

.row-item {
  border-top: 1px solid var(--line);
}

.row-item:nth-child(odd) {
  background: rgba(255,255,255,0.01);
}

.row-item span:nth-child(2) {
  text-align: center;
}

.row-item span:nth-child(3) {
  text-align: right;
  font-weight: 700;
}

.total-row {
  background: rgba(123, 92, 255, 0.09);
  font-weight: 700;
}

.score-box {
  margin-top: 20px;
}

.score-meta {
  margin-bottom: 10px;
}

.score-meta strong {
  font-size: 1.5rem;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 12px;
}

.analysis-grid div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
}

.analysis-grid strong {
  font-size: 1.2rem;
}

.analysis-grid span {
  color: var(--muted);
}

.full {
  width: 100%;
  margin-top: 20px;
}

.page-shell.auth-shell,
.page-shell.dashboard-shell {
  width: min(1200px, calc(100% - 20px));
}

.auth-layout {
  min-height: calc(100vh - 60px);
  display: grid;
  place-items: center;
}

.auth-card {
  width: min(520px, 100%);
  padding: 28px;
}

.auth-card h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.7rem);
  letter-spacing: -0.05em;
}

.auth-sub {
  margin: 12px 0 22px;
  color: var(--muted);
}

.auth-form {
  margin-top: 0;
}

.text-link {
  color: var(--primary-2);
  font-size: 0.92rem;
  text-align: center;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 22px;
  min-height: calc(100vh - 30px);
}

.sidebar {
  padding: 20px 18px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px;
  border-radius: 12px;
  color: var(--muted);
  border: 1px solid transparent;
}

.sidebar-nav a.active,
.sidebar-nav a:hover {
  background: rgba(123, 92, 255, 0.08);
  border-color: rgba(123, 92, 255, 0.2);
  color: var(--text);
}

.dashboard-main {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.top-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.page-title h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
}

.page-title p {
  margin: 6px 0 0;
  color: var(--muted);
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 16px;
}

.kpi-card {
  padding: 18px 18px 16px;
}

.kpi-card small {
  color: var(--muted);
}

.kpi-card strong {
  display: block;
  margin-top: 10px;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
}

.delta {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  color: var(--success);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.table-wrap {
  overflow-x: auto;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.order-table th,
.order-table td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}

.order-table thead th {
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.status-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.status-badge.review { background: rgba(71, 209, 255, 0.12); color: var(--primary-2); }
.status-badge.pending { background: rgba(255, 191, 105, 0.12); color: var(--warning); }
.status-badge.done { background: rgba(47, 231, 167, 0.12); color: var(--success); }

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.progress-item label {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: var(--muted);
}

.analysis-panel {
  padding: 24px;
}

.analysis-panel textarea {
  margin-top: 16px;
}

@media (max-width: 980px) {
  .hero,
  .workspace-grid,
  .two-panel,
  .dashboard-grid,
  .dashboard-layout,
  .feature-grid,
  .kanban-board,
  .kpi-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-layout {
    display: flex;
    flex-direction: column;
  }

  .nav-wrap,
  .top-panel {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(100% - 20px, 1240px);
  }

  .nav-wrap {
    padding: 16px 14px;
  }

  .main-nav,
  .nav-actions,
  .hero-actions,
  .header-actions,
  .progress-line,
  .field-row,
  .two-col,
  .analysis-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }
}
