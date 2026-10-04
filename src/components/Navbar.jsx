import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  User, 
  ShieldCheck, 
  LogOut, 
  LogIn, 
  BarChart2,
  Trophy,
  Library
} from 'lucide-react';

export default function Navbar({ 
  selectedClass, 
  lastScore, 
  onGoHome, 
  onGoLearn,
  currentView = 'home',
  currentUser, 
  onOpenAuth, 
  onLogout, 
  onOpenDashboard 
}) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const getStageLabel = (c) => {
    if (c <= 6) return `Kelas ${c} SD`;
    if (c <= 9) return `Kelas ${c} SMP`;
    return `Kelas ${c} SMA`;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101319]/90 backdrop-blur-md border-b border-[#222733] transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div 
          onClick={onGoHome} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1c212c] border border-[#2c3344] flex items-center justify-center text-zinc-100 group-hover:border-zinc-500 transition-colors">
            <BookOpen className="w-4 h-4 text-zinc-200" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-zinc-100">
                KuisPintar
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1e2330] text-zinc-300 border border-[#2b3345] font-semibold">
                Online
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 font-normal">
              Platform Latihan Mandiri
            </span>
          </div>
        </div>

        {/* Actions & User Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Selected Class Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a22] text-zinc-300 text-xs font-medium border border-[#252b39]">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
            <span>{getStageLabel(selectedClass)}</span>
          </div>

          {/* Last Score Badge */}
          {lastScore && (
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a22] text-zinc-300 text-xs font-medium border border-[#252b39]">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{lastScore.score}/{lastScore.total} ({lastScore.percentage}%)</span>
            </div>
          )}

          {/* Belajar Materi Shortcut */}
          {onGoLearn && (
            <button
              onClick={onGoLearn}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                currentView === 'learn'
                  ? 'bg-[#123624] border-[#1c5438] text-emerald-300'
                  : 'bg-[#161a22] border-[#252b39] text-zinc-300 hover:border-zinc-500 hover:text-white'
              }`}
            >
              <Library className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Belajar Materi</span>
              <span className="sm:hidden">Belajar</span>
            </button>
          )}

          {/* User Auth Controls */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(prev => !prev)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#252b39] bg-[#161a22] hover:border-zinc-500 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 rounded-md bg-[#252b39] flex items-center justify-center text-zinc-200 text-xs font-bold">
                  {currentUser.role === 'admin' ? <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" /> : currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-semibold text-zinc-200 leading-tight max-w-[110px] truncate">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 leading-tight capitalize">
                    {currentUser.role === 'admin' ? 'Admin' : `Kelas ${currentUser.kelas || 12}`}
                  </div>
                </div>
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-52 bg-[#161a22] border border-[#2a3142] rounded-xl shadow-2xl p-1.5 space-y-1 animate-fadeIn z-50">
                  <div className="p-2 border-b border-[#252b39]">
                    <p className="text-xs font-bold text-zinc-200 truncate">
                      {currentUser.name}
                    </p>
                    <p className="text-[10px] text-zinc-400 truncate">
                      {currentUser.email}
                    </p>
                  </div>

                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onOpenDashboard('admin');
                      }}
                      className="w-full px-3 py-2 text-left text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#202533] rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Dashboard Admin</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onOpenDashboard('user');
                    }}
                    className="w-full px-3 py-2 text-left text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#202533] rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <BarChart2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Dashboard Nilai</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onLogout();
                    }}
                    className="w-full px-3 py-2 text-left text-xs font-medium text-red-400 hover:bg-red-950/40 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Keluar</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#222836] hover:bg-[#2b3345] text-zinc-200 border border-[#30384c] text-xs font-medium transition-colors cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Masuk / Daftar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
