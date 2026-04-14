import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatItem {
  label: string;
  value: string | number;
  color: string;
}

interface StatGridProps {
  stats: StatItem[];
}

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className={cn("p-6 border-l-4 border-border shadow-sm", stat.color)}>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
          <p className="text-3xl font-black text-slate-900">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
