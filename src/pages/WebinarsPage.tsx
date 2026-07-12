import React from "react";
import { Link } from "react-router-dom";
import {
  Video, Calendar, Clock, Users, Play, ArrowRight, Filter,  Sparkles,
  Zap, Target,  Layers,  Shield,
} from "lucide-react";

export const WebinarsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-[#1E1B4B] to-indigo-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 border border-sky-400/30">
                  <Video className="w-3.5 h-3.5 mr-1.5" />
                  Live & On-Demand Symposia
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30">
                  <Zap className="w-3.5 h-3.5 mr-1.5" />
                  CLE Certified
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Forensic Briefing
                <span className="text-sky-300 block">Interface</span>
              </h1>
              <p className="text-lg text-sky-200 font-light max-w-2xl leading-relaxed">
                Deep technical briefings on digital forensics, asset isolation, and compliance
                frameworks. Learn from industry experts and engineering leads.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-sky-50 transition-all">
                  <Calendar className="w-4 h-4" />
                  View Upcoming Sessions
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500/20 border border-sky-400/30 text-white font-bold rounded-xl hover:bg-sky-500/30 transition-all">
                  <Play className="w-4 h-4" />
                  Watch Latest Recording
                </button>
              </div>
            </div>
            <div className="lg:w-96 flex-shrink-0">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-sky-300">Next Live Session</span>
                  <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-full">Register Now</span>
                </div>
                <h3 className="text-xl font-bold">AI-Powered Evidence Processing</h3>
                <p className="text-sm text-sky-200 mt-2">March 15, 2026 • 2:00 PM EST</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-sky-300">
                  <Users className="w-4 h-4" />
                  <span>342 registered</span>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-white text-[#1E1B4B] font-bold rounded-lg hover:bg-sky-50 transition-all">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Upcoming</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Imminent Interactive Symposia</h2>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                All Topics
              </button>
              <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg text-sm font-bold hover:bg-sky-200 transition-colors">
                <Filter className="w-4 h-4 inline mr-1" />
                Filter
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zero-Knowledge Proofs in Chain of Custody", date: "Mar 22, 2026", time: "11:00 AM EST", speakers: "2", level: "Advanced" },
              { title: "Multi-Jurisdictional Data Compliance", date: "Apr 5, 2026", time: "2:00 PM EST", speakers: "3", level: "Intermediate" },
              { title: "Automated Metadata Extraction at Scale", date: "Apr 18, 2026", time: "1:00 PM EST", speakers: "2", level: "Beginner" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:border-sky-200">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${item.level === "Advanced" ? "bg-rose-100 text-rose-700" : item.level === "Intermediate" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {item.level}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {item.speakers} speakers</span>
                </div>
                <button className="mt-4 w-full py-2 bg-sky-50 text-sky-700 font-bold rounded-lg border border-sky-200 group-hover:bg-sky-100 transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Library */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">On-Demand</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">On-Demand Intelligence Vault</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Access past sessions and learn at your own pace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Distributed Evidence Storage Architecture", views: "2.4k", duration: "45 min", date: "Feb 2026" },
              { title: "Advanced Search & Pattern Detection", views: "1.8k", duration: "38 min", date: "Jan 2026" },
              { title: "Chain of Custody Best Practices", views: "3.1k", duration: "52 min", date: "Dec 2025" },
              { title: "Compliance Automation with DEMS+", views: "1.5k", duration: "41 min", date: "Nov 2025" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-5 rounded-xl border border-slate-200 hover:shadow-lg transition-all flex items-center gap-4">
                <div className="w-20 h-20 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-colors">
                  <Play className="w-8 h-8 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-sky-600 transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>{item.views} views</span>
                    <span>{item.duration}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
                <button className="text-sky-600 hover:text-sky-800">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-sm font-bold text-sky-600 hover:text-sky-800">View All Recordings →</button>
          </div>
        </div>
      </section>

      {/* Masterclass Series */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Masterclass</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Masterclass Operational Arrays</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Deep Evidence Processing", modules: "6 modules", level: "Advanced", icon: Layers },
              { title: "Forensic Architecture Design", modules: "5 modules", level: "Expert", icon: Target },
              { title: "Compliance Engineering", modules: "4 modules", level: "Intermediate", icon: Shield }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-sky-300 transition-all">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.modules}</p>
                <span className={`inline-block mt-3 text-xs px-2 py-0.5 rounded font-bold ${item.level === "Advanced" ? "bg-rose-100 text-rose-700" : item.level === "Expert" ? "bg-violet-100 text-violet-700" : "bg-emerald-100 text-emerald-700"}`}>
                  {item.level}
                </span>
                <button className="mt-4 w-full py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-sky-50 hover:border-sky-200 transition-all">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Forums */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Forums</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Judicial & Technologist Forums</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { topic: "Admissibility of Digital Evidence", panelists: "5", date: "Mar 2026" },
              { topic: "AI in Legal Discovery", panelists: "4", date: "Feb 2026" },
              { topic: "Cross-Border Data Transfer", panelists: "6", date: "Jan 2026" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{item.topic}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {item.panelists} panelists</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {item.date}</span>
                    </div>
                  </div>
                  <button className="text-sm font-bold text-sky-600 hover:text-sky-800">Watch →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">AI Innovation</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Leveraging Neural Models in Deep Evidence Processing</h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Learn how to deploy AI models for automated evidence classification,
                pattern detection, and predictive analytics within your DEMS+ environment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg text-sm font-bold hover:bg-sky-200 transition-colors">
                  Watch Session
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                  Download Resources
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-900 to-[#1E1B4B] p-8 rounded-2xl text-white">
              <div className="flex items-center gap-2 text-sm text-sky-300 mb-4">
                <Sparkles className="w-5 h-5" />
                <span>AI Model Performance</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Classification Accuracy", value: "97.8%" },
                  { label: "Pattern Detection", value: "94.2%" },
                  { label: "Processing Speed", value: "12ms/record" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="text-sky-300">{item.value}</span>
                    </div>
                    <div className="w-full h-2 bg-sky-500/30 rounded-full mt-1">
                      <div className={`h-full bg-sky-400 rounded-full ${idx === 0 ? "w-[98%]" : idx === 1 ? "w-[94%]" : "w-[90%]"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Speakers</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">Distinguished Academic & Engineering Panel</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Sarah Mitchell", role: "Chief Security Architect", org: "DEMS+" },
              { name: "Prof. James Chen", role: "Digital Forensics", org: "MIT" },
              { name: "Dr. Emily Davis", role: "Compliance Engineering", org: "Stanford" },
              { name: "Michael Torres", role: "E-Discovery Director", org: "Global Law" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-black text-sky-600">{item.name.charAt(0)}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-500">{item.role}</p>
                <p className="text-xs text-slate-400 mt-1">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLE Section */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-8 border border-sky-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">CLE Certified</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Continuing Legal Education Track</h3>
                <p className="text-slate-600 text-sm mt-2">Earn CLE credits while mastering DEMS+ forensic capabilities.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-sky-600">12+</span>
                <span className="text-sm text-slate-500">Credits Available</span>
                <button className="px-6 py-2 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors">
                  View Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Enroll in the Next Briefing Cycle</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Subscribe to our webinar calendar and never miss a session.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-200">
              Subscribe Now
            </Link>
            <Link to="/demo" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              View Calendar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};