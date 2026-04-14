import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Network, Smartphone, Zap } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

export function CrawlPerformanceTab() {
  const crawlDepthData = [
    { name: 'Level 0', count: 1 },
    { name: 'Level 1', count: 12 },
    { name: 'Level 2', count: 28 },
    { name: 'Level 3', count: 12 },
  ];

  const mobileVitals = [
    { label: 'Largest Contentful Paint', value: '1.2s', status: 'Good', color: 'text-emerald-500', bg: 'bg-emerald-500' },
    { label: 'First Input Delay', value: '18ms', status: 'Good', color: 'text-emerald-500', bg: 'bg-emerald-500' },
    { label: 'Cumulative Layout Shift', value: '0.02', status: 'Good', color: 'text-emerald-500', bg: 'bg-emerald-500' },
    { label: 'Total Blocking Time', value: '120ms', status: 'Needs Work', color: 'text-amber-500', bg: 'bg-amber-500' },
  ];

  const waterfallData = [
    { label: 'Main Document', dns: 10, connect: 20, ttfb: 70 },
    { label: 'Critical Assets', dns: 5, connect: 15, ttfb: 80 },
    { label: 'Third Party Scripts', dns: 15, connect: 35, ttfb: 50 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Network className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Crawl Depth Analysis</h3>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={crawlDepthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: '#64748B' }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Mobile Vitals Scorecard</h3>
          </div>
          <div className="space-y-6">
            {mobileVitals.map((m) => (
              <div key={m.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-700">{m.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-slate-900">{m.value}</span>
                    <Badge variant="outline" className={cn("text-[10px] font-black uppercase", m.color)}>{m.status}</Badge>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full", m.bg)} style={{ width: m.status === 'Good' ? '90%' : '60%' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 border-border shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Performance Waterfall Summary</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase">DNS</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase">Connect</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase">TTFB</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {waterfallData.map((row) => (
            <div key={row.label} className="space-y-2">
              <span className="text-xs font-bold text-slate-600">{row.label}</span>
              <div className="h-4 w-full flex rounded-md overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: `${row.dns}%` }} />
                <div className="bg-amber-500 h-full" style={{ width: `${row.connect}%` }} />
                <div className="bg-emerald-500 h-full" style={{ width: `${row.ttfb}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
