// OpinionColumnDetailPage.tsx - Unique Judicial Design
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
  Award,
  Users,
  FileText,
  Scale,
  Gavel,
  Quote,
  Library,
  ScrollText,
  ChevronDown,
  Shield,
  Briefcase,
  PenTool,
  ExternalLink,
  ThumbsUp,
  Share2,
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

interface OpinionColumn {
  id: string;
  title: string;
  author: string;
  role: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
  tags?: string[];
  views?: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
  court?: string;
  caseNumber?: string;
  decisionDate?: string;
}

// ============================================================================
// MOCK DATA
// ============================================================================

const OPINION_COLUMNS_DATA: OpinionColumn[] = [
  {
    id: "1",
    title: "The Future of Digital Evidence Admissibility",
    author: "Chief Justice Roberts",
    role: "Supreme Court of the United States",
    excerpt:
      "Courts must adapt to the evolving nature of digital evidence and its verification challenges. The traditional rules of evidence were designed for physical documents.",
    date: "March 15, 2026",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
    views: "4.8k",
    likes: 324,
    comments: 56,
    featured: true,
    court: "Supreme Court of the United States",
    caseNumber: "SC-2026-0042",
    decisionDate: "March 12, 2026",
    tags: ["Evidence Admissibility", "Digital Evidence", "Court Reform"],
    content: `
      <div class="judicial-header">
        <div class="case-metadata">
          <span class="case-number">Case No. SC-2026-0042</span>
          <span class="decision-date">Decided: March 12, 2026</span>
        </div>
      </div>

      <h2>A New Era for Digital Evidence</h2>
      <p>The rapid digitization of our world presents unprecedented challenges for the legal system. Courts that were designed to evaluate physical documents and tangible evidence now face the complex task of assessing digital evidence—evidence that can be manipulated, duplicated, and transmitted across borders in milliseconds.</p>
      
      <div class="legal-principle">
        <h4>Legal Principle</h4>
        <p>The fundamental question before this court is whether traditional evidentiary rules can accommodate the unique characteristics of digital evidence without compromising the integrity of judicial proceedings.</p>
      </div>
      
      <h3>The Evolution of Evidence Standards</h3>
      <p>For centuries, the rules of evidence were built around physical objects. The chain of custody was straightforward: you could see the document, touch it, and trace its journey from creation to courtroom. Digital evidence changes everything.</p>
      
      <p>Key considerations include:</p>
      <ul>
        <li><strong>Authentication:</strong> How do we verify that digital evidence is what it purports to be?</li>
        <li><strong>Integrity:</strong> How do we ensure that digital evidence hasn't been altered?</li>
        <li><strong>Chain of Custody:</strong> How do we track digital evidence that exists in multiple locations?</li>
        <li><strong>Privacy:</strong> How do we balance evidentiary needs with privacy rights?</li>
      </ul>
      
      <div class="court-holding">
        <h4>Holding of the Court</h4>
        <p>This court holds that digital evidence shall be admissible under the same foundational standards as physical evidence, provided that the proponent establishes authenticity through reliable technological means and demonstrates a complete chain of custody through cryptographic verification.</p>
      </div>
      
      <h3>Proposed Framework for Digital Evidence</h3>
      <p>Based on recent cases and emerging technologies, I propose a framework that balances traditional evidentiary principles with the realities of digital evidence:</p>
      <ul>
        <li><strong>Presumption of Authenticity:</strong> Digital evidence should be presumed authentic if it comes from a verified source</li>
        <li><strong>Technological Neutrality:</strong> Courts should focus on principles rather than specific technologies</li>
        <li><strong>Expert Engagement:</strong> Courts should engage qualified digital forensics experts</li>
        <li><strong>Continuous Evolution:</strong> Standards must evolve as technology evolves</li>
      </ul>
      
      <h3>Looking Forward</h3>
      <p>The legal system must embrace digital transformation while maintaining the fundamental principles of justice. This requires investment in training, technology, and procedural reform. The future of justice depends on our ability to adapt.</p>
    `,
  },
  {
    id: "2",
    title: "AI in the Courtroom: Promise and Peril",
    author: "Justice Elena Martinez",
    role: "Federal Appellate Court",
    excerpt:
      "Balancing technological advancement with fundamental due process requirements. AI can enhance judicial efficiency but must not compromise fairness.",
    date: "February 28, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
    views: "3.2k",
    likes: 215,
    comments: 42,
    court: "U.S. Court of Appeals, Ninth Circuit",
    caseNumber: "CA-2026-0187",
    decisionDate: "February 25, 2026",
    tags: ["AI in Courts", "Due Process", "Judicial Technology"],
    content: `
      <div class="judicial-header">
        <div class="case-metadata">
          <span class="case-number">Case No. CA-2026-0187</span>
          <span class="decision-date">Decided: February 25, 2026</span>
        </div>
      </div>

      <h2>AI and the Future of Justice</h2>
      <p>Artificial intelligence is rapidly transforming every aspect of society, and the courtroom is no exception. From predictive analytics to automated document review, AI offers powerful tools for enhancing judicial efficiency and accuracy.</p>
      
      <h3>The Promise of AI in Courts</h3>
      <p>When implemented thoughtfully, AI can deliver significant benefits:</p>
      <ul>
        <li>Reduced case processing times</li>
        <li>More consistent sentencing decisions</li>
        <li>Improved access to justice</li>
        <li>Enhanced evidence analysis</li>
      </ul>
      
      <h3>The Perils to Guard Against</h3>
      <p>However, AI also presents serious risks that must be addressed:</p>
      <ul>
        <li>Algorithmic bias that perpetuates discrimination</li>
        <li>Lack of transparency in decision-making</li>
        <li>Over-reliance on automated systems</li>
        <li>Erosion of judicial discretion</li>
      </ul>
      
      <h3>A Balanced Approach</h3>
      <p>To harness the benefits of AI while protecting due process rights, courts must:</p>
      <ul>
        <li>Require transparency in AI systems</li>
        <li>Maintain human oversight</li>
        <li>Conduct regular bias audits</li>
        <li>Ensure meaningful review of AI-assisted decisions</li>
      </ul>
    `,
  },
  {
    id: "3",
    title: "Blockchain Evidence: The New Frontier",
    author: "Judge David Thompson",
    role: "Circuit Court Judge",
    excerpt:
      "Blockchain technology offers unprecedented opportunities for evidence verification, but courts must develop new standards for blockchain-based evidence.",
    date: "January 20, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop",
    views: "2.1k",
    likes: 143,
    comments: 28,
    court: "U.S. District Court, Northern District",
    caseNumber: "DC-2026-0031",
    decisionDate: "January 15, 2026",
    tags: ["Blockchain", "Evidence Verification", "Technology Law"],
    content: `
      <div class="judicial-header">
        <div class="case-metadata">
          <span class="case-number">Case No. DC-2026-0031</span>
          <span class="decision-date">Decided: January 15, 2026</span>
        </div>
      </div>

      <h2>Blockchain: Revolutionizing Evidence Verification</h2>
      <p>Blockchain technology represents one of the most significant innovations for evidence verification since the development of the chain of custody concept. By providing an immutable, transparent, and decentralized record, blockchain can transform how we authenticate and track digital evidence.</p>
      
      <h3>Understanding Blockchain's Role</h3>
      <p>In the context of evidence management, blockchain offers several key advantages:</p>
      <ul>
        <li><strong>Immutability:</strong> Once recorded, blockchain entries cannot be altered</li>
        <li><strong>Transparency:</strong> All parties can verify the integrity of the evidence</li>
        <li><strong>Decentralization:</strong> No single point of failure or control</li>
        <li><strong>Timestamping:</strong> Precise recording of when evidence was created or accessed</li>
      </ul>
      
      <h3>Practical Applications</h3>
      <p>Blockchain can be applied to various aspects of evidence management:</p>
      <ul>
        <li>Chain-of-custody tracking</li>
        <li>Evidence authentication</li>
        <li>Digital signature verification</li>
        <li>Secure evidence sharing across jurisdictions</li>
      </ul>
      
      <h3>Challenges and Considerations</h3>
      <p>Despite its promise, blockchain implementation faces several hurdles:</p>
      <ul>
        <li>Technological complexity</li>
        <li>Integration with existing systems</li>
        <li>Cost and scalability considerations</li>
        <li>Need for judicial education</li>
      </ul>
    `,
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const OpinionColumnDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [column, setColumn] = useState<OpinionColumn | null>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCitation, setShowCitation] = useState(false);

  useEffect(() => {
    const foundColumn = OPINION_COLUMNS_DATA.find((p) => p.id === id);
    if (foundColumn) {
      setColumn(foundColumn);
      window.scrollTo(0, 0);
    } else {
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!column) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading opinion...</p>
        </div>
      </div>
    );
  }

  const relatedColumns = OPINION_COLUMNS_DATA.filter(
    (p) => p.id !== column.id,
  ).slice(0, 2);

  const wordCount = column.content ? column.content.split(/\s+/).length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-[#f8f6f0] font-sans antialiased">
      {/* ============================================================
        HERO SECTION - Grand Courtroom Style
      ============================================================ */}
      <section className="relative overflow-hidden min-h-[50vh] lg:min-h-[60vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={column.image}
            alt={column.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a]/90 via-[#2d1810]/85 to-[#0d0d1a]/90" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>

        {/* Gold Accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-500/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-amber-500/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-amber-300/70 hover:text-amber-200 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-4 py-1.5 bg-amber-500/30 backdrop-blur border border-amber-400/30 text-amber-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  Opinion
                </span>
                {column.featured && (
                  <span className="px-4 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-400/20 text-amber-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Featured
                  </span>
                )}
                <span className="px-4 py-1.5 bg-emerald-500/20 backdrop-blur border border-emerald-400/20 text-emerald-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Precedent Setting
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-white">
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                  {column.title}
                </span>
              </h1>

              {/* Case Metadata */}
              <div className="mt-6 p-4 bg-white/5 backdrop-blur border border-white/10 rounded-xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-amber-300/60 text-xs uppercase tracking-wider">
                      Case Number
                    </p>
                    <p className="text-white font-mono text-sm">
                      {column.caseNumber || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-300/60 text-xs uppercase tracking-wider">
                      Court
                    </p>
                    <p className="text-white text-sm">
                      {column.court || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-300/60 text-xs uppercase tracking-wider">
                      Decision Date
                    </p>
                    <p className="text-white text-sm">
                      {column.decisionDate || column.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Author and Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/30">
                    <Gavel className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">
                      {column.author}
                    </p>
                    <p className="text-sm text-amber-200/80">{column.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {column.date}
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {column.readTime}
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {column.views} views
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Quick Citation */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Citation
                  </span>
                </div>
                <p className="text-white/80 text-sm font-mono leading-relaxed">
                  {column.author} v. {column.caseNumber || "State"},
                  <br />
                  {column.court || "U.S. Courts"} (
                  {new Date(column.decisionDate || column.date).getFullYear()})
                </p>
                <button
                  onClick={() => setShowCitation(!showCitation)}
                  className="mt-3 text-xs text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1"
                >
                  {showCitation ? "Hide" : "Show"} Full Citation
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${showCitation ? "rotate-180" : ""}`}
                  />
                </button>
                {showCitation && (
                  <div className="mt-3 p-3 bg-black/30 rounded-lg border border-white/10">
                    <p className="text-white/60 text-xs font-mono leading-relaxed">
                      {column.author}, {column.caseNumber || "2026"} (
                      {column.court || "U.S. Courts"}{" "}
                      {new Date(
                        column.decisionDate || column.date,
                      ).getFullYear()}
                      ). Available at: https://dems.io/opinions/{column.id}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        MAIN CONTENT - Unique Judicial Layout
      ============================================================ */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Reading Progress */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>{wordCount} words</span>
                </div>
                <div className="w-px h-6 bg-amber-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{readingTime} min read</span>
                </div>
                <div className="w-px h-6 bg-amber-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Scale className="w-4 h-4 text-amber-600" />
                  <span>Legal Analysis</span>
                </div>
                <div className="w-px h-6 bg-amber-200 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Precedent</span>
                </div>
              </div>

              {/* Article Content - Judicial Styled */}
              <div className="prose prose-lg prose-slate max-w-none">
                <div
                  className="judicial-content"
                  dangerouslySetInnerHTML={{ __html: column.content || "" }}
                />
              </div>

              {/* Tags */}
              {column.tags && (
                <div className="mt-12 pt-8 border-t border-amber-200">
                  <h4 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider">
                    Related Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {column.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-amber-50 text-amber-700 text-sm font-medium rounded-full hover:bg-amber-100 transition-all cursor-pointer border border-amber-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & Actions */}
              <div className="mt-8 pt-8 border-t border-amber-200">
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
                        {liked ? (column.likes || 0) + 1 : column.likes}
                      </span>
                    </button>
                    <button
                      onClick={() => setSaved(!saved)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        saved
                          ? "bg-amber-50 text-amber-600 border border-amber-200 shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <Bookmark
                        className={`w-5 h-5 ${saved ? "fill-amber-500 text-amber-500" : ""}`}
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
                <div className="mt-6 flex items-center gap-3 p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {column.comments}
                    </span>{" "}
                    comments on this opinion
                  </span>
                  <button className="ml-auto px-4 py-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium rounded-lg hover:bg-amber-100 transition-colors">
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">
                {/* Author Card */}
                <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/25 ring-4 ring-amber-100">
                      <Gavel className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {column.author}
                    </h4>
                    <p className="text-sm text-slate-500">{column.role}</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        <Scale className="w-3 h-3" />
                        Judicial Authority
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        15 opinions
                      </span>
                      <span className="w-px h-4 bg-slate-200" />
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        1.8k followers
                      </span>
                    </div>
                    <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all shadow-md shadow-amber-200 text-sm">
                      Follow Author
                    </button>
                  </div>
                </div>

                {/* Related Opinions */}
                {relatedColumns.length > 0 && (
                  <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Library className="w-4 h-4 text-amber-600" />
                      Related Opinions
                    </h4>
                    <div className="space-y-4">
                      {relatedColumns.map((related) => (
                        <Link
                          key={related.id}
                          to={`/opinion/${related.id}`}
                          className="group flex gap-3 items-start hover:bg-amber-50 p-2 rounded-xl transition-colors"
                        >
                          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-amber-100">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                              Opinion
                            </span>
                            <h5 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                              {related.title}
                            </h5>
                            <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                              <Scale className="w-3 h-3" />
                              <span>{related.author}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subscribe Card */}
                <div className="relative overflow-hidden rounded-2xl p-6 text-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <ScrollText className="w-5 h-5 text-amber-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Legal Briefings
                      </span>
                    </div>
                    <h4 className="text-xl font-bold">
                      Subscribe for Legal Insights
                    </h4>
                    <p className="text-sm text-amber-100 mt-1">
                      Get judicial opinions delivered to your inbox.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm text-slate-900 bg-white/95 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button className="px-5 py-2.5 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-colors text-sm whitespace-nowrap shadow-lg shadow-amber-500/25">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-amber-200/70 mt-2">
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
        CTA SECTION - Grand Closing
      ============================================================ */}
      <section className="py-20 px-6 bg-[#1a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-3xl" />
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/30">
              <Gavel className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black">
            Stay Informed on Legal Developments
          </h2>
          <p className="text-amber-200/80 mt-4 max-w-2xl mx-auto text-lg">
            Subscribe to receive the latest judicial opinions, legal analysis,
            and insights from the bench delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-amber-300/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
            />
            <button className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-amber-300/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Weekly updates
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Expert analysis
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
