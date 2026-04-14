import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Bell, 
  CreditCard, 
  Zap, 
  Settings, 
  Camera,
  CheckCircle2,
  AlertCircle,
  Globe,
  Lock,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { motion } from 'framer-motion';

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false);

  const stats = [
    { label: 'API Calls', value: '1,284', total: '5,000', color: 'bg-blue-500' },
    { label: 'Content Generated', value: '42', total: '100', color: 'bg-emerald-500' },
    { label: 'Keywords Tracked', value: '156', total: '500', color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Account Settings</h1>
          <p className="text-sm text-slate-500">Manage your profile, subscription, and security preferences.</p>
        </div>
        <Button 
          variant={isEditing ? "default" : "outline"} 
          onClick={() => setIsEditing(!isEditing)}
          className="h-9 font-bold"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Profile Info */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-8 border-border shadow-md bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-black text-slate-400 border-2 border-dashed border-slate-200">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-border text-slate-600 hover:text-primary transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-black text-slate-900">{user?.name || 'User Name'}</h2>
                  <Badge className="bg-primary/10 text-primary border-none font-bold text-[10px] uppercase tracking-widest">Pro Member</Badge>
                </div>
                <p className="text-sm text-slate-500">{user?.email || 'user@example.com'}</p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Globe className="w-3 h-3 mr-1" />
                    UTC +5:30
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" />
                    Verified
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <Input defaultValue={user?.name || ''} disabled={!isEditing} className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <Input defaultValue={user?.email || ''} disabled={!isEditing} className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company</label>
                <Input placeholder="Septuple AI" disabled={!isEditing} className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Role</label>
                <Input placeholder="SEO Specialist" disabled={!isEditing} className="h-11" />
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-border shadow-sm bg-white space-y-4">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-slate-900">Security</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-900">Two-Factor Auth</p>
                    <p className="text-[10px] text-slate-500">Secure your account with 2FA.</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-900">Password</p>
                    <p className="text-[10px] text-slate-500">Last changed 3 months ago.</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase">Update</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border shadow-sm bg-white space-y-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Email Alerts</span>
                  <div className="w-8 h-4 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Weekly Reports</span>
                  <div className="w-8 h-4 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Security Alerts</span>
                  <div className="w-8 h-4 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Subscription & Usage */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-border shadow-md bg-slate-900 text-white space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Current Plan</h3>
              </div>
              <Badge className="bg-primary text-white border-none font-black text-[10px]">PRO</Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-black">$49</span>
                  <span className="text-xs text-slate-400">/mo</span>
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Next billing: May 12</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Your plan includes unlimited reports, 5,000 API calls, and priority AI generation.
              </p>
            </div>

            <Button className="w-full h-11 bg-white text-slate-900 hover:bg-slate-100 font-black rounded-xl">
              Manage Subscription
            </Button>
          </Card>

          <Card className="p-6 border-border shadow-sm bg-white space-y-6">
            <h3 className="text-sm font-bold text-slate-900">Usage Statistics</h3>
            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">{stat.label}</span>
                    <span className="text-slate-900">{stat.value} / {stat.total}</span>
                  </div>
                  <Progress 
                    value={(parseInt(stat.value.replace(',', '')) / parseInt(stat.total.replace(',', ''))) * 100} 
                    className="h-1.5"
                  />
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border">
              <div className="flex items-center text-amber-500 space-x-2">
                <AlertCircle className="w-4 h-4" />
                <p className="text-[10px] font-bold">You've used 80% of your content quota.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border shadow-sm bg-white space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-slate-900">Connected Devices</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                  <span className="font-medium text-slate-700">MacBook Pro (Current)</span>
                </div>
                <span className="text-slate-400">Active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-slate-300 mr-2" />
                  <span className="font-medium text-slate-700">iPhone 15 Pro</span>
                </div>
                <span className="text-slate-400">2h ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
