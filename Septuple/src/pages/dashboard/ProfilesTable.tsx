import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MoreVertical, ExternalLink, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Profile {
  id: string;
  name: string;
  domain: string;
  location: string;
  status: string;
  tokens: number | string;
}

interface ProfilesTableProps {
  profiles: Profile[];
  loading: boolean;
}

export function ProfilesTable({ profiles, loading }: ProfilesTableProps) {
  return (
    <Card className="border-border shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border bg-slate-50/50">
        <h3 className="text-sm font-bold text-slate-900">Profiles ({profiles.length})</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Business Name</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Business Domain</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tags</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Last Run</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tokens</TableHead>
            <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                {Array.from({ length: 8 }).map((_, j) => (
                  <TableCell key={j}><Skeleton className="h-4 w-full" /></TableCell>
                ))}
              </TableRow>
            ))
          ) : profiles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="h-64 text-center">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium">No profiles yet. Create your first profile.</p>
                  <Button variant="outline" size="sm">Create Profile</Button>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            profiles.map((profile) => (
              <TableRow key={profile.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                <TableCell className="font-bold text-slate-900">{profile.name}</TableCell>
                <TableCell>
                  <a href={profile.domain} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                    {profile.domain}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </TableCell>
                <TableCell className="text-slate-600">{profile.location}</TableCell>
                <TableCell>
                  <Badge className={cn(
                    "rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    profile.status === 'Active' ? "bg-primary text-white" : "bg-slate-200 text-slate-600"
                  )}>
                    {profile.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-400">-</TableCell>
                <TableCell className="text-slate-400">-</TableCell>
                <TableCell className="text-slate-600 font-medium">{profile.tokens}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                      <DropdownMenuItem>Run Audit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
