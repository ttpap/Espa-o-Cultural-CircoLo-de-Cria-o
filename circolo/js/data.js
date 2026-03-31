/* ================================================
   CircoLo — Mock Data
   ================================================ */

const USERS = [
  { id: 'admin-1', name: 'Administrador', email: 'admin@circolo.com.br', password: 'admin123', role: 'admin', initials: 'AD' },
  { id: 'mem-1',   name: 'Ana Beatriz',   email: 'ana@circolo.com.br',   password: '123456',   role: 'member', initials: 'AB', workshops: ['of-1','of-2'] },
  { id: 'mem-2',   name: 'Carlos Rocha',  email: 'carlos@circolo.com.br',password: '123456',   role: 'member', initials: 'CR', workshops: ['of-3'] },
  { id: 'mem-3',   name: 'Fernanda Lima', email: 'fernanda@circolo.com.br',password:'123456',  role: 'member', initials: 'FL', workshops: ['of-4','of-5'] },
  { id: 'mem-4',   name: 'Marcos Silva',  email: 'marcos@circolo.com.br', password:'123456',   role: 'member', initials: 'MS', workshops: ['of-6'] },
];

const WORKSHOPS = [
  { id: 'of-1', title: 'Teatro do Oprimido', instructor: 'mem-1', instructorName: 'Ana Beatriz',
    description: 'Técnica teatral que usa o teatro como linguagem para análise e transformação da realidade social.',
    day: 'Segunda', time: '19h00', duration: '2h', capacity: 15, enrolled: 12 },
  { id: 'of-2', title: 'Voz e Presença Cênica', instructor: 'mem-1', instructorName: 'Ana Beatriz',
    description: 'Trabalho corporal e vocal para performers e atores iniciantes.',
    day: 'Quarta', time: '18h30', duration: '1h30', capacity: 12, enrolled: 10 },
  { id: 'of-3', title: 'Percussão Afro-Brasileira', instructor: 'mem-2', instructorName: 'Carlos Rocha',
    description: 'Iniciação ao ritmo e aos tambores da cultura afro-brasileira.',
    day: 'Sábado', time: '10h00', duration: '2h', capacity: 20, enrolled: 18 },
  { id: 'of-4', title: 'Dança Contemporânea', instructor: 'mem-3', instructorName: 'Fernanda Lima',
    description: 'Técnicas de dança contemporânea com foco em improvisação e criação.',
    day: 'Terça', time: '19h30', duration: '1h30', capacity: 16, enrolled: 14 },
  { id: 'of-5', title: 'Movimento Criativo Infantil', instructor: 'mem-3', instructorName: 'Fernanda Lima',
    description: 'Expressão corporal e dança para crianças de 5 a 10 anos.',
    day: 'Sábado', time: '09h00', duration: '1h', capacity: 10, enrolled: 9 },
  { id: 'of-6', title: 'Poesia e Sarau', instructor: 'mem-4', instructorName: 'Marcos Silva',
    description: 'Leitura, escrita e performance de poesia contemporânea.',
    day: 'Quinta', time: '20h00', duration: '2h', capacity: 25, enrolled: 20 },
];

// Events for the current month and surrounding months
function generateEvents() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();

  return [
    // APRESENTAÇÕES
    { id: 'ev-1', title: 'Espetáculo: Raízes', type: 'apresentacao', date: new Date(y, m, 5), time: '20h00',
      description: 'Espetáculo de dança contemporânea inspirado nas raízes culturais brasileiras.',
      instructor: 'Cia. Corpo Livre', location: 'Palco Principal', free: false, price: 'R$ 20,00' },
    { id: 'ev-2', title: 'Mostra de Teatro', type: 'apresentacao', date: new Date(y, m, 12), time: '19h30',
      description: 'Apresentação dos alunos do Teatro do Oprimido.',
      instructor: 'Ana Beatriz', location: 'Palco Principal', free: true },
    { id: 'ev-3', title: 'Concerto: Sons da Diáspora', type: 'apresentacao', date: new Date(y, m, 19), time: '20h30',
      description: 'Noite de música com artistas da diáspora africana.',
      instructor: 'Carlos Rocha & Convidados', location: 'Pátio Central', free: false, price: 'R$ 15,00' },
    { id: 'ev-4', title: 'Performance Poética', type: 'apresentacao', date: new Date(y, m, 26), time: '19h00',
      description: 'Sarau com poetas da cidade.',
      instructor: 'Marcos Silva', location: 'Sala de Leitura', free: true },

    // OFICINAS (recurring, shown as events on specific dates)
    { id: 'of-ev-1', title: 'Oficina: Teatro do Oprimido', type: 'oficina', date: new Date(y, m, 3), time: '19h00',
      description: 'Sessão semanal de Teatro do Oprimido.', instructor: 'Ana Beatriz', location: 'Sala 1', free: false, price: 'R$ 0,00 (mensalidade)' },
    { id: 'of-ev-2', title: 'Oficina: Percussão', type: 'oficina', date: new Date(y, m, 8), time: '10h00',
      description: 'Sessão de percussão afro-brasileira.', instructor: 'Carlos Rocha', location: 'Sala de Percussão', free: false, price: 'Mensalidade' },
    { id: 'of-ev-3', title: 'Oficina: Dança Contemporânea', type: 'oficina', date: new Date(y, m, 11), time: '19h30',
      description: 'Sessão de dança contemporânea.', instructor: 'Fernanda Lima', location: 'Sala de Dança', free: false, price: 'Mensalidade' },
    { id: 'of-ev-4', title: 'Oficina: Percussão', type: 'oficina', date: new Date(y, m, 15), time: '10h00',
      description: 'Sessão de percussão afro-brasileira.', instructor: 'Carlos Rocha', location: 'Sala de Percussão', free: false, price: 'Mensalidade' },
    { id: 'of-ev-5', title: 'Oficina: Poesia', type: 'oficina', date: new Date(y, m, 17), time: '20h00',
      description: 'Sarau e escrita criativa.', instructor: 'Marcos Silva', location: 'Sala de Leitura', free: false, price: 'Mensalidade' },
    { id: 'of-ev-6', title: 'Oficina: Voz e Presença', type: 'oficina', date: new Date(y, m, 18), time: '18h30',
      description: 'Sessão de voz e presença cênica.', instructor: 'Ana Beatriz', location: 'Sala 1', free: false, price: 'Mensalidade' },
    { id: 'of-ev-7', title: 'Oficina: Percussão', type: 'oficina', date: new Date(y, m, 22), time: '10h00',
      description: 'Sessão de percussão afro-brasileira.', instructor: 'Carlos Rocha', location: 'Sala de Percussão', free: false, price: 'Mensalidade' },
    { id: 'of-ev-8', title: 'Oficina: Dança Infantil', type: 'oficina', date: new Date(y, m, 22), time: '09h00',
      description: 'Movimento criativo para crianças.', instructor: 'Fernanda Lima', location: 'Sala de Dança', free: false, price: 'Mensalidade' },
    { id: 'of-ev-9', title: 'Oficina: Teatro do Oprimido', type: 'oficina', date: new Date(y, m, 24), time: '19h00',
      description: 'Sessão semanal de Teatro do Oprimido.', instructor: 'Ana Beatriz', location: 'Sala 1', free: false, price: 'Mensalidade' },
    { id: 'of-ev-10', title: 'Oficina: Poesia', type: 'oficina', date: new Date(y, m, 31 > new Date(y, m+1, 0).getDate() ? 28 : 31), time: '20h00',
      description: 'Sarau e escrita criativa.', instructor: 'Marcos Silva', location: 'Sala de Leitura', free: false, price: 'Mensalidade' },

    // PROGRAMAÇÕES ESPECIAIS
    { id: 'pg-1', title: 'Abertura: Mês das Artes', type: 'programacao', date: new Date(y, m, 1), time: '18h00',
      description: 'Abertura do mês com performances e exposição coletiva.',
      instructor: 'Coletivo CircoLo', location: 'Espaço Inteiro', free: true },
    { id: 'pg-2', title: 'Conversa com Artistas', type: 'programacao', date: new Date(y, m, 14), time: '16h00',
      description: 'Bate-papo com artistas residentes do espaço.',
      instructor: 'Equipe CircoLo', location: 'Sala de Convivência', free: true },
    { id: 'pg-3', title: 'Roda de Conversa: Arte e Política', type: 'programacao', date: new Date(y, m, 21), time: '19h00',
      description: 'Discussão sobre o papel da arte como ferramenta política.',
      instructor: 'Facilitação: Marcos Silva', location: 'Pátio Central', free: true },

    // ESPECIAL
    { id: 'sp-1', title: 'Festival de Fim de Mês', type: 'especial', date: new Date(y, m, new Date(y, m+1, 0).getDate()), time: '17h00',
      description: 'Grande evento de encerramento com apresentações de todas as turmas.',
      instructor: 'Todos os Oficineiros', location: 'Espaço Inteiro', free: false, price: 'R$ 10,00' },
  ].filter(e => !isNaN(e.date.getTime()));
}

const EVENTS = generateEvents();

// Auth helpers
const Auth = {
  currentUser: null,
  login(email, password) {
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      sessionStorage.setItem('circolo_user', JSON.stringify(user));
      return { ok: true, user };
    }
    return { ok: false, error: 'E-mail ou senha incorretos.' };
  },
  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('circolo_user');
    window.location.href = 'index.html';
  },
  restore() {
    const saved = sessionStorage.getItem('circolo_user');
    if (saved) this.currentUser = JSON.parse(saved);
    return this.currentUser;
  },
  requireAuth(role) {
    const user = this.restore();
    if (!user) { window.location.href = 'login.html'; return null; }
    if (role && user.role !== role) { window.location.href = user.role === 'admin' ? 'admin.html' : 'member.html'; return null; }
    return user;
  }
};

// Calendar helpers
const Calendar = {
  getEventsForDate(date) {
    return EVENTS.filter(e =>
      e.date.getFullYear() === date.getFullYear() &&
      e.date.getMonth() === date.getMonth() &&
      e.date.getDate() === date.getDate()
    );
  },
  getEventsForMonth(year, month) {
    return EVENTS.filter(e => e.date.getFullYear() === year && e.date.getMonth() === month);
  },
  typeLabel(type) {
    return { apresentacao: 'Apresentação', oficina: 'Oficina', programacao: 'Programação', especial: 'Especial' }[type] || type;
  },
  typeIcon(type) {
    return { apresentacao: '🎭', oficina: '🎨', programacao: '📋', especial: '⭐' }[type] || '📅';
  }
};

// Toast helper
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}

// Modal helpers
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// Format date
function formatDate(date, opts = {}) {
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', ...opts });
}
function formatMonth(year, month) {
  return new Date(year, month, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}
