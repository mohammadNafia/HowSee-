import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { MainApp } from './MainApp';
import WebApp from '../web-app/WebApp';
import { SignInScreen } from './components/SignInScreen';
import { SignUpScreen } from './components/SignUpScreen';
import { HomeScreen } from './components/HomeScreen';
import { PropertiesScreen } from './components/PropertiesScreen';
import { PropertyDetailsScreen } from './components/PropertyDetailsScreen';
import { ProfileSettingsScreen } from './components/ProfileSettingsScreen';
import { PublicProfileScreen } from './components/PublicProfileScreen';
import { LandingPage } from '../web-app/pages/LandingPage';
import { PricingScreen } from './components/PricingScreen';
import { useState } from 'react';

// ─── Role Type ───────────────────────────────────────────────
export type UserRole = 'user' | 'constructor' | 'admin';

// ─── Persistent Auth Helpers ─────────────────────────────────
function getStoredAuth(): boolean {
  return localStorage.getItem('howsee_auth') === 'true';
}
function getStoredRole(): UserRole {
  const r = localStorage.getItem('howsee_role');
  if (r === 'user' || r === 'constructor' || r === 'admin') return r;
  return 'user';
}
function saveAuth(auth: boolean, role: UserRole) {
  localStorage.setItem('howsee_auth', String(auth));
  localStorage.setItem('howsee_role', role);
}
function clearAuth() {
  localStorage.removeItem('howsee_auth');
  localStorage.removeItem('howsee_role');
}

// ─── Demo Accounts ───────────────────────────────────────────
// These are the 3 demo accounts for testing each role:
//   Admin:        admin@howsee.com       / admin123
//   Constructor:  constructor@howsee.com / constructor123
//   User:         user@howsee.com        / user123
// (or any email/password — the role is determined by what you pick)

function AppRoutes() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getStoredAuth);
  const [userRole, setUserRole] = useState<UserRole>(getStoredRole);

  const handleSignIn = (role: UserRole = 'user') => {
    saveAuth(true, role);
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    clearAuth();
    setIsAuthenticated(false);
    setUserRole('user');
    navigate('/signin');
  };

  // Where each role should go after sign-in
  const getDashboardPath = (role: UserRole) => {
    switch (role) {
      case 'admin': return '/constructor/admin/dashboard';
      case 'constructor': return '/constructor/seller/overview';
      case 'user': return '/';
    }
  };

  return (
    <Routes>
      {/* ── Constructor & Admin Dashboard Area ── */}
      <Route path="/constructor/*" element={
        isAuthenticated && (userRole === 'admin' || userRole === 'constructor') ? (
          <WebApp
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={(val) => { if (!val) handleLogout(); }}
            userRole={userRole === 'constructor' ? 'seller' : 'admin'}
            setUserRole={(role) => {
              const mapped: UserRole = role === 'seller' ? 'constructor' : 'admin';
              setUserRole(mapped);
              saveAuth(true, mapped);
            }}
          />
        ) : (
          <Navigate to="/signin" replace />
        )
      } />

      {/* ── Main User-Facing Website ── */}
      <Route path="/" element={<MainApp />}>
        <Route index element={
          isAuthenticated ? (
            <HomeScreen
              isAdmin={userRole === 'admin'}
              isConstructor={userRole === 'constructor'}
              onNavigateToProperties={() => navigate('/properties')}
              onNavigateToProfile={() => navigate('/profile')}
              onNavigateToAdmin={() => navigate('/constructor/admin/dashboard')}
              onNavigateToConstructor={() => navigate('/constructor/seller/overview')}
            />
          ) : (
            <LandingPage />
          )
        } />

        <Route path="pricing" element={<PricingScreen onBack={() => navigate('/')} />} />

        {/* Sign-in: if already authenticated, redirect based on role */}
        <Route path="signin" element={
          isAuthenticated
            ? <Navigate to={getDashboardPath(userRole)} replace />
            : <SignInScreen
                onBack={() => navigate('/')}
                onSignIn={(role: UserRole) => {
                  handleSignIn(role);
                  navigate(getDashboardPath(role));
                }}
                onSignUp={() => navigate('/signup')}
              />
        } />

        {/* Sign-up: same guard */}
        <Route path="signup" element={
          isAuthenticated
            ? <Navigate to={getDashboardPath(userRole)} replace />
            : <SignUpScreen
                onBack={() => navigate('/')}
                onSignUp={(role: UserRole) => {
                  handleSignIn(role);
                  navigate(getDashboardPath(role));
                }}
                onSignIn={() => navigate('/signin')}
              />
        } />

        <Route path="properties" element={
          <PropertiesScreen
            onBack={() => navigate('/')}
            onPropertyClick={() => navigate('/details')}
          />
        } />

        <Route path="details" element={
          <PropertyDetailsScreen onBack={() => navigate('/properties')} />
        } />

        <Route path="profile" element={
          <ProfileSettingsScreen
            isAdmin={userRole === 'admin' && isAuthenticated}
            isConstructor={userRole === 'constructor' && isAuthenticated}
            onBack={() => navigate('/')}
            onLogout={handleLogout}
            onNavigateToPublicProfile={() => navigate('/profile/public')}
          />
        } />

        <Route path="profile/public" element={
          <PublicProfileScreen
            onBack={() => navigate('/profile')}
            isAdmin={userRole === 'admin'}
          />
        } />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}