import React from 'react';
import { Card } from '@/components/ui/card';
import { Network, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ArchitectureTab() {
  const links = [
    { label: 'Follow Links', value: 842, color: 'text-emerald-500' },
    { label: 'Nofollow Links', value: 12, color: 'text-amber-500' },
    { label: 'External Links', value: 45, color: 'text-blue-500' },
    { label: 'Broken Links', value: 0, color: 'text-slate-400' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-2 p-6 border-border shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <Network className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Site Architecture Visualization</h3>
        </div>
        <div className="h-[300px] bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
          <div className="text-center space-y-2">
            <Network className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interactive Map Coming Soon</p>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-border shadow-sm space-y-6">
        <h3 className="text-sm font-bold text-slate-900">Internal Link Flow</h3>
        <div className="space-y-4">
          {links.map((link) => (
            <div key={link.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
              <span className="text-xs text-slate-600 font-medium">{link.label}</span>
              <span className={cn("text-sm font-black", link.color)}>{link.value}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
