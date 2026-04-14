import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileJson, Code } from 'lucide-react';

export function SchemasTab() {
  const schemas = [
    { type: 'Organization', format: 'JSON-LD', items: 1 },
    { type: 'WebSite', format: 'JSON-LD', items: 1 },
    { type: 'BreadcrumbList', format: 'JSON-LD', items: 1 },
    { type: 'SoftwareApplication', format: 'JSON-LD', items: 1 },
  ];

  return (
    <Card className="p-6 border-border shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileJson className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Structured Data (Schema.org)</h3>
        </div>
        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100">Valid</Badge>
      </div>
      <div className="space-y-4">
        {schemas.map((schema) => (
          <div key={schema.type} className="p-4 border border-slate-100 rounded-xl bg-slate-50/30 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center">
                <Code className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{schema.type}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{schema.format}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-700">{schema.items} Item</p>
              <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View Source</button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
