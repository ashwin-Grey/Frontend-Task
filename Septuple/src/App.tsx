/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { MainLayout } from './layouts';
import ScrollToTop from './components/ScrollToTop';
import { 
  Login, 
  Register, 
  Dashboard, 
  WebAuditor, 
  AuditResults, 
  Reports, 
  Profile, 
  Payments, 
  Keywords, 
  Backlinks, 
  GSC, 
  Trends, 
  ContentTools, 
  Logs, 
  Users 
} from './pages';

export default function App() {
  return (
    <TooltipProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* App Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="web-auditor" element={<WebAuditor />} />
            <Route path="audit-results" element={<AuditResults />} />
            <Route path="keywords" element={<Keywords />} />
            <Route path="content" element={<ContentTools />} />
            <Route path="profile" element={<Profile />} />
            <Route path="backlinks" element={<Backlinks />} />
            <Route path="gsc" element={<GSC />} />
            <Route path="trends" element={<Trends />} />
            <Route path="users" element={<Users />} />
            <Route path="logs" element={<Logs />} />
            <Route path="payments" element={<Payments />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </TooltipProvider>
  );
}
