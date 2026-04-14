import React from 'react';
import { Bell, Wallet, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="h-14 bg-white border-b border-border fixed top-0 right-0 left-60 z-40 flex items-center justify-between px-6">
      <div className="flex items-center">
        <span className="text-sm font-medium text-slate-600">{user?.organization || 'Organization Name'}</span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 rounded-full border border-border">
          <Wallet className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-medium text-slate-700">Balance Funds : $0.00</span>
        </div>

        <button className="p-1 rounded-full border border-border hover:border-slate-300 transition-colors">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
          </div>
        </button>
      </div>
    </header>
  );
}
