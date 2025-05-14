'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Home, Settings, LayoutDashboard, MessageCircle, MessageCircleCode, LayoutDashboardIcon, LucideLayoutDashboard, PanelLeftDashedIcon, LucidePanelLeftDashed, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils'; // Optional utility for className merging
import WorkspaceHistory from './custom/WorkspaceHistory';
import Footer from './custom/Footer';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: 'Start Chat', href: '/', icon: <MessageCircleCode size={20} /> },
    { label: 'Home', href: '/home', icon: <Home size={20} /> },
    { label: 'Settings', href: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={cn(
        'h-screen bg-gray-800 border-r transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <span className={cn('text-lg font-semibold', collapsed && 'hidden')}>{"</>"}Blaze</span>
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded hover:bg-gray-100">
          <PanelLeft size={20} />
        </button>
      </div>
      <WorkspaceHistory/>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 px-4 py-3 text-sm text-gray-300 hover:bg-gray-100 hover:text-gray-800"
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
      <Footer/>
    </div>
  );
}
