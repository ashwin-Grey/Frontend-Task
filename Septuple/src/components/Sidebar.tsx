import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  Key, 
  PenTool, 
  Link as LinkIcon, 
  BarChart3, 
  TrendingUp, 
  Users, 
  History, 
  CreditCard,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/slices/authSlice';

const navItems = [
  { group: 'DASHBOARD', items: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  ]},
  { group: 'REPORTS', items: [
    { name: 'Reports', icon: FileText, path: '/reports' },
  ]},
  { group: 'CORE MODULES', items: [
    { name: 'Web auditor', icon: Search, path: '/web-auditor' },
    { name: 'Keyword generator', icon: Key, path: '/keywords' },
    { name: 'Content tools', icon: PenTool, path: '/content' },
    { name: 'Backlinks', icon: LinkIcon, path: '/backlinks' },
  ]},
  { group: 'INTEGRATIONS', items: [
    { name: 'GSC', icon: BarChart3, path: '/gsc' },
    { name: 'Trends', icon: TrendingUp, path: '/trends' },
  ]},
  { group: 'TOOLS', items: [
    { name: 'User management', icon: Users, path: '/users' },
    { name: 'Profile', icon: Settings, path: '/profile' },
    { name: 'Logs', icon: History, path: '/logs' },
    { name: 'Payment module', icon: CreditCard, path: '/payments' },
  ]},
];

export function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside className="w-60 h-screen fixed left-0 top-0 bg-white border-r border-border flex flex-col z-50">
      <div className="h-14 flex items-center px-6 border-b border-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <span className="font-bold text-lg tracking-tight">Septuple</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navItems.map((group) => (
          <div key={group.group}>
            <h3 className="px-3 text-[10px] font-bold text-slate-400 tracking-wider mb-2">
              {group.group}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-primary text-white" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border space-y-4">
        <div className="text-[10px] text-slate-400 font-medium">Version 2.0</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 mr-3">
              {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 truncate w-24">{user?.name || 'User'}</span>
              <button 
                onClick={handleLogout}
                className="text-[10px] text-slate-500 hover:text-primary flex items-center"
              >
                <LogOut className="w-3 h-3 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
