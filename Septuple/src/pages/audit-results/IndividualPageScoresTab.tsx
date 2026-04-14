import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Globe, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IndividualPageScoresTab() {
  const pages = [
    { url: '/', status: 200, score: 94, issues: 2, time: '124ms' },
    { url: '/pricing', status: 200, score: 88, issues: 5, time: '210ms' },
    { url: '/features', status: 200, score: 91, issues: 3, time: '185ms' },
    { url: '/blog/seo-tips', status: 200, score: 76, issues: 12, time: '450ms' },
    { url: '/about', status: 200, score: 92, issues: 1, time: '140ms' },
    { url: '/contact', status: 200, score: 85, issues: 4, time: '198ms' },
    { url: '/docs/api', status: 200, score: 64, issues: 18, time: '620ms' },
  ];

  return (
    <Card className="border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900">Individual Page Performance</h3>
          <p className="text-xs text-slate-500">Detailed breakdown of all 53 crawled pages.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input placeholder="Search URL..." className="pl-10 h-9 text-xs border-slate-200 bg-white" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-6">Page URL</TableHead>
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</TableHead>
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Score</TableHead>
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Issues</TableHead>
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Load Time</TableHead>
            <TableHead className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-right pr-6">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page, i) => (
            <TableRow key={i} className="hover:bg-slate-50/30 transition-colors">
              <TableCell className="pl-6">
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 text-slate-400" />
                  <span className="text-xs font-medium text-primary hover:underline cursor-pointer truncate max-w-[300px]">{page.url}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border-emerald-100">
                  {page.status} OK
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-2 h-2 rounded-full", 
                    page.score >= 90 ? "bg-emerald-500" : page.score >= 70 ? "bg-amber-500" : "bg-red-500"
                  )} />
                  <span className="text-xs font-bold text-slate-700">{page.score}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className={cn("text-xs font-bold", page.issues > 10 ? "text-red-500" : "text-slate-600")}>
                  {page.issues} issues
                </span>
              </TableCell>
              <TableCell>
                <span className="text-xs text-slate-500 font-medium">{page.time}</span>
              </TableCell>
              <TableCell className="text-right pr-6">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="p-4 bg-slate-50/50 border-t border-border flex items-center justify-between">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 7 of 53 pages</p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase" disabled>Prev</Button>
          <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">Next</Button>
        </div>
      </div>
    </Card>
  );
}
