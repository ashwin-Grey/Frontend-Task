import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  MousePointer2, 
  Eye, 
  Target, 
  Search, 
  Filter, 
  Download,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';

const performanceData = [
  { date: '2024-03-01', clicks: 450, impressions: 12000, ctr: 3.75, position: 12.4 },
  { date: '2024-03-02', clicks: 520, impressions: 13500, ctr: 3.85, position: 11.8 },
  { date: '2024-03-03', clicks: 480, impressions: 11800, ctr: 4.06, position: 12.1 },
  { date: '2024-03-04', clicks: 610, impressions: 15200, ctr: 4.01, position: 11.2 },
  { date: '2024-03-05', clicks: 580, impressions: 14800, ctr: 3.92, position: 11.5 },
  { date: '2024-03-06', clicks: 720, impressions: 18500, ctr: 3.89, position: 10.8 },
  { date: '2024-03-07', clicks: 690, impressions: 17200, ctr: 4.01, position: 11.0 },
];

const queryData = [
  { query: 'best seo tools 2024', clicks: 1240, impressions: 25000, ctr: '4.96%', position: 3.2 },
  { query: 'ai content generator', clicks: 850, impressions: 18000, ctr: '4.72%', position: 5.4 },
  { query: 'saas marketing strategy', clicks: 620, impressions: 12500, ctr: '4.96%', position: 8.1 },
  { query: 'septuple ai reviews', clicks: 450, impressions: 5000, ctr: '9.00%', position: 1.2 },
  { query: 'keyword research tool', clicks: 380, impressions: 15000, ctr: '2.53%', position: 12.5 },
];

export default function GSC() {
  const [activeMetric, setActiveMetric] = useState<'clicks' | 'impressions'>('clicks');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Google Search Console</h1>
          <p className="text-sm text-slate-500">Analyze your organic search performance and visibility.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Calendar className="w-4 h-4 mr-2" />
            Last 28 Days
            <ChevronDown className="w-3 h-3 ml-2" />
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Clicks', value: '18.4K', change: '+12.5%', icon: MousePointer2, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Total Impressions', value: '420K', change: '+8.2%', icon: Eye, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Average CTR', value: '4.38%', change: '+0.4%', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Average Position', value: '11.2', change: '-1.2', icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div className={cn(
                "flex items-center text-[10px] font-black",
                stat.change.startsWith('+') ? "text-emerald-500" : "text-red-500"
              )}>
                {stat.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                {stat.change.replace('+', '').replace('-', '')}
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </Card>
        ))}
      </div>

      {/* Main Chart */}
      <Card className="p-6 border-border shadow-md bg-white">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Performance Over Time</h3>
            <p className="text-[10px] text-slate-500">Daily clicks and impressions trend</p>
          </div>
          <div className="flex p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => setActiveMetric('clicks')}
              className={cn(
                "px-3 py-1.5 text-[10px] font-bold rounded-md transition-all",
                activeMetric === 'clicks' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Clicks
            </button>
            <button 
              onClick={() => setActiveMetric('impressions')}
              className={cn(
                "px-3 py-1.5 text-[10px] font-bold rounded-md transition-all",
                activeMetric === 'impressions' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Impressions
            </button>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
                dy={10}
                tickFormatter={(val) => val.split('-').slice(1).join('/')}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingBottom: '20px' }} />
              <Line 
                type="monotone" 
                dataKey={activeMetric} 
                stroke="#6366f1" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                name={activeMetric.charAt(0).toUpperCase() + activeMetric.slice(1)}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Queries Table */}
        <Card className="lg:col-span-8 border-border shadow-md bg-white overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Top Queries</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <Input placeholder="Filter queries..." className="pl-9 h-8 w-48 text-[10px]" />
            </div>
          </div>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-3">Query</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-3 text-right">Clicks</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-3 text-right">Impressions</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-3 text-right">CTR</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-3 text-right">Position</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queryData.map((item, i) => (
                <TableRow key={i} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <TableCell className="py-3 text-xs font-bold text-slate-700">{item.query}</TableCell>
                  <TableCell className="py-3 text-xs text-right font-medium">{item.clicks.toLocaleString()}</TableCell>
                  <TableCell className="py-3 text-xs text-right text-slate-500">{item.impressions.toLocaleString()}</TableCell>
                  <TableCell className="py-3 text-xs text-right font-bold text-emerald-600">{item.ctr}</TableCell>
                  <TableCell className="py-3 text-xs text-right font-black text-slate-900">{item.position}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 border-t border-border bg-slate-50/50 flex justify-center">
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-primary">
              View All Queries
            </Button>
          </div>
        </Card>

        {/* Device & Country Breakdown */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-border shadow-md bg-white space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Device Breakdown</h3>
            <div className="space-y-4">
              {[
                { label: 'Desktop', value: 65, icon: Monitor, color: 'bg-blue-500' },
                { label: 'Mobile', value: 32, icon: Smartphone, color: 'bg-emerald-500' },
                { label: 'Tablet', value: 3, icon: Globe, color: 'bg-slate-400' },
              ].map((device, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <device.icon className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{device.label}</span>
                    </div>
                    <span className="text-xs font-black text-slate-900">{device.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${device.color}`} style={{ width: `${device.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-border shadow-md bg-white space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Top Countries</h3>
            <div className="space-y-4">
              {[
                { country: 'United States', clicks: '8.2K', flag: '🇺🇸' },
                { country: 'United Kingdom', clicks: '2.4K', flag: '🇬🇧' },
                { country: 'Germany', clicks: '1.8K', flag: '🇩🇪' },
                { country: 'India', clicks: '1.5K', flag: '🇮🇳' },
                { country: 'Canada', clicks: '1.2K', flag: '🇨🇦' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.flag}</span>
                    <span className="text-xs font-bold text-slate-700">{item.country}</span>
                  </div>
                  <span className="text-xs font-black text-slate-900">{item.clicks}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
