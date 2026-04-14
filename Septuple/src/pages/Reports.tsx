import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Filter, 
  MoreVertical, 
  Eye, 
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

const mockReports = [
  {
    id: 'REP-001',
    name: 'Homepage Audit',
    profile: 'DigitalSEO',
    url: 'https://www.digitalseo.in/',
    type: 'Web Audit',
    date: '17/02/2026 14:46',
    status: 'Completed',
    score: 84,
  },
  {
    id: 'REP-002',
    name: 'Service Page Analysis',
    profile: 'DigitalSEO',
    url: 'https://www.digitalseo.in/services',
    type: 'Web Audit',
    date: '17/02/2026 14:30',
    status: 'In Progress',
    score: null,
  },
  {
    id: 'REP-003',
    name: 'Blog Audit',
    profile: 'DigitalSEO',
    url: 'https://www.digitalseo.in/blog',
    type: 'Web Audit',
    date: '16/02/2026 10:15',
    status: 'Pending',
    score: null,
  }
];

export default function Reports() {
  const navigate = useNavigate();
  const [view, setView] = useState<'timeline' | 'grouped'>('timeline');
  const [selectedReports, setSelectedReports] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedReports(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getScoreColor = (score: number | null) => {
    if (score === null) return 'text-slate-400';
    if (score >= 70) return 'text-emerald-600';
    if (score >= 40) return 'text-amber-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center w-fit">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case 'In Progress':
        return (
          <Badge className="bg-amber-50 text-amber-700 border-amber-100 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center w-fit">
            <div className="w-2 h-2 border-2 border-amber-700 border-t-transparent rounded-full animate-spin mr-1.5" />
            In Progress
          </Badge>
        );
      case 'Pending':
        return (
          <Badge className="bg-slate-50 text-slate-700 border-slate-100 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center w-fit">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports & History</h1>
          <p className="text-slate-500 text-sm">View and manage your audit history and detailed reports</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setView('timeline')}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-all",
              view === 'timeline' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Timeline view
          </button>
          <button 
            onClick={() => setView('grouped')}
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-md transition-all",
              view === 'grouped' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Grouped view
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Reports', value: '1,248', icon: Search, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Completed', value: '1,182', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Score', value: '78/100', icon: Filter, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Failed/Errors', value: '12', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-4 border-border shadow-sm flex items-center space-x-4">
            <div className={cn("p-2 rounded-lg", stat.bg)}>
              <stat.icon className={cn("w-4 h-4", stat.color)} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search reports..." className="pl-10 h-10 bg-white" />
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-white border border-border rounded-md text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            <span>Status</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-white border border-border rounded-md text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50">
            <span>Type</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-white border border-border rounded-md text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50">
            <Calendar className="w-4 h-4" />
            <span>Date Range</span>
          </div>
        </div>
        {selectedReports.length > 0 && (
          <Button variant="destructive" size="sm" className="h-10 px-4 font-bold flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Delete Selected ({selectedReports.length})</span>
          </Button>
        )}
      </div>

      {/* Table */}
      <Card className="border-border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedReports.length === mockReports.length}
                  onCheckedChange={(checked) => {
                    if (checked) setSelectedReports(mockReports.map(r => r.id));
                    else setSelectedReports([]);
                  }}
                />
              </TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Report ID</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Report Name</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Business Profile</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">URL</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Type</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Score</TableHead>
              <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockReports.map((report) => (
              <TableRow key={report.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                <TableCell>
                  <Checkbox 
                    checked={selectedReports.includes(report.id)}
                    onCheckedChange={() => toggleSelect(report.id)}
                  />
                </TableCell>
                <TableCell className="text-xs font-mono text-slate-500">{report.id}</TableCell>
                <TableCell className="font-bold text-slate-900">{report.name}</TableCell>
                <TableCell className="text-slate-600">{report.profile}</TableCell>
                <TableCell className="text-xs text-slate-400 truncate max-w-[150px]">{report.url}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[10px] font-medium text-slate-500 border-slate-200">
                    {report.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-slate-500">{report.date}</TableCell>
                <TableCell>{getStatusBadge(report.status)}</TableCell>
                <TableCell>
                  <span className={cn("text-sm font-bold", getScoreColor(report.score))}>
                    {report.score !== null ? `${report.score}/100` : '-'}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-slate-400 hover:text-primary"
                      onClick={() => navigate('/audit-results')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="p-4 border-t border-border flex items-center justify-between bg-slate-50/50">
          <p className="text-xs text-slate-500">Showing 1 to 3 of 3 reports</p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs font-bold bg-primary text-white border-primary">1</Button>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
