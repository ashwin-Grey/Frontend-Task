import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function PerformanceTab() {
  const metrics = [
    { label: 'Largest Contentful Paint', value: '1.2s', status: 'Good', color: 'text-emerald-500' },
    { label: 'First Input Delay', value: '18ms', status: 'Good', color: 'text-emerald-500' },
    { label: 'Cumulative Layout Shift', value: '0.02', status: 'Good', color: 'text-emerald-500' },
  ];

  const resources = [
    { type: 'JavaScript', size: '452 KB', count: 12, color: 'bg-amber-400' },
    { type: 'Images', size: '1.2 MB', count: 24, color: 'bg-emerald-400' },
    { type: 'CSS', size: '84 KB', count: 5, color: 'bg-blue-400' },
    { type: 'Fonts', size: '120 KB', count: 3, color: 'bg-purple-400' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6 border-border shadow-sm text-center space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{metric.label}</p>
            <p className="text-3xl font-black text-slate-900">{metric.value}</p>
            <Badge variant="outline" className={cn("text-[10px] font-bold uppercase", metric.color)}>{metric.status}</Badge>
          </Card>
        ))}
      </div>
      <Card className="p-6 border-border shadow-sm space-y-6">
        <h3 className="text-sm font-bold text-slate-900">Resource Breakdown</h3>
        <div className="space-y-4">
          {resources.map((res) => (
            <div key={res.type} className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">{res.type} ({res.count})</span>
                <span className="text-slate-500">{res.size}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full", res.color)} 
                  style={{ width: res.type === 'Images' ? '60%' : res.type === 'JavaScript' ? '25%' : '10%' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
