import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ScoreHeroProps {
  score: number;
  totalIssues: number;
  criticalIssues: number;
  crawlProgress: number;
  totalCrawl: number;
}

export function ScoreHero({ 
  score, 
  totalIssues, 
  criticalIssues, 
  crawlProgress, 
  totalCrawl 
}: ScoreHeroProps) {
  const scoreColor = score >= 70 ? 'text-emerald-500' : score >= 40 ? 'text-amber-500' : 'text-red-500';
  const scoreBg = score >= 70 ? 'bg-emerald-50' : score >= 40 ? 'bg-amber-50' : 'bg-red-50';
  const scoreLabel = score >= 70 ? 'Excellent' : score >= 40 ? 'Needs Work' : 'Critical';

  return (
    <Card className="p-10 border-border shadow-md flex flex-col md:flex-row items-center justify-between gap-10 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      
      <div className="flex items-center space-x-10 relative z-10">
        <div className={cn("w-40 h-40 rounded-full border-[10px] flex flex-col items-center justify-center shadow-inner bg-white", 
          score >= 70 ? "border-emerald-500" : score >= 40 ? "border-amber-500" : "border-red-500"
        )}>
          <span className="text-5xl font-black text-slate-900 leading-none">{score}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">/ 100</span>
        </div>
        <div className="space-y-3">
          <div className={cn("inline-flex px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest", scoreBg, scoreColor)}>
            {scoreLabel}
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">URL Scan Results</h2>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            Your website has <span className="font-bold text-slate-700">{totalIssues} issues</span> detected. 
            Focus on <span className="font-bold text-red-500">{criticalIssues} critical fixes</span> to significantly improve your search visibility.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-3 relative z-10">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Crawl Progress</span>
        <div className="flex items-baseline space-x-2">
          <span className="text-4xl font-black text-slate-900">{crawlProgress}</span>
          <span className="text-xl font-bold text-slate-400">/ {totalCrawl}</span>
        </div>
        <Badge className="bg-emerald-500 text-white border-none rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
          100% Verified
        </Badge>
      </div>
    </Card>
  );
}
