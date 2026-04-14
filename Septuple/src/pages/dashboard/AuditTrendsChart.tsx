import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Mar 15', audits: 12 },
  { name: 'Mar 20', audits: 18 },
  { name: 'Mar 25', audits: 15 },
  { name: 'Mar 30', audits: 25 },
  { name: 'Apr 05', audits: 32 },
  { name: 'Apr 10', audits: 28 },
  { name: 'Apr 13', audits: 45 },
];

export function AuditTrendsChart() {
  return (
    <Card className="p-6 border-border shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-slate-900">Audit Activity Trends</h3>
        <Badge variant="outline" className="text-[10px] font-bold text-slate-500">Last 30 Days</Badge>
      </div>
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorAudits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94A3B8' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94A3B8' }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="audits" 
              stroke="#4F46E5" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorAudits)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
