// ChangelogPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  History, GitBranch, GitMerge, RefreshCw, Zap,
  Shield, Lock, Database, Server, Cpu, Layers,
  ArrowRight, CheckCircle, AlertCircle, Clock,
  Download, FileText, Code, Terminal, Users,
  Award, Star, TrendingUp, Sparkles, Eye, Activity
} from "lucide-react";

export const ChangelogPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-[#1E1B4B] to-indigo-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30">
                  <History className="w-3.5 h-3.5 mr-1.5" />
                  System Ledger & Changelog
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30">
                  <GitBranch className="w-3.5 h-3.5 mr-1.5" />
                  Current: v3.0.4-Stable
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Immutable Version
                <span className="text-amber-300 block">Deployment Register</span>
              </h1>
              <p className="text-lg text-amber-200 font-light max-w-2xl leading-relaxed">
                Immutable historical log of DEMS+ engine rollouts, security patches, and database
                optimization indices. Every change is cryptographically signed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-amber-50 transition-all shadow-lg">
                  <Download className="w-4 h-4" />
                  Download Release Notes
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-400/30 text-white font-bold rounded-xl hover:bg-amber-500/30 transition-all">
                  <RefreshCw className="w-4 h-4" />
                  Check for Updates
                </button>
              </div>
            </div>
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-amber-300">Version History</span>
                  <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">Stable</span>
                </div>
                <div className="space-y-2 text-sm">
                  {["v3.0.4 (Mar 12)", "v3.0.3 (Feb 28)", "v3.0.2 (Feb 15)", "v2.9.1 (Dec 2025)"].map((v, idx) => (
                    <div key={idx} className={`p-2 rounded ${idx === 0 ? "bg-white/10" : "opacity-60"}`}>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Timeline</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Immutable Version Deployment Register</h2>
          </div>
          <div className="relative border-l-2 border-amber-200 pl-8 space-y-12 ml-6">
            {[
              { version: "v3.0.4-Stable Release", date: "Mar 12, 2026", type: "Stable", desc: "Overhauled multi-tenant blob compilation loops. Reduced index locking durations by 42%." },
              { version: "Security Patch 2026-03", date: "Mar 8, 2026", type: "Security", desc: "Implemented RSA-4096 signature verification. Zero-knowledge proof attestation." },
              { version: "v3.0.3 Feature Release", date: "Feb 28, 2026", type: "Feature", desc: "Distributed search arrays with sub-second cross-cluster discovery." },
              { version: "v3.0.2 Performance Update", date: "Feb 15, 2026", type: "Performance", desc: "Query optimization with 40% faster joins. Memory management improvements." }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm ${item.type === "Stable" ? "bg-emerald-500" : item.type === "Security" ? "bg-rose-500" : item.type === "Feature" ? "bg-blue-500" : "bg-amber-500"}`} />
                <div className="bg-white p-6 rounded-2xl border border-slate-200 group-hover:border-amber-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.version}</h3>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${item.type === "Stable" ? "bg-emerald-100 text-emerald-700" : item.type === "Security" ? "bg-rose-100 text-rose-700" : item.type === "Feature" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
                        {item.type}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Release Details */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Major Release</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Major Release Engine Block: v3.0.0 Architecture Shift</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Performance", desc: "300% faster ingestion", details: "Optimized pipeline" },
              { icon: Shield, title: "Security", desc: "Zero-trust architecture", details: "All connections secured" },
              { icon: Layers, title: "Scalability", desc: "10x larger clusters", details: "Horizontal scaling" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                <p className="text-xs text-slate-400 mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patch Register */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Patches</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Micro-Patch Component Register</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold text-slate-600">Patch</th>
                  <th className="p-4 font-bold text-slate-600">Component</th>
                  <th className="p-4 font-bold text-slate-600">Severity</th>
                  <th className="p-4 font-bold text-slate-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { patch: "PATCH-2026-034", component: "Evidence Ingestion", severity: "High", date: "Mar 10" },
                  { patch: "PATCH-2026-033", component: "Search Engine", severity: "Medium", date: "Mar 8" },
                  { patch: "PATCH-2026-032", component: "Auth Module", severity: "Low", date: "Mar 5" },
                  { patch: "PATCH-2026-031", component: "API Gateway", severity: "High", date: "Mar 3" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-mono text-sm text-amber-700">{item.patch}</td>
                    <td className="p-4 text-slate-600">{item.component}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${item.severity === "High" ? "bg-rose-100 text-rose-700" : item.severity === "Medium" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security Patch Details */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-rose-900 to-red-900 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-rose-300" />
                <span className="text-xl font-bold">Zero-Knowledge Verification Node</span>
              </div>
              <ul className="space-y-2 text-sm text-rose-200">
                <li>• RSA-4096 cryptographic verification</li>
                <li>• Zero-knowledge proof attestation</li>
                <li>• Hardware security module integration</li>
                <li>• FIPS 140-2 certified encryption</li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">Security</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Cryptographic Patch: Zero-Knowledge Verification Node</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Major security enhancement introducing zero-knowledge proofs for chain-of-custody
                verification. Every evidence transfer now includes cryptographic attestation.
              </p>
              <button className="mt-4 text-sm font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1">
                View Security Advisory <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Database Optimizations */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Database</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Database Compression & Read Multipliers</h2>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-amber-600 flex items-center gap-1">
              View Full Specs <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "40%", label: "Compression Rate" },
              { metric: "3.2x", label: "Read Throughput" },
              { metric: "60%", label: "Storage Reduction" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <span className="text-4xl font-black text-amber-600 block">{item.metric}</span>
                <span className="text-sm text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Overhauls */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">UI/UX</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Canvas Micro-Interaction Render Overhauls</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { feature: "Real-time evidence preview", status: "Released", version: "v3.0.4" },
              { feature: "Drag-and-drop case builder", status: "Released", version: "v3.0.3" },
              { feature: "Interactive timeline visualization", status: "Beta", version: "v3.0.5" },
              { feature: "Dark mode & accessibility", status: "Planned", version: "v3.1.0" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{item.feature}</h4>
                  <span className="text-xs text-slate-500">v{item.version}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${item.status === "Released" ? "bg-emerald-100 text-emerald-700" : item.status === "Beta" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Changes */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold">API Deprecation Notice Tracker</h3>
            </div>
            <div className="space-y-3">
              {[
                { endpoint: "/v2/evidence", status: "Deprecated", replacement: "/v3/evidence", date: "Dec 2026" },
                { endpoint: "/v2/cases", status: "Deprecated", replacement: "/v3/cases", date: "Mar 2027" },
                { endpoint: "/v2/auth", status: "Active", replacement: "N/A", date: "N/A" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-mono text-sm">{item.endpoint}</span>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${item.status === "Deprecated" ? "bg-rose-500/20 text-rose-300" : "bg-emerald-500/20 text-emerald-300"}`}>
                      {item.status}
                    </span>
                    <span className="text-xs text-slate-400">{item.replacement}</span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Integrations</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Third-Party Connector Matrix Synchronizations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Salesforce", "ServiceNow", "Slack", "Teams", "Jira", "Confluence", "AWS", "Azure"].map((tool, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <span className="font-bold text-sm text-slate-700">{tool}</span>
                <p className="text-xs text-slate-400 mt-1">Connected</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Performance</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Pre-vs-Post Build Efficiency Multipliers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { metric: "Query Latency", before: "45ms", after: "12ms", improvement: "73%" },
              { metric: "Index Build Time", before: "120s", after: "42s", improvement: "65%" },
              { metric: "Memory Usage", before: "8.2GB", after: "3.1GB", improvement: "62%" },
              { metric: "Throughput", before: "1.2k/s", after: "4.8k/s", improvement: "300%" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900">{item.metric}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-slate-500">Before: {item.before}</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-emerald-600">After: {item.after}</span>
                </div>
                <div className="mt-3 w-full h-2 bg-slate-100 rounded-full">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: item.improvement }} />
                </div>
                <span className="text-xs text-amber-600 mt-1 block">{item.improvement} improvement</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Ledger */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Compliance</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">NIST SP 800-53 Control Alignment Ledger</h2>
          </div>
          <div className="space-y-4">
            {[
              { control: "AC-2", name: "Account Management", status: "Compliant", version: "v3.0.4" },
              { control: "AU-6", name: "Audit Review", status: "Compliant", version: "v3.0.3" },
              { control: "SC-12", name: "Cryptographic Key Management", status: "Compliant", version: "v3.0.2" },
              { control: "SI-4", name: "Information System Monitoring", status: "In Progress", version: "v3.1.0" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-amber-700">{item.control}</span>
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${item.status === "Compliant" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-400">v{item.version}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rollback Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Rollback</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Safe Node Rollback Redundancy Vectors</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Automated Rollback Protection</h4>
                <p className="text-sm text-slate-600 mt-2">
                  DEMS+ maintains redundant version snapshots. In case of deployment issues,
                  automatic rollback to the last stable version occurs within 60 seconds.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-600" /> 99.9% success rate</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-600" /> &lt; 60s rollback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Subscribe to Webhook Deployment Triggers</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Get real-time notifications for new releases and security patches.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/signup" className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-200">
              Subscribe to Updates
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              View Full Changelog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};