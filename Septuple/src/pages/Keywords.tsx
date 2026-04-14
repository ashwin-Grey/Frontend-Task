import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  Download, 
  Copy, 
  Plus, 
  Filter,
  ArrowUpRight,
  Target,
  MousePointer2,
  Layers,
  Zap,
  ChevronRight,
  History,
  Info
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
  TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const mockKeywords = [
  { keyword: 'saas seo strategy', volume: '1.2k', difficulty: 45, cpc: '$4.50', trend: '+12%', intent: 'Informational' },
  { keyword: 'best seo tools for small business', volume: '850', difficulty: 32, cpc: '$3.20', trend: '+5%', intent: 'Commercial' },
  { keyword: 'how to improve website ranking', volume: '3.4k', difficulty: 68, cpc: '$1.80', trend: '-2%', intent: 'Informational' },
  { keyword: 'enterprise seo platform', volume: '450', difficulty: 72, cpc: '$12.40', trend: '+18%', intent: 'Transactional' },
  { keyword: 'keyword research guide 2026', volume: '600', difficulty: 28, cpc: '$2.10', trend: '+45%', intent: 'Informational' },
  { keyword: 'seo audit checklist', volume: '2.1k', difficulty: 54, cpc: '$5.60', trend: '+8%', intent: 'Commercial' },
  { keyword: 'local seo services near me', volume: '1.8k', difficulty: 41, cpc: '$8.90', trend: '+15%', intent: 'Transactional' },
];

export default function KeywordGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Keyword Generator</h1>
          <p className="text-sm text-slate-500">Discover high-intent keywords and analyze competition with AI.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <History className="w-4 h-4 mr-2" />
            History
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Search Section */}
      <Card className="p-8 border-border shadow-md bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative z-10 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Find your next big opportunity</h2>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  placeholder="Enter a seed keyword or domain (e.g., 'seo tools' or 'suptask.com')" 
                  className="pl-12 h-14 text-base border-slate-200 focus:ring-primary/20 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                {isGenerating ? (
                  <Sparkles className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 py-1">Trending:</span>
            {['AI SEO', 'Voice Search', 'Zero-click', 'E-E-A-T', 'Local SEO'].map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="cursor-pointer hover:bg-slate-200 transition-colors px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Keywords', value: '1,248', icon: Layers, color: 'text-blue-500' },
          { label: 'Avg. Difficulty', value: '42%', icon: Target, color: 'text-amber-500' },
          { label: 'Total Volume', value: '45.2k', icon: TrendingUp, color: 'text-emerald-500' },
          { label: 'Opportunity Score', value: '84/100', icon: Zap, color: 'text-primary' },
        ].map((stat) => (
          <Card key={stat.label} className="p-6 border-border shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-2">
              <div className={cn("p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors", stat.color)}>
                <stat.icon className="w-4 h-4" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Results Table */}
      <Card className="border-border shadow-sm overflow-hidden bg-white">
        <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-sm font-bold text-slate-900">Keyword Suggestions</h3>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border-emerald-100">Low Difficulty</Badge>
              <Badge variant="outline" className="text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border-blue-100">High Volume</Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">
              <Filter className="w-3 h-3 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">
              <Plus className="w-3 h-3 mr-2" />
              Add to List
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                <TableHead className="w-[40px] pl-6">
                  <input type="checkbox" className="rounded border-slate-300" />
                </TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Keyword</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Intent</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Volume</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Difficulty</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CPC</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Trend</TableHead>
                <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockKeywords.map((kw, i) => (
                <motion.tr 
                  key={kw.keyword}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/30 transition-colors group cursor-pointer"
                >
                  <TableCell className="pl-6">
                    <input type="checkbox" className="rounded border-slate-300" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-700 group-hover:text-primary transition-colors cursor-pointer">{kw.keyword}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={cn("text-[9px] font-black uppercase tracking-tighter px-1.5 py-0", 
                        kw.intent === 'Informational' ? "bg-blue-50 text-blue-600 border-blue-100" :
                        kw.intent === 'Commercial' ? "bg-purple-50 text-purple-600 border-purple-100" :
                        "bg-emerald-50 text-emerald-600 border-emerald-100"
                      )}
                    >
                      {kw.intent}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs font-medium text-slate-600">{kw.volume}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1.5 w-12 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full", 
                            kw.difficulty < 40 ? "bg-emerald-500" : kw.difficulty < 60 ? "bg-amber-500" : "bg-red-500"
                          )} 
                          style={{ width: `${kw.difficulty}%` }} 
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">{kw.difficulty}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-medium text-slate-600">{kw.cpc}</TableCell>
                  <TableCell>
                    <span className={cn("text-[10px] font-bold", kw.trend.startsWith('+') ? "text-emerald-500" : "text-red-500")}>
                      {kw.trend}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex items-center justify-end space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/5 hover:text-primary">
                        <BarChart3 className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/5 hover:text-primary">
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 bg-slate-50/50 border-t border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rows per page:</span>
            <select className="bg-transparent text-[10px] font-bold text-slate-600 border-none focus:ring-0">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1-7 of 1,248</span>
            <div className="flex items-center space-x-1">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
                <ChevronRight className="w-4 h-4 rotate-180" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-4 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="flex items-center space-x-2 relative z-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold uppercase tracking-widest">AI Content Strategy</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed relative z-10">
            Based on your search for <span className="text-white font-bold">"saas seo strategy"</span>, we recommend focusing on informational content that targets the "how-to" intent. Competition is moderate, but there's a high opportunity gap in long-form guides.
          </p>
          <div className="pt-2 relative z-10">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-[10px] font-bold uppercase tracking-widest">
              Generate Content Brief
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-border shadow-sm space-y-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Market Trends</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Search volume for "AI SEO" is up 145% this month.', color: 'text-emerald-500' },
              { label: 'CPC for "enterprise seo" has increased by $2.40.', color: 'text-amber-500' },
              { label: 'New competitor detected for "seo audit checklist".', color: 'text-blue-500' },
            ].map((trend, i) => (
              <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <div className={cn("w-1 h-1 rounded-full mt-1.5", trend.color.replace('text', 'bg'))} />
                <p className="text-xs text-slate-600">{trend.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
