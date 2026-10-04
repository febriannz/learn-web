import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  GraduationCap, 
  Mail, 
  Lock, 
  User, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [tab, setTab] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [kelas, setKelas] = useState(12);
  const [role, setRole] = useState('user'); // 'user' | 'admin'
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // Demo 1-Click Login
  const handleQuickLogin = (demoRole) => {
    setErrorMsg('');
    if (demoRole === 'admin') {
      const adminUser = {
        id: 'admin-1',
        name: 'Bapak Admin Super',
        email: 'admin@kuispintar.com',
        role: 'admin',
        kelas: 12
      };
      localStorage.setItem('kuispintar_current_user', JSON.stringify(adminUser));
      onLoginSuccess(adminUser);
      onClose();
    } else {
      const siswaUser = {
        id: 'siswa-1',
        name: 'Ahmad Siswa Pintar',
        email: 'siswa@kuispintar.com',
        role: 'user',
        kelas: 12
      };
      localStorage.setItem('kuispintar_current_user', JSON.stringify(siswaUser));
      onLoginSuccess(siswaUser);
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Harap isi email dan kata sandi.');
      return;
    }

    const rawUsers = localStorage.getItem('kuispintar_users');
    let users = [];
    try {
      users = rawUsers ? JSON.parse(rawUsers) : [];
    } catch {
      users = [];
    }

    if (tab === 'login') {
      // Check admin hardcoded credentials
      if (email === 'admin@kuispintar.com' && password === 'admin123') {
        handleQuickLogin('admin');
        return;
      }
      if (email === 'siswa@kuispintar.com' && password === 'siswa123') {
        handleQuickLogin('user');
        return;
      }

      // Check registered users
      const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
      if (!found) {
        setErrorMsg('Email atau kata sandi salah. Gunakan akun demo atau daftar akun baru!');
        return;
      }

      const userData = {
        id: found.id,
        name: found.name,
        email: found.email,
        role: found.role || 'user',
        kelas: found.kelas || 12
      };
      localStorage.setItem('kuispintar_current_user', JSON.stringify(userData));
      onLoginSuccess(userData);
      onClose();

    } else {
      // SIGN UP
      if (!name) {
        setErrorMsg('Nama lengkap wajib diisi.');
        return;
      }
      const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existing) {
        setErrorMsg('Email ini sudah terdaftar. Silakan langsung masuk!');
        return;
      }

      const newUser = {
        id: 'user-' + Date.now(),
        name,
        email: email.toLowerCase(),
        password,
        role: role,
        kelas: parseInt(kelas, 10) || 12,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('kuispintar_users', JSON.stringify(users));

      const userData = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        kelas: newUser.kelas
      };
      localStorage.setItem('kuispintar_current_user', JSON.stringify(userData));
      onLoginSuccess(userData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#12151c] border border-[#222734] rounded-2xl w-full max-w-md p-6 sm:p-7 shadow-2xl space-y-4 relative text-zinc-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1c2230] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#1c2230] border border-[#2b354a] text-zinc-200 mb-1">
            {tab === 'login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
          </div>
          <h2 className="text-xl font-bold text-white">
            {tab === 'login' ? 'Masuk ke KuisPintar' : 'Daftar Akun Baru'}
          </h2>
          <p className="text-xs text-zinc-400">
            {tab === 'login' ? 'Akses riwayat nilai dan pembahasan latihan mandiri' : 'Mulai latih kemampuan akademik sekarang'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#161a24] p-1 rounded-xl border border-[#222734]">
          <button
            type="button"
            onClick={() => { setTab('login'); setErrorMsg(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              tab === 'login'
                ? 'bg-[#252c3d] text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => { setTab('signup'); setErrorMsg(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              tab === 'signup'
                ? 'bg-[#252c3d] text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="p-3 bg-[#3b171a] border border-[#5e2329] rounded-xl text-xs text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Quick Demo Login Buttons */}
        <div className="bg-[#161a24] border border-[#222734] rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Login Cepat 1-Klik (Akun Demo):</span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin('user')}
              className="py-2 px-3 bg-[#1e2433] hover:bg-[#273044] text-zinc-200 border border-[#2a3449] rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
              <span>Siswa (User)</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin('admin')}
              className="py-2 px-3 bg-[#1e2433] hover:bg-[#273044] text-zinc-200 border border-[#2a3449] rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Admin Demo</span>
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {tab === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Contoh: Rian Pratama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2 bg-[#161a24] border border-[#252b3a] rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              Alamat Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 bg-[#161a24] border border-[#252b3a] rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-zinc-500" />
              <input
                type="password"
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 bg-[#161a24] border border-[#252b3a] rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                required
              />
            </div>
          </div>

          {tab === 'signup' && (
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Tingkat Kelas
                </label>
                <select
                  value={kelas}
                  onChange={(e) => setKelas(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 bg-[#161a24] border border-[#252b3a] rounded-xl text-xs font-medium text-white focus:outline-none focus:border-zinc-400"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Kelas {i + 1} ({i + 1 <= 6 ? 'SD' : (i + 1 <= 9 ? 'SMP' : 'SMA')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Tipe Akun
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 bg-[#161a24] border border-[#252b3a] rounded-xl text-xs font-medium text-white focus:outline-none focus:border-zinc-400"
                >
                  <option value="user">Siswa</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-bold rounded-xl transition-colors mt-2 cursor-pointer"
          >
            {tab === 'login' ? 'Masuk Sekarang' : 'Daftar Akun Baru'}
          </button>
        </form>
      </div>
    </div>
  );
}
