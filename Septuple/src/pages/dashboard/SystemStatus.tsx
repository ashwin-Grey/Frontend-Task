import React from 'react';

export function SystemStatus() {
  return (
    <div className="pt-6 border-t border-border">
      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">System Status</h4>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-slate-600">All systems operational</span>
      </div>
    </div>
  );
}
