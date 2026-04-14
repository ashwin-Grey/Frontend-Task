import React, { useState } from 'react';
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  User,
  Activity,
  Shield,
  Zap
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

const logData = [
  { id: 1, type: 'info', user: 'Alex Johnson', action: 'Login', resource: 'System', time: '2 mins ago', details: 'Successful login from IP 192.168.1.1' },
  { id: 2, type: 'success', user: 'Sarah Miller', action: 'Content Generated', resource: 'Blog Post', time: '15 mins ago', details: 'Generated "Future of SaaS SEO"' },
  { id: 3, type: 'warning', user: 'System', action: 'API Limit', resource: 'Gemini API', time: '1 hour ago', details: 'Usage reached 80% of monthly quota' },
  { id: 4, type: 'error', user: 'Michael Chen', action: 'Delete', resource: 'Keyword List', time: '3 hours ago', details: 'Failed to delete list: Permission denied' },
  { id: 5, type: 'info', user: 'Emma Wilson', action: 'Update', resource: 'Profile', time: '5 hours ago', details: 'Changed email notification settings' },
  { id: 6, type: 'success', user: 'David Ross', action: 'Export', resource: 'SEO Report', time: '1 day ago', details: 'Exported CSV for septuple.com' },
];

export default function Logs() {
  const [filter, setFilter] = useState('all');

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-amber-500" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">System Logs</h1>
          <p className="text-sm text-slate-500">Track all activities, errors, and system events in real-time.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Download className="w-4 h-4 mr-2" />
            Download Logs
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-bold text-red-500 hover:text-red-600">
            <Trash2 className="w-4 h-4 mr-2" />
            Clear History
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="p-4 border-border shadow-sm bg-white">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search logs by user, action, or details..." className="pl-10 h-10 text-xs" />
          </div>
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="flex p-1 bg-slate-100 rounded-lg w-full md:w-auto">
              {['all', 'info', 'success', 'warning', 'error'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={cn(
                    "flex-1 md:flex-none px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-md transition-all",
                    filter === t ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <Button variant="outline" className="h-10 px-4">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Logs Table */}
      <Card className="border-border shadow-md bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-12 py-4"></TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">User</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Action</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Resource</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Details</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logData.map((log) => (
                <TableRow key={log.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <TableCell className="py-4 text-center">
                    {getLogIcon(log.type)}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-500">
                        {log.user === 'System' ? <Zap className="w-3 h-3" /> : log.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-xs font-bold text-slate-700">{log.user}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className="text-[10px] font-bold bg-slate-50 border-slate-200">
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs text-slate-500 font-medium">{log.resource}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <p className="text-xs text-slate-600 max-w-md truncate">{log.details}</p>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{log.time}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t border-border bg-slate-50/50 flex justify-center">
          <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-primary">
            Load More Logs
          </Button>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border shadow-sm bg-white flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Events Today</p>
            <h3 className="text-xl font-black text-slate-900">1,284</h3>
          </div>
        </Card>
        <Card className="p-6 border-border shadow-sm bg-white flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-red-50 text-red-500">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Errors (24h)</p>
            <h3 className="text-xl font-black text-slate-900">14</h3>
          </div>
        </Card>
        <Card className="p-6 border-border shadow-sm bg-white flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-purple-50 text-purple-500">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Security Audits</p>
            <h3 className="text-xl font-black text-slate-900">100%</h3>
          </div>
        </Card>
      </div>
    </div>
  );
}
