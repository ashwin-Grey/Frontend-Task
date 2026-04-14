import React, { useState } from 'react';
import { 
  PenTool, 
  Sparkles, 
  FileText, 
  Copy,
  Layout, 
  MessageSquare, 
  Mail, 
  Share2, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Settings,
  Plus,
  ArrowRight,
  Search,
  History,
  Languages,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const contentTemplates = [
  { id: 'blog', title: 'Blog Post', desc: 'Generate long-form articles with SEO optimization.', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'meta', title: 'Meta Descriptions', desc: 'High-CTR meta tags for search engine results.', icon: Layout, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 'social', title: 'Social Media', desc: 'Engaging captions for LinkedIn, Twitter, and more.', icon: Share2, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 'email', title: 'Email Copy', desc: 'Persuasive email sequences for marketing.', icon: Mail, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'product', title: 'Product Descriptions', desc: 'Compelling descriptions for e-commerce.', icon: Zap, color: 'text-primary', bg: 'bg-primary/5' },
  { id: 'ad', title: 'Ad Copy', desc: 'High-converting copy for Google and Meta ads.', icon: MessageSquare, color: 'text-red-500', bg: 'bg-red-50' },
];

export default function ContentTools() {
  const [selectedTemplate, setSelectedTemplate] = useState('blog');
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [instructions, setInstructions] = useState('');
  const [content, setContent] = useState('');
  const [seoScore, setSeoScore] = useState(0);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      
      const mockData: Record<string, { content: string; score: number }> = {
        blog: {
          content: `## The Future of ${topic} in 2026\n\nSearch engine optimization is evolving faster than ever. With the rise of AI-driven search and generative experiences, companies must adapt their strategies to remain visible. \n\n### Key Trends to Watch\n1. AI Citation Optimization\n2. Semantic Search Excellence\n3. User Intent Alignment\n\nIn this guide, we'll explore how you can leverage these trends to dominate your niche...`,
          score: 84
        },
        meta: {
          content: `Title: ${topic} | Expert Guide & Strategy 2026\n\nDescription: Discover the latest insights on ${topic}. Learn how to optimize your presence and stay ahead of the competition with our comprehensive 2026 guide.`,
          score: 92
        },
        social: {
          content: `🚀 Just published our latest deep dive into ${topic}!\n\nIf you're looking to scale your growth in 2026, this is a must-read. We cover everything from foundational principles to advanced AI tactics.\n\nCheck it out here: https://septuple.com/blog/${topic.toLowerCase().replace(/ /g, '-')}\n\n#SEO #SaaS #GrowthMarketing #${topic.replace(/ /g, '')}`,
          score: 75
        },
        email: {
          content: `Subject: Re: Your ${topic} strategy for 2026\n\nHi there,\n\nI was looking at your current approach to ${topic} and noticed a few opportunities you might be missing.\n\nWe just released a new tool that helps automate the most tedious parts of this process, allowing your team to focus on high-level strategy.\n\nWould you be open to a 5-minute chat next week?\n\nBest,\nThe Septuple Team`,
          score: 68
        },
        product: {
          content: `### Septuple ${topic} Optimizer\n\nStop guessing and start ranking. Our ${topic} tool uses advanced neural networks to analyze your competitors and provide real-time suggestions.\n\n**Key Features:**\n- Real-time difficulty analysis\n- AI-powered content briefs\n- Automated backlink tracking\n\nScale your ${topic} efforts 10x faster than manual research.`,
          score: 88
        },
        ad: {
          content: `Headline: Master ${topic} in Minutes\n\nDescription: Don't let your competitors outrank you. Use Septuple's AI-powered platform to dominate ${topic} and drive 5x more organic traffic. Start your free trial today!`,
          score: 95
        }
      };

      const result = mockData[selectedTemplate] || mockData.blog;
      setContent(result.content);
      setSeoScore(result.score);
    }, 1500);
  };

  const getPlaceholder = () => {
    switch(selectedTemplate) {
      case 'blog': return "e.g. The Future of SaaS SEO";
      case 'meta': return "e.g. Septuple Homepage";
      case 'social': return "e.g. New Feature Launch";
      case 'email': return "e.g. Cold Outreach to Marketing Managers";
      case 'product': return "e.g. AI Keyword Researcher";
      case 'ad': return "e.g. Google Ads for SEO Tool";
      default: return "e.g. The Future of SaaS SEO";
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Content AI Tools</h1>
          <p className="text-sm text-slate-500">Create, optimize, and scale your content with advanced AI.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <History className="w-4 h-4 mr-2" />
            My Drafts
          </Button>
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Settings className="w-4 h-4 mr-2" />
            AI Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Templates */}
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Templates</h3>
            <div className="space-y-2">
              {contentTemplates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTemplate(t.id);
                    setContent('');
                    setSeoScore(0);
                  }}
                  className={cn(
                    "w-full flex items-start p-3 rounded-xl transition-all text-left group",
                    selectedTemplate === t.id 
                      ? "bg-white shadow-md border border-border" 
                      : "hover:bg-white/50 border border-transparent"
                  )}
                >
                  <div className={cn("p-2 rounded-lg mr-3 transition-colors", t.bg, t.color)}>
                    <t.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.title}</p>
                    <p className="text-[10px] text-slate-500 line-clamp-1">{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Card className="p-4 bg-primary/5 border-primary/10 space-y-3">
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Pro Tip</span>
            </div>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Use the "SEO Optimizer" after generating to ensure your content ranks for your target keywords.
            </p>
          </Card>
        </div>

        {/* Main Editor Area */}
        <div className="lg:col-span-6 space-y-6">
          <Card className="p-6 border-border shadow-md bg-white space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">AI Content Generator</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase">
                    <Languages className="w-3 h-3 mr-1" />
                    English
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Topic or Title</label>
                  <Input 
                    placeholder={getPlaceholder()} 
                    className="h-11 border-slate-200" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Instructions (Optional)</label>
                  <Textarea 
                    placeholder="Describe tone, audience, or specific points to include..." 
                    className="min-h-[100px] border-slate-200 resize-none"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
                >
                  {isGenerating ? (
                    <Sparkles className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <PenTool className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {content && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-6 border-t border-border space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Generated Output</h4>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Copy className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 min-h-[200px] whitespace-pre-wrap text-sm text-slate-700 leading-relaxed font-sans">
                    {content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>

        {/* Right Sidebar: SEO Optimizer */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-6 border-border shadow-sm space-y-6 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-slate-900">SEO Score</h3>
              </div>
              <span className={cn("text-sm font-black", seoScore >= 80 ? "text-emerald-500" : "text-amber-500")}>
                {seoScore}%
              </span>
            </div>
            
            <div className="space-y-4">
              <Progress value={seoScore} className="h-2 bg-slate-100" />
              
              <div className="space-y-4 pt-2">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Checklist</h4>
                {[
                  { label: 'Keyword in Title', pass: true },
                  { label: 'H1 Tag Present', pass: true },
                  { label: 'Readability Score', pass: true },
                  { label: 'Internal Links', pass: false },
                  { label: 'Meta Description', pass: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                    {item.pass ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Keyword Density</h4>
              <div className="space-y-2">
                {[
                  { word: topic || 'SaaS SEO', count: 4, density: '1.2%' },
                  { word: 'Trends', count: 3, density: '0.8%' },
                  { word: 'Content', count: 2, density: '0.5%' },
                ].map((kw, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">{kw.word}</span>
                    <span className="text-slate-500">{kw.density}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-full h-10 text-[10px] font-bold uppercase tracking-widest">
              Full SEO Audit
              <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
          </Card>

          <Card className="p-6 border-border shadow-sm space-y-4 bg-slate-900 text-white">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest">AI Preview</h3>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-2">
              <div className="h-2 w-3/4 bg-white/20 rounded" />
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-1/2 bg-white/10 rounded" />
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              This is how your content will likely appear in search engine snippets and social previews.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
