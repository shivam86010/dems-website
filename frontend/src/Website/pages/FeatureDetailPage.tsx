// Website/pages/FeatureDetailPage.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Gavel,
  CloudUpload,
  Link as LinkIcon,
  Users,
  BarChart3,
  Calendar,
  Fingerprint,
  FileText,
  Shield,
  Database,
  Clock,
  Eye,
  CheckCircle2,
  ChevronRight,
  Lock,
  Server,
  Award,
  Settings,
  Star,
  Briefcase,
  ArrowLeft,
  Download,
  Share2,
  Printer,
  BookOpen,
  Zap,
  TrendingUp,
  Globe,
  ThumbsUp,
  XCircle,
  AlertTriangle,
} from "lucide-react";

// Feature data (same as before)
const featureDetails = [
  {
    id: 1,
    title: "Case Management",
    icon: Gavel,
    shortDescription:
      "Centralized workflows, case ownership handoffs, status tracking models, and full legal lifecycle isolation boundaries.",
    longDescription:
      "DEMS+ provides a comprehensive case management system that allows legal teams to track investigations from initial intake through final resolution. Every case includes customizable workflows, automated status updates, and complete audit trails of all actions taken.",
    benefits: [
      "Centralized case repository accessible by authorized team members",
      "Automated workflow routing based on case type and priority",
      "Real-time status tracking and milestone notifications",
      "Complete action history for compliance reporting",
      "Customizable case templates for different investigation types",
      "Seamless collaboration between team members",
    ],
    technicalDetails: [
      "PostgreSQL-based case data storage with ACID compliance",
      "RESTful API for programmatic case management",
      "Event-driven architecture for status updates",
      "Encrypted case metadata at rest",
      "Elasticsearch indexing for fast case search",
      "Redis caching for performance optimization",
    ],
    useCases: [
      "Corporate internal investigations",
      "Legal discovery management",
      "Regulatory compliance cases",
      "Multi-jurisdictional litigation",
      "Fraud investigation tracking",
      "Whistleblower case management",
    ],
    securityFeatures: [
      "Role-based case access control",
      "Case-level encryption keys",
      "Audit logging of all case actions",
      "Secure case data export",
      "Multi-factor authentication required",
      "Session timeout controls",
    ],
    complianceStandards: [
      "ISO 27001",
      "SOC 2 Type II",
      "GDPR",
      "FedRAMP",
      "HIPAA",
      "PCI DSS",
    ],
    integrationOptions: [
      "Clio",
      "iManage",
      "Relativity",
      "Custom API",
      "Salesforce",
      "SharePoint",
    ],
    metrics: [
      { label: "Average Case Resolution", value: "14 days", change: "-32%" },
      { label: "Active Cases Supported", value: "10,000+", change: "+25%" },
      { label: "User Satisfaction", value: "98%", change: "+5%" },
      { label: "Case Processing Speed", value: "2.3x", change: "faster" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [2, 3, 5],
    pricing: "Included in Enterprise Plan",
    availability: "Available on all plans",
  },
  {
    id: 2,
    title: "Secure Evidence Ingestion",
    icon: CloudUpload,
    shortDescription:
      "Encrypted data pipes, mandatory automated SHA-256 binary hashing, deep virus sweeping, and payload validation routines.",
    longDescription:
      "Evidence ingestion is the critical first step in any investigation. DEMS+ ensures every file is properly validated, hashed, and stored with full chain-of-custody tracking from the moment of upload.",
    benefits: [
      "End-to-end encryption during transfer",
      "Automatic virus and malware scanning",
      "Cryptographic hash generation for tamper detection",
      "Metadata extraction and indexing",
      "Bulk upload support for large evidence dumps",
      "Real-time upload progress tracking",
    ],
    technicalDetails: [
      "TLS 1.3 encryption for data in transit",
      "AES-256 encryption for data at rest",
      "SHA-256 cryptographic hashing",
      "ClamAV integration for virus scanning",
      "Chunked upload for large files",
      "Resumable upload support",
    ],
    useCases: [
      "Forensic evidence upload from field devices",
      "Bulk evidence import from external systems",
      "Real-time evidence capture from surveillance",
      "Secure client evidence submission portals",
      "Mobile evidence collection",
      "Email evidence ingestion",
    ],
    securityFeatures: [
      "End-to-end encryption",
      "Malware scanning",
      "File type validation",
      "Integrity verification",
      "Hash matching against known databases",
      "Quarantine for suspicious files",
    ],
    complianceStandards: ["CJIS", "HIPAA", "GDPR", "FedRAMP", "PCI DSS", "SOX"],
    integrationOptions: [
      "Mobile apps",
      "Forensic tools",
      "Email gateways",
      "API uploads",
      "SFTP",
      "Box",
    ],
    metrics: [
      { label: "Max File Size", value: "100 GB", change: "+50%" },
      { label: "Upload Speed", value: "500 MB/s", change: "+40%" },
      { label: "Supported Formats", value: "200+", change: "+30" },
      { label: "Scanning Time", value: "<2s", change: "-60%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [1, 3, 4],
    pricing: "Included in all plans",
    availability: "Available now",
  },
  {
    id: 3,
    title: "Chain-of-Custody Logging",
    icon: LinkIcon,
    shortDescription:
      "Immutable append-only tracking logs documenting view events, download triggers, hash integrity evaluations, and transfer sign-offs.",
    longDescription:
      "Every interaction with evidence is permanently recorded in an immutable audit log. This creates a complete, court-admissible chain of custody that proves evidence integrity throughout its lifecycle.",
    benefits: [
      "Immutable timestamped records of all access",
      "Complete user action tracking",
      "Automated integrity verification alerts",
      "Court-admissible export formats",
      "Real-time custody transfer notifications",
      "Visual chain-of-custody timeline",
    ],
    technicalDetails: [
      "Append-only database tables",
      "Cryptographic timestamp signing",
      "Blockchain-ready architecture",
      "Real-time integrity monitoring",
      "Tamper-evident logging",
      "Distributed consensus validation",
    ],
    useCases: [
      "Court evidence submission",
      "Internal compliance audits",
      "Regulatory investigations",
      "Third-party evidence sharing",
      "Evidence transfer between agencies",
      "Long-term evidence archival",
    ],
    securityFeatures: [
      "Immutable logging",
      "Tamper-evident design",
      "User attribution",
      "Session tracking",
      "Geolocation logging",
      "Device fingerprinting",
    ],
    complianceStandards: [
      "FRE 901/902",
      "Daubert Standard",
      "ISO 17025",
      "GDPR",
      "CJIS",
      "HIPAA",
    ],
    integrationOptions: [
      "Blockchain ledgers",
      "SIEM systems",
      "Compliance reporting",
      "Audit exports",
      "Splunk",
      "DataDog",
    ],
    metrics: [
      { label: "Log Events/Second", value: "10,000+", change: "+200%" },
      { label: "Log Retention", value: "Indefinite", change: "Unlimited" },
      { label: "Audit Trust Score", value: "99.99%", change: "+0.09%" },
      { label: "Verification Time", value: "<100ms", change: "-50%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [1, 2, 5],
    pricing: "Included in Pro and Enterprise",
    availability: "Available now",
  },
  {
    id: 4,
    title: "RBAC + Signed URL Leasing",
    icon: Users,
    shortDescription:
      "Fine-grained multi-tenant profile matrices combined with short-lived, encrypted asset string access mappings.",
    longDescription:
      "Role-Based Access Control ensures only authorized personnel can access specific evidence. Signed URLs provide secure, time-limited access for external stakeholders without compromising your storage infrastructure.",
    benefits: [
      "Granular permission controls at case/file level",
      "Expiring secure access tokens",
      "Complete access audit trails",
      "Multi-tenant isolation",
      "Custom role creation",
      "Automated access revocation",
    ],
    technicalDetails: [
      "JWT-based authentication",
      "Time-limited signed URLs",
      "Attribute-based access control (ABAC)",
      "Multi-factor authentication support",
      "OAuth 2.0 / OIDC integration",
      "LDAP/Active Directory sync",
    ],
    useCases: [
      "External counsel evidence review",
      "Expert witness access",
      "Cross-department collaboration",
      "Regulator inspections",
      "Temporary access for contractors",
      "Client portal access",
    ],
    securityFeatures: [
      "Zero-trust architecture",
      "Ephemeral credentials",
      "Least-privilege principle",
      "Session monitoring",
      "IP whitelisting",
      "Time-based access controls",
    ],
    complianceStandards: [
      "NIST 800-53",
      "ISO 27001",
      "SOC 2",
      "HIPAA",
      "GDPR",
      "PCI DSS",
    ],
    integrationOptions: ["SAML", "LDAP", "OAuth 2.0", "SCIM", "Okta", "Auth0"],
    metrics: [
      { label: "Access Control Points", value: "1,000+", change: "+500" },
      {
        label: "Token Expiry Range",
        value: "15min-30days",
        change: "Flexible",
      },
      { label: "Security Score", value: "99.9%", change: "+0.4%" },
      { label: "Auth Speed", value: "<50ms", change: "-70%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [1, 3, 6],
    pricing: "Included in Enterprise Plan",
    availability: "Available now",
  },
  {
    id: 5,
    title: "Audit & Core Analytics",
    icon: BarChart3,
    shortDescription:
      "Comprehensive security log tracking, dashboard ingestion metrics, activity timeline visualizers, and compliance exports.",
    longDescription:
      "Real-time analytics dashboards provide visibility into system usage, evidence access patterns, and security events. Custom reports can be generated for compliance reviews and management presentations.",
    benefits: [
      "Real-time activity monitoring",
      "Custom report generation",
      "Visual timeline analytics",
      "Security event correlation",
      "Automated alerting",
      "Trend analysis and forecasting",
    ],
    technicalDetails: [
      "ELK stack integration",
      "Real-time stream processing",
      "Custom dashboard builder",
      "Automated report scheduling",
      "Data warehousing support",
      "BI tool integration",
    ],
    useCases: [
      "Management reporting",
      "Security operations monitoring",
      "Compliance audits",
      "Usage analytics",
      "Performance optimization",
      "Cost allocation tracking",
    ],
    securityFeatures: [
      "Anomaly detection",
      "Security event correlation",
      "Audit trail validation",
      "Data visualization",
      "Real-time alerts",
      "Threat hunting support",
    ],
    complianceStandards: [
      "SOX",
      "PCI DSS",
      "HIPAA",
      "GDPR",
      "ISO 27001",
      "NIST",
    ],
    integrationOptions: [
      "Splunk",
      "DataDog",
      "Power BI",
      "Tableau",
      "Looker",
      "Grafana",
    ],
    metrics: [
      { label: "Data Points/Day", value: "10M+", change: "+50%" },
      { label: "Report Generation", value: "<5 seconds", change: "-80%" },
      { label: "Retention Period", value: "7 years", change: "Compliant" },
      { label: "Alert Accuracy", value: "99.5%", change: "+4.5%" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [1, 3, 4],
    pricing: "Included in Pro and Enterprise",
    availability: "Available now",
  },
  {
    id: 6,
    title: "Hearing Workflow Orchestrator",
    icon: Calendar,
    shortDescription:
      "Session scheduler equipped with evidence check-lists, secure case document attachment pipelines, and notification hooks.",
    longDescription:
      "Streamline hearing preparation with integrated scheduling, evidence organization, and collaboration tools. Ensure all required materials are ready and accessible for legal proceedings.",
    benefits: [
      "Centralized hearing preparation",
      "Evidence organization by hearing",
      "Automated reminders and notifications",
      "Secure remote access for participants",
      "Pre-hearing checklists",
      "Post-hearing follow-up tracking",
    ],
    technicalDetails: [
      "Calendar integration (Google, Outlook)",
      "Real-time notifications",
      "Document bundling engine",
      "Virtual hearing support",
      "Recording and transcription",
      "Exhibit numbering system",
    ],
    useCases: [
      "Court hearing preparation",
      "Deposition management",
      "Mediation sessions",
      "Arbitration hearings",
      "Administrative proceedings",
      "Legislative hearings",
    ],
    securityFeatures: [
      "Secure video conferencing",
      "Document access controls",
      "Session recording",
      "Participant authentication",
      "Waiting room controls",
      "Breakout room support",
    ],
    complianceStandards: [
      "ABA Guidelines",
      "FRCP",
      "GDPR",
      "State Bar Rules",
      "HIPAA",
      "CJIS",
    ],
    integrationOptions: [
      "Zoom",
      "Teams",
      "WebEx",
      "CourtConnect",
      "BlueJeans",
      "GoToMeeting",
    ],
    metrics: [
      { label: "Hearing Prep Time Saved", value: "65%", change: "+15%" },
      { label: "Meeting Uptime", value: "99.99%", change: "+0.09%" },
      { label: "User Adoption", value: "94%", change: "+12%" },
      { label: "Satisfaction Rating", value: "4.8/5", change: "+0.3" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    relatedFeatures: [1, 2, 4],
    pricing: "Included in all plans",
    availability: "Available now",
  },
];

const FeatureDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const feature = featureDetails.find((f) => f.id === Number(id));

  if (!feature) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle size={48} className="mx-auto text-amber-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Feature Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The feature you're looking for doesn't exist.
          </p>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={18} /> Back to Features
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = feature.icon;
  const relatedFeaturesList = featureDetails.filter((f) =>
    feature.relatedFeatures.includes(f.id),
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-indigo-200 mb-6">
            <Link to="/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{feature.title}</span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate("/features")}
            className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to all features
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <IconComponent size={16} className="text-indigo-300" />
                <span className="text-xs font-mono font-semibold text-indigo-200">
                  {feature.title}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                {feature.title}
              </h1>
              <p className="text-lg text-indigo-200 mt-4 leading-relaxed">
                {feature.longDescription}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-indigo-200">
                  <CheckCircle2 size={16} /> {feature.availability}
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-200">
                  <Shield size={16} /> {feature.pricing}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {feature.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
                <div className="text-xs text-emerald-600 mt-1">
                  ↑ {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ThumbsUp size={24} className="text-emerald-500" />
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {feature.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Server size={24} className="text-indigo-500" />
                Technical Specifications
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {feature.technicalDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight
                        size={16}
                        className="text-indigo-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Briefcase size={24} className="text-purple-500" />
                Common Use Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {feature.useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg"
                  >
                    <Star size={16} className="text-purple-500" />
                    <span className="text-gray-700 text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Shield size={24} className="text-rose-500" />
                Security & Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-rose-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lock size={16} className="text-rose-500" />
                    Security Features
                  </h3>
                  <ul className="space-y-2">
                    {feature.securityFeatures.slice(0, 6).map((sec, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 size={14} className="text-rose-500" />
                        {sec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Award size={16} className="text-amber-500" />
                    Compliance Standards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {feature.complianceStandards.map((standard, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white rounded-md text-xs font-medium text-amber-700 border border-amber-200"
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Settings size={24} className="text-blue-500" />
                Integration Options
              </h2>
              <div className="flex flex-wrap gap-3">
                {feature.integrationOptions.map((integration, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Download size={16} /> Download Datasheet
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={16} /> Share Feature
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Printer size={16} /> Print Details
                </button>
              </div>
            </div>

            {/* Related Features Card */}
            {relatedFeaturesList.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-indigo-500" />
                  Related Features
                </h3>
                <div className="space-y-3">
                  {relatedFeaturesList.map((related) => {
                    const RelatedIcon = related.icon;
                    return (
                      <Link
                        key={related.id}
                        to={`/features/${related.id}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
                      >
                        <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                          <RelatedIcon size={18} className="text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 text-sm">
                            {related.title}
                          </div>
                          <div className="text-xs text-gray-400">
                            Click to view details
                          </div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="ml-auto text-gray-300 group-hover:text-indigo-500"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Resource Links Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl p-6 text-white">
              <BookOpen size={24} className="mb-3 text-indigo-300" />
              <h3 className="font-bold text-lg mb-2">Need More Information?</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Access our comprehensive documentation and case studies.
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-200 transition-colors"
              >
                View Resources <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-indigo-100 mb-6">
            Schedule a demo to see how {feature.title} can transform your
            evidence management workflow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Request Demo <ChevronRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetailPage;
