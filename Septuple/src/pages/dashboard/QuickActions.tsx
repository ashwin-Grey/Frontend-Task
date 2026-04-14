import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, BarChart2, ExternalLink } from 'lucide-react';
import { SystemStatus } from './SystemStatus';

export function QuickActions({ onCreateProfile }: { onCreateProfile: () => void }) {
  return (
    <Card className="p-6 border-border shadow-sm space-y-6">
      <h3 className="text-sm font-bold text-slate-900">Quick Actions</h3>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          onClick={onCreateProfile}
          className="w-full justify-start h-12 px-4 border-slate-200 hover:bg-slate-50 text-slate-700 font-medium"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
            <Plus className="w-4 h-4 text-blue-600" />
          </div>
          Add New Profile
        </Button>
        <Button variant="outline" className="w-full justify-start h-12 px-4 border-slate-200 hover:bg-slate-50 text-slate-700 font-medium">
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mr-3">
            <BarChart2 className="w-4 h-4 text-amber-600" />
          </div>
          Run Bulk Audit
        </Button>
        <Button variant="outline" className="w-full justify-start h-12 px-4 border-slate-200 hover:bg-slate-50 text-slate-700 font-medium">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mr-3">
            <ExternalLink className="w-4 h-4 text-emerald-600" />
          </div>
          Export All Data
        </Button>
      </div>
      
      <SystemStatus />
    </Card>
  );
}
