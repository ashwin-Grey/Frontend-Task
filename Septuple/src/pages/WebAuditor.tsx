import React from 'react';
import { 
  Globe, 
  MapPin, 
  Clock, 
  BarChart, 
  Plus, 
  X,
  Info,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWebAuditor } from '@/hooks/useWebAuditor';

export default function WebAuditor() {
  const {
    source,
    url,
    setUrl,
    location,
    setLocation,
    ignoredUrls,
    newUrl,
    setNewUrl,
    handleSourceChange,
    handleRunAudit,
    addIgnoredUrl,
    removeIgnoredUrl
  } = useWebAuditor();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Webpage Auditor</h1>
        <p className="text-slate-500 text-sm">Run a comprehensive audit for a page URL with visual reports, CWV, schema, and issue structure.</p>
      </div>

      <Card className="border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border bg-slate-50/50">
          <h3 className="text-sm font-bold text-slate-900">Audit Configuration</h3>
        </div>
        
        <div className="p-8 space-y-8">
          {/* Top Source */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Top Source</label>
            <RadioGroup value={source} onValueChange={handleSourceChange} className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="google" id="google" />
                <label htmlFor="google" className="text-sm font-medium text-slate-600 cursor-pointer">Google Business Profile</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="manual" id="manual" />
                <label htmlFor="manual" className="text-sm font-medium text-slate-600 cursor-pointer">Enter URL Manually</label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Profile - Only show for Google Business Profile */}
          {source === 'google' && (
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Profile <span className="text-red-500">*</span>
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-11 px-4 text-slate-600 font-medium">
                    Suptask Main Site
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-320px)] max-w-4xl">
                  <DropdownMenuItem>Suptask Main Site</DropdownMenuItem>
                  <DropdownMenuItem>DigitalSEO</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Recent History Summary Strip */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-wrap items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-indigo-50 rounded-lg border border-indigo-100">
                    <Globe className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Business URL</p>
                    <a href="https://www.suptask.com" className="text-sm font-bold text-indigo-600 hover:underline">suptask.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-blue-50 rounded-lg border border-blue-100">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-slate-700">United States</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-100">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Last Audit</p>
                    <p className="text-sm font-bold text-slate-700">Feb 10, 2026</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100">
                    <BarChart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Overall Score</p>
                    <p className="text-sm font-bold text-emerald-600">53/100</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Business Overview */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center">
              Business Overview <span className="text-red-500 ml-1">*</span>
              <Info className="w-3 h-3 ml-2 text-slate-400" />
            </label>
            <Textarea 
              placeholder="Describe your business, target audience, and key services..." 
              className="min-h-[140px] bg-slate-50 border-slate-200 focus:bg-white focus:border-primary transition-all rounded-xl"
              defaultValue="We are a leading provider of UI/UX design and development services, helping businesses build modern and scalable digital products."
            />
          </div>

          {/* URL and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Website URL (required)
              </label>
              <Input 
                value={url} 
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Location (optional)
              </label>
              <Input 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. United States"
                className="h-11 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
              />
            </div>
          </div>

          {/* Ignore URLs */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Ignore URLs from Audit</label>
            <div className="flex space-x-2">
              <Input 
                placeholder="https://example.com/path-to-ignore" 
                className="h-11 bg-white"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-11 px-4 min-w-[140px] justify-between">
                    Exact URL
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Exact URL</DropdownMenuItem>
                  <DropdownMenuItem>All URLs under path</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={addIgnoredUrl} className="h-11 px-6 bg-primary hover:bg-primary/90 font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
            <p className="text-[10px] text-slate-400 font-medium italic">
              Choose "All URLs under path" to exclude all pages under the given path (e.g., /products/ excludes /products/item1, /products/item2, etc.)
            </p>
            
            {ignoredUrls.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {ignoredUrls.map((url) => (
                  <Badge key={url} className="bg-slate-100 text-slate-600 border-slate-200 px-3 py-1 flex items-center space-x-2">
                    <span className="text-xs font-medium">{url}</span>
                    <button onClick={() => removeIgnoredUrl(url)} className="hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Button 
            onClick={handleRunAudit}
            className="w-full h-[52px] bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-lg mt-4"
          >
            Run Webpage Audit
          </Button>
        </div>
      </Card>
    </div>
  );
}
