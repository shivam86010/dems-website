


// CaseStudiesPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FolderLock, ArrowRight, TrendingUp, Users, Building,
  ShieldCheck, Award, BarChart3, FileCheck, Clock,
  Globe, Landmark, HeartPulse, Computer, Scale,
  Briefcase, CheckCircle, Star, Target, Zap, Eye,
  Download, ExternalLink, PlayCircle, BookOpen,
  MessageSquare, Sparkles, ChevronRight, FileText,
  PieChart, Activity, Layers, Lock
} from "lucide-react";

export const CaseStudiesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-[#1E1B4B] to-indigo-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full filter blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 border border-violet-400/30">
                  <FolderLock className="w-3.5 h-3.5 mr-1.5" />
                  Global Validation Studies
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30">
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  2026 Innovation Award
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Sovereign Audit
                <span className="text-violet-300 block">Paradigms</span>
              </h1>
              <p className="text-lg text-violet-200 font-light max-w-2xl leading-relaxed">
                Quantifiable legal, enterprise, and digital forensic breakthroughs powered by DEMS+.
                Peer-reviewed and validated across global jurisdictions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-violet-50 transition-all">
                  <PlayCircle className="w-5 h-5" />
                  Watch Case Study Overview
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500/20 border border-violet-400/30 text-white font-bold rounded-xl hover:bg-violet-500/30 transition-all">
                  <Download className="w-4 h-4" />
                  Download All Studies
                </button>
              </div>
            </div>
            <div className="lg:w-96 flex-shrink-0 grid grid-cols-2 gap-4">
              {[
                { value: "99.9%", label: "Data Integrity" },
                { value: "12ms", label: "Avg Query Time" },
                { value: "4.8PB", label: "Evidence Processed" },
                { value: "Zero", label: "Breaches" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center">
                  <span className="text-2xl font-black text-violet-300 block">{stat.value}</span>
                  <span className="text-xs text-violet-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Impact Metrics</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Empirical System Metrics</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Measurable outcomes from real-world deployments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "+340%", label: "Ingestion Throughput", color: "emerald" },
              { icon: Users, value: "89%", label: "Faster Case Resolution", color: "blue" },
              { icon: ShieldCheck, value: "99.99%", label: "Evidence Integrity", color: "indigo" },
              { icon: Clock, value: "72%", label: "Reduced Audit Time", color: "violet" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-2xl font-black text-slate-900 block">{item.value}</span>
                <span className="text-sm text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-violet-900 to-[#1E1B4B] rounded-2xl p-8 text-white aspect-video flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-white/80 mx-auto mb-4" />
                <p className="text-sm font-medium">Featured Case Study</p>
                <h3 className="text-xl font-bold mt-2">Fortune 50 E-Discovery Overhaul</h3>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Featured</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">The Fortune 50 E-Discovery Overhaul</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                A global Fortune 50 financial institution needed to modernize their e-discovery
                pipeline. DEMS+ reduced discovery time from weeks to hours while maintaining
                chain-of-custody integrity across 47 jurisdictions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <span className="text-2xl font-black text-slate-900">14x</span>
                  <p className="text-xs text-slate-500">Faster Discovery</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <span className="text-2xl font-black text-slate-900">$47M</span>
                  <p className="text-xs text-slate-500">Annual Savings</p>
                </div>
              </div>
              <button className="mt-6 text-sm font-bold text-violet-600 hover:text-violet-800 flex items-center gap-1">
                Read Full Case Study <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Grid */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Sectors</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Sector-Specific Digital Transformation Archives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Landmark, title: "Financial Services", desc: "AML & fraud detection", count: "24 studies" },
              { icon: Scale, title: "Legal & Litigation", desc: "E-discovery & compliance", count: "31 studies" },
              { icon: HeartPulse, title: "Healthcare", desc: "HIPAA & medical audits", count: "18 studies" },
              { icon: Building, title: "Government", desc: "Regulatory & law enforcement", count: "22 studies" },
              { icon: Computer, title: "Digital Forensics", desc: "Cyber & incident response", count: "19 studies" },
              { icon: Briefcase, title: "Corporate", desc: "Internal investigations", count: "27 studies" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:border-violet-200">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{item.count}</span>
                  <button className="text-sm font-bold text-violet-600 group-hover:text-violet-800 flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Chronicles</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Incident Mitigation Chronicles</h2>
          </div>
          <div className="relative border-l-2 border-violet-200 pl-8 space-y-12 ml-6">
            {[
              { title: "Data Breach Response", org: "Fortune 500 Retailer", result: "72 hours containment", date: "2026" },
              { title: "Cross-Border Litigation", org: "Global Law Firm", result: "2.3TB processed", date: "2025" },
              { title: "Insurance Fraud Ring", org: "Major Insurer", result: "$340M recovered", date: "2025" }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[41px] top-1 bg-violet-600 w-4 h-4 rounded-full border-4 border-white shadow-sm" />
                <div className="bg-white p-6 rounded-2xl border border-slate-200 group-hover:border-violet-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.org}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-violet-600 block">{item.result}</span>
                      <span className="text-xs text-slate-400">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Testimonials</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">General Counsel Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "DEMS+ transformed our e-discovery process. We're now 5x faster with 100% data integrity.", author: "Sarah Chen, GC", firm: "Global Bank" },
              { quote: "The chain-of-custody features are unparalleled. Every piece of evidence is fully traceable.", author: "James Rodriguez, GC", firm: "Tech Corp" },
              { quote: "We've reduced litigation costs by 60% while improving evidence quality.", author: "Emily Watson, GC", firm: "Insurance Group" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 mb-3" />
                <p className="text-slate-700 text-sm leading-relaxed">"{item.quote}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-bold text-sm text-slate-900">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.firm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">Archive</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Whitepapers & Verified Datasets</h2>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-violet-600 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI in Digital Forensics", type: "Whitepaper", pages: "48", date: "2026" },
              { title: "Blockchain for Chain of Custody", type: "Research Paper", pages: "32", date: "2025" },
              { title: "Global Compliance Framework", type: "Guide", pages: "56", date: "2025" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <FileText className="w-4 h-4" />
                  <span>{item.type}</span>
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{item.pages} pages</span>
                  <span className="text-slate-400">{item.date}</span>
                </div>
                <button className="mt-3 text-sm font-bold text-violet-600 flex items-center gap-1">
                  Download <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Scale Your Investigative Capabilities</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Join the leading organizations using DEMS+ for secure evidence management.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/demo" className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-200">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};