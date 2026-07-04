import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, Search, Database, Shield,  Layers,
  CheckCircle, ArrowRight, ChevronRight, Download,
  Key, Lock, Server,  GitBranch, Code, Cloud,  Link2,
   HardDrive, AlertTriangle,  FolderTree, Network, Cpu as CpuIcon
} from "lucide-react";

export const DocumentationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("rest");

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4F46E5] text-white py-24 px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-400/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 border border-indigo-400/30">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  Enterprise Documentation v3.0
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                  SOC2 & FedRAMP Compliant
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Architectural Knowledge
                <span className="text-indigo-300 block mt-2">Base & API Blueprints</span>
              </h1>
              <p className="text-lg text-indigo-200 font-light max-w-2xl leading-relaxed">
                Comprehensive guides for deploying, integrating, and scaling DEMS+ across sovereign environments.
                Complete with REST, GraphQL, and WebSocket specifications.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-500/25">
                  <Search className="w-4 h-4" />
                  Search Documentation
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/20 border border-indigo-400/30 text-white font-bold rounded-xl hover:bg-indigo-500/30 transition-all">
                  <Download className="w-4 h-4" />
                  Download PDF Bundle
                </button>
              </div>
            </div>
            <div className="lg:w-96 flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <span className="ml-2">DEMS_Cluster_Node</span>
                </div>
                <div className="space-y-2 text-sm font-mono text-indigo-200">
                  <p className="text-emerald-300">$ curl -X POST https://api.dems.io/v3/auth</p>
                  <p className="text-indigo-300">--header "Authorization: Bearer $DEMS_KEY"</p>
                  {/* <p className="text-indigo-300">--data '{"role": "admin", "scope": "global"}'</p> */}
                  {/* <p className="text-emerald-300 mt-3">{"{ \"token\": \"eyJhbGciOiJSUzI1NiIs...\" }"}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Matrix Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Quick Start</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Rapid Integration Matrix</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Deploy your first cluster in minutes. Choose your environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "Cloud Native", desc: "AWS, Azure, GCP deployments with auto-scaling", stats: "2.3k clusters", color: "blue" },
              { icon: Server, title: "On-Premise", desc: "Bare-metal with hardware HSM integration", stats: "400+ nodes", color: "indigo" },
              { icon: GitBranch, title: "Hybrid Mesh", desc: "Cross-cloud with edge caching layers", stats: "1.1k meshes", color: "violet" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{item.stats}</span>
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">Deploy →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Explorer Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">API Specifications</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">REST & GraphQL Endpoint Blueprint</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">Complete schema definitions for evidence ingestion, case management, and audit traversal.</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0 bg-slate-100 p-1 rounded-xl">
              {["REST", "GraphQL", "WebSocket"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab.toLowerCase() ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400">POST /api/v3/evidence/ingest</span>
                <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">200 OK</span>
              </div>
              <pre className="font-mono text-xs text-indigo-300 leading-relaxed">
                {`{
  "caseId": "CAS-2026-89A",
  "evidence": {
    "type": "document",
    "payloadHash": "0x7f83b12ce4aef99011bc",
    "metadata": {
      "source": "internal_audit",
      "retention": "PERMANENT"
    }
  },
  "chainOfCustody": {
    "custodianId": "CUST-001",
    "signature": "RSA-4096"
  }
}`}
              </pre>
            </div>
            <div className="space-y-4">
              {[
                { method: "POST", path: "/cases", desc: "Create investigation case" },
                { method: "GET", path: "/evidence/{id}", desc: "Retrieve evidence with hashes" },
                { method: "PUT", path: "/transfer", desc: "Update chain of custody" },
                { method: "DELETE", path: "/audit/logs", desc: "Purge temporary audit trails" }
              ].map((api, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-white transition-colors">
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${api.method === "POST" ? "bg-emerald-100 text-emerald-700" : api.method === "GET" ? "bg-blue-100 text-blue-700" : api.method === "PUT" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"}`}>
                      {api.method}
                    </span>
                    <span className="font-mono text-sm text-slate-700">{api.path}</span>
                  </div>
                  <span className="text-xs text-slate-400">{api.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Auth Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Security Layer</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Cryptographic Authentication & RBAC</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Multi-factor authentication, role-based access control, and hardware-backed encryption
                ensure that only authorized personnel can access sensitive evidence.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: Key, label: "RSA-4096 & ECDSA Signatures", desc: "Hardware security module integration" },
                  { icon: Shield, label: "Zero-Trust Network Policies", desc: "Micro-segmentation with identity verification" },
                  { icon: Lock, label: "AES-256-GCM Encryption", desc: "Encrypted at rest and in transit" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.label}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Role Matrix</h4>
              <div className="space-y-3">
                {[
                  { role: "System Admin", permissions: "Full access, user management, audit logs" },
                  { role: "Investigator", permissions: "Case creation, evidence upload, search" },
                  { role: "Compliance Officer", permissions: "Audit review, chain of custody" },
                  { role: "Viewer", permissions: "Read-only access to assigned cases" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-sm text-slate-800">{item.role}</span>
                    <span className="text-xs text-slate-500">{item.permissions}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Guides */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Guides</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Deep-Dive System Operator Manuals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Cluster Configuration", desc: "Optimize node performance and storage", level: "Advanced" },
              { icon: Network, title: "Network Topology", desc: "Design resilient mesh networks", level: "Intermediate" },
              { icon: CpuIcon, title: "Hardware Tuning", desc: "Maximum throughput configuration", level: "Expert" },
              { icon: Shield, title: "Security Hardening", desc: "Implement zero-trust architecture", level: "Advanced" },
              { icon: GitBranch, title: "Disaster Recovery", desc: "Multi-region failover strategies", level: "Intermediate" },
              { icon: Layers, title: "Data Tiering", desc: "Hot/warm/cold storage optimization", level: "Advanced" }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all hover:border-indigo-200">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{item.level}</span>
                  <button className="text-sm font-bold text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1">
                    Read <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Registry Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Schema Registry</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Database & Schema Manifests</h2>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              View Full Schema <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold text-slate-600">Table</th>
                  <th className="p-4 font-bold text-slate-600">Description</th>
                  <th className="p-4 font-bold text-slate-600">Primary Key</th>
                  <th className="p-4 font-bold text-slate-600">Indexes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { table: "evidence", desc: "Digital evidence storage with hashes", key: "evidence_id", indexes: "case_id, hash" },
                  { table: "cases", desc: "Investigation case metadata", key: "case_id", indexes: "status, created_at" },
                  { table: "custody", desc: "Chain of custody transfers", key: "transfer_id", indexes: "evidence_id, custodian" },
                  { table: "audit_logs", desc: "Immutable audit trail", key: "log_id", indexes: "timestamp, user_id" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-mono text-xs font-bold text-indigo-600">{item.table}</td>
                    <td className="p-4 text-slate-600">{item.desc}</td>
                    <td className="p-4 font-mono text-xs text-slate-500">{item.key}</td>
                    <td className="p-4 font-mono text-xs text-slate-500">{item.indexes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Compliance</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Regulatory Compliance Implementations</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                DEMS+ is built to meet the most stringent regulatory requirements across jurisdictions.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { standard: "NIST SP 800-53", status: "Certified", desc: "Access control & audit" },
                  { standard: "SOC 2 Type II", status: "Certified", desc: "Security & availability" },
                  { standard: "HIPAA", status: "Compliant", desc: "Healthcare data protection" },
                  { standard: "GDPR", status: "Compliant", desc: "Data sovereignty & privacy" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <span className="font-bold text-sm text-slate-900">{item.standard}</span>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold">Compliance Dashboard</h4>
              <p className="text-indigo-200 text-sm mt-2">Real-time audit status across all clusters</p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>System Controls</span>
                    <span className="text-emerald-400">98%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-500/30 rounded-full mt-1">
                    <div className="w-[98%] h-full bg-emerald-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Chain of Custody</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-500/30 rounded-full mt-1">
                    <div className="w-full h-full bg-emerald-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Audit Logging</span>
                    <span className="text-amber-400">94%</span>
                  </div>
                  <div className="w-full h-2 bg-indigo-500/30 rounded-full mt-1">
                    <div className="w-[94%] h-full bg-amber-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Real-Time</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Real-time Event Webhooks Engine</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Subscribe to events and build reactive workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { event: "evidence.uploaded", desc: "New evidence ingested", icon: HardDrive },
              { event: "case.updated", desc: "Case status changed", icon: FolderTree },
              { event: "custody.transferred", desc: "Chain of custody updated", icon: Link2 },
              { event: "alert.triggered", desc: "Security alert raised", icon: AlertTriangle }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-5 h-5 text-indigo-600" />
                  <span className="font-mono text-xs text-slate-700">{item.event}</span>
                </div>
                <p className="text-sm text-slate-500">{item.desc}</p>
                <button className="mt-3 text-xs font-bold text-indigo-600">Subscribe →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">SDKs</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Native Language Core Wrappers</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { lang: "JavaScript", icon: Code, version: "v3.0.4" },
              { lang: "Python", icon: Code, version: "v3.0.4" },
              { lang: "Go", icon: Code, version: "v3.0.3" },
              { lang: "Rust", icon: Code, version: "v3.0.2" },
              { lang: "Java", icon: Code, version: "v3.0.1" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center min-w-[120px] hover:shadow-lg transition-all">
                <item.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="font-bold text-slate-900 block">{item.lang}</span>
                <span className="text-xs text-slate-400">{item.version}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Troubleshooting</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Enterprise Resolution Library</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How to handle cluster node failure?", a: "Automatic failover with replica nodes. Check node health API." },
              { q: "What's the maximum evidence size?", a: "1TB per file with chunked upload support." },
              { q: "How to optimize search performance?", a: "Use indexed fields and pagination." },
              { q: "Troubleshoot authentication errors", a: "Verify API key permissions and JWT expiry." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.q}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.a}</p>
                  </div>
                  <button className="text-indigo-600 text-sm font-bold">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Establish Your Sovereign Cluster</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Deploy DEMS+ in your environment and start securing evidence today.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/signup" className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-200">
              Start Free Trial
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};