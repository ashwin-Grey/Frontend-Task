import React, { useState } from 'react';
import { 
  Users as UsersIcon, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Shield, 
  Mail, 
  CheckCircle2, 
  Clock,
  Trash2,
  Edit2,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

const userData = [
  { id: 1, name: 'Alex Johnson', email: 'alex@septuple.com', role: 'Admin', status: 'Active', lastLogin: '2 mins ago' },
  { id: 2, name: 'Sarah Miller', email: 'sarah@septuple.com', role: 'Editor', status: 'Active', lastLogin: '1 hour ago' },
  { id: 3, name: 'Michael Chen', email: 'm.chen@septuple.com', role: 'Viewer', status: 'Inactive', lastLogin: '2 days ago' },
  { id: 4, name: 'Emma Wilson', email: 'emma@septuple.com', role: 'Editor', status: 'Active', lastLogin: '5 mins ago' },
  { id: 5, name: 'David Ross', email: 'david@septuple.com', role: 'Admin', status: 'Active', lastLogin: '10 mins ago' },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">User Management</h1>
          <p className="text-sm text-slate-500">Manage team members, roles, and access permissions.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="h-9 font-bold">
            <Shield className="w-4 h-4 mr-2" />
            Role Settings
          </Button>
          <Button className="h-9 font-bold bg-primary hover:bg-primary/90 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite User
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Users', value: '24', icon: UsersIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Active Now', value: '8', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Pending Invites', value: '3', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-border shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      {/* User Table */}
      <Card className="border-border shadow-md bg-white overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search users by name or email..." 
                className="pl-9 h-10 text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-10 px-4">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sort by:</span>
            <select className="text-xs font-bold text-slate-700 bg-transparent border-none focus:ring-0 cursor-pointer">
              <option>Recently Active</option>
              <option>Name A-Z</option>
              <option>Role</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">User</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Role</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Status</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4">Last Login</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-4 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((user) => (
                <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-500 border border-slate-200">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{user.name}</span>
                        <span className="text-[10px] text-slate-500">{user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-2">
                      <Shield className={cn(
                        "w-3 h-3",
                        user.role === 'Admin' ? "text-primary" : "text-slate-400"
                      )} />
                      <span className="text-xs font-medium text-slate-700">{user.role}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge className={cn(
                      "text-[10px] font-black border-none",
                      user.status === 'Active' ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                    )}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-xs text-slate-500 font-medium">{user.lastLogin}</span>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-primary">
                        <Edit2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-primary">
                        <Lock className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-red-500">
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t border-border bg-slate-50/50 flex items-center justify-between">
          <p className="text-[10px] text-slate-500 font-medium">Showing 5 of 24 users</p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase">Previous</Button>
            <Button variant="outline" size="sm" className="h-8 px-3 text-[10px] font-bold uppercase">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
