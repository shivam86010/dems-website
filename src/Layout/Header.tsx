import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Play,
  // Solutions & Features Icons
  Database,
  HardDrive,
  Tag,
  FileText,
  Briefcase,
  Activity,
  CheckSquare,
  Users,
  Link2,
  ShieldAlert,
  CheckCircle,
  Eye,
  ShieldCheck,
  FileCheck,
  Search,
  Clock,
  TrendingUp,
  AlertTriangle,
  FilePlus,
  RefreshCw,
  Key,
  Shield,
  UserCheck,
  HelpCircle,
  MessageSquare,
  Share2,
  // Industries Icons
  Scale,
  Building,
  ShieldCheck as InsureIcon,
  Computer,
  Landmark,
  HeartPulse,
  // Resources Icons
  BookOpen,
  FolderLock,
  Video,
  Newspaper,
  LifeBuoy,
  History,
} from "lucide-react";

// --- Type Definitions for Mega Menu Data ---
interface SubItem {
  name: string;
  sub?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface MenuColumn {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: (string | SubItem)[];
}

interface DropdownData {
  columns: MenuColumn[];
  featured?: {
    tag?: string;
    title: string;
    subtitle?: string;
    buttonText: string;
  };
}

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  // --- MEGA MENU DATA OBJECTS ---
  const solutionsData: DropdownData = {
    columns: [
      {
        title: "EVIDENCE MANAGEMENT",
        icon: Database,
        items: [
          { name: "Centralized Evidence Repository", icon: Database },
          { name: "Digital Evidence Collection", icon: HardDrive },
          { name: "Evidence Categorization", icon: Tag },
          { name: "Metadata Management", icon: FileText },
        ],
      },
      {
        title: "INVESTIGATION WORKFLOW",
        icon: Briefcase,
        items: [
          { name: "Case Creation & Assignment", icon: FilePlus },
          { name: "Investigation Tracking", icon: Activity },
          { name: "Task Management", icon: CheckSquare },
          { name: "Team Collaboration", icon: Users },
        ],
      },
      {
        title: "CHAIN OF CUSTODY",
        icon: Link2,
        items: [
          { name: "Evidence Transfer Logs", icon: FileText },
          { name: "Tamper Detection", icon: ShieldAlert },
          { name: "Integrity Verification", icon: CheckCircle },
          { name: "Audit Trails", icon: Eye },
        ],
      },
      {
        title: "COMPLIANCE & REPORTING",
        icon: FileCheck,
        items: [
          { name: "Regulatory Compliance", icon: ShieldCheck },
          { name: "Investigation Reports", icon: FileText },
          { name: "Activity Monitoring", icon: TargetIcon },
          { name: "Legal Documentation", icon: Scale },
        ],
      },
      {
        title: "AI & ANALYTICS",
        icon: ShieldCheck,
        items: [
          { name: "Smart Evidence Search", icon: Search },
          { name: "Timeline Reconstruction", icon: Clock },
          { name: "Pattern Detection", icon: TrendingUp },
          { name: "Risk Analysis", icon: AlertTriangle },
        ],
      },
    ],
    featured: {
      tag: "ENTERPRISE GRADE",
      title:
        "Every piece of evidence. Every action recorded. Every investigation secured.",
      buttonText: "Watch Demo",
    },
  };

  const industriesData: DropdownData = {
    columns: [
      {
        title: "LEGAL & LITIGATION",
        icon: Scale,
        items: [
          "Law Firms",
          "Litigation Support Teams",
          "Corporate Legal Departments",
        ],
      },
      {
        title: "GOVERNMENT & PUBLIC SECTOR",
        icon: Building,
        items: ["Regulatory Agencies", "Law Enforcement"],
      },
      {
        title: "CORPORATE INVESTIGATIONS",
        icon: Building,
        items: [
          "Internal Investigation Teams",
          "HR Investigation Units",
          "Ethics & Compliance Offices",
        ],
      },
      {
        title: "FINANCIAL SERVICES",
        icon: Landmark,
        items: ["Banks", "AML Investigation Teams", "Fraud Monitoring Units"],
      },
      {
        title: "INSURANCE",
        icon: InsureIcon,
        items: [
          "Insurance Fraud Investigation",
          "Claims Investigation Teams",
          "Risk Assessment Units",
        ],
      },
      {
        title: "HEALTHCARE",
        icon: HeartPulse,
        items: [
          "Healthcare Compliance",
          "Medical Fraud Investigation",
          "Internal Audits",
        ],
      },
      {
        title: "DIGITAL FORENSICS",
        icon: Computer,
        items: [
          "Cyber Forensics Labs",
          "Incident Response Teams",
          "Digital Evidence Specialists",
        ],
      },
    ],
    featured: {
      title: "Trusted by investigation teams handling high-value evidence.",
      subtitle: "Secure. Traceable. Court-ready.",
      buttonText: "Watch Demo",
    },
  };

  const featuresData: DropdownData = {
    columns: [
      {
        title: "CASE MANAGEMENT",
        icon: Briefcase,
        items: [
          { name: "Create Cases", icon: FilePlus },
          { name: "Assign Investigators", icon: Users },
          { name: "Case Timelines", icon: Clock },
          { name: "Status Tracking", icon: Activity },
        ],
      },
      {
        title: "EVIDENCE MANAGEMENT",
        icon: Database,
        items: [
          { name: "Upload Evidence", icon: HardDrive },
          { name: "Evidence Tagging", icon: Tag },
          { name: "Version Control", icon: RefreshCw },
          { name: "Secure Storage", icon: Database },
        ],
      },
      {
        title: "SECURITY",
        icon: Shield,
        items: [
          { name: "Role-Based Access Control", icon: Key },
          { name: "Multi-Factor Authentication", icon: UserCheck },
          { name: "Encryption", icon: Shield },
          { name: "SSO", icon: ShieldCheck },
        ],
      },
      {
        title: "AUDIT & COMPLIANCE",
        icon: FileCheck,
        items: [
          { name: "Complete Audit Logs", icon: FileText },
          { name: "Chain of Custody", icon: Link2 },
          { name: "Integrity Verification", icon: CheckCircle },
          { name: "Compliance Reports", icon: Activity },
        ],
      },
      {
        title: "COLLABORATION",
        icon: Users,
        items: [
          { name: "Team Workspaces", icon: HelpCircle },
          { name: "Notes & Comments", icon: MessageSquare },
          { name: "Evidence Sharing", icon: Share2 },
          { name: "Review Workflows", icon: Share2 },
        ],
      },
    ],
  };

  const resourcesData: DropdownData = {
    columns: [
      {
        title: "RESOURCES",
        items: [
          {
            name: "Documentation",
            sub: "Guides, APIs & references",
            icon: BookOpen,
          },
          {
            name: "Case Studies",
            sub: "Real-world deployments",
            icon: FolderLock,
          },
          { name: "Webinars", sub: "Live & on-demand sessions", icon: Video },
          { name: "Blog", sub: "Insights & best practices", icon: Newspaper },
          {
            name: "Support Center",
            sub: "Help when you need it",
            icon: LifeBuoy,
          },
          { name: "Changelog", sub: "What's new in DEMS+", icon: History },
        ],
      },
    ],
  };

  const getDropdownData = (menu: string): DropdownData => {
    if (menu === "solutions") return solutionsData;
    if (menu === "industries") return industriesData;
    if (menu === "features") return featuresData;
    return resourcesData;
  };

  return (
    <header
      className="relative z-50 bg-white border-b border-gray-200 font-sans"
      ref={navRef}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center shadow-sm shadow-indigo-200">
              <span className="text-white font-bold text-lg">D+</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black text-[#1E1B4B] tracking-tight">
                DEMS+
              </span>
              <span className="text-[11px] font-semibold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full border border-[#E0E7FF]">
                Enterprise v3.0
              </span>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center space-x-1">
          {["solutions", "industries", "features"].map((menu) => (
            <button
              key={menu}
              onClick={() => toggleDropdown(menu)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-[15px] font-medium transition-colors duration-200 capitalize
                ${activeDropdown === menu ? "bg-[#EEF2FF] text-[#4F46E5]" : "text-gray-600 hover:text-gray-900"}`}
            >
              <span>{menu}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === menu ? "rotate-180 text-[#4F46E5]" : "text-gray-400"}`}
              />
            </button>
          ))}

          <Link
            to="/security"
            className="text-[15px] font-medium text-gray-600 hover:text-gray-900 px-4 py-2"
          >
            Security
          </Link>

          <button
            onClick={() => toggleDropdown("resources")}
            className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-[15px] font-medium transition-colors duration-200
              ${activeDropdown === "resources" ? "bg-[#EEF2FF] text-[#4F46E5]" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span>Resources</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : "text-gray-400"}`}
            />
          </button>

          <Link
            to="/pricing"
            className="text-[15px] font-medium text-gray-600 hover:text-gray-900 px-4 py-2"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-[15px] font-medium text-gray-600 hover:text-gray-900 px-4 py-2"
          >
            Contact Sales
          </Link>
        </nav>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/demo"
            className="px-5 py-2.5 rounded-lg text-[15px] font-semibold text-[#4F46E5] border border-[#E0E7FF] hover:bg-gray-50 transition-colors"
          >
            Book Demo
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-lg text-[15px] font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-sm shadow-indigo-100 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 p-2 rounded-md bg-gray-50 border border-gray-100 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* --- DESKTOP MEGA DROPDOWN LAYOUTS --- */}
      {activeDropdown && (
        <div className="absolute left-0 top-20 w-full bg-white border-b border-gray-200 shadow-xl hidden lg:block max-h-[85vh] overflow-y-auto">
          <div className="max-w-[1440px] mx-auto p-2 flex gap-8">
            {activeDropdown === "resources" ? (
              /* SPECIFIC LAYOUT: RESOURCES 2-COLUMN STRUCTURE */
              <div className="flex flex-col w-full max-w-2xl mx-auto  px-8">
               
               
                <div className="grid grid-cols-2 gap-x-24 gap-y-4 px-2">
                  {resourcesData.columns[0].items.map((item, i) => {
                    const subItem = item as SubItem;
                    const Icon = subItem.icon;
                    return (
                      <Link
                        key={i}
                        to={`/${subItem.name.toLowerCase().replace(" ", "-")}`}
                        className="flex items-start space-x-2 group cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4F46E5]/10 transition-colors">
                          {Icon && <Icon className="w-5 h-5 text-[#4F46E5]" />}
                        </div>
                        <div className="flex flex-col justify-center pt-0.5">
                          <h5 className="text-[15px] font-bold text-gray-900 group-hover:text-[#4F46E5] transition-colors leading-tight">
                            {subItem.name}
                          </h5>
                          <p className="text-[13px] text-gray-500 mt-1 leading-snug">
                            {subItem.sub}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* STANDARD MULTI-COLUMN CONTENT LAYOUT (Solutions, Features, Industries) */
              <div
                className={`grid gap-8 flex-1 ${activeDropdown === "industries" ? "grid-cols-4" : "grid-cols-5"}`}
              >
                {getDropdownData(activeDropdown).columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 text-[12px] font-bold tracking-wider text-gray-800">
                      {col.icon && (
                        <col.icon className="w-4 h-4 text-[#4F46E5]" />
                      )}
                      <span>{col.title}</span>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => {
                        const isObject = typeof item !== "string";
                        const name = isObject
                          ? (item as SubItem).name
                          : (item as string);
                        const Icon = isObject ? (item as SubItem).icon : null;

                        return (
                          <li key={i}>
                            <Link
                              to={`/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                              className="group flex items-center space-x-2.5 cursor-pointer"
                            >
                              {Icon && (
                                <Icon className="w-4 h-4 text-[#4F46E5]/70 group-hover:text-[#4F46E5]" />
                              )}
                              {!Icon && activeDropdown === "industries" && (
                                <span className="w-1.5 h-1.5 bg-[#4F46E5]/40 rounded-full group-hover:bg-[#4F46E5]" />
                              )}
                              <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">
                                {name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Right Featured Card Panel (Solutions / Industries) */}
            {getDropdownData(activeDropdown).featured && (
              <div className="w-[320px] bg-[#1E1B4B] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden flex-shrink-0">
                <div>
                  {getDropdownData(activeDropdown).featured?.tag && (
                    <div className="inline-block text-[10px] font-bold tracking-widest bg-white/10 text-indigo-200 px-2.5 py-1 rounded-md mb-4 border border-white/10">
                      {getDropdownData(activeDropdown).featured?.tag}
                    </div>
                  )}
                  <h4 className="text-lg font-semibold leading-snug mb-2">
                    {getDropdownData(activeDropdown).featured?.title}
                  </h4>
                  {getDropdownData(activeDropdown).featured?.subtitle && (
                    <p className="text-sm text-indigo-200 mt-4 space-y-1 block font-medium">
                      {getDropdownData(activeDropdown).featured?.subtitle}
                    </p>
                  )}
                </div>
                <Link
                  to="/demo"
                  className="mt-6 flex items-center justify-center space-x-2 w-max bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>
                    {getDropdownData(activeDropdown).featured?.buttonText}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MOBILE ACCORDION OVERLAY DROPDOWN --- */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden z-40 max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-2">
          <div className="flex flex-col">
            {["solutions", "industries", "features"].map((menu) => (
              <div key={menu} className="border-b border-gray-100">
                <button
                  onClick={() =>
                    setMobileSubMenu(mobileSubMenu === menu ? null : menu)
                  }
                  className={`w-full flex items-center justify-between text-[16px] font-medium py-4 text-left capitalize
                    ${mobileSubMenu === menu ? "text-[#4F46E5]" : "text-gray-700"}`}
                >
                  <span>{menu}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform text-gray-400 ${mobileSubMenu === menu ? "rotate-180 text-[#4F46E5]" : ""}`}
                  />
                </button>

                {mobileSubMenu === menu && (
                  <div className="pl-4 pb-4 space-y-5 pt-1">
                    {getDropdownData(menu).columns.map((col, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <div className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                          {col.title}
                        </div>
                        <div className="space-y-2">
                          {col.items.map((item, i) => {
                            const name =
                              typeof item === "string" ? item : item.name;
                            return (
                              <Link
                                key={i}
                                to={`/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="text-[14px] text-gray-600 block hover:text-[#4F46E5] active:text-[#4F46E5]"
                              >
                                {name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/security"
              className="block text-gray-700 font-medium py-4 border-b border-gray-100 text-[16px]"
            >
              Security
            </Link>

            {/* Resources Mobile Menu Option */}
            <div className="border-b border-gray-100">
              <button
                onClick={() =>
                  setMobileSubMenu(
                    mobileSubMenu === "resources" ? null : "resources",
                  )
                }
                className={`w-full flex items-center justify-between text-[16px] font-medium py-4 text-left
                  ${mobileSubMenu === "resources" ? "text-[#4F46E5]" : "text-gray-700"}`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${mobileSubMenu === "resources" ? "rotate-180 text-[#4F46E5]" : ""}`}
                />
              </button>

              {mobileSubMenu === "resources" && (
                <div className="pl-4 pb-4 space-y-3 pt-1">
                  {resourcesData.columns[0].items.map((item, i) => {
                    const subItem = item as SubItem;
                    return (
                      <Link
                        key={i}
                        to={`/${subItem.name.toLowerCase().replace(" ", "-")}`}
                        className="block py-1"
                      >
                        <span className="text-[14px] font-semibold text-gray-800 block">
                          {subItem.name}
                        </span>
                        <span className="text-[12px] text-gray-400 block">
                          {subItem.sub}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="block text-gray-700 font-medium py-4 border-b border-gray-100 text-[16px]"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 font-medium py-4 border-b border-gray-100 text-[16px]"
            >
              Contact Sales
            </Link>

            {/* Mobile Actions Container */}
            <div className="py-6 flex flex-col space-y-3">
              <Link
                to="/demo"
                className="block w-full py-3 rounded-xl text-center font-semibold text-[#4F46E5] border border-[#E0E7FF] text-[15px] hover:bg-gray-50 transition-colors"
              >
                Book Demo
              </Link>
              <Link
                to="/signup"
                className="block w-full py-3 rounded-xl text-center font-semibold text-white bg-[#4F46E5] text-[15px] hover:bg-[#4338CA] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const TargetIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
