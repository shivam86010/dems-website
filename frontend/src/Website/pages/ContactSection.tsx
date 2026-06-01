import React, { useState } from "react";
import {
  Mail,
  Phone,
  Building,
  Lock,
  Clock,
  ShieldCheck,
  FileKey,
  Download,
  Network,
  Activity,
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [activeRoutingZone, setActiveRoutingZone] = useState("AMER");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const responseMetrics = [
    {
      tier: "Tier 1: Active Breach / Legal Audit Spills",
      response: "Under 15 Minutes Guaranteed",
      channel: "Encrypted Direct Hotline / Secure Signal Webhook",
    },
    {
      tier: "Tier 2: Production Ingestion Bottlenecks",
      response: "Under 2 Hours SLA",
      channel: "SaaS Dev Node Portal Console",
    },
    {
      tier: "Tier 3: Enterprise Architecture & Demos",
      response: "Within 1 Business Day",
      channel: "Standardized Pipeline Intake Form",
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* SECTION 1: MINIMALIST EDITORIAL HERO */}
      <header className="border-b border-slate-100 bg-slate-50/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
              Ingress Routing Node // Host Online
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              Initiate Secure{" "}
              <span className="font-semibold text-indigo-600">
                System Ingress
              </span>
              .
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-xl font-normal leading-relaxed">
              Connect directly with our cryptographic infrastructure deployment
              specialists. Select your priority path to interface with our
              regional response teams.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-xl font-mono text-xs text-slate-500 space-y-3 shadow-sm">
            <div className="text-slate-800 font-bold border-b border-slate-100 pb-2 flex items-center gap-2 text-[11px] tracking-wider uppercase">
              <Activity size={14} className="text-emerald-500" /> Gateway
              Telemetry
            </div>
            <div className="flex justify-between">
              <span>Node Status:</span>{" "}
              <span className="text-emerald-600 font-bold">
                Accepting Packets
              </span>
            </div>
            <div className="flex justify-between">
              <span>Default Cipher:</span>{" "}
              <span className="text-slate-700">ECDHE-RSA-AES256-GCM</span>
            </div>
            <div className="flex justify-between">
              <span>Support Housing:</span>{" "}
              <span className="text-slate-700">
                Federally Isolated Deployments
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: INTAKE PIPELINE & GATEWAYS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form Block */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Request Enterprise Pipeline Walkthrough
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Configure your deployment metrics below to align with a
                production engineer.
              </p>
            </div>

            <form className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Given Name"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Corporate / Government Email Endpoint"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
              <input
                type="tel"
                placeholder="Secure Contact Number (+x-xxx-xxx-xxxx)"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />

              <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65rem_auto] bg-[right_1rem_center] bg-no-repeat appearance-none">
                <option>Anticipated Monthly Media Storage Volume</option>
                <option>0 - 10 Terabytes Pipeline Ingress</option>
                <option>10 - 100 Terabytes Distributed Array</option>
                <option>100+ Terabytes High-Velocity Sovereign Node</option>
              </select>

              <textarea
                rows={4}
                placeholder="Detail your data sovereignty, CJIS isolation constraints, or custom file format transcoding workflow requirements..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
                <Lock size={16} /> Authenticate & Dispatch Request
              </button>
            </form>
          </div>

          {/* Secure Touchpoints Info Block */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Direct Gateways
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Our global operations cells are hardwired for around-the-clock
                support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-indigo-600">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <div className="text-slate-900 font-medium text-sm">
                    Encrypted Ingestion Mailboxes
                  </div>
                  <p className="text-indigo-600 font-mono text-sm font-semibold">
                    secure-sales@demsplus.com
                  </p>
                  <p className="text-slate-400 font-mono text-xs">
                    incident-response@demsplus.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-indigo-600">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <div className="text-slate-900 font-medium text-sm">
                    Emergency Telecom Switches
                  </div>
                  <p className="text-slate-700 font-mono text-sm font-semibold">
                    +1 (888) 421-DEMS
                  </p>
                  <p className="text-slate-400 text-xs">
                    Protected by active hardware line isolation monitoring
                    arrays.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-indigo-600">
                  <Building size={18} />
                </div>
                <div className="space-y-1">
                  <div className="text-slate-900 font-medium text-sm">
                    Physical Laboratory Matrix
                  </div>
                  <p className="text-slate-700 text-sm">
                    1200 Forensic Avenue, Suite 400
                  </p>
                  <p className="text-slate-400 font-mono text-xs">
                    Wilmington, DE 19801 // US Jurisdiction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM RESPONSE PROTOCOLS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
              Response Mandates
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              System Response Protocols
            </h2>
            <p className="text-slate-500 text-sm">
              We separate inbound inquiries into distinct isolation speeds to
              protect active systems under stress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {responseMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="text-slate-400 font-mono font-medium uppercase tracking-wider text-[10px]">
                    {item.tier}
                  </div>
                  <h4 className="text-slate-900 text-lg font-semibold tracking-tight">
                    {item.response}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-mono">
                    {item.channel}
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 font-mono border-t border-slate-100 pt-3">
                  Execution Track: Enforced Automatically
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CRYPTOGRAPHIC PUBLIC KEYS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="border border-slate-200 rounded-xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-50 border border-slate-200 text-indigo-600 rounded-lg">
                <FileKey size={18} />
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold text-base">
                  Asymmetric GPG Encryption Key Assembly
                </h4>
                <p className="text-slate-400 font-mono text-xs">
                  ID: 0x9F8E7D6C5B4A3A21 // Perpetual Expiry
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 font-mono text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-lg transition-all shrink-0">
              <Download size={14} /> Download ASCII Armor Key
            </button>
          </div>

          <p className="text-slate-600 text-xs leading-relaxed max-w-2xl">
            For whistleblowers, structural verification auditing teams, or
            intelligence groups seeking to dispatch evidence manifests outside
            standard web forms, wrap your files using our verified network shell
            key package below.
          </p>

          <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 font-mono text-[10px] text-slate-400 overflow-x-auto space-y-1 select-all max-h-36 overflow-y-auto">
            <div>-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
            <div>Version: GnuPG v2.4.26 (GNU/Linux)</div>
            <div className="text-slate-500">
              mQINBF7Kz1EBEADZuI0hW8v8k9w2PqR9vLz8Zz9oO2xY9KkLx8m9PqRz9==
            </div>
            <div className="text-slate-500">
              HjK8s9P2Kz7M1w9L3v6X8z1Nz9L2W8z1M5v2N7X8z9P3K8v1Nz7M5v9L==
            </div>
            <div className="text-slate-500">
              Xz7K2W9M1Nz9v8P3L2W8z1M5v2N7X8z9P3K8v1Nz7M5v9LXz7K2W9M1N==
            </div>
            <div>-----END PGP PUBLIC KEY BLOCK-----</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REGIONAL TELEMETRY NODES */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold bg-white border border-slate-200 text-indigo-600 px-2.5 py-1 rounded shadow-sm">
              Global Topology
            </span>
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Regional Processing Nodes
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Toggle operational routing arrays to confirm real-time gateway
              connection parameters within your domestic compliance zones.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              {["AMER", "EMEA", "APAC"].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setActiveRoutingZone(zone)}
                  className={`px-3 py-1.5 rounded border transition-all ${
                    activeRoutingZone === zone
                      ? "bg-indigo-600 border-indigo-600 text-white font-semibold shadow-sm"
                      : "bg-white border-slate-200 text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {zone} Ingress Node
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 font-mono text-xs text-slate-500 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-[11px]">
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <Network size={12} className="text-indigo-600" /> Live Cluster
                Mapping // Zone: {activeRoutingZone}
              </span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
                Link State Stable
              </span>
            </div>

            {activeRoutingZone === "AMER" && (
              <div className="space-y-2">
                <div className="text-slate-800 font-bold">
                  // Wilmington Principal Server Center
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Hosts main data tracking clusters for federal agencies.
                  Features built-in hardware compliance routing to ensure
                  complete separation from foreign assets.
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 text-[10px] flex justify-between text-slate-400">
                  <span>Latency: 14ms Median Ingress</span>
                  <span>Enforcement: CJIS Level 4 Physical Perimeter</span>
                </div>
              </div>
            )}

            {activeRoutingZone === "EMEA" && (
              <div className="space-y-2">
                <div className="text-slate-800 font-bold">
                  // Frankfurt Isolated GDPR Data Center Node
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Operates completely under sovereign European constraints,
                  keeping flat-file content blocks localized to prevent
                  extra-jurisdictional reach.
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 text-[10px] flex justify-between text-slate-400">
                  <span>Latency: 22ms Stable Regional Loop</span>
                  <span>
                    Enforcement: Cryptographic Sovereign Shield Deployed
                  </span>
                </div>
              </div>
            )}

            {activeRoutingZone === "APAC" && (
              <div className="space-y-2">
                <div className="text-slate-800 font-bold">
                  // Singapore Offshore Asynchronous Audit Arrays
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Handles heavy background validation logging and system
                  compliance indexing tasks for cross-border maritime logistics
                  and enterprise entities.
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 text-[10px] flex justify-between text-slate-400">
                  <span>Latency: 31ms Async Stream Execution</span>
                  <span>
                    Enforcement: Multi-Tenant Container Partition Seals
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: KNOWLEDGE NODE (FAQ ACCORDION) */}
      <section className="py-20 max-w-4xl mx-auto px-6 border-t border-slate-100">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-slate-50 px-2.5 py-1 rounded border border-slate-200/60 shadow-sm">
            <HelpCircle size={12} /> System Schema
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Frequently Queried Protocols
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Review routing behavior defaults and administrative pipeline
            architectural baselines.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-colors duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-900 hover:bg-slate-50/60 focus:outline-none transition-colors"
              >
                <span className="text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "transform rotate-180 text-indigo-600" : ""}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx
                    ? "max-h-48 border-t border-slate-100"
                    : "max-h-0"
                }`}
              >
                <p className="p-5 text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: BOUNDARY GATEWAY LOG FOOTER */}
      <footer className="border-t border-slate-200 bg-white text-slate-400 py-12 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-600" />
            <span className="text-slate-700 font-bold font-sans">
              DEMS+ System Boundary Gateway
            </span>
          </div>
          <div className="text-[10px] text-slate-400 text-center md:text-right">
            Communication Routing Revision: 01 June 2026 // End of Ingress Log
            File
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
