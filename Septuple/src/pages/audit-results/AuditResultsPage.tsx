import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Download, 
  Copy, 
  Clock,
  Zap,
  Code,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  ScoreHero, 
  StatGrid, 
  MetricCard, 
  StatisticsTab, 
  IssuesTab, 
  PerformanceTab, 
  MobileTab, 
  SchemasTab, 
  ArchitectureTab, 
  FontsTab, 
  HeadersFootersTab,
  CrawlPerformanceTab,
  IndividualPageScoresTab
} from './sub-components';

const httpStatusData = [
  { name: 'Success', count: 53, color: '#10B981' },
  { name: 'Redirects', count: 0, color: '#3B82F6' },
  { name: 'Client Errors', count: 0, color: '#F59E0B' },
  { name: 'Server Errors', count: 0, color: '#EF4444' },
  { name: 'Informational', count: 0, color: '#94A3B8' },
];

export default function AuditResults() {
  const navigate = useNavigate();
  const score = 53;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/web-auditor')}
          className="text-slate-500 hover:text-slate-900 -ml-2 font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Auditor
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-slate-900">https://www.suptask.com</h1>
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Completed
            </Badge>
          </div>
          <p className="text-xs text-slate-500 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Started: 2/10/2026, 11:17 PM
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 px-4 font-bold text-slate-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-4 font-bold text-slate-700">
            <Copy className="w-4 h-4 mr-2" />
            Compare
          </Button>
        </div>
      </div>

      {/* Score Hero */}
      <ScoreHero 
        score={score}
        totalIssues={844}
        criticalIssues={91}
        crawlProgress={53}
        totalCrawl={53}
      />

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-auto p-0 space-x-8">
          <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-bold text-slate-500 data-[state=active]:text-primary">Overview</TabsTrigger>
          <TabsTrigger value="crawl" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-bold text-slate-500 data-[state=active]:text-primary">Crawl/Mobile/Performance</TabsTrigger>
          <TabsTrigger value="individual" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-bold text-slate-500 data-[state=active]:text-primary">Individual Page Scores</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8 mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <MetricCard 
              title="Web & Mobile Performance"
              score="92/100"
              icon={Zap}
              iconColor="text-emerald-500"
              metrics={[
                { label: 'Performance', value: 92 },
                { label: 'Site Speed', value: 96 },
                { label: 'Core Vitals', value: 86 },
                { label: 'Mobile Support & Performance', value: 92 },
              ]}
            />

            <MetricCard 
              title="Search Understanding"
              score="61/100"
              icon={Search}
              iconColor="text-amber-500"
              metrics={[
                { label: 'SEO', value: 52 },
                { label: 'Schema', value: 62 },
                { label: 'AI Citation Score', value: 55 },
                { label: 'Backlink Score', value: 68 },
                { label: 'Content Analysis', value: 68 },
              ]}
            />

            <MetricCard 
              title="Technical Hygiene"
              score="59/100"
              icon={Code}
              iconColor="text-amber-500"
              metrics={[
                { label: 'Technical Issues', value: 19 },
                { label: 'Header / Footer', value: 99 },
              ]}
            />
          </div>

          <StatGrid 
            stats={[
              { label: 'Pages Inspected', value: '53', color: 'border-blue-500' },
              { label: 'Total Issues', value: '844', color: 'border-red-500' },
              { label: 'Critical Issues', value: '91', color: 'border-amber-500' },
              { label: 'Warning Issues', value: '843', color: 'border-amber-500' },
            ]}
          />

          <Tabs defaultValue="statistics" className="space-y-6">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg w-fit">
              {['Statistics', 'Issues', 'Performance', 'Mobile', 'Schemas', 'Architecture', 'Fonts', 'Header/Footer'].map((t) => (
                <TabsTrigger key={t} value={t.toLowerCase()} className="text-xs font-bold px-4 py-1.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="statistics">
              <StatisticsTab httpStatusData={httpStatusData} />
            </TabsContent>
            
            <TabsContent value="issues">
              <IssuesTab />
            </TabsContent>

            <TabsContent value="performance">
              <PerformanceTab />
            </TabsContent>

            <TabsContent value="mobile">
              <MobileTab />
            </TabsContent>

            <TabsContent value="schemas">
              <SchemasTab />
            </TabsContent>

            <TabsContent value="architecture">
              <ArchitectureTab />
            </TabsContent>

            <TabsContent value="fonts">
              <FontsTab />
            </TabsContent>

            <TabsContent value="header/footer">
              <HeadersFootersTab />
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="crawl" className="mt-0">
          <CrawlPerformanceTab />
        </TabsContent>

        <TabsContent value="individual" className="mt-0">
          <IndividualPageScoresTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
