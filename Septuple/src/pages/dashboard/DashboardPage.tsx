import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CreateProfileModal } from '@/components/CreateProfileModal';
import { 
  DashboardStats, 
  AuditTrendsChart, 
  QuickActions, 
  DashboardFilters, 
  ProfilesTable 
} from './';

export default function Dashboard() {
  const { profiles } = useSelector((state: RootState) => state.profiles);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Business Profiles</h1>
          <p className="text-slate-500 text-sm">Manage your business profiles and get overview on the your profiles</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 flex items-center space-x-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span className="font-bold text-sm">Create Profile</span>
        </Button>
      </div>

      <CreateProfileModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Stats Bar */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Chart */}
        <div className="lg:col-span-2">
          <AuditTrendsChart />
        </div>

        {/* Right: Quick Actions */}
        <QuickActions onCreateProfile={() => setIsModalOpen(true)} />
      </div>

      {/* Filters */}
      <DashboardFilters search={search} setSearch={setSearch} />

      {/* Table */}
      <ProfilesTable profiles={profiles} loading={loading} />
    </div>
  );
}
