import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Type, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FontsTab() {
  const fontFamilies = ['Inter', 'Roboto', 'Arial', 'system-ui'];
  const loadingPerformance = [
    { label: 'Font Display Swap', status: 'Pass', pass: true },
    { label: 'Preload Critical Fonts', status: 'Missing', pass: false },
    { label: 'Woff2 Format', status: 'Pass', pass: true },
  ];

  return (
    <Card className="p-6 border-border shadow-sm space-y-6">
      <div className="flex items-center space-x-2">
        <Type className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-bold text-slate-900">Font Optimization Analysis</h3>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Detected Font Families</h4>
            <div className="space-y-2">
              {fontFamilies.map((font) => (
                <div key={font} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium" style={{ fontFamily: font }}>{font}</span>
                  <Badge variant="outline" className="text-[10px] font-bold">Used in 42%</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Font Loading Performance</h4>
            <div className="space-y-4">
              {loadingPerformance.map((perf) => (
                <div key={perf.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">{perf.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className={cn("text-xs font-bold", perf.pass ? "text-emerald-500" : "text-red-500")}>{perf.status}</span>
                    {perf.pass ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <AlertCircle className="w-4 h-4 text-red-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
