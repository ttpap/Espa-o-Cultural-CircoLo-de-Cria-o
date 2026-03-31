/* ================================================
   CircoLo — Supabase Client
   ================================================ */

const SUPABASE_URL  = 'https://wyycozdfwefbyhzyvqgt.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eWNvemRmd2VmYnloenl2cWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MDg3MTcsImV4cCI6MjA5MDQ4NDcxN30.8i7Z8N7O_dG9Br15KQimk8lLK5LP84np-K7Px_eZyHk';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

/* ── Auth helpers ── */
const Auth = {
  currentUser: null,
  currentProfile: null,

  async login(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: 'E-mail ou senha incorretos.' };

    const profile = await this.fetchProfile(data.user.id);
    this.currentUser = data.user;
    this.currentProfile = profile;
    return { ok: true, user: data.user, profile };
  },

  async logout() {
    await sb.auth.signOut();
    this.currentUser = null;
    this.currentProfile = null;
    window.location.href = 'index.html';
  },

  async getSession() {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return null;
    this.currentUser = session.user;
    this.currentProfile = await this.fetchProfile(session.user.id);
    return session;
  },

  async fetchProfile(userId) {
    const { data } = await sb.from('profiles').select('*').eq('id', userId).single();
    return data;
  },

  async requireAuth(role) {
    const session = await this.getSession();
    if (!session) { window.location.href = 'login.html'; return null; }
    if (role && this.currentProfile?.role !== role) {
      window.location.href = this.currentProfile?.role === 'admin' ? 'admin.html' : 'member.html';
      return null;
    }
    return this.currentProfile;
  }
};

/* ── Calendar helpers ── */
const Calendar = {
  typeLabel(type) {
    return { apresentacao: 'Apresentação', oficina: 'Oficina', programacao: 'Programação', especial: 'Especial' }[type] || type;
  },
  typeIcon(type) {
    return { apresentacao: '🎭', oficina: '🎨', programacao: '📋', especial: '⭐' }[type] || '📅';
  },
  async getEventsForMonth(year, month) {
    const from = `${year}-${String(month + 1).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const to = `${year}-${String(month + 1).padStart(2, '0')}-${lastDay}`;
    const { data } = await sb.from('events').select('*').gte('date', from).lte('date', to).order('date').order('time');
    return (data || []).map(normalizeEvent);
  },
  async getEventsForDate(date) {
    const d = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    const { data } = await sb.from('events').select('*').eq('date', d).order('time');
    return (data || []).map(normalizeEvent);
  },
  async getUpcoming(limit = 10) {
    const today = new Date().toISOString().slice(0, 10);
    const { data } = await sb.from('events').select('*').gte('date', today).order('date').order('time').limit(limit);
    return (data || []).map(normalizeEvent);
  },
  async getWorkshops() {
    const { data } = await sb.from('workshops').select('*').order('time');
    return data || [];
  }
};

/* normalise DB row → JS object with date as Date */
function normalizeEvent(e) {
  return { ...e, date: new Date(e.date + 'T00:00:00') };
}

/* ── Toast / Modal helpers ── */
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = 'all 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}
function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function formatDate(date, opts = {}) {
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', ...opts });
}
function formatMonth(year, month) {
  return new Date(year, month, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
}
