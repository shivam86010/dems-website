import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Scale, 
  Search, 
  Settings, 
  ChevronLeft,
  Shield,
  Activity,
  Database,
  Bell,
  BarChart3,
  FolderKanban,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  href: string;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const sidebarRef = useRef<HTMLElement>(null);

  const menuItems: MenuItem[] = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <FileText size={20} />, label: 'Cases', href: '/dashboard/case', badge: 12 },
    { 
      icon: <FolderKanban size={20} />, 
      label: 'Evidence', 
      href: '/evidence',
      subItems: [
        { label: 'Images', href: '/evidence/images' },
        { label: 'Videos', href: '/evidence/videos' },
        { label: 'Documents', href: '/evidence/documents' },
        { label: 'CCTV Footage', href: '/evidence/cctv' },
      ]
    },
    { icon: <Users size={20} />, label: 'Officers', href: '/officers' },
    { icon: <Scale size={20} />, label: 'Courts', href: '/courts', badge: 3 },
    { icon: <Search size={20} />, label: 'Investigations', href: '/investigations' },
    { icon: <Activity size={20} />, label: 'Real-time Updates', href: '/realtime', badge: 7 },
    { icon: <BarChart3 size={20} />, label: 'Analytics', href: '/analytics' },
    { icon: <Database size={20} />, label: 'Database', href: '/database' },
    { icon: <Bell size={20} />, label: 'Alerts', href: '/alerts', badge: 5 },
    { icon: <Settings size={20} />, label: 'Settings', href: '/settings' },
  ];

  // Auto-expand menu based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    menuItems.forEach(item => {
      if (item.subItems && currentPath.startsWith(item.href)) {
        if (!expandedMenus.includes(item.label)) {
          setExpandedMenus(prev => [...prev, item.label]);
        }
      }
    });
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  const toggleSubMenu = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedMenus.includes(label)) {
      setExpandedMenus(expandedMenus.filter(item => item !== label));
    } else {
      setExpandedMenus([...expandedMenus, label]);
    }
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside 
      ref={sidebarRef}
      className={`fixed left-0 top-0 h-full bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 shadow-2xl transition-all duration-300 z-20 flex flex-col ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo Section */}
      <div className={`flex items-center gap-3 p-4 border-b border-white/10 h-16 flex-shrink-0 ${collapsed ? 'justify-center' : 'px-6'}`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-premium shadow-glow">
          <Shield className="w-6 h-6 text-white" />
        </div>
        {!collapsed && (
          <div className="flex-1">
            <h1 className="text-lg font-bold text-white tracking-tight">DEMS+</h1>
            <p className="text-xs text-white/50">v2.0 Enterprise</p>
          </div>
        )}
      </div>

      {/* Navigation Menu - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar min-h-0">
        <div className="space-y-1 px-3">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={(e) => {
                  if (item.subItems) {
                    toggleSubMenu(item.label, e);
                  } else {
                    handleNavigation(item.href);
                  }
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive(item.href)
                    ? 'bg-gradient-premium text-white shadow-glow'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                } ${collapsed ? 'justify-center' : ''}`}
              >
                <div className="relative flex-shrink-0">
                  {item.icon}
                  {item.badge && !collapsed && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 bg-error-500 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left text-sm font-medium truncate">{item.label}</span>
                    {item.subItems && (
                      <ChevronLeft 
                        size={16} 
                        className={`transition-transform duration-200 flex-shrink-0 ${
                          expandedMenus.includes(item.label) ? '-rotate-90' : ''
                        }`}
                      />
                    )}
                  </>
                )}
                {collapsed && item.badge && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-error-500 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Submenu Items */}
              {!collapsed && item.subItems && expandedMenus.includes(item.label) && (
                <div className="ml-9 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => handleNavigation(subItem.href)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        location.pathname === subItem.href
                          ? 'bg-deep-blue-500/20 text-deep-blue-300'
                          : 'text-white/50 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom Section - Fixed at bottom */}
      <div className={`flex-shrink-0 border-t border-white/10 ${collapsed ? 'text-center p-4' : 'p-4'}`}>
        {!collapsed ? (
          <div className="space-y-3">
            <button 
              onClick={() => handleNavigation('/help')}
              className="w-full flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
            >
              <HelpCircle size={20} />
              <span className="text-sm font-medium">Help & Support</span>
            </button>
            
            
          </div>
        ) : (
          <button 
            onClick={() => handleNavigation('/help')}
            className="w-full flex justify-center text-white/40 hover:text-white/80 transition-colors"
          >
            <HelpCircle size={20} />
          </button>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;