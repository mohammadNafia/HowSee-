import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainApp } from './MainApp';
import { LandingPage } from '@/features/landing/LandingPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />}>
        <Route index element={<LandingPage />} />
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
