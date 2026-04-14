import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Type, FileSearch, BarChart as BarChartIcon, Layout, Link as LinkIcon, Heading } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '@/lib/utils';

interface StatisticsTabProps {
  httpStatusData: any[];
}

export function StatisticsTab({ httpStatusData }: StatisticsTabProps) {
  return (
    <div className="space-y-8">
      {/* Overall Issues Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold text-slate-900">Overall Issues</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Total', value: 844, color: 'text-slate-900' },
              { label: 'Critical', value: 1, color: 'text-red-500' },
              { label: 'Warnings', value: 843, color: 'text-amber-500' },
              { label: 'Info', value: 0, color: 'text-blue-500' },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                <p className={cn("text-2xl font-black", item.color)}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-700">Restructure Markup</h4>
              <p className="text-xs text-slate-500">Missing schema or IID:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {['h1 (expected)', 'heading', 'meta tags', 'Robots/noindex', 'Errors'].map((u) => (
                  <li key={u} className="text-xs text-slate-500 flex items-center">
                    <div className="w-1 h-1 bg-slate-300 rounded-full mr-2" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Type className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Text Consistency</h3>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-slate-600 flex items-start">
              <div className="w-1 h-1 bg-slate-400 rounded-full mr-2 mt-1.5" />
              Your website uses 4 different font families. Use one font to maintain consistency and improve page load times.
            </div>
            <div className="text-xs text-slate-600 flex items-start">
              <div className="w-1 h-1 bg-slate-400 rounded-full mr-2 mt-1.5" />
              37 Different font sizes detected. Try to keep your font sizes in a consistent, composable and standard format.
            </div>
            <div className="text-xs text-slate-600 flex items-start">
              <div className="w-1 h-1 bg-slate-400 rounded-full mr-2 mt-1.5" />
              117 Elements use 2 different fonts: Arial and Helvec font family.
            </div>
          </div>
        </Card>
      </div>

      {/* Crawl Statistics */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <FileSearch className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Crawl Statistics Overview</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Pages Crawled', value: '53' },
            { label: 'Sitemap URLs', value: '1' },
            { label: 'Avg Load Time', value: '0ms' },
            { label: 'Total Internal Links', value: '103' },
          ].map((stat) => (
            <Card key={stat.label} className="p-6 border-border shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* HTTP Status Distribution */}
      <Card className="p-6 border-border shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">HTTP Status Distribution</h3>
          <span className="text-xs text-slate-500">Identify redirect chains, broken pages, and server-side errors.</span>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={httpStatusData} layout="vertical" margin={{ left: 20, right: 40 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 600, fill: '#64748B' }}
                width={100}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                {httpStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Sitemap & Crawl Depth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <Layout className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Sitemap Coverage</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sitemap Coverage</p>
              <p className="text-2xl font-black text-slate-900">0%</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">URLs in Crawl</p>
              <p className="text-2xl font-black text-slate-900">53</p>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-border">
            <div className="flex items-start space-x-2 text-amber-600">
              <AlertCircle className="w-4 h-4 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider">URLs missing from the sitemap</p>
                <p className="text-[10px] font-medium opacity-80">https://suptask.com/about-us/stu...</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <LinkIcon className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-slate-900">Crawl Depth & Internal Links</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Depth</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pages</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Internal Links</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { depth: 'Homepage', pages: '-', links: '5,372' },
                { depth: '1 click', pages: '-', links: '47,611 (79%)' },
                { depth: '2 clicks', pages: '-', links: '10,776' },
                { depth: '3 clicks', pages: '-', links: '0 (0.0%)' },
              ].map((row) => (row.depth && (
                <TableRow key={row.depth} className="hover:bg-slate-50/50">
                  <TableCell className="text-xs font-medium text-slate-600">{row.depth}</TableCell>
                  <TableCell className="text-xs text-slate-400">{row.pages}</TableCell>
                  <TableCell className="text-xs text-slate-600 font-bold">{row.links}</TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Content Completeness */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Heading className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Content Completeness</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Missing Titles', value: '0' },
            { label: 'Missing Meta Desc.', value: '0' },
            { label: 'Missing H1 Headers', value: '1' },
            { label: 'Avg. Words / Page', value: '55.3' },
          ].map((stat) => (
            <Card key={stat.label} className="p-6 border-border shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Page-Level Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 border-border shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Slowest Pages</h3>
          <div className="space-y-2">
            {[
              { url: 'https://suptask.com/schedule-demo/Vg3FadqBaa', time: '4ms' },
              { url: 'https://suptask.com/a/free/landing/r3/pfceal', time: '4ms' },
              { url: 'https://suptask.com/a/free/p/d/d/c/p2w/gm/all3', time: '4ms' },
            ].map((page) => (
              <div key={page.url} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <span className="text-xs text-primary truncate max-w-[250px]">{page.url}</span>
                <span className="text-xs font-bold text-slate-600">{page.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-border shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Broken Link Hotspots</h3>
          <div className="space-y-2">
            {[
              { url: 'https://suptask.com/page/v5/in/header/Vur5?id=1...', count: 'Fix issue' },
              { url: 'https://suptask.com/a/free/landing/r3/pfceal', count: 'Fix issue' },
              { url: 'https://suptask.com/a/free/p/d/d/c/p2w/gm/all3', count: 'Fix issue' },
            ].map((page) => (
              <div key={page.url} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <span className="text-xs text-primary truncate max-w-[250px]">{page.url}</span>
                <button className="text-[10px] font-bold text-red-500 uppercase tracking-wider hover:underline">{page.count}</button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
