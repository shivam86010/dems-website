import React from "react";
import {
  X,
  Shield,
  Home,
  Briefcase,
  Building2,
  Gavel,
  FileText,
  Lock,
  Database,
  Info,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, path: "/home" },
    { name: "Solutions", icon: Briefcase, path: "/solutions" },
    { name: "Industries", icon: Building2, path: "/industries" },
    { name: "Features", icon: FileText, path: "/features" },
    { name: "Security", icon: Lock, path: "/security" },
    { name: "Resources", icon: Database, path: "/resources" },
    { name: "About", icon: Info, path: "/about" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-border flex items-center justify-center">
              <span className="text-white font-bold text-sm">D+</span>
            </div>
            <span className="font-bold text-xl text-gray-800">
              DEMS<span className="text-indigo-700">+</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-5 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive(item.path)
                  ? "bg-indigo-50 text-indigo-800 font-semibold"
                  : "text-gray-700 hover:bg-indigo-50"
              }`}
            >
              <item.icon
                size={20}
                className={
                  isActive(item.path) ? "text-indigo-600" : "text-indigo-500"
                }
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full bg-indigo-900 text-white px-5 py-3 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 transition-colors hover:bg-indigo-800"
          >
            <Shield size={18} /> Request Demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
