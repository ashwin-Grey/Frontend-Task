import React, { useState } from 'react';
import { 
  Link as LinkIcon, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Filter, 
  Download,
  Search,
  Plus,
  MoreVertical,
  CheckCircle2,
  AlertCircle
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
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const backlinkData = [
  { date: 'Jan', count: 1200 },
  { date: 'Feb', count: 1350 },
  { date: 'Mar', count: 1500 },
  { date: 'Apr', count: 1800 },
  { date: 'May', count: 2100 },
  { date: 'Jun', count: 2450 },
];

const backlinkList = [
  { id: 1, source: 'techcrunch.com/2024/03/saas-trends', target: '/blog/future-of-seo', anchor: 'SaaS SEO trends', type: 'Dofollow', dr: 92, date: '2024-03-12' },
  { id: 2, source: 'forbes.com/sites/marketing-automation', target: '/', anchor: 'Septuple AI', type: 'Dofollow', dr: 94, date: '2024-03-10' },
  { id: 3, source: 'medium.com/@seo-expert/tools-review', target: '/features', anchor: 'best SEO tools', type: 'Nofollow', dr: 88, date: '2024-03-08' },
  { id: 4, source: 'producthunt.com/posts/septuple', target: '/', anchor: 'Septuple', type: 'Dofollow', dr: 90, date: '2024-03-05' },
  { id: 5, source: 'github.com/trending/seo-tools', target: '/', anchor: 'Septuple AI', type: 'Nofollow', dr: 96, date: '2024-03-01' },
];

export default function Backlinks() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Backlink Explorer</h1>
          <p className="text-sm text-slate-500">Monitor your link profile, authority, and referring domains.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button className="h-9 font-bold bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Domain
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Backlinks', value: '2,450', change: '+12%', icon: LinkIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Referring Domains', value: '842', change: '+8%', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Domain Rating', value: '48', change: '+2', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Toxic Links', value: '12', change: '-4%', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <Badge variant="outline" className={cn(
                "text-[10px] font-bold",
                stat.change.startsWith('+') ? "text-emerald-600 bg-emerald-50" : "text-red-600 bg-red-50"
              )}>
                {stat.change}
              </Badge>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Chart Area */}
        <Card className="lg:col-span-8 p-6 border-border shadow-md bg-white">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Backlink Growth</h3>
              <p className="text-[10px] text-slate-500">Total backlinks over the last 6 months</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-primary/10 text-primary border-none font-bold">6 Months</Badge>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={backlinkData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#94a3b8' }}
                  dy={10}
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
                <Area 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Link Distribution */}
        <Card className="lg:col-span-4 p-6 border-border shadow-md bg-white space-y-6">
          <h3 className="text-sm font-bold text-slate-900">Link Distribution</h3>
          <div className="space-y-6">
            {[
              { label: 'Dofollow', value: 75, color: 'bg-blue-500' },
              { label: 'Nofollow', value: 20, color: 'bg-slate-400' },
              { label: 'UGC', value: 3, color: 'bg-emerald-500' },
              { label: 'Sponsored', value: 2, color: 'bg-amber-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="text-slate-900">{item.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <div className="flex items-center text-emerald-500 space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <p className="text-[10px] font-bold">Your link profile looks healthy.</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Backlink Table */}
      <Card className="border-border shadow-md bg-white overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Recent Backlinks</h3>
            <p className="text-[10px] text-slate-500">Latest discovered links pointing to your site</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search links..." 
                className="pl-9 h-9 w-64 text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-9 px-3">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Source Page</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Target Page</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Anchor Text</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 text-center">DR</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Type</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">First Seen</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backlinkList.map((link) => (
                <TableRow key={link.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
                        <Globe className="w-3 h-3 text-slate-400" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 truncate max-w-[200px]">{link.source}</span>
                      <ExternalLink className="w-3 h-3 text-slate-300" />
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs text-slate-500 font-medium">{link.target}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className="text-[10px] font-bold bg-slate-50 border-slate-200">
                      {link.anchor}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <span className={cn(
                      "text-xs font-black",
                      link.dr >= 90 ? "text-emerald-500" : "text-blue-500"
                    )}>
                      {link.dr}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge className={cn(
                      "text-[10px] font-black border-none",
                      link.type === 'Dofollow' ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                    )}>
                      {link.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs text-slate-500 font-medium">{link.date}</span>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
