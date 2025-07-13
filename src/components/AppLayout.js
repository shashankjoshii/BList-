
// AppLayout.js
import {
  Home,
  Users,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react"; // You can swap icons or use HeroIcons

export default function AppLayout({
  groupName = "My Group",
  onLogout = () => {},
  children,
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* HeaderBar */}
      <header className="w-full px-4 py-3 bg-gray-800 flex items-center justify-between shadow-sm">
        <h1 className="text-lg font-semibold truncate">{groupName}</h1>
        <div className="flex gap-3">
          <button
            onClick={() => alert("Settings clicked")}
            className="hover:text-blue-400"
          >
            <Settings size={20} />
          </button>
          <button
            onClick={onLogout}
            className="hover:text-red-400"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Container */}
      <main className="flex-1 px-4 py-6 w-full max-w-md mx-auto">
        {children}
      </main>

      {/* MobileNavBar */}
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 py-2 sm:hidden z-50">
        <div className="flex justify-around">
          <NavItem label="Home" icon={<Home size={20} />} />
          <NavItem label="Group" icon={<Users size={20} />} />
          <NavItem label="Add" icon={<PlusCircle size={24} />} />
        </div>
      </nav>
    </div>
  );
}

// Bottom Nav Item
function NavItem({ label, icon }) {
  return (
    <button className="flex flex-col items-center text-sm text-gray-400 hover:text-blue-400">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}

// AppLayout.js
import React from "react";
import {
  Home,
  Users,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react"; // You can swap icons or use HeroIcons

export default function AppLayout({
  groupName = "My Group",
  onLogout = () => {},
  children,
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* HeaderBar */}
      <header className="w-full px-4 py-3 bg-gray-800 flex items-center justify-between shadow-sm">
        <h1 className="text-lg font-semibold truncate">{groupName}</h1>
        <div className="flex gap-3">
          <button
            onClick={() => alert("Settings clicked")}
            className="hover:text-blue-400"
          >
            <Settings size={20} />
          </button>
          <button
            onClick={onLogout}
            className="hover:text-red-400"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Container */}
      <main className="flex-1 px-4 py-6 w-full max-w-md mx-auto">
        {children}
      </main>

      {/* MobileNavBar */}
      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 py-2 sm:hidden z-50">
        <div className="flex justify-around">
          <NavItem label="Home" icon={<Home size={20} />} />
          <NavItem label="Group" icon={<Users size={20} />} />
          <NavItem label="Add" icon={<PlusCircle size={24} />} />
        </div>
      </nav>
    </div>
  );
}

// Bottom Nav Item
function NavItem({ label, icon }) {
  return (
    <button className="flex flex-col items-center text-sm text-gray-400 hover:text-blue-400">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
