import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Terminal,
  HelpCircle,
  ChevronDown,
  Check,
  Search,
  Shield,
  RefreshCw,
  Radio,
  Archive,
  HardDrive,
  HelpCircle as HelpIcon,
  Flame,
  Sliders,
  ChevronRight,
} from "lucide-react";

export const BookDemoPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    clearanceLevel: "Standard Enterprise Security",
    deploymentMode: "SaaS Cloud Managed",
    primaryUseCase: "Secure Document Repository Management",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Micro-UI Interactivity States
  const [selectedDate, setSelectedDate] = useState<string>("2026-07-06");
  const [selectedTime, setSelectedTime] = useState<string>("14:00");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeSegment, setActiveSegment] = useState<
    "firms" | "corporations" | "agencies"
  >("firms");

  // New Section Interaction States
  const [activeTabSec16, setActiveTabSec16] = useState<
    "intake" | "review" | "export"
  >("intake");
  const [simulatedBreachPrevented, setSimulatedBreachPrevented] =
    useState<boolean>(false);

  // Dynamic Calculator States
  const [docCount, setDocCount] = useState<number>(250); // in thousands
  const [reviewers, setReviewers] = useState<number>(15);

  // Simulated live file ingestion tracker state
  const [ingestIndex, setIngestIndex] = useState<number>(0);
  const ingestionStream = [
    {
      name: "SEC_FILING_2026_Q2.pdf",
      status: "Indexed & OCR Complete",
      isolation: "Isolated Namespace A",
    },
    {
      name: "LITIGATION_CONFIDENTIAL_EXHIBIT.docx",
      status: "Auto-Redacting PII",
      isolation: "Strict Access Tier 1",
    },
    {
      name: "RETENTION_POLICY_ARCHIVE.zip",
      status: "Immutable Lifecycle Locked",
      isolation: "Cold Storage Block",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIngestIndex((prev) => (prev + 1) % ingestionStream.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [ingestionStream.length]);

  // Derived metrics for value calculator
  const hoursSaved = Math.round(docCount * 0.4 + reviewers * 8);
  const efficiencyIndex = Math.min(99, Math.round(75 + reviewers * 1.2));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B] antialiased selection:bg-indigo-600 selection:text-white">
      {/* SECTION 1: INDUSTRIAL SPLIT HERO (Value Prop + Direct Validation Hook) */}
      <section className="relative bg-[#030712] py-28 overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#111827] border border-gray-800 rounded-full px-4 py-1.5 mb-6">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase font-bold">
              INTERACTIVE DEPLOYMENT STAGING
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-5xl mx-auto mb-6 leading-[1.1]">
            Take Absolute Control Over Your Enterprise Knowledge Ecosystem
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-4">
            See how DEMS+ unifies unstructured content, legacy folder
            frameworks, and high-velocity compliance parameters into one secure
            workspace.
          </p>
        </div>
      </section>

      {/* SECTION 2: ROLE & AUDIENCE SEGMENTATION CONTROLLER */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Tailored Environments
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Select Your Segment Interface
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-3xl mx-auto mb-12">
            {(["firms", "corporations", "agencies"] as const).map((seg) => (
              <button
                key={seg}
                onClick={() => setActiveSegment(seg)}
                className={`px-6 py-4 rounded-xl font-bold text-sm border text-left flex items-center justify-between transition-all ${activeSegment === seg ? "bg-indigo-600 border-transparent text-white shadow-md" : "bg-[#F8FAFC] border-gray-200 text-gray-700 hover:bg-gray-50"}`}
              >
                <span>
                  {seg === "firms" && "⚖️ For Law Firms"}
                  {seg === "corporations" && "🏢 For Enterprise Corporations"}
                  {seg === "agencies" && "🏛️ For Government Agencies"}
                </span>
                <ChevronRight
                  className={`w-4 h-4 opacity-60 ${activeSegment === seg ? "translate-x-1" : ""}`}
                />
              </button>
            ))}
          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            {activeSegment === "firms" && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#0F172A]">
                  Isolate Workspaces & Safeguard Client Trust
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Automate folder generation pipelines directly mapped to
                  practice areas. Empower litigation teams with lightning-fast
                  keyword lookup sweeps and native redacting toolsets across
                  active matters.
                </p>
              </div>
            )}
            {activeSegment === "corporations" && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#0F172A]">
                  Mitigate Internal Regulatory Risks
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Centralize contract retention, enforce automated compliance
                  boundaries, and systematically eliminate information leaks
                  across departments without adding friction to daily execution
                  loops.
                </p>
              </div>
            )}
            {activeSegment === "agencies" && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#0F172A]">
                  Public Records Efficiency & FOIA Readiness
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Process high-volume discovery data under tight deadlines. Use
                  system-enforced append-only record tracking to provide
                  courtroom-ready proof of system data integrity.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUE CAPABILITY METRIC CONSOLE (Form Row Placement) */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Interactive Schedule Input Block */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-gray-200 p-8 rounded-3xl shadow-sm space-y-6">
              {!isSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="text-lg font-black text-[#0F172A] tracking-tight border-b border-gray-200 pb-3">
                    Configure Session Context Parameters
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Contact Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Sarah Jenkins"
                        className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Professional Domain Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jenkins@firm.com"
                        className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Corporate entity Name
                      </label>
                      <input
                        required
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Global Logistics Corp"
                        className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Primary Focus Requirement
                      </label>
                      <select
                        name="primaryUseCase"
                        value={formData.primaryUseCase}
                        onChange={handleInputChange}
                        className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none"
                      >
                        <option>Secure Document Repository Management</option>
                        <option>Automated Ingestion & AI Redaction</option>
                        <option>High-Velocity Discovery Audit Trails</option>
                      </select>
                    </div>
                  </div>

                  {/* Micro Date/Time Layout Elements */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Target Date
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["2026-07-06", "2026-07-07"].map((d) => (
                          <div
                            key={d}
                            onClick={() => setSelectedDate(d)}
                            className={`p-2.5 rounded-xl text-center cursor-pointer border text-sm font-bold ${selectedDate === d ? "bg-indigo-600 text-white border-transparent" : "bg-white text-gray-600 border-gray-200"}`}
                          >
                            {d === "2026-07-06" ? "Mon Jul 06" : "Tue Jul 07"}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-gray-500 uppercase">
                        Window Select (EST)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["10:00", "14:30"].map((t) => (
                          <div
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`p-2.5 rounded-xl text-center cursor-pointer border text-sm font-mono font-bold ${selectedTime === t ? "bg-gray-900 text-white border-transparent" : "bg-white text-gray-600 border-gray-200"}`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    <span>Lock In My Architecture Showcase</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-[#0F172A]">
                    Demonstration Route Reserved
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto">
                    Your environment setup profile has been queued for{" "}
                    <span className="font-bold text-indigo-600 font-mono">
                      {selectedDate}
                    </span>{" "}
                    at{" "}
                    <span className="font-bold text-indigo-600 font-mono">
                      {selectedTime}
                    </span>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* Credibility Sidebar */}
            <div className="lg:col-span-5 bg-[#030712] rounded-2xl p-6 text-white space-y-6">
              <span className="text-xs font-mono tracking-widest text-indigo-400 font-bold block uppercase">
                // OPERATIONAL FRAMEWORK GUARANTEES
              </span>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-sm">
                      Granular Access Sovereignty
                    </h5>
                    <p className="text-gray-400 mt-0.5 text-xs">
                      Enforce dynamic role controls down to individual database
                      rows and file metadata blocks automatically.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RefreshCw className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <h5 className="font-bold text-white text-sm">
                      Frictionless Lifecycle Archiving
                    </h5>
                    <p className="text-gray-400 mt-0.5 text-xs">
                      Enforce compliance parameters that seamlessly archive
                      obsolete organizational content blocks into read-only
                      files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE CONTENT EFFICIENCY RETIREMENT CALCULATOR */}
      <section className="bg-[#F8FAFC] py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Impact Analytics
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Projected Workspace Resource Optimization
            </h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span className="text-gray-500">
                    ACTIVE UNSTRUCTURED FILE VAULT VALUE
                  </span>
                  <span className="text-indigo-600 font-black">
                    {docCount}k Documents
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={docCount}
                  onChange={(e) => setDocCount(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span className="text-gray-500">
                    CONCURRENT ACCESS PRIVILEGE USERS
                  </span>
                  <span className="text-indigo-600 font-black">
                    {reviewers} System Seats
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={reviewers}
                  onChange={(e) => setReviewers(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 font-mono text-sm">
              <div className="bg-[#030712] p-5 rounded-xl border border-gray-800 text-left">
                <span className="text-gray-500 block mb-1">
                  ESTIMATED SEARCH HOURS SAVED / MO
                </span>
                <span className="text-3xl font-black text-white">
                  {hoursSaved} Hours
                </span>
              </div>
              <div className="bg-[#030712] p-5 rounded-xl border border-gray-800 text-left">
                <span className="text-gray-500 block mb-1">
                  COMPLIANCE RISK COVERAGE CAP
                </span>
                <span className="text-3xl font-black text-emerald-400">
                  {efficiencyIndex}% Assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: IMMUTABLE INGESTION LIVESTREAM MONITOR */}
      <section className="bg-[#030712] py-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 font-mono text-sm">
          <div className="flex items-center space-x-2 text-indigo-400 mb-6 font-bold">
            <Terminal className="w-4 h-4 animate-spin" />
            <span>SIMULATED SYSTEM PIPELINE PARSING BLOCK</span>
          </div>
          <div className="bg-[#0B0F19] border border-gray-800 rounded-xl p-5 space-y-3">
            <div className="grid grid-cols-3 text-gray-500 font-bold border-b border-gray-800 pb-2">
              <span>TARGET FILENAME</span>
              <span>INDEX PARSE STATE</span>
              <span className="text-right">ISOLATION ROUTE</span>
            </div>
            <div className="grid grid-cols-3 text-white py-1">
              <span className="truncate text-indigo-300 font-bold">
                {ingestionStream[ingestIndex].name}
              </span>
              <span className="text-emerald-400 font-bold">
                {ingestionStream[ingestIndex].status}
              </span>
              <span className="text-right text-gray-400">
                {ingestionStream[ingestIndex].isolation}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: KNOWLEDGE DISCOVERY ADVANCED SEARCH PREVIEW WINDOW */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Instant Retrieval
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Multi-Dimensional Boolean Search Array
            </h3>
          </div>
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                readOnly
                value="type:document policy_class:confidential status:active"
                className="w-full text-sm text-[#0F172A] bg-transparent font-mono focus:outline-none"
              />
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center text-xs font-mono border-b border-gray-100 pb-2 text-gray-400">
                <span>MATCHING ASSETS FOUND (3)</span>
                <span className="text-emerald-500 font-bold">
                  QUERY COMPLETED IN 4ms
                </span>
              </div>
              <p className="text-sm font-bold text-[#0F172A]">
                » NDA_Master_Corporate_Signatures_2026.pdf
              </p>
              <p className="text-sm font-bold text-[#0F172A]">
                » Risk_Assessment_External_Audit_V3.docx
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DETAILED COMPLIANCE RECTIFICATION PROGRESS MATRIX */}
      <section className="bg-[#F8FAFC] py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest block mb-1">
              Failsafe Controls
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Vulnerability Vector Resolution Mapping
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-sm">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <span className="font-mono text-xs font-bold text-red-500 block">
                // TRADITIONAL WORKSPACE STORAGE GAP
              </span>
              <p className="font-bold text-[#0F172A]">
                Administrative Credential Compromise
              </p>
              <p className="text-gray-500 text-xs">
                Compromised master access tokens inside regular infrastructure
                tools allow comprehensive, un-tracked horizontal downloads
                across sensitive legal vaults.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <span className="font-mono text-xs font-bold text-emerald-500 block">
                // DEMS+ NATIVE ARCHITECTURE RECTIFICATION
              </span>
              <p className="font-bold text-[#0F172A]">
                Asymmetric Hardware Security Envelopment
              </p>
              <p className="text-gray-500 text-xs">
                Files require cryptographically isolated validation keys
                isolated away from standard system rows, rendering external
                access tokens instantly inert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PLATFORM ATTRIBUTION BADGE BOARD */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-6">
            VALIDATED ENTERPRISE MATURITY PROFILES
          </span>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono font-bold text-gray-600">
            {[
              "SOC2 TYPE II COMPLIANT",
              "CJIS BOUNDARY SECURED",
              "FIPS 140-3 ISO ENVELOPE",
              "ISO 27001 FRAMEWORK ENFORCED",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-2 bg-[#F8FAFC] border border-gray-200 rounded-lg shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: HORIZONTAL STEPPED BLUEPRINT ONBOARDING OVERVIEW */}
      <section className="bg-[#F8FAFC] py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Onboarding Milestones
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Path to Secure Ingestion Workspace
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-3">
              <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                STAGE 01
              </span>
              <h4 className="font-bold text-[#0F172A] text-sm">
                System Namespace Mapping
              </h4>
              <p className="text-gray-500 leading-relaxed text-xs">
                We establish separate client single-tenant folder trees to
                mirror your organization's custom permissions framework
                directly.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-3">
              <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                STAGE 02
              </span>
              <h4 className="font-bold text-[#0F172A] text-sm">
                Automated Redaction Seed Testing
              </h4>
              <p className="text-gray-500 leading-relaxed text-xs">
                Run automated workflows using mock datasets to verify that
                personally identifiable data elements are automatically parsed
                and hidden.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-3">
              <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                STAGE 03
              </span>
              <h4 className="font-bold text-[#0F172A] text-sm">
                Audit Certificate Handshake
              </h4>
              <p className="text-gray-500 leading-relaxed text-xs">
                Receive complete log readouts and infrastructure attestation
                documents for your internal compliance records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: USER PRIVILEGE MATRIX TOOLBAR VISUALIZATION */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-sm">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">
              Granular Isolation
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Active Namespace Access Controls
            </h3>
          </div>
          <div className="border border-gray-200 rounded-2xl overflow-hidden font-mono shadow-sm">
            <div className="bg-[#F8FAFC] border-b border-gray-200 px-4 py-3 flex justify-between font-bold text-gray-500">
              <span>USER ROLE SCOPE</span>
              <span>FILE EXTENSION ACCESS</span>
              <span className="text-right">AUTHORIZATION VALUE</span>
            </div>
            <div className="divide-y divide-gray-100 px-4 text-gray-600">
              <div className="py-3 flex justify-between">
                <span className="font-bold text-[#0F172A]">
                  External Litigation Reviewer
                </span>
                <span>Restricted Folder B Only</span>
                <span className="text-indigo-600 font-bold">
                  ✓ DISCOVERY READ ONLY
                </span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="font-bold text-[#0F172A]">
                  Internal General Counsel
                </span>
                <span>Universal Root Directory</span>
                <span className="text-emerald-600 font-bold">
                  ✓ FULL EDIT & EXPORT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: IMMUTABLE AUDIT LOG COMPLIANCE ACCORDION */}
      <section className="bg-[#F8FAFC] py-20 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-mono font-bold text-indigo-600 block mb-1 uppercase">
              Sovereignty Review
            </span>
            <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
              Technical Handoff Clarifications
            </h3>
          </div>

          <div className="space-y-3 text-sm">
            {[
              {
                q: "How does the ingestion layout prevent administrative modification loops?",
                a: "DEMS+ routes all asset entry items through an append-only system structure. Once written, the system metadata cannot be modified or deleted by any user account level, protecting system history from tampering.",
              },
              {
                q: "Can we integrate existing active identity provider systems directly?",
                a: "Yes. The system connects seamlessly with enterprise single sign-on (SSO) configurations and SAML providers to inherit permission levels instantly upon provisioning.",
              },
              {
                q: "What is the physical storage regional distribution model during trials?",
                a: "All live tracking configurations and trial sandboxes operate out of isolated AWS GovCloud availability centers, ensuring domestic physical boundary compliance.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 font-bold text-[#0F172A] flex justify-between items-center bg-transparent"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-gray-500 border-t border-gray-100 leading-relaxed text-xs bg-[#F8FAFC]/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: CONTENT RETENTION RETIREMENT LIFECYCLE SCHEDULER */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto">
            <Archive className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Automated Retention Policy Enforcement
          </h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Eliminate file clutter systematically. Set absolute time windows
            that automatically lock obsolete documentation or flag old
            workspaces for automated purging based on corporate guidelines.
          </p>
        </div>
      </section>

      {/* SECTION 13: STORAGE INFRASTRUCTURE NODE DISTRIBUTION BLOCK */}
      <section className="bg-[#030712] py-20 border-b border-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-wider text-indigo-400 uppercase font-bold">
                // SECURE STORAGE ARCHITECTURE
              </span>
              <h4 className="text-xl md:text-3xl font-black tracking-tight">
                Decentralized Content Redundancy
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                DEMS+ splits files across safe cloud availability networks. This
                architecture prevents data loss or unauthorized tracking,
                keeping information accessible even during network updates.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="bg-[#0B0F19] p-5 rounded-xl border border-gray-800 space-y-2">
                <HardDrive className="w-4 h-4 text-indigo-400" />
                <h5 className="font-bold text-white">Primary Hot Pool</h5>
                <p className="text-xs text-gray-500">
                  Optimized for rapid processing, editing, and concurrent user
                  searches on active case files.
                </p>
              </div>
              <div className="bg-[#0B0F19] p-5 rounded-xl border border-gray-800 space-y-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <h5 className="font-bold text-white">Cold Vault Archiving</h5>
                <p className="text-xs text-gray-500">
                  Immutable write-once, read-many (WORM) storage tiers reserved
                  for statutory records compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: MULTI-TENANT BOUNDARY INTEGRITY CHECKER */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <span className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest block">
            Tenant Separation
          </span>
          <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">
            Complete Logical Resource Isolation
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            Your data is never co-mingled. Every environment utilizes distinct,
            individualized software-defined routing patterns to enforce zero
            horizontal visibility leaks across account groups.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 15: THE INSIDER LEAK PREVENTER (Visual Toggle Micro-UI Container) */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
                Data Loss Prevention
              </span>
              <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
                Simulated Threat Interception Engine
              </h3>
              <p className="text-sm text-gray-500">
                Traditional repositories fail when trusted insiders download
                documents in bulk. Toggle the DEMS+ dynamic defense engine to
                view how automated threat patterns protect mass exports
                instantly.
              </p>
              <button
                type="button"
                onClick={() =>
                  setSimulatedBreachPrevented(!simulatedBreachPrevented)
                }
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${simulatedBreachPrevented ? "bg-emerald-600 border-transparent text-white" : "bg-gray-900 border-transparent text-white"}`}
              >
                {simulatedBreachPrevented
                  ? "⚡ ACTIVE DEFENSE ENGAGED"
                  : "⚠️ TEST BULK DOWNLOAD TRIGGER"}
              </button>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#030712] rounded-2xl p-6 border border-gray-800 font-mono text-xs text-gray-400 space-y-4">
                <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-2">
                  <span>USER: analyst_09@enterprise.org</span>
                  <span>ACTION: EXPORT_ALL_M&A_RECORDS</span>
                </div>
                {simulatedBreachPrevented ? (
                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-4 space-y-2">
                    <p className="text-emerald-400 font-bold">
                      ✓ SECURITY ACTION ENFORCED
                    </p>
                    <p className="text-gray-400 text-[11px]">
                      System detected anomaly (50+ bulk downloads in &lt; 3
                      seconds). Threshold boundary triggered. Session locked,
                      hardware token verification requested.
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-950/40 border border-red-800/60 rounded-xl p-4 space-y-2">
                    <p className="text-red-400 font-bold">
                      ❗ UNMITIGATED VOLUMETRIC EXTRIPATION RISK
                    </p>
                    <p className="text-gray-400 text-[11px]">
                      Standard repositories allow unrestricted record pulling
                      under compromised administrator credentials without
                      threshold triggers.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 16: WORKFLOW LIFECYCLE TRACKER (Horizontal Micro-Tabs Console) */}
      {/* ========================================================================= */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block">
              Operational Flow
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
              The Lifecycle Pipeline, Reimagined
            </h3>
          </div>
          <div className="flex justify-center border-b border-gray-200 mb-8 font-mono text-xs">
            {(["intake", "review", "export"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTabSec16(tab)}
                className={`px-6 py-3 font-bold border-b-2 transition-all ${activeTabSec16 === tab ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-400 hover:text-gray-600"}`}
              >
                {tab === "intake" && "📥 Smart Ingest"}
                {tab === "review" && "👁️ Visual Auditing"}
                {tab === "export" && "📤 Protected Release"}
              </button>
            ))}
          </div>
          <div className="p-6 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-sm text-gray-500">
            {activeTabSec16 === "intake" && (
              <p>
                <strong>Automated Content Tagging:</strong> Drop folders
                instantly via secure APIs. DEMS+ runs continuous text processing
                to classify record retention rules without manual tag entry
                errors.
              </p>
            )}
            {activeTabSec16 === "review" && (
              <p>
                <strong>Contextual Identity Feeds:</strong> View who modified,
                reviewed, or shared file elements across the system workspace in
                a single, unalterable visual activity thread.
              </p>
            )}
            {activeTabSec16 === "export" && (
              <p>
                <strong>Sovereign Domain Protection:</strong> Ensure outside
                stakeholders only download data covered by active permissions
                matrix keys, keeping permanent records safe from accidental
                leaks.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 17: LITIGATION RISK VS VALUE COMPARATOR MATRIX */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
              Structural Audit
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
              How DEMS+ Replaces Outdated Systems
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-sm">
            <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-[#F8FAFC]">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A]">
                Traditional Silo Disadvantages
              </h4>
              <ul className="space-y-2 text-gray-500 list-disc list-inside text-xs">
                <li>
                  Fragmented metadata records scattered across disconnected
                  shared arrays.
                </li>
                <li>
                  Manual, slow document review processes that miss confidential
                  PII fields.
                </li>
                <li>
                  Unaltered storage footprints vulnerable to internal and
                  external tracking loops.
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-[#F8FAFC]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Sliders className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-[#0F172A]">
                DEMS+ Native Infrastructure Wins
              </h4>
              <ul className="space-y-2 text-gray-500 list-disc list-inside text-xs">
                <li>
                  Unified unstructured content spaces managed under a single
                  search index.
                </li>
                <li>
                  Automated pipeline filtering that isolates sensitive data
                  structures out of view.
                </li>
                <li>
                  Append-only system security layers that withstand system
                  modifications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 18: CORE INFRASTRUCTURE SCALE MATURITY FOOTPRINT */}
      {/* ========================================================================= */}
      <section className="bg-[#030712] py-24 text-white border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 font-mono text-center">
            <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl">
              <span className="text-3xl font-black text-white block">100%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider block mt-2">
                Sovereign Encryption
              </span>
            </div>
            <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl">
              <span className="text-3xl font-black text-indigo-400 block">
                &lt; 1 Hour
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider block mt-2">
                Tenant Onboarding
              </span>
            </div>
            <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl">
              <span className="text-3xl font-black text-white block">Zero</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider block mt-2">
                Data Overwrite Leaks
              </span>
            </div>
            <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl">
              <span className="text-3xl font-black text-emerald-400 block">
                SOC2 Type II
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider block mt-2">
                Certified Security Bounds
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: TERMINATION BAR FOOTER CLOSE */}
      <section className="bg-[#030712] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Ready to Modernize Your Content Controls?
          </h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Initialize your tailored corporate landscape review session with our
            systems deployment desk today.
          </p>
          <div className="pt-6 text-xs text-gray-600 font-mono tracking-wider uppercase">
            DEMS+ COMPLIANCE KNOWLEDGE MANAGEMENT ARCHITECTURE // RUNTIME
            VERIFIED 2026
          </div>
        </div>
      </section>
    </div>
  );
};
