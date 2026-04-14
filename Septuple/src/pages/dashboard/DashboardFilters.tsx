import React from 'react';
import { Search, Calendar, Filter, MoreVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface DashboardFiltersProps {
  search: string;
  setSearch: (val: string) => void;
}

export function DashboardFilters({ search, setSearch }: DashboardFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input 
          placeholder="Search by name, domain, location, or tags..." 
          className="pl-10 h-10 bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 px-3 py-2 bg-white border border-border rounded-md text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50">
          <Calendar className="w-4 h-4" />
          <span>14/03/2026 - 13/04/2026</span>
        </div>
        <div className="flex items-center space-x-2 px-3 py-2 bg-white border border-border rounded-md text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50">
          <Filter className="w-4 h-4" />
          <span>All</span>
          <MoreVertical className="w-3 h-3 rotate-90" />
        </div>
      </div>
    </div>
  );
}
