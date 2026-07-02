// SupportCenterPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LifeBuoy, Search, Clock, CheckCircle, Headphones,
  MessageSquare, FileText, Download, Shield, Lock,
  Server, Cloud, HardDrive, AlertCircle, RefreshCw,
  Users, Award, Zap, Target, Layers, BookOpen,
  ArrowRight, ChevronRight, ExternalLink, Mail,
  Phone, Globe, Settings, BarChart3, Activity
} from "lucide-react";

export const SupportCenterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-[#1E1B4B] to-indigo-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30">
                  <LifeBuoy className="w-3.5 h-3.5 mr-1.5" />
                  Mission-Critical Support Base
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30">
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  24/7/365 Tier-3
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Node Isolation &
                <span className="text-emerald-300 block">Resolution Terminal</span>
              </h1>
              <p className="text-lg text-emerald-200 font-light max-w-2xl leading-relaxed">
                SLA orchestration nodes, hardware decoupling diagnostics, and standard operating
                blueprints for enterprise-grade support.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 max-w-md relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search support articles..."
                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-emerald-200/60 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
                <button className="px-6 py-3 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg">
                  Contact Support
                </button>
              </div>
            </div>
            <div className="lg:w-80 flex-shrink-0 grid grid-cols-2 gap-3">
              {[
                { label: "SLA Response", value: "< 15 min" },
                { label: "Resolution Rate", value: "99.8%" },
                { label: "Active Tickets", value: "42" },
                { label: "Support Agents", value: "24/7" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center">
                  <span className="text-xl font-black text-emerald-300 block">{stat.value}</span>
                  <span className="text-xs text-emerald-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support Grid */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, label: "Documentation", desc: "Technical guides" },
              { icon: MessageSquare, label: "Live Chat", desc: "Chat with experts" },
              { icon: Download, label: "Downloads", desc: "Latest releases" },
              { icon: AlertCircle, label: "Status", desc: "System health" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.label}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Matrix */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">SLA</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Service Level Agreement Response Matrix</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold text-slate-600">Priority</th>
                  <th className="p-4 font-bold text-slate-600">Description</th>
                  <th className="p-4 font-bold text-slate-600">Initial Response</th>
                  <th className="p-4 font-bold text-slate-600">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { priority: "P1 - Critical", desc: "System down or data loss", response: "< 15 min", resolution: "< 4 hours" },
                  { priority: "P2 - High", desc: "Major functionality impacted", response: "< 30 min", resolution: "< 8 hours" },
                  { priority: "P3 - Medium", desc: "Feature degradation", response: "< 1 hour", resolution: "< 24 hours" },
                  { priority: "P4 - Low", desc: "General inquiries", response: "< 2 hours", resolution: "< 48 hours" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs ${item.priority.includes("Critical") ? "bg-rose-100 text-rose-700" : item.priority.includes("High") ? "bg-amber-100 text-amber-700" : item.priority.includes("Medium") ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{item.desc}</td>
                    <td className="p-4 font-mono text-sm text-slate-700">{item.response}</td>
                    <td className="p-4 font-mono text-sm text-slate-700">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* On-Premise Hardware */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Hardware</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">On-Premises Cryptographic Appliance Mounting</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Complete guides for installing and configuring DEMS+ hardware appliances
                in your data center with HSM integration and redundant power.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Rack mounting & network configuration",
                  "HSM integration & key management",
                  "Redundant power & cooling requirements",
                  "Security audit & compliance checklist"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1">
                View Hardware Guide <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-emerald-900 to-[#1E1B4B] p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-emerald-300" />
                <span className="font-bold">Hardware Specifications</span>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { label: "CPU", value: "Dual Intel Xeon Silver" },
                  { label: "RAM", value: "128GB ECC DDR4" },
                  { label: "Storage", value: "4x 2TB NVMe RAID 10" },
                  { label: "HSM", value: "FIPS 140-2 Level 3" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-emerald-300">{item.label}</span>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Provisioning */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Cloud</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Ephemeral Sandbox Provisioning Maps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { provider: "AWS", icon: Cloud, regions: "12", features: "Auto-scaling, RDS" },
              { provider: "Azure", icon: Cloud, regions: "8", features: "AD integration" },
              { provider: "GCP", icon: Cloud, regions: "6", features: "Global network" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                  <span className="text-xl font-bold text-slate-900">{item.provider}</span>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>{item.regions} regions available</p>
                  <p>{item.features}</p>
                </div>
                <button className="mt-4 text-sm font-bold text-emerald-600 hover:text-emerald-800">Deploy →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Downloads</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Hotfixes, Binaries & Integrity Hashes</h2>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-emerald-600 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { name: "DEMS+ Core v3.0.4", size: "48MB", hash: "sha256:7f83b12ce4aef990", date: "Mar 12, 2026" },
              { name: "Security Patch 2026-03", size: "12MB", hash: "sha256:0a31fe89b2c", date: "Mar 10, 2026" },
              { name: "Compliance Module v2.1", size: "23MB", hash: "sha256:77b1bc1a", date: "Mar 8, 2026" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-200 transition-all">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                    <span>{item.size}</span>
                    <span className="font-mono">{item.hash}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-lg hover:bg-emerald-100 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Metrics</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Live Network Diagnostics & Resolution Times</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "12min", label: "Avg Response Time" },
              { value: "4.2hrs", label: "Avg Resolution Time" },
              { value: "98.5%", label: "Customer Satisfaction" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                <span className="text-3xl font-black text-emerald-600 block">{item.value}</span>
                <span className="text-sm text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket System */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold">Submit a Support Ticket</h3>
              <p className="text-emerald-200 text-sm mt-2">Our team will respond within SLA.</p>
              <div className="mt-6 space-y-3">
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-300" />
                  <span className="text-sm">support@dems.io</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-300" />
                  <span className="text-sm">+1-800-DEMS-SUP</span>
                </div>
              </div>
              <button className="mt-4 w-full py-3 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                Create Ticket
              </button>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Tickets</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Encrypted Communication Routing Nodes</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Secure ticket system with end-to-end encryption for sensitive support communications.
                All interactions are logged and auditable.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Audit logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">FAQ</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Core Architecture Frequently Decoupled Queries</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does DEMS+ handle data redundancy?", a: "Data is replicated across multiple availability zones with automatic failover. Configurable replication factors." },
              { q: "What backup strategies are supported?", a: "Continuous incremental backups with point-in-time recovery. Full daily snapshots." },
              { q: "Can I integrate with existing SIEM tools?", a: "Yes, DEMS+ supports integration with major SIEM platforms via REST APIs and webhooks." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all">
                <h4 className="font-bold text-slate-900">{item.q}</h4>
                <p className="text-sm text-slate-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Manuals */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">Compliance</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Audit Readiness Infrastructure Manuals</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { standard: "SOC 2 Type II", pages: "120", updated: "Mar 2026" },
              { standard: "NIST SP 800-53", pages: "200", updated: "Feb 2026" },
              { standard: "ISO 27001", pages: "150", updated: "Jan 2026" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <h4 className="font-bold text-slate-900">{item.standard}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <span>{item.pages} pages</span>
                  <span>Updated {item.updated}</span>
                </div>
                <button className="mt-3 text-sm font-bold text-emerald-600 flex items-center gap-1">
                  Download <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Protocol */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Escalation</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Executive Escalation Protocols</h3>
                <p className="text-slate-600 text-sm mt-2">Critical issues escalated directly to executive leadership.</p>
              </div>
              <button className="px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                View Protocol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Initialize Enterprise Bridge Vector</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Get dedicated support for your enterprise deployment.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-200">
              Contact Enterprise Support
            </Link>
            <Link to="/demo" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Schedule Onboarding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};