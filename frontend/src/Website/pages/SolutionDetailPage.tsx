import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Database,
  Users,
  FileCheck,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Download,
  Share2,
  Printer,
  BookOpen,
  Zap,
  TrendingUp,
  ThumbsUp,
  Server,
  Award,
  Star,
  Briefcase,
  AlertTriangle,
  Rocket,
  Sparkles,
  Target,
  Network,
  Cpu,
  Radio,
  Workflow,
  HardDrive,
  Sliders,
  Terminal,
  Activity,
  Fingerprint,
  FileSignature,
  Maximize2,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

// Detailed solution data with slate/dark theme colors
const solutionDetails = {
  "e-discovery": {
    id: "e-discovery",
    title: "E-Discovery",
    icon: Shield,
    shortDescription:
      "Streamline discovery with automated tagging, search, and production-ready exports.",
    longDescription:
      "DEMS+ E-Discovery module revolutionizes the discovery process by automating the identification, collection, and production of electronically stored information (ESI). Legal teams can quickly search across millions of documents, apply intelligent tags, and generate court-ready exports with complete chain-of-custody tracking.",
    benefits: [
      "Automated document classification and tagging",
      "Advanced search across multiple data sources",
      "Production-ready export formats (PDF, TIFF, native)",
      "Complete audit trail of all discovery actions",
      "Predictive coding and technology-assisted review",
      "Early case assessment and data culling",
    ],
    technicalDetails: [
      "Elasticsearch-powered search engine",
      "Support for 300+ file formats",
      "Native file viewing without downloads",
      "Bulk export and production capabilities",
      "Search term highlighting and filtering",
      "Metadata extraction and indexing",
    ],
    useCases: [
      "Corporate litigation discovery",
      "Regulatory response preparation",
      "Merger and acquisition due diligence",
      "Internal investigation discovery",
      "Cross-border e-discovery",
      "Third-party document review",
    ],
    securityFeatures: [
      "Privilege log automation",
      "Redaction of sensitive information",
      "Role-based review permissions",
      "Secure document sharing",
      "Export encryption and watermarking",
      "Production tracking and chain-of-custody",
    ],
    complianceStandards: [
      "FRCP",
      "GDPR",
      "HIPAA",
      "ISO 27001",
      "SOC 2",
      "FedRAMP",
    ],
    integrationOptions: [
      "Relativity",
      "Everlaw",
      "Logikcull",
      "Custom API",
      "Box",
      "Dropbox",
    ],
    metrics: [
      { label: "Documents Processed", value: "10M+", change: "+200%" },
      { label: "Search Speed", value: "< 500ms", change: "-60%" },
      { label: "Review Time Saved", value: "65%", change: "+25%" },
      { label: "Production Accuracy", value: "99.9%", change: "+4.9%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Enterprise Plan",
    availability: "Available now",
    themeColor: "indigo",
  },
  "evidence-management": {
    id: "evidence-management",
    title: "Evidence Management",
    icon: Database,
    shortDescription:
      "Centralized repository with SHA-256 integrity verification for all evidence types.",
    longDescription:
      "The Evidence Management module provides a centralized, secure repository for all digital evidence. Every file undergoes SHA-256 hashing upon upload, ensuring tamper detection and court-admissible integrity verification throughout the evidence lifecycle.",
    benefits: [
      "Centralized evidence repository",
      "SHA-256 cryptographic hashing",
      "Automatic virus and malware scanning",
      "Metadata extraction and indexing",
      "Version control and audit trails",
      "Secure evidence sharing",
    ],
    technicalDetails: [
      "AES-256 encryption at rest",
      "TLS 1.3 encryption in transit",
      "SHA-256 checksum verification",
      "S3-compatible object storage",
      "CDN integration for fast access",
      "Automated backup and replication",
    ],
    useCases: [
      "Digital forensics evidence storage",
      "Surveillance footage management",
      "Document and file evidence",
      "Audio and video evidence",
      "Email and communication records",
      "Physical evidence digitization",
    ],
    securityFeatures: [
      "Tamper-evident design",
      "Chain-of-custody tracking",
      "Access logging and auditing",
      "Secure deletion policies",
      "Legal hold management",
      "Evidence export controls",
    ],
    complianceStandards: [
      "CJIS",
      "HIPAA",
      "GDPR",
      "ISO 27001",
      "FedRAMP",
      "PCI DSS",
    ],
    integrationOptions: [
      "Forensic tools",
      "Surveillance systems",
      "Email archives",
      "Cloud storage",
      "Custom API",
    ],
    metrics: [
      { label: "Storage Capacity", value: "PB-scale", change: "Unlimited" },
      { label: "File Types Supported", value: "300+", change: "+50" },
      { label: "Uptime SLA", value: "99.999%", change: "+0.009%" },
      { label: "Integrity Rate", value: "100%", change: "Perfect" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in all plans",
    availability: "Available now",
    themeColor: "emerald",
  },
  "internal-investigations": {
    id: "internal-investigations",
    title: "Internal Investigations",
    icon: Users,
    shortDescription:
      "Secure workspace for HR and legal teams to conduct confidential investigations.",
    longDescription:
      "Create secure, isolated workspaces for internal investigations. HR and legal teams can collaborate confidentially while maintaining complete audit trails and evidence integrity.",
    benefits: [
      "Isolated investigation workspaces",
      "Confidential collaboration tools",
      "Complete access auditing",
      "Evidence preservation",
      "Interview documentation",
      "Report generation",
    ],
    technicalDetails: [
      "Workspace-level encryption",
      "Granular access controls",
      "Activity logging",
      "Secure messaging",
      "Document annotation",
      "Timeline reconstruction",
    ],
    useCases: [
      "Employee misconduct investigations",
      "Harassment complaints",
      "Whistleblower reports",
      "Fraud investigations",
      "Compliance violations",
      "Policy breach inquiries",
    ],
    securityFeatures: [
      "Need-to-know access",
      "Confidentiality protections",
      "Legal privilege preservation",
      "Secure evidence handling",
      "Anonymous reporting support",
    ],
    complianceStandards: ["EEOC", "HIPAA", "GDPR", "SOX", "ISO 37001"],
    integrationOptions: [
      "HR systems",
      "Email platforms",
      "Messaging apps",
      "Custom API",
    ],
    metrics: [
      { label: "Investigation Time", value: "-45%", change: "Faster" },
      { label: "Case Resolution", value: "92%", change: "+12%" },
      { label: "User Adoption", value: "96%", change: "+8%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Pro and Enterprise",
    availability: "Available now",
    themeColor: "purple",
  },
  "contract-review": {
    id: "contract-review",
    title: "Contract Review",
    icon: FileCheck,
    shortDescription:
      "AI-assisted contract analysis with complete audit trail of all reviews and changes.",
    longDescription:
      "Leverage AI-powered contract analysis to quickly identify key clauses, risks, and obligations. Every review, comment, and change is tracked with complete audit trails.",
    benefits: [
      "AI-powered clause identification",
      "Risk assessment scoring",
      "Version comparison",
      "Collaborative review tools",
      "Automated obligation tracking",
      "Exportable review reports",
    ],
    technicalDetails: [
      "NLP-powered text analysis",
      "Custom clause libraries",
      "OCR for scanned documents",
      "Redline and comparison tools",
      "Metadata extraction",
      "Search and filter capabilities",
    ],
    useCases: [
      "M&A due diligence",
      "Commercial contract review",
      "Lease agreement analysis",
      "NDA processing",
      "Procurement contracts",
      "Employment agreements",
    ],
    securityFeatures: [
      "Role-based access",
      "Document encryption",
      "Audit logging",
      "Secure sharing",
      "Watermarking",
    ],
    complianceStandards: ["GDPR", "HIPAA", "ISO 27001", "SOC 2"],
    integrationOptions: ["DocuSign", "Adobe Sign", "Salesforce", "SharePoint"],
    metrics: [
      { label: "Review Time", value: "-70%", change: "Faster" },
      { label: "Risk Detection", value: "94%", change: "+15%" },
      { label: "Cost Savings", value: "40%", change: "+10%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Enterprise Plan",
    availability: "Available now",
    themeColor: "amber",
  },
  "regulatory-compliance": {
    id: "regulatory-compliance",
    title: "Regulatory Compliance",
    icon: Lock,
    shortDescription:
      "Meet GDPR, HIPAA, FedRAMP, and SOC2 requirements with pre-built compliance packs.",
    longDescription:
      "Pre-configured compliance packs help organizations meet regulatory requirements quickly. Automated controls, reporting, and evidence collection simplify audit preparation.",
    benefits: [
      "Pre-built compliance frameworks",
      "Automated control testing",
      "Evidence collection and preservation",
      "Audit-ready reporting",
      "Continuous monitoring",
      "Risk assessment tools",
    ],
    technicalDetails: [
      "Compliance framework mapping",
      "Automated evidence collection",
      "Control testing automation",
      "Real-time compliance dashboards",
      "Audit trail generation",
      "Policy management",
    ],
    useCases: [
      "GDPR compliance management",
      "HIPAA security rule compliance",
      "FedRAMP authorization",
      "SOC 2 audit preparation",
      "PCI DSS compliance",
      "ISO 27001 certification",
    ],
    securityFeatures: [
      "Encryption standards",
      "Access controls",
      "Audit logging",
      "Data residency controls",
      "Breach notification",
    ],
    complianceStandards: [
      "GDPR",
      "HIPAA",
      "FedRAMP",
      "SOC 2",
      "ISO 27001",
      "PCI DSS",
    ],
    integrationOptions: [
      "GRC platforms",
      "SIEM systems",
      "Cloud providers",
      "Custom API",
    ],
    metrics: [
      { label: "Audit Prep Time", value: "-60%", change: "Faster" },
      { label: "Compliance Score", value: "98%", change: "+8%" },
      { label: "Control Coverage", value: "100%", change: "Complete" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Enterprise Plan",
    availability: "Available now",
    themeColor: "indigo",
  },
  "cloud-forensics": {
    id: "cloud-forensics",
    title: "Cloud Forensics",
    icon: Cloud,
    shortDescription:
      "Collect and preserve cloud-based evidence from major providers.",
    longDescription:
      "Collect and preserve evidence from major cloud providers including AWS, Azure, and Google Cloud. Maintain chain-of-custody across distributed cloud environments.",
    benefits: [
      "Multi-cloud evidence collection",
      "API-based data acquisition",
      "Preservation of native formats",
      "Chain-of-custody tracking",
      "Time-stamped collections",
      "Forensic soundness",
    ],
    technicalDetails: [
      "Cloud API integrations",
      "Forensic imaging tools",
      "Metadata extraction",
      "Log collection and analysis",
      "Container forensics",
      "Serverless environment support",
    ],
    useCases: [
      "Cloud security incidents",
      "Data breach investigations",
      "Compliance audits",
      "Intellectual property theft",
      "Insider threat detection",
      "Regulatory investigations",
    ],
    securityFeatures: [
      "Secure API authentication",
      "Encrypted evidence transfer",
      "Hash verification",
      "Access logging",
      "Evidence preservation",
    ],
    complianceStandards: ["FedRAMP", "GDPR", "HIPAA", "ISO 27017", "CSA STAR"],
    integrationOptions: ["AWS", "Azure", "GCP", "Oracle Cloud", "IBM Cloud"],
    metrics: [
      { label: "Collection Speed", value: "1TB/hour", change: "+300%" },
      { label: "Provider Coverage", value: "12+", change: "+4" },
      { label: "Data Integrity", value: "100%", change: "Perfect" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Enterprise Plan",
    availability: "Available now",
    themeColor: "blue",
  },
  "legal-analytics": {
    id: "legal-analytics",
    title: "Legal Analytics",
    icon: BarChart3,
    shortDescription:
      "Data-driven insights to optimize case strategies and reduce litigation costs.",
    longDescription:
      "Leverage data analytics to gain insights into case outcomes, judge rulings, and opposing counsel behavior. Optimize legal strategies with evidence-based decision support.",
    benefits: [
      "Case outcome prediction",
      "Judge and counsel analytics",
      "Cost modeling and forecasting",
      "Trend identification",
      "Performance metrics",
      "Custom report generation",
    ],
    technicalDetails: [
      "Machine learning models",
      "Historical case analysis",
      "Real-time dashboards",
      "Predictive analytics",
      "Data visualization",
      "Export capabilities",
    ],
    useCases: [
      "Litigation strategy development",
      "Settlement value assessment",
      "Resource allocation planning",
      "Risk evaluation",
      "Performance benchmarking",
      "Cost reduction initiatives",
    ],
    securityFeatures: [
      "Data anonymization",
      "Role-based access",
      "Audit trails",
      "Secure data storage",
      "Compliance controls",
    ],
    complianceStandards: ["GDPR", "CCPA", "ISO 27001", "SOC 2"],
    integrationOptions: ["Power BI", "Tableau", "Looker", "Custom API"],
    metrics: [
      { label: "Prediction Accuracy", value: "87%", change: "+12%" },
      { label: "Cost Savings", value: "35%", change: "+15%" },
      { label: "Strategy Confidence", value: "+42%", change: "Improved" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in Pro and Enterprise",
    availability: "Coming Q3 2026",
    themeColor: "purple",
  },
  "api-integration": {
    id: "api-integration",
    title: "API Integration",
    icon: Settings,
    shortDescription:
      "Seamless integration with existing case management and document systems.",
    longDescription:
      "RESTful API enables seamless integration with existing case management, document management, and practice management systems. Extend DEMS+ functionality across your technology stack.",
    benefits: [
      "Comprehensive REST API",
      "Webhook support for events",
      "Custom workflow automation",
      "Third-party system integration",
      "Data synchronization",
      "Scalable architecture",
    ],
    technicalDetails: [
      "RESTful API endpoints",
      "OAuth 2.0 authentication",
      "Rate limiting and throttling",
      "API versioning",
      "SDK support (Python, Node.js, Java)",
      "Interactive API documentation",
    ],
    useCases: [
      "Custom workflow automation",
      "System data synchronization",
      "External portal integration",
      "Reporting system integration",
      "Mobile app development",
      "Legacy system migration",
    ],
    securityFeatures: [
      "API key management",
      "IP whitelisting",
      "Request signing",
      "Audit logging",
      "Rate limiting",
    ],
    complianceStandards: ["ISO 27001", "SOC 2", "GDPR", "HIPAA"],
    integrationOptions: [
      "Clio",
      "iManage",
      "Salesforce",
      "SharePoint",
      "Custom systems",
    ],
    metrics: [
      { label: "API Uptime", value: "99.99%", change: "+0.09%" },
      { label: "Response Time", value: "< 100ms", change: "-50%" },
      { label: "Endpoints", value: "50+", change: "+20" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    pricing: "Included in all plans",
    availability: "Available now",
    themeColor: "blue",
  },
};

const SolutionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const solution = solutionDetails[id as keyof typeof solutionDetails];
  const [activeTab, setActiveTab] = useState<
    "overview" | "technical" | "security"
  >("overview");

  if (!solution) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle size={48} className="mx-auto text-amber-500 mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Solution Not Found
          </h2>
          <p className="text-slate-500 mb-6">
            The solution module you're looking for doesn't exist.
          </p>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={18} /> Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = solution.icon;
  const themeColor = solution.themeColor;

  const getColorClasses = (color: string) => {
    const classes: Record<
      string,
      {
        text: string;
        border: string;
        bg: string;
        bgLight: string;
        badge: string;
        gradient: string;
      }
    > = {
      indigo: {
        text: "text-indigo-600",
        border: "border-indigo-200",
        bg: "bg-indigo-50",
        bgLight: "bg-indigo-50/50",
        badge: "bg-indigo-100 text-indigo-700",
        gradient: "from-indigo-600 to-indigo-700",
      },
      emerald: {
        text: "text-emerald-600",
        border: "border-emerald-200",
        bg: "bg-emerald-50",
        bgLight: "bg-emerald-50/50",
        badge: "bg-emerald-100 text-emerald-700",
        gradient: "from-emerald-600 to-teal-700",
      },
      purple: {
        text: "text-purple-600",
        border: "border-purple-200",
        bg: "bg-purple-50",
        bgLight: "bg-purple-50/50",
        badge: "bg-purple-100 text-purple-700",
        gradient: "from-purple-600 to-pink-700",
      },
      amber: {
        text: "text-amber-600",
        border: "border-amber-200",
        bg: "bg-amber-50",
        bgLight: "bg-amber-50/50",
        badge: "bg-amber-100 text-amber-700",
        gradient: "from-amber-600 to-orange-700",
      },
      blue: {
        text: "text-blue-600",
        border: "border-blue-200",
        bg: "bg-blue-50",
        bgLight: "bg-blue-50/50",
        badge: "bg-blue-100 text-blue-700",
        gradient: "from-blue-600 to-cyan-700",
      },
    };
    return classes[color] || classes.indigo;
  };

  const colors = getColorClasses(themeColor);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section - Slate Theme */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link
              to="/solutions"
              className="hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{solution.title}</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate("/solutions")}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to all solutions
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`inline-flex items-center gap-2 ${colors.bgLight} rounded-full px-4 py-1.5 mb-6 border ${colors.border}`}
              >
                <IconComponent size={16} className={colors.text} />
                <span
                  className={`text-xs font-mono font-semibold ${colors.text}`}
                >
                  {solution.title} Module
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {solution.title}
              </h1>
              <div
                className={`h-1 w-20 bg-${themeColor}-500 rounded-full mt-6 mb-6`}
              />
              <p className="text-lg text-slate-300 leading-relaxed">
                {solution.longDescription}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <div
                  className={`flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 border border-slate-700`}
                >
                  <CheckCircle2 size={16} className={colors.text} />
                  <span className="text-sm text-slate-300">
                    {solution.availability}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 border border-slate-700`}
                >
                  <Shield size={16} className={colors.text} />
                  <span className="text-sm text-slate-300">
                    {solution.pricing}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-2 border border-slate-700 shadow-xl">
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 120L1440 0V120H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </div>

      {/* Metrics Cards */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {solution.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`text-3xl md:text-4xl font-extrabold ${colors.text} mb-1`}
              >
                {metric.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                {metric.label}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp size={14} className="text-emerald-500" />
                <span className="text-xs text-emerald-600 font-semibold">
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 mb-10">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-all ${
              activeTab === "overview"
                ? `${colors.text} border-b-2 border-${themeColor}-500 ${colors.bg}`
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Target size={16} className="inline mr-2" /> Overview
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-all ${
              activeTab === "technical"
                ? `${colors.text} border-b-2 border-${themeColor}-500 ${colors.bg}`
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Cpu size={16} className="inline mr-2" /> Technical Details
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-all ${
              activeTab === "security"
                ? `${colors.text} border-b-2 border-${themeColor}-500 ${colors.bg}`
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Shield size={16} className="inline mr-2" /> Security & Compliance
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-500">
                {/* Benefits */}
                <div
                  className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}
                >
                  <h2
                    className={`text-xl font-bold ${colors.text} mb-4 flex items-center gap-2`}
                  >
                    <ThumbsUp size={22} /> Key Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className={`${colors.text} mt-0.5 flex-shrink-0`}
                        />
                        <span className="text-slate-700 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Briefcase size={22} className="text-purple-500" /> Common
                    Use Cases
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {solution.useCases.map((useCase, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg"
                      >
                        <Star size={16} className="text-amber-500" />
                        <span className="text-slate-600 text-sm">
                          {useCase}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Options */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Settings size={22} className="text-blue-500" /> Integration
                    Options
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {solution.integrationOptions.map((integration, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === "technical" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-500">
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Server size={22} className="text-cyan-400" /> Technical
                    Specifications
                  </h2>
                  <div className="space-y-3">
                    {solution.technicalDetails.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 border-b border-slate-800 last:border-0"
                      >
                        <ChevronRight
                          size={16}
                          className="text-cyan-400 mt-1 flex-shrink-0"
                        />
                        <span className="text-slate-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Diagram */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Network size={22} className="text-indigo-500" /> System
                    Architecture
                  </h2>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-4 flex-wrap justify-center">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                            <Database size={22} className="text-indigo-600" />
                          </div>
                          <span className="text-xs text-slate-500 mt-1">
                            Storage
                          </span>
                        </div>
                        <ChevronRight size={18} className="text-slate-400" />
                        <div className="text-center">
                          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Server size={22} className="text-blue-600" />
                          </div>
                          <span className="text-xs text-slate-500 mt-1">
                            API Gateway
                          </span>
                        </div>
                        <ChevronRight size={18} className="text-slate-400" />
                        <div className="text-center">
                          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                            <Shield size={22} className="text-green-600" />
                          </div>
                          <span className="text-xs text-slate-500 mt-1">
                            Security
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200">
                  <h2 className="text-xl font-bold text-rose-800 mb-4 flex items-center gap-2">
                    <Lock size={22} /> Security Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {solution.securityFeatures.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-rose-500" />
                        <span className="text-slate-700 text-sm">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <Award size={22} /> Compliance Standards
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {solution.complianceStandards.map((standard, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-amber-700 border border-amber-200"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-amber-500" /> Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:border-slate-300 hover:shadow-md transition-all">
                  <Download size={16} className="text-indigo-500" /> Download
                  Datasheet
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:border-slate-300 hover:shadow-md transition-all">
                  <Share2 size={16} className="text-emerald-500" /> Share
                  Solution
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl hover:border-slate-300 hover:shadow-md transition-all">
                  <Printer size={16} className="text-purple-500" /> Print
                  Details
                </button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-800 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={20} className="text-slate-400" />
                <h3 className="font-bold text-lg">Need Help?</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Our solution experts are ready to answer your questions about{" "}
                {solution.title}.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Phone size={14} /> +1 (888) 421-DEMS
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Mail size={14} /> sales@demsplus.com
                </div>
              </div>
            </div>

            {/* Resource Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={18} className="text-indigo-500" />
                <h3 className="font-bold text-slate-800">Resources</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/resources"
                    className="text-slate-600 text-sm hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} /> Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-slate-600 text-sm hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} /> Whitepapers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-slate-600 text-sm hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={14} /> Video Demos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Sparkles size={32} className={`${colors.text} mb-4`} />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                Ready to Transform Your {solution.title} Workflow?
              </h2>
              <p className="text-slate-500 mb-6">
                Schedule a personalized demo to see how DEMS+ can help your
                organization leverage {solution.title} capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className={`bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2`}
                >
                  Request Demo <ChevronRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all inline-flex items-center gap-2"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}
                >
                  <Target size={20} className={colors.text} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    Implementation Timeline
                  </h3>
                  <p className="text-xs text-slate-400">
                    Average deployment: 2-4 weeks
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">
                      Discovery & Planning
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                      <div className="w-1/4 bg-emerald-500 h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">
                      Configuration & Integration
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                      <div className="w-1/2 bg-blue-500 h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">
                      Training & Deployment
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                      <div className="w-3/4 bg-purple-500 h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">
                      Go Live & Support
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                      <div className="w-full bg-indigo-500 h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800">
            Explore Related Solutions
          </h2>
          <p className="text-slate-500 mt-2">
            Discover other modules that complement {solution.title}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(solutionDetails)
            .filter(([key]) => key !== id)
            .slice(0, 3)
            .map(([key, sol]) => {
              const RelatedIcon = sol.icon;
              const relatedColors = getColorClasses(sol.themeColor);
              return (
                <Link
                  key={key}
                  to={`/solutions/${key}`}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${relatedColors.bg} flex items-center justify-center mb-3`}
                  >
                    <RelatedIcon size={22} className={relatedColors.text} />
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {sol.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight size={12} />
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default SolutionDetailPage;
