import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LucideIcon } from 'lucide-react';

interface MetricItem {
  label: string;
  value: number;
}

interface MetricCardProps {
  title: string;
  score: string;
  icon: LucideIcon;
  iconColor: string;
  metrics: MetricItem[];
}

export function MetricCard({ 
  title, 
  score, 
  icon: Icon, 
  iconColor, 
  metrics 
}: MetricCardProps) {
  return (
    <Card className="p-6 border-border shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`w-4 h-4 ${iconColor}`} />
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        </div>
        <span className={`text-xs font-bold ${iconColor}`}>{score}</span>
      </div>
      <div className="space-y-4">
        {metrics.map((m) => (
          <div key={m.label} className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <span>{m.label}</span>
              <span>{m.value}/100</span>
            </div>
            <Progress value={m.value} className="h-1.5 bg-slate-100" />
          </div>
        ))}
      </div>
    </Card>
  );
}
