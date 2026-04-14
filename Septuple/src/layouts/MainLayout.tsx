import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar, Navbar } from '@/components';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export function MainLayout() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Navbar />
      <main className="pl-60 pt-14">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
