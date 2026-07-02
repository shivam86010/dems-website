// InterviewDetailPage.tsx - Premium Design
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  Bookmark,
  MessageSquare,
  Mail,
  Star,
  BookOpen,
  CheckCircle,
  Zap,
  Users,
  FileText,
  Quote,
  Briefcase,
  Mic,
  Podcast,
  Headphones,
  Play,
  Pause,
  Volume2,
  ChevronDown,
} from "lucide-react";

// ============================================================================
// CUSTOM SVG ICONS
// ============================================================================

const TwitterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const CopyIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

// ============================================================================
// TYPES
// ============================================================================

interface Interview {
  id: string;
  name: string;
  role: string;
  org: string;
  quote: string;
  image: string;
  date: string;
  topics: string[];
  content?: string;
  views?: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
  duration?: string;
  podcastUrl?: string;
  transcript?: string;
}

// ============================================================================
// MOCK DATA
// ============================================================================

const INTERVIEWS_DATA: Interview[] = [
  {
    id: "1",
    name: "Jennifer Park",
    role: "Chief Compliance Officer",
    org: "Global Financial Services",
    quote:
      "DEMS+ has revolutionized how we approach compliance audits. We've reduced audit preparation time by 60% while improving accuracy.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    date: "March 15, 2026",
    duration: "45 min",
    views: "12.4k",
    likes: 347,
    comments: 89,
    featured: true,
    topics: [
      "Compliance Automation",
      "Risk Management",
      "Audit Transformation",
    ],
    content: `
      <div class="interview-intro">
        <h2>Transforming Compliance Through Technology</h2>
        <p>In this exclusive interview, Jennifer Park shares her insights on how DEMS+ is revolutionizing compliance auditing in the financial services sector.</p>
      </div>

      <h3>The Challenge of Modern Compliance</h3>
      <p>As Chief Compliance Officer at a major financial institution, Jennifer Park oversees a complex web of regulatory requirements across multiple jurisdictions. Traditional compliance methods were proving inadequate for the volume and velocity of modern financial transactions.</p>
      
      <p>Key challenges included:</p>
      <ul>
        <li>Manual audit processes taking weeks to complete</li>
        <li>Inconsistent application of compliance standards</li>
        <li>Difficulty tracking evidence across departments</li>
        <li>Increasing regulatory scrutiny and penalties</li>
      </ul>

      <h3>The DEMS+ Solution</h3>
      <p>Jennifer shares how DEMS+ transformed their compliance operations:</p>
      <ul>
        <li><strong>60% Reduction in Audit Time:</strong> Automated evidence collection and verification</li>
        <li><strong>95% Accuracy Rate:</strong> AI-powered compliance checking</li>
        <li><strong>Real-Time Monitoring:</strong> Continuous compliance tracking</li>
        <li><strong>Complete Audit Trail:</strong> Immutable chain of custody for all evidence</li>
      </ul>

      <h3>Advice for Compliance Leaders</h3>
      <p>Jennifer offers practical advice for other compliance leaders considering digital transformation:</p>
      <ul>
        <li>Start with a clear compliance strategy before implementing technology</li>
        <li>Invest in training and change management</li>
        <li>Focus on data quality and integrity from day one</li>
        <li>Build strong partnerships between compliance and IT teams</li>
      </ul>

      <h3>Looking Ahead</h3>
      <p>Jennifer sees a future where compliance becomes a competitive advantage rather than a burden. Organizations that embrace technology-enabled compliance will be better positioned to navigate regulatory complexity and build trust with stakeholders.</p>
    `,
  },
  {
    id: "2",
    name: "Robert Chen",
    role: "E-Discovery Director",
    org: "Fortune 500 Law Firm",
    quote:
      "The efficiency gains are unprecedented in my 20-year career. DEMS+ has transformed our discovery process from weeks to hours.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    date: "February 28, 2026",
    duration: "38 min",
    views: "8.7k",
    likes: 256,
    comments: 67,
    topics: ["E-Discovery", "Legal Technology", "Process Optimization"],
    content: `
      <div class="interview-intro">
        <h2>Revolutionizing E-Discovery at Scale</h2>
        <p>Robert Chen discusses how DEMS+ has fundamentally transformed e-discovery operations at one of the world's largest law firms.</p>
      </div>

      <h3>The E-Discovery Challenge</h3>
      <p>With over two decades of experience in e-discovery, Robert has witnessed the exponential growth of data volumes and the increasing complexity of discovery requests.</p>
      
      <h3>Transforming Discovery Operations</h3>
      <p>DEMS+ enabled Robert's team to achieve unprecedented efficiency gains:</p>
      <ul>
        <li><strong>From Weeks to Hours:</strong> Discovery timelines compressed dramatically</li>
        <li><strong>Petabyte-Scale Processing:</strong> Handle massive data volumes effortlessly</li>
        <li><strong>Sub-Second Search:</strong> Instant access to relevant evidence</li>
        <li><strong>Defensible Workflows:</strong> Complete chain of custody maintained</li>
      </ul>

      <h3>Key Insights for Legal Professionals</h3>
      <p>Robert shares his lessons learned:</p>
      <ul>
        <li>Invest in technology that scales with your needs</li>
        <li>Maintain focus on data integrity and security</li>
        <li>Build cross-functional expertise in legal and technology</li>
        <li>Stay ahead of emerging legal technology trends</li>
      </ul>
    `,
  },
  {
    id: "3",
    name: "Dr. Amanda Foster",
    role: "Digital Forensics Lead",
    org: "Global Consulting Firm",
    quote:
      "The chain-of-custody features are unparalleled. Every piece of evidence is fully traceable and court-ready.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    date: "January 20, 2026",
    duration: "52 min",
    views: "5.1k",
    likes: 203,
    comments: 52,
    featured: true,
    topics: ["Digital Forensics", "Evidence Integrity", "Chain of Custody"],
    content: `
      <div class="interview-intro">
        <h2>Building Trust Through Evidence Integrity</h2>
        <p>Dr. Amanda Foster discusses how DEMS+ ensures every piece of digital evidence meets the highest standards of integrity and admissibility.</p>
      </div>

      <h3>The Importance of Evidence Integrity</h3>
      <p>In digital forensics, evidence integrity is paramount. Dr. Foster explains how DEMS+ provides unprecedented chain-of-custody capabilities.</p>
      
      <h3>Key Features and Benefits</h3>
      <ul>
        <li><strong>Immutable Audit Trails:</strong> Every action recorded and verified</li>
        <li><strong>Cryptographic Verification:</strong> Tamper-evident evidence handling</li>
        <li><strong>Cross-Jurisdictional Trust:</strong> Evidence accepted across legal systems</li>
        <li><strong>Court-Ready Documentation:</strong> Complete chain of custody records</li>
      </ul>

      <h3>Implications for Digital Forensics</h3>
      <p>Dr. Foster sees DEMS+ as a game-changer for the digital forensics profession, enabling practitioners to work more efficiently while maintaining the highest standards of evidence integrity.</p>
    `,
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const InterviewDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [interview, setInterview] = useState<Interview | null>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const foundInterview = INTERVIEWS_DATA.find((p) => p.id === id);
    if (foundInterview) {
      setInterview(foundInterview);
      window.scrollTo(0, 0);
    } else {
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!interview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading interview...</p>
        </div>
      </div>
    );
  }

  const relatedInterviews = INTERVIEWS_DATA.filter(
    (p) => p.id !== interview.id,
  ).slice(0, 2);

  const wordCount = interview.content
    ? interview.content.split(/\s+/).length
    : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* ============================================================
        HERO SECTION - Premium Podcast/Interview Style
      ============================================================ */}
      <section className="relative overflow-hidden min-h-[50vh] lg:min-h-[55vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={interview.image}
            alt={interview.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/95 via-[#1E1B4B]/90 to-indigo-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-violet-500/10 to-transparent" />
        <div className="absolute top-10 right-10 w-32 h-32 border border-violet-400/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-violet-400/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-violet-300/70 hover:text-violet-200 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-4 py-1.5 bg-violet-500/30 backdrop-blur border border-violet-400/30 text-violet-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5" />
                  Exclusive Interview
                </span>
                {interview.featured && (
                  <span className="px-4 py-1.5 bg-amber-500/30 backdrop-blur border border-amber-400/30 text-amber-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Featured
                  </span>
                )}
                <span className="px-4 py-1.5 bg-emerald-500/30 backdrop-blur border border-emerald-400/30 text-emerald-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <Podcast className="w-3.5 h-3.5" />
                  Podcast Available
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-white">
                <span className="bg-gradient-to-r from-violet-200 via-white to-violet-100 bg-clip-text text-transparent">
                  In Conversation with {interview.name}
                </span>
              </h1>

              {/* Quote */}
              <div className="mt-4 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-xl">
                <Quote className="w-5 h-5 text-violet-300 mb-2" />
                <p className="text-white/80 text-lg italic">
                  "{interview.quote}"
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-violet-400/30 shadow-lg shadow-violet-500/20">
                    <img
                      src={interview.image}
                      alt={interview.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">
                      {interview.name}
                    </p>
                    <p className="text-sm text-violet-200/80">
                      {interview.role}
                    </p>
                    <p className="text-xs text-violet-300/60">
                      {interview.org}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {interview.date}
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {interview.duration}
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {interview.views} views
                  </span>
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mt-4">
                {interview.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-white/10 backdrop-blur border border-white/10 text-violet-200/80 text-xs rounded-full hover:bg-white/20 transition-all"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Podcast Player Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="w-5 h-5 text-violet-300" />
                  <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">
                    Listen to Interview
                  </span>
                </div>

                {/* Podcast Player */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-violet-500/30"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white font-medium">
                          {interview.duration}
                        </span>
                        <span className="text-white/50">Full Interview</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full mt-2">
                        <div className="w-1/3 h-full bg-violet-400 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-white/40">
                        <Volume2 className="w-3 h-3" />
                        <span>Audio available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transcript Button */}
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="mt-3 w-full px-4 py-2 bg-white/10 border border-white/10 text-white/80 rounded-xl hover:bg-white/20 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  {showTranscript ? "Hide Transcript" : "View Transcript"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${showTranscript ? "rotate-180" : ""}`}
                  />
                </button>

                {showTranscript && (
                  <div className="mt-3 p-3 bg-black/30 rounded-lg border border-white/10 max-h-40 overflow-y-auto">
                    <p className="text-white/60 text-xs leading-relaxed">
                      [00:00] Introduction to {interview.name}'s work at{" "}
                      {interview.org}...
                      <br />
                      [05:30] Discussion of key challenges in{" "}
                      {interview.topics[0]}...
                      <br />
                      [15:45] Insights on {interview.topics[1]} and industry
                      trends...
                      <br />
                      [30:00] Future outlook and advice for professionals...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        MAIN CONTENT - Premium Interview Layout
      ============================================================ */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Reading Progress */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-violet-50/50 rounded-2xl border border-violet-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <BookOpen className="w-4 h-4 text-violet-600" />
                  <span>{wordCount} words</span>
                </div>
                <div className="w-px h-6 bg-violet-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-violet-600" />
                  <span>{readingTime} min read</span>
                </div>
                <div className="w-px h-6 bg-violet-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-violet-600">
                  <Mic className="w-4 h-4" />
                  <span className="font-medium">Exclusive Interview</span>
                </div>
                <div className="w-px h-6 bg-violet-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Verified</span>
                </div>
              </div>

              {/* Quote Block - Distinct */}
              <div className="relative mb-8 p-8 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl border-l-4 border-violet-600">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-violet-300/30" />
                <p className="text-xl font-medium text-slate-700 italic leading-relaxed">
                  "{interview.quote}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={interview.image}
                      alt={interview.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900">
                      {interview.name}
                    </span>
                    <p className="text-xs text-slate-500">
                      {interview.role}, {interview.org}
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-slate max-w-none">
                <div
                  className="interview-content"
                  dangerouslySetInnerHTML={{ __html: interview.content || "" }}
                />
              </div>

              {/* Tags */}
              {interview.topics && (
                <div className="mt-12 pt-8 border-t border-violet-200">
                  <h4 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider">
                    Discussion Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {interview.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-violet-50 text-violet-700 text-sm font-medium rounded-full hover:bg-violet-100 transition-all cursor-pointer border border-violet-200"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & Actions */}
              <div className="mt-8 pt-8 border-t border-violet-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        liked
                          ? "bg-rose-50 text-rose-600 border border-rose-200 shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
                      />
                      <span>
                        {liked ? (interview.likes || 0) + 1 : interview.likes}
                      </span>
                    </button>
                    <button
                      onClick={() => setSaved(!saved)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        saved
                          ? "bg-violet-50 text-violet-600 border border-violet-200 shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <Bookmark
                        className={`w-5 h-5 ${saved ? "fill-violet-500 text-violet-500" : ""}`}
                      />
                      <span>{saved ? "Saved" : "Save"}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 font-medium mr-1">
                      Share:
                    </span>
                    <button className="p-2.5 bg-white hover:bg-sky-50 border border-slate-200 rounded-xl transition-all group">
                      <TwitterIcon className="w-4 h-4 text-slate-600 group-hover:text-sky-500 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl transition-all group">
                      <LinkedInIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl transition-all group">
                      <FacebookIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-700 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <CopyIcon className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <Mail className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-6 flex items-center gap-3 p-4 bg-white rounded-2xl border border-violet-100 shadow-sm">
                  <MessageSquare className="w-5 h-5 text-violet-600" />
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {interview.comments}
                    </span>{" "}
                    comments on this interview
                  </span>
                  <button className="ml-auto px-4 py-1.5 bg-violet-50 border border-violet-200 text-violet-700 text-sm font-medium rounded-lg hover:bg-violet-100 transition-colors">
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">
                {/* Expert Card */}
                <div className="bg-gradient-to-br from-violet-50 to-indigo-50/50 rounded-2xl p-6 border border-violet-100 shadow-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-violet-200 shadow-lg shadow-violet-200">
                      <img
                        src={interview.image}
                        alt={interview.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {interview.name}
                    </h4>
                    <p className="text-sm text-slate-500">{interview.role}</p>
                    <p className="text-sm text-violet-600 font-medium">
                      {interview.org}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3 h-3" />
                        Industry Leader
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />5 interviews
                      </span>
                      <span className="w-px h-4 bg-slate-300" />
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        3.2k followers
                      </span>
                    </div>
                    <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md shadow-violet-200 text-sm">
                      Follow Expert
                    </button>
                  </div>
                </div>

                {/* Related Interviews */}
                {relatedInterviews.length > 0 && (
                  <div className="bg-white rounded-2xl border border-violet-100 p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Podcast className="w-4 h-4 text-violet-600" />
                      More Interviews
                    </h4>
                    <div className="space-y-4">
                      {relatedInterviews.map((related) => (
                        <Link
                          key={related.id}
                          to={`/interview/${related.id}`}
                          className="group flex gap-3 items-start hover:bg-violet-50 p-2 rounded-xl transition-colors"
                        >
                          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-violet-100">
                            <img
                              src={related.image}
                              alt={related.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">
                              Interview
                            </span>
                            <h5 className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition-colors line-clamp-2 leading-snug">
                              {related.name} - {related.role}
                            </h5>
                            <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                              <Briefcase className="w-3 h-3" />
                              <span>{related.org}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subscribe Card */}
                <div className="relative overflow-hidden rounded-2xl p-6 text-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-violet-800" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-400/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="w-5 h-5 text-violet-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
                        Interview Series
                      </span>
                    </div>
                    <h4 className="text-xl font-bold">Subscribe for More</h4>
                    <p className="text-sm text-violet-100 mt-1">
                      Get exclusive interviews delivered to your inbox.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm text-slate-900 bg-white/95 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button className="px-5 py-2.5 bg-white text-violet-700 font-bold rounded-xl hover:bg-violet-50 transition-colors text-sm whitespace-nowrap shadow-lg shadow-violet-500/25">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-violet-200/70 mt-2">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        CTA SECTION - Premium
      ============================================================ */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-950 via-[#1E1B4B] to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-500/5 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Mic className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black">
            Stay Connected with Industry Leaders
          </h2>
          <p className="text-violet-200 mt-4 max-w-2xl mx-auto text-lg">
            Subscribe to receive exclusive interviews, insights, and
            conversations with legal technology leaders delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-violet-300/60 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all"
            />
            <button className="px-8 py-3.5 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-bold rounded-xl hover:from-violet-600 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-violet-300/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Monthly interviews
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Expert insights
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Free subscription
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};
