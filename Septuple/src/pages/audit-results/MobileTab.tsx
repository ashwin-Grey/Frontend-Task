import React from 'react';
import { Card } from '@/components/ui/card';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileTab() {
  const checks = [
    { label: 'Viewport Meta Tag', status: 'Found', pass: true },
    { label: 'Touch Target Size', status: '92% Pass', pass: true },
    { label: 'Content Width', status: 'Fits Screen', pass: true },
    { label: 'Font Legibility', status: 'Good', pass: true },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Mobile Responsiveness</h3>
          </div>
          <div className="space-y-4">
            {checks.map((check) => (
              <div key={check.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <span className="text-xs text-slate-600 font-medium">{check.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-900">{check.status}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6 border-border shadow-sm flex items-center justify-center bg-slate-50">
          <div className="text-center space-y-4">
            <div className="w-32 h-64 border-4 border-slate-900 rounded-[2rem] bg-white mx-auto relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl" />
              <div className="p-4 pt-8 space-y-2">
                <div className="w-full h-2 bg-slate-100 rounded" />
                <div className="w-3/4 h-2 bg-slate-100 rounded" />
                <div className="w-full h-24 bg-slate-200 rounded-lg" />
                <div className="w-full h-2 bg-slate-100 rounded" />
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Mobile Preview</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
