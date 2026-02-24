import { Outlet } from 'react-router-dom';

export function MainApp() {
  return (
    <div className="min-h-screen w-full bg-[#f4f5f2]">
      <Outlet />
    </div>
  );
}
