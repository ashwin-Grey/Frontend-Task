import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Globe, 
  Zap, 
  ArrowUpRight, 
  Filter, 
  Download,
  Share2,
  Plus,
  BarChart3,
  Map as MapIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '@/lib/utils';

const interestData = [
  { date: '2024-01', interest: 45 },
  { date: '2024-02', interest: 52 },
  { date: '2024-03', interest: 48 },
  { date: '2024-04', interest: 65 },
  { date: '2024-05', interest: 82 },
  { date: '2024-06', interest: 95 },
];

const trendingTopics = [
  { topic: 'Generative AI SEO', growth: '+450%', volume: 'High', category: 'Technology' },
  { topic: 'SaaS Content Marketing', growth: '+120%', volume: 'Medium', category: 'Business' },
  { topic: 'AI Search Experience', growth: '+380%', volume: 'High', category: 'Technology' },
  { topic: 'Zero-click Content', growth: '+85%', volume: 'Medium', category: 'Marketing' },
  { topic: 'Semantic Search 2024', growth: '+210%', volume: 'High', category: 'SEO' },
];

export default function Trends() {
  const [searchQuery, setSearchQuery] = useState('AI Marketing');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Market Trends</h1>
          <p className="text-sm text-slate-500">Discover what's trending in your industry and identify new opportunities.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Share2 className="w-4 h-4 mr-2" />
            Share Report
          </Button>
          <Button className="h-9 font-bold bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Analysis
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="p-4 border-border shadow-sm bg-white">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter a topic or keyword..." 
              className="pl-12 h-12 text-sm font-medium border-slate-200 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 px-6 font-bold">
              <Globe className="w-4 h-4 mr-2" />
              Worldwide
            </Button>
            <Button variant="outline" className="h-12 px-6 font-bold">
              <Filter className="w-4 h-4 mr-2" />
              Last 12 Months
            </Button>
            <Button className="h-12 px-8 bg-slate-900 text-white font-black hover:bg-slate-800">
              Analyze
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Interest Chart */}
        <Card className="lg:col-span-8 p-6 border-border shadow-md bg-white">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">Interest Over Time</h3>
              <p className="text-[10px] text-slate-500">Relative search interest for "{searchQuery}"</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[10px] uppercase tracking-widest">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending Up
              </Badge>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={interestData}>
                <defs>
                  <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
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
                  domain={[0, 100]}
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
                  dataKey="interest" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorInterest)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Trending Topics Sidebar */}
        <Card className="lg:col-span-4 p-6 border-border shadow-md bg-white space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Breakout Topics</h3>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="space-y-4">
            {trendingTopics.map((item, i) => (
              <div key={i} className="p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors">{item.topic}</span>
                  <div className="flex items-center text-[10px] font-black text-emerald-600">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" />
                    {item.growth}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0">
                    {item.category}
                  </Badge>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Volume: {item.volume}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full h-10 text-[10px] font-bold uppercase tracking-widest">
            Explore All Topics
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Regional Interest */}
        <Card className="p-6 border-border shadow-md bg-white space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapIcon className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-slate-900">Regional Interest</h3>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest">View Map</Button>
          </div>
          <div className="space-y-4">
            {[
              { region: 'United States', score: 100 },
              { region: 'Canada', score: 85 },
              { region: 'United Kingdom', score: 72 },
              { region: 'Australia', score: 68 },
              { region: 'India', score: 45 },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">{item.region}</span>
                  <span className="font-black text-slate-900">{item.score}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${item.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Related Queries */}
        <Card className="p-6 border-border shadow-md bg-white space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-slate-900">Related Queries</h3>
            </div>
            <div className="flex p-1 bg-slate-100 rounded-lg">
              <button className="px-2 py-1 text-[8px] font-black rounded bg-white shadow-sm">TOP</button>
              <button className="px-2 py-1 text-[8px] font-black text-slate-500">RISING</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { query: 'best ai marketing tools', score: 100 },
              { query: 'ai marketing automation', score: 95 },
              { query: 'generative ai for marketing', score: 88 },
              { query: 'ai marketing strategy 2024', score: 82 },
              { query: 'future of ai in marketing', score: 75 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-700">{item.query}</span>
                <span className="text-xs font-black text-slate-900">{item.score}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
