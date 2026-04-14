import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IssuesTab() {
  const issues = [
    { severity: 'Critical', title: 'Missing H1 Tag', desc: 'The homepage is missing a primary H1 heading, which is critical for SEO.', impact: 'High', pages: 1 },
    { severity: 'Warning', title: 'Duplicate Meta Descriptions', desc: 'Multiple pages share the same meta description.', impact: 'Medium', pages: 12 },
    { severity: 'Warning', title: 'Slow Response Time', desc: 'Server response time is above 200ms for several pages.', impact: 'Medium', pages: 8 },
    { severity: 'Warning', title: 'Missing Alt Text', desc: 'Images are missing descriptive alt text.', impact: 'Low', pages: 45 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">Detected Issues</h3>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-[10px] font-bold uppercase">All (844)</Badge>
          <Badge variant="outline" className="text-[10px] font-bold uppercase text-red-500 border-red-100 bg-red-50">Critical (1)</Badge>
          <Badge variant="outline" className="text-[10px] font-bold uppercase text-amber-500 border-amber-100 bg-amber-50">Warnings (843)</Badge>
        </div>
      </div>
      <div className="space-y-4">
        {issues.map((issue, i) => (
          <Card key={i} className="p-4 border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={cn("mt-1 p-2 rounded-lg", 
                  issue.severity === 'Critical' ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"
                )}>
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{issue.title}</h4>
                  <p className="text-xs text-slate-500 max-w-2xl">{issue.desc}</p>
                  <div className="flex items-center space-x-4 pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact: <span className={cn(issue.impact === 'High' ? "text-red-500" : "text-amber-500")}>{issue.impact}</span></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Affected Pages: <span className="text-slate-700">{issue.pages}</span></span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs font-bold text-primary">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
