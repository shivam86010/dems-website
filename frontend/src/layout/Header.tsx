import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Menu, 
  Search, 
  Bell, 
  MessageSquare, 
  User, 
  Sun, 
  Moon,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle,
  Shield
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsButtonRef = useRef<HTMLButtonElement>(null);
  const userMenuButtonRef = useRef<HTMLButtonElement>(null);

  const notifications = [
    { id: 1, title: 'New case assigned', message: 'Case #2024-001 has been assigned to you', time: '5 min ago', read: false, type: 'case' },
    { id: 2, title: 'Evidence uploaded', message: 'New CCTV footage available for case #2024-002', time: '1 hour ago', read: false, type: 'evidence' },
    { id: 3, title: 'Court hearing scheduled', message: 'Hearing for case #2024-003 on Dec 15', time: '3 hours ago', read: true, type: 'court' },
    { id: 4, title: 'System update', message: 'New security patch available', time: '1 day ago', read: true, type: 'system' },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Handle click outside for notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showNotifications &&
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node) &&
        notificationsButtonRef.current &&
        !notificationsButtonRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      
      if (
        showUserMenu &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node) &&
        userMenuButtonRef.current &&
        !userMenuButtonRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications, showUserMenu]);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showNotifications) setShowNotifications(false);
        if (showUserMenu) setShowUserMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showNotifications, showUserMenu]);

  const handleLogout = () => {
    // logout();
    navigate('/login');
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  const handleUserMenuClick = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  return (
    <header className="bg-bg-card/80 backdrop-blur-xl border-b border-slate-200/10 shadow-premium sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all duration-200 hover:scale-105"
          >
            <Menu size={20} />
          </button>
          
          {/* Search Bar */}
          <div className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
            searchFocused 
              ? 'bg-white shadow-lg ring-2 ring-deep-blue-500/20 w-96' 
              : 'bg-slate-50 w-80'
          }`}>
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search cases, evidence, officers..."
              className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <kbd className="hidden sm:block text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">⌘K</kbd>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all duration-200"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Messages */}
          <button className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all duration-200">
            <MessageSquare size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-success-500 rounded-full"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              ref={notificationsButtonRef}
              onClick={handleNotificationClick}
              className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-all duration-200"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-error-500 text-white text-[10px] rounded-full flex items-center justify-center px-1 font-bold">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div 
                ref={notificationsRef}
                className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-premium-lg border border-slate-100 overflow-hidden z-50 animate-scale-up"
              >
                <div className="p-4 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">Notifications</h3>
                    <button className="text-xs text-deep-blue-600 hover:text-deep-blue-700">
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${
                        !notif.read ? 'bg-deep-blue-50/30' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-1.5 rounded-lg ${
                          notif.type === 'case' ? 'bg-deep-blue-100' :
                          notif.type === 'evidence' ? 'bg-success-100' :
                          notif.type === 'court' ? 'bg-warning-100' : 'bg-slate-100'
                        }`}>
                          <Shield size={14} className={
                            notif.type === 'case' ? 'text-deep-blue-600' :
                            notif.type === 'evidence' ? 'text-success-600' :
                            notif.type === 'court' ? 'text-warning-600' : 'text-slate-600'
                          } />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-800">{notif.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{notif.message}</p>
                          <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                        </div>
                        {!notif.read && (
                          <div className="w-2 h-2 bg-deep-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-slate-100">
                  <button className="text-xs text-deep-blue-600 hover:text-deep-blue-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              ref={userMenuButtonRef}
              onClick={handleUserMenuClick}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-slate-100 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center shadow-glow">
                <User size={16} className="text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-slate-800">{ 'John Doe'}</p>
                <p className="text-xs text-slate-500">{ 'Police Commissioner'}</p>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div 
                ref={userMenuRef}
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-premium-lg border border-slate-100 overflow-hidden z-50 animate-scale-up"
              >
                <div className="p-3 border-b border-slate-100">
                  <p className="text-sm font-medium text-slate-800">{ 'John Doe'}</p>
                  <p className="text-xs text-slate-500">{ 'john.doe@dems.com'}</p>
                </div>
                <div className="py-2">
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate('/profile');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <User size={16} />
                    <span>My Profile</span>
                  </button>
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate('/settings');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <button 
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate('/help');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <HelpCircle size={16} />
                    <span>Help Center</span>
                  </button>
                </div>
                <div className="border-t border-slate-100 py-2">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-error-600 hover:bg-error-50 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-up {
          animation: scale-up 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;