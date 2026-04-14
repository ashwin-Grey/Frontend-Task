import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PanelTop, PanelBottom, Globe, Share2 } from 'lucide-react';

export function HeadersFootersTab() {
  const navLinks = ['Product', 'Features', 'Pricing', 'Resources', 'Blog', 'About', 'Login', 'Get Started'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6 border-border shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <PanelTop className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Header Analysis</h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Sticky Navigation</span>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Logo Alt Text</span>
              <span className="text-xs text-slate-500">"Septuple Logo"</span>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigation Links (8)</h4>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <Badge key={link} variant="outline" className="text-[10px] font-medium">{link}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card className="p-6 border-border shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <PanelBottom className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-slate-900">Footer Analysis</h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Copyright Year</span>
              <span className="text-xs text-emerald-600 font-bold">2026 (Current)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Social Icons</span>
              <div className="flex space-x-2">
                <Globe className="w-3 h-3 text-slate-400" />
                <Share2 className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legal Links</h4>
            <div className="flex flex-wrap gap-2">
              {legalLinks.map((link) => (
                <Badge key={link} variant="outline" className="text-[10px] font-medium">{link}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
