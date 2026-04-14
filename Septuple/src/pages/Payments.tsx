import React, { useState } from 'react';
import { 
  CreditCard, 
  Zap, 
  CheckCircle2, 
  Download, 
  Plus, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle,
  History,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

const billingHistory = [
  { id: 'INV-2024-001', date: 'Mar 12, 2024', amount: '$49.00', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2024-002', date: 'Feb 12, 2024', amount: '$49.00', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2024-003', date: 'Jan 12, 2024', amount: '$49.00', status: 'Paid', method: 'Visa ending in 4242' },
  { id: 'INV-2023-012', date: 'Dec 12, 2023', amount: '$49.00', status: 'Paid', method: 'Visa ending in 4242' },
];

export default function Payments() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Billing & Payments</h1>
          <p className="text-sm text-slate-500">Manage your subscription, payment methods, and billing history.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Settings className="w-4 h-4 mr-2" />
            Billing Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Current Plan & Payment Methods */}
        <div className="lg:col-span-8 space-y-8">
          {/* Current Plan Card */}
          <Card className="p-8 border-border shadow-md bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Badge className="bg-primary text-white border-none font-black text-[10px] uppercase tracking-widest mb-2 px-3">Active Plan</Badge>
                  <h2 className="text-3xl font-black">Septuple Pro</h2>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black">$49<span className="text-sm font-bold text-slate-400">/mo</span></p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Billed Monthly</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/10">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Payment</p>
                  <p className="text-sm font-bold">April 12, 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment Method</p>
                  <p className="text-sm font-bold flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Visa •••• 4242
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                  <div className="flex items-center text-emerald-400 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Healthy
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-black px-8">
                  Upgrade Plan
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/10 font-bold">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-6 border-border shadow-sm bg-white space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Payment Methods</h3>
              <Button variant="outline" size="sm" className="h-8 font-bold text-[10px] uppercase tracking-widest">
                <Plus className="w-3 h-3 mr-2" />
                Add New
              </Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl border border-primary bg-primary/5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center">
                    <span className="text-[10px] font-black italic text-blue-800">VISA</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Visa ending in 4242</p>
                    <p className="text-[10px] text-slate-500">Expires 12/26 • Primary</p>
                  </div>
                </div>
                <Badge className="bg-primary text-white border-none text-[8px] font-black uppercase">Default</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center">
                    <span className="text-[10px] font-black italic text-red-600">MC</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Mastercard ending in 8899</p>
                    <p className="text-[10px] text-slate-500">Expires 08/25</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Settings className="w-4 h-4 text-slate-400" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Billing History */}
          <Card className="border-border shadow-sm bg-white overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <History className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-slate-900">Billing History</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-primary">View All</Button>
            </div>
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Invoice</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Date</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Amount</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingHistory.map((inv) => (
                  <TableRow key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="py-4 text-xs font-bold text-slate-700">{inv.id}</TableCell>
                    <TableCell className="py-4 text-xs text-slate-500">{inv.date}</TableCell>
                    <TableCell className="py-4 text-xs font-black text-slate-900">{inv.amount}</TableCell>
                    <TableCell className="py-4">
                      <Badge className="bg-emerald-100 text-emerald-700 border-none text-[10px] font-black uppercase">
                        {inv.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4 text-slate-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Right Column: Plan Comparison & Support */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-border shadow-md bg-white space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Plan Comparison</h3>
            <div className="space-y-4">
              {[
                { plan: 'Starter', price: '$19', features: ['5 Projects', '1k API Calls', 'Basic Reports'] },
                { plan: 'Pro', price: '$49', features: ['Unlimited Projects', '5k API Calls', 'Advanced AI Tools'], current: true },
                { plan: 'Enterprise', price: '$199', features: ['Custom Solutions', 'Unlimited API', 'Dedicated Support'] },
              ].map((plan, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "p-4 rounded-xl border transition-all cursor-pointer",
                    plan.current ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-slate-100 hover:border-slate-200"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-slate-900">{plan.plan}</span>
                    <span className="text-sm font-black text-primary">{plan.price}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center text-[10px] text-slate-500 font-medium">
                        <CheckCircle2 className="w-3 h-3 mr-2 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.current && (
                    <div className="mt-4 pt-4 border-t border-primary/10">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest text-center">Current Plan</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-border shadow-sm bg-slate-50 space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-slate-900">Secure Payments</h3>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              All payments are processed securely via Stripe. We do not store your full credit card details on our servers.
            </p>
            <div className="flex items-center space-x-2 text-amber-500">
              <AlertCircle className="w-4 h-4" />
              <p className="text-[10px] font-bold">Need help? Contact billing support.</p>
            </div>
            <Button variant="outline" className="w-full h-10 text-[10px] font-bold uppercase tracking-widest">
              Contact Support
              <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
