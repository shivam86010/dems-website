import React, { useState } from "react";
import {
  Mail,
  Phone,
  Building,
  Lock,
  Clock,
  ShieldCheck,
  Download,
  Network,
  Activity,
  ChevronDown,
  CheckCircle,
  Server,
  Key,
  AlertTriangle,
  Scale,
  Search,
  Cpu,
  Sliders,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [activeRoutingZone, setActiveRoutingZone] = useState("AMER");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    volume: "",
    details: "",
  });

  const responseMetrics = [
    {
      tier: "TIER 1: ACTIVE BREACH / LEGAL AUDIT",
      response: "Under 15 Minutes",
      channel: "Encrypted Direct Hotline",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-500",
      borderColor: "border-red-200",
    },
    {
      tier: "TIER 2: PRODUCTION INGESTION",
      response: "Under 2 Hours SLA",
      channel: "Dev Node Portal",
      icon: Clock,
      color: "text-amber-500",
      bgColor: "bg-amber-500",
      borderColor: "border-amber-200",
    },
    {
      tier: "TIER 3: ENTERPRISE ARCHITECTURE",
      response: "Within 1 Business Day",
      channel: "Pipeline Intake Form",
      icon: Building,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500",
      borderColor: "border-emerald-200",
    },
  ];

  const faqs = [
    {
      question: "How are Tier 1 emergencies verified and routed?",
      answer:
        "Inbound messages flagged via our secure Signal webhook or emergency line pass through an automated triage array. If cryptographic anomalies or active legal spills are detected, secondary telemetry alerts our on-call incident specialists within 180 seconds.",
    },
    {
      question: "Can we request custom jurisdictional data boundaries?",
      answer:
        "Yes. Our platform supports sovereign isolated nodes. During your walkthrough configuration, specify your constraints (e.g., CJIS Level 4, GDPR localized block storage), and we will partition your clusters within the designated compliance boundaries.",
    },
    {
      question: "What encryption standard is used for payload delivery?",
      answer:
        "By default, our system handles end-to-end data pipelines over TLS 1.3 using ECDHE-RSA-AES256-GCM-SHA384. Flat-file evidence manifests sent outside the browser should be wrapped with our public GPG armored key assembly before dispatch.",
    },
    {
      question:
        "Are off-hours testing windows available for live migration previews?",
      answer:
        "Enterprise architecture tiers include scheduled deployment support windows. These must be requested through your pipeline intake form at least 48 hours prior to the expected ingress timeline.",
    },
  ];

  const capabilityPillars = [
    {
      icon: Search,
      title: "AI-Powered AIR (Automated Ingestion Review)",
      desc: "Instantly parse terabytes of unorganized data with advanced concept clustering and machine learning triage vectors before ingestion pipelines lock.",
    },
    {
      icon: Scale,
      title: "End-to-End Legal Hold & Discovery Preservation",
      desc: "Defend your pipelines against compliance leakage with dynamic cryptographic tracking and unalterable chain-of-custody logging.",
    },
    {
      icon: Cpu,
      title: "Sovereign Structural Kernel Processing",
      desc: "Process data directly inside containerized cells protected by hardware line isolation arrays, preventing out-of-boundary memory leaks.",
    },
  ];

  const deploymentTracks = [
    {
      name: "SaaS Cloud Single-Tenant",
      access: "Immediate",
      compliance: "FedRAMP High Equivalent",
    },
    {
      name: "Hybrid Cold-Storage Node",
      access: "24-Hour Sync",
      compliance: "ITAR / CJIS Multi-Zone",
    },
    {
      name: "On-Premises Air-Gapped Matrix",
      access: "Custom Build",
      compliance: "Sovereign Isolated Deployment",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dispatched Secure Request Packet:", formData);
  };

  return (
    <div className="bg-[#fafbfc] text-slate-800 min-h-screen font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* GLOBAL TECH BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef1f6_1px,transparent_1px),linear-gradient(to_bottom,#eef1f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* SECTION 1: SYSTEM INGRESS HERO */}
      <header className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#eef0ff] border border-[#dbe0ff] rounded-full px-3 py-1 text-[#4338ca]">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                System Ingress Node • Online
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              Initiate Secure <br />
              <span className="text-[#4f46e5]">System Connection</span>
            </h1>

            <p className="text-slate-600 text-lg max-w-xl font-normal leading-relaxed">
              Connect directly with our cryptographic infrastructure deployment
              specialists. Select your priority path to interface with global
              response teams.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600 pt-2">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#10b981]" /> 24/7
                Security Response
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#10b981]" /> End-to-End
                Encryption
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#10b981]" /> Global
                Compliance
              </span>
            </div>
          </div>

          {/* TELEMETRY BOARD (Matching exact layout from Screenshot 1) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              <div className="flex items-center gap-2 text-slate-500 border-b border-slate-100 pb-4 mb-4">
                <Activity size={16} className="text-[#4f46e5]" />
                <span className="font-mono text-xs font-bold tracking-wider uppercase">
                  Gateway Telemetry
                </span>
              </div>

              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-normal">
                    Node Status:
                  </span>
                  <span className="text-[#059669] font-semibold bg-[#emerald-50] px-2 py-0.5 rounded">
                    Accepting Packets
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-normal">
                    Default Cipher:
                  </span>
                  <span className="text-slate-800 font-mono text-xs bg-slate-50 px-2 py-0.5 rounded font-bold">
                    ECDHE-RSA-AES256-GCM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-normal">
                    Support Housing:
                  </span>
                  <span className="text-slate-800 font-semibold">
                    Federally Isolated Deployments
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-slate-500 font-normal">
                    Active Sessions:
                  </span>
                  <span className="text-slate-900 font-mono font-bold">
                    2,847
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: INTAKE PIPELINE & TOUCHPOINTS (Matching Layout from Screenshot 2) */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Block */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-sm p-2 rounded-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                  Request Access
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#0f172a] tracking-tight">
                Enterprise Pipeline Walkthrough
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Configure your deployment metrics to align with a production
                engineer.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@company.com"
                  className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (888) 421-3367"
                  className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                  Expected Monthly Storage Volume
                </label>
                <div className="relative">
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select volume range</option>
                    <option value="0-10">0 - 10 Terabytes Ingress</option>
                    <option value="10-100">
                      10 - 100 Terabytes Repository
                    </option>
                    <option value="100+">
                      100+ Terabytes Enterprise Array
                    </option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-4 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-sans">
                  Project Requirements
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Detail your data sovereignty, compliance constraints, or custom workflow requirements..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 focus:border-[#4f46e5] transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <Lock size={16} /> Authenticate & Dispatch Request
              </button>
            </form>
          </div>

          {/* Secure Touchpoints / Direct Gateways Sidepanel */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                  Connect With Us
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#0f172a] tracking-tight">
                Direct Gateways
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Global operations cells hardwired for 24/7 support.
              </p>
            </div>

            <div className="space-y-3">
              {/* Box 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex items-start gap-4">
                <div className="p-3 bg-[#f0f2ff] rounded-lg text-[#4f46e5]">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-bold text-sm">
                    Encrypted Mailboxes
                  </div>
                  <p className="text-[#4f46e5] font-mono text-sm font-bold mt-1">
                    secure-sales@demsplus.com
                  </p>
                  <p className="text-slate-400 font-mono text-xs">
                    incident-response@demsplus.com
                  </p>
                  <p className="text-slate-400 text-[11px] mt-1">
                    PGP encrypted channel available
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex items-start gap-4">
                <div className="p-3 bg-[#ecfdf5] rounded-lg text-[#10b981]">
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-bold text-sm">
                    Emergency Telecom
                  </div>
                  <p className="text-slate-900 font-mono text-base font-extrabold mt-1">
                    +1 (888) 421-DEMS
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Hardware line isolation monitoring • 24/7/365
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all flex items-start gap-4">
                <div className="p-3 bg-[#fdf2f8] rounded-lg text-pink-500">
                  <Building size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-slate-900 font-bold text-sm">
                    Physical Laboratory
                  </div>
                  <p className="text-slate-700 text-sm font-medium mt-1">
                    1200 Forensic Avenue, Suite 400
                  </p>
                  <p className="text-slate-400 font-mono text-xs">
                    Wilmington, DE 19801 • US Jurisdiction
                  </p>
                </div>
              </div>

              {/* Box 4: Trusted Leaders (From Screenshot 2 bottom right) */}
              <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#4f46e5]" /> Trusted
                  By Industry Leaders
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Fortune 500",
                    "Government Agencies",
                    "Top Law Firms",
                    "Global Banks",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white border border-slate-200 px-2.5 py-1 rounded-full text-xs font-medium text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM RESPONSE PROTOCOLS (Matching Layout from Screenshot 3) */}
      <section className="py-16 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-2">
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
              Service Levels
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            System Response Protocols
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            Isolated support tiers for different inquiry types
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {responseMetrics.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div
                    className={`p-2.5 rounded-xl w-fit text-white ${idx === 0 ? "bg-red-500" : idx === 1 ? "bg-amber-500" : "bg-emerald-500"}`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {item.tier}
                    </div>
                    <h4 className="text-slate-900 text-xl font-extrabold tracking-tight">
                      {item.response}
                    </h4>
                    <p className="text-slate-600 text-sm font-medium pt-1">
                      {item.channel}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Automatic Routing</span>
                  <span>•</span>
                  <span>Priority Queue</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: ASYMMETRIC GPG KEY BLOCK (Matching Layout from Screenshot 4) */}
      <section className="py-12 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="bg-[#1e293b] rounded-2xl p-8 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 text-indigo-400 rounded-xl border border-slate-700">
                <Key size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Asymmetric GPG Encryption Key
                </h4>
                <p className="text-slate-400 font-mono text-xs mt-0.5">
                  ID: 0x9F8E7D6C5B4A3A21 • Perpetual Expiry
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 font-semibold text-xs text-white bg-[#4f46e5] hover:bg-[#4338ca] px-4 py-2.5 rounded-lg transition-all shadow-md shrink-0">
              <Download size={14} /> Download ASCII Armor Key
            </button>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-4xl mt-6">
            For whistleblowers, verification auditing teams, or intelligence
            groups seeking to dispatch evidence manifests outside standard web
            forms, wrap your files using our verified network shell key package
            below.
          </p>

          <div className="mt-6 bg-[#0f172a] rounded-xl border border-slate-800 p-5 font-mono text-xs text-slate-400 select-all">
            <div className="text-slate-500">
              -----BEGIN PGP PUBLIC KEY BLOCK-----
            </div>
            <div className="text-slate-500">
              Version: GnuPG v2.4.26 (GNU/Linux)
            </div>
            <div className="text-slate-300 mt-2">
              mQINBF7Kz1EBEADZuI0hW8v8k9w2PqR9vLz8Zz9oO2xY9KkLx8m9PqRz9==
            </div>
            <div className="text-slate-300">
              HjK8s9P2Kz7M1w9L3v6X8z1Nz9L2W8z1M5v2N7X8z9P3K8v1Nz7M5v9L==
            </div>
            <div className="text-slate-300">
              Xz7K2W9M1Nz9v8P3L2W8z1M5v2N7X8z9P3K8v1Nz7M5v9LXz7K2W9M1N==
            </div>
            <div className="text-slate-500 mt-2">
              -----END PGP PUBLIC KEY BLOCK-----
            </div>
          </div>
        </div>
      </section>

      {/* --- EXTRA ENTERPRISE SECTIONS FOR COMPREHENSIVENESS (RELATIVITY INSPIRED) --- */}

      {/* NEW SECTION 5: CAPABILITY PILLARS (DATA SEARCH & MANAGEMENT) */}
      <section className="py-16 max-w-7xl mx-auto px-6 z-10 relative border-t border-slate-200/60">
        <div className="mb-10 max-w-2xl">
          <span className="text-[#4f46e5] text-xs font-mono font-bold uppercase tracking-wider">
            Enterprise Discovery
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
            Transform Raw Pipeline Clutter Into Actionable Truth
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Scale across thousands of target nodes simultaneously with
            centralized secure visibility matrix overlays.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {capabilityPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <item.icon size={24} className="text-[#4f46e5] mb-4" />
              <h5 className="text-slate-900 font-bold text-base mb-2">
                {item.title}
              </h5>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION 6: REGIONAL TOPOLOGY MAPPING */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10 relative border-t border-slate-200/60">
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5">
            <Network size={12} className="text-[#4f46e5]" />
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
              Global Topology
            </span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
            Regional Processing Nodes
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Toggle operational routing arrays to confirm real-time gateway
            connection parameters within your domestic compliance zones.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["AMER", "EMEA", "APAC"].map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveRoutingZone(zone)}
                className={`px-4 py-2 rounded-lg border transition-all font-mono text-xs ${
                  activeRoutingZone === zone
                    ? "bg-[#4f46e5] border-[#4f46e5] text-white font-semibold shadow-md"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {zone} Node
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <span className="flex items-center gap-2 font-bold text-slate-700">
              <Server size={14} className="text-[#4f46e5]" />
              <span className="font-mono text-xs">
                Live Cluster Mapping // Zone: {activeRoutingZone}
              </span>
            </span>
            <span className="text-emerald-600 font-bold flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Link State Stable
            </span>
          </div>

          {activeRoutingZone === "AMER" && (
            <div className="space-y-3">
              <div className="text-slate-900 font-bold text-sm">
                // Wilmington Principal Server Center
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hosts main data tracking clusters for federal agencies. Features
                built-in hardware compliance routing to ensure complete
                separation from foreign assets.
              </p>
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-150 flex justify-between text-[11px] font-mono text-slate-400">
                <span>
                  Latency: <strong className="text-slate-600">14ms</strong>{" "}
                  Median Ingress
                </span>
                <span>
                  Enforcement:{" "}
                  <strong className="text-slate-600">CJIS Level 4</strong>{" "}
                  Physical Perimeter
                </span>
              </div>
            </div>
          )}

          {activeRoutingZone === "EMEA" && (
            <div className="space-y-3">
              <div className="text-slate-900 font-bold text-sm">
                // Frankfurt Isolated GDPR Data Center Node
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Operates completely under sovereign European constraints,
                keeping flat-file content blocks localized to prevent
                extra-jurisdictional reach.
              </p>
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-150 flex justify-between text-[11px] font-mono text-slate-400">
                <span>
                  Latency: <strong className="text-slate-600">22ms</strong>{" "}
                  Stable Regional Loop
                </span>
                <span>
                  Enforcement:{" "}
                  <strong className="text-slate-600">Sovereign Shield</strong>{" "}
                  Active
                </span>
              </div>
            </div>
          )}

          {activeRoutingZone === "APAC" && (
            <div className="space-y-3">
              <div className="text-slate-900 font-bold text-sm">
                // Singapore Offshore Asynchronous Audit Arrays
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Handles heavy background validation logging and system
                compliance indexing tasks for cross-border maritime logistics
                and enterprise entities.
              </p>
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-150 flex justify-between text-[11px] font-mono text-slate-400">
                <span>
                  Latency: <strong className="text-slate-600">31ms</strong>{" "}
                  Async Stream Execution
                </span>
                <span>
                  Enforcement:{" "}
                  <strong className="text-slate-600">Multi-Tenant Seal</strong>{" "}
                  Enforced
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEW SECTION 7: DEPLOYMENT TRACKS MATRIX */}
      <section className="py-16 max-w-7xl mx-auto px-6 z-10 relative border-t border-slate-200/60">
        <div className="mb-8">
          <span className="text-[#4f46e5] text-xs font-mono font-bold uppercase tracking-wider">
            Infrastructure Choice
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">
            Deployment Environments Matrix
          </h3>
        </div>
        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono text-xs">
                <th className="p-4 font-bold">Deployment Profile</th>
                <th className="p-4 font-bold">Access Allocation Speed</th>
                <th className="p-4 font-bold">Compliance Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {deploymentTracks.map((track, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4 font-bold text-slate-900">{track.name}</td>
                  <td className="p-4 font-mono text-xs">{track.access}</td>
                  <td className="p-4 text-xs font-medium text-slate-600">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4f46e5] mr-2"></span>
                    {track.compliance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* NEW SECTION 8: REALTIME COMPLIANCE INTERACTIVE TOGGLES */}
      <section className="py-16 max-w-7xl mx-auto px-6 z-10 relative border-t border-slate-200/60">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-3">
            <div className="p-2 bg-indigo-50 text-[#4f46e5] w-fit rounded-lg">
              <Sliders size={20} />
            </div>
            <h4 className="text-slate-900 font-extrabold text-xl">
              Granular Processing Control Layers
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Dynamically select and append localized security criteria
              configurations during initialization processes to match specific
              state legislation.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "HIPAA Vault Engine",
                desc: "For secure healthcare logging registries.",
                checked: true,
              },
              {
                label: "SOC 2 Type II Shield",
                desc: "Automated perimeter reporting arrays.",
                checked: true,
              },
              {
                label: "Sovereign Air-Gap Override",
                desc: "Stops external out-bound reporting completely.",
                checked: false,
              },
            ].map((layer, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all text-left ${layer.checked ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200 bg-white"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-xs text-slate-900">
                    {layer.label}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${layer.checked ? "bg-[#4f46e5]" : "bg-slate-300"}`}
                  />
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-6 z-10 relative border-t border-slate-200/60">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 mb-2">
            <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider">
              System Schema
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Queried Protocols
          </h2>
          <p className="text-slate-500 mt-1 text-sm max-w-xl mx-auto">
            Review routing behavior defaults and administrative pipeline
            architectural baselines.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:bg-slate-50 focus:outline-none transition-colors text-sm"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? "transform rotate-180 text-[#4f46e5]" : ""}`}
                />
              </button>

              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${openFaq === idx ? "max-h-40 border-t border-slate-100" : "max-h-0"}`}
              >
                <p className="p-5 text-slate-500 text-xs leading-relaxed bg-slate-50/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: MINIMAL SYSTEM FOOTER */}
      <footer className="border-t border-slate-200 bg-white text-slate-400 py-8 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#4f46e5]" />
            <span className="text-slate-700 font-bold font-sans text-sm">
              DEMS+ System Boundary Gateway
            </span>
            <span className="text-xs text-slate-300">|</span>
            <span className="text-xs text-slate-400 font-mono">v3.2.1</span>
          </div>
          <div className="text-xs font-mono text-slate-400 text-center md:text-right">
            Communication Routing Revision: 01 June 2026 // End of Ingress Log
            File
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
