import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Coins, BarChart2, Clock, CheckCircle2, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Stat {
  label: string;
  value: string;
  sub?: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

export function DashboardStats() {
  const stats: Stat[] = [
    { label: 'Active Profiles', value: '6', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    { label: 'Tokens Used', value: '1,240', sub: 'Last 30 days', icon: Coins, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { label: 'Total Analyses', value: '158', sub: 'Last 30 days', icon: BarChart2, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { label: 'Last Analysis', value: '17/02/2026', sub: '14:46', icon: Clock, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { label: 'Avg. Score', value: '72/100', sub: 'Last 30 days', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className={cn("p-5 border shadow-sm transition-all hover:shadow-md cursor-pointer", stat.border)}>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
              <div className={cn("p-1.5 rounded-md", stat.bg)}>
                <stat.icon className={cn("w-3.5 h-3.5", stat.color)} />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              {stat.sub && <span className="text-[10px] text-slate-400 font-medium">{stat.sub}</span>}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
