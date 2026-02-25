import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { SellerDashboardLayout } from './components/dashboard/SellerDashboardLayout';
import { AdminDashboardLayout } from './components/dashboard/AdminDashboardLayout';
import { AnalyticsOverview } from './pages/seller/AnalyticsOverview';
import { PropertyUploadWizard } from './pages/seller/PropertyUploadWizard';
import { PropertyManagement } from './pages/seller/PropertyManagement';
import { PricingPage } from './pages/seller/PricingPage';
import { SubscriptionBilling } from './pages/seller/SubscriptionBilling';
import { AddPaymentMethod } from './pages/seller/AddPaymentMethod';
import { PrivacySettings } from './pages/seller/PrivacySettings';
import { ContactPage } from './pages/seller/ContactPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserManagement } from './pages/admin/UserManagement';
import { PropertyModeration } from './pages/admin/PropertyModeration';
import { PlatformAnalytics } from './pages/admin/PlatformAnalytics';
import { AdminSettings } from './pages/admin/AdminSettings';
import { Chatbot } from './components/Chatbot';
import './styles/index.css';

interface WebAppProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
  userRole: 'seller' | 'admin';
  setUserRole: (val: 'seller' | 'admin') => void;
}

export function WebApp({ 
  isAuthenticated, 
  setIsAuthenticated, 
  userRole, 
  setUserRole 
}: WebAppProps) {
  return (
    <div className="web-app-theme min-h-screen bg-background text-foreground">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={
          isAuthenticated ? (
            <Navigate to={userRole === 'admin' ? '/admin/dashboard' : '/seller/overview'} replace />
          ) : (
            <LandingPage isAuthenticated={isAuthenticated} userRole={userRole} />
          )
        } />
        <Route path="signin" element={
          isAuthenticated ? (
            <Navigate to={userRole === 'admin' ? '/admin/dashboard' : '/seller/overview'} replace />
          ) : (
            <SignInPage 
              isAuthenticated={isAuthenticated}
              userRole={userRole}
              onSignIn={(role) => {
                setIsAuthenticated(true);
                setUserRole(role);
              }} 
            />
          )
        } />
        <Route path="signup" element={
          isAuthenticated ? (
            <Navigate to={userRole === 'admin' ? '/admin/dashboard' : '/seller/overview'} replace />
          ) : (
            <SignUpPage 
              isAuthenticated={isAuthenticated}
              userRole={userRole}
              onSignUp={(role) => {
                setIsAuthenticated(true);
                setUserRole(role);
              }} 
            />
          )
        } />

        {/* Full Page Add Card - Outside of Layout */}
        <Route path="seller/billing/add-card" element={
          isAuthenticated && userRole === 'seller' ? (
            <AddPaymentMethod />
          ) : (
            <Navigate to="/signin" replace />
          )
        } />

      {/* Seller dashboard routes */}
      <Route
        path="seller/*"
        element={
          isAuthenticated && userRole === 'seller' ? (
            <SellerDashboardLayout>
              <Routes>
                <Route path="overview" element={<AnalyticsOverview />} />
                <Route path="upload" element={<PropertyUploadWizard />} />
                <Route path="properties" element={<PropertyManagement />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="billing" element={<SubscriptionBilling />} />
                <Route path="privacy" element={<PrivacySettings />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="overview" replace />} />
              </Routes>
              <Chatbot />
            </SellerDashboardLayout>
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />

      {/* Admin dashboard routes */}
      <Route
        path="/admin/*"
        element={
          isAuthenticated && userRole === 'admin' ? (
            <AdminDashboardLayout>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="properties" element={<PropertyModeration />} />
                <Route path="analytics" element={<PlatformAnalytics />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="*" element={<Navigate to="dashboard" replace />} />
              </Routes>
            </AdminDashboardLayout>
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </div>
  );
}

export default WebApp;
