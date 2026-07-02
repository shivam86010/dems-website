// BlogPage.tsx - Premium Sidebar Layout with Filter Section
import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Newspaper,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Shield,
  Eye,
  BookOpen,
  MessageSquare,
  Heart,
  Bookmark,
  Layers,
  Globe,
  Users,
  Award,
  Star,
  Zap,
  FileText,
  CheckCircle,
  X,
  Mail,
  Play,
  PenTool,
  Filter,
  Sliders,
  Hash,
  Tag,
  ChevronDown,
} from "lucide-react";

// ============================================================================
// TYPES & DATA
// ============================================================================

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  date: string;
  readTime: string;
  image: string;
  views: string;
  likes: number;
  comments: number;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "AI-Powered E-Discovery: Transforming Legal Workflows in 2026",
    excerpt:
      "Generative AI is revolutionizing how legal teams process, review, and analyze evidence. Learn how DEMS+ integrates cutting-edge AI to reduce review time by up to 78% while maintaining defensibility.",
    category: "AI/ML",
    author: "Dr. Sarah Mitchell",
    authorRole: "Chief AI Scientist",
    date: "March 15, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    views: "12.4k",
    likes: 347,
    comments: 89,
    featured: true,
    trending: true,
    tags: ["Generative AI", "E-Discovery", "Automation", "Legal Tech"],
  },
  {
    id: "2",
    title: "Zero-Knowledge Proofs: The Future of Chain of Custody Verification",
    excerpt:
      "Cryptographic zero-knowledge proofs are enabling tamper-proof evidence verification without exposing sensitive data. Here's how DEMS+ implements ZKPs for immutable audit trails.",
    category: "Security",
    author: "Dr. James Chen",
    authorRole: "Cryptography Lead",
    date: "March 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
    views: "8.7k",
    likes: 256,
    comments: 67,
    trending: true,
    tags: ["Zero-Knowledge", "Cryptography", "Chain of Custody"],
  },
  {
    id: "3",
    title:
      "Cross-Border Data Compliance: Navigating Global Regulations in 2026",
    excerpt:
      "As data sovereignty laws evolve, organizations must adapt their evidence management strategies. A comprehensive guide to GDPR, CCPA, and emerging frameworks.",
    category: "Compliance",
    author: "Maria Rodriguez",
    authorRole: "Compliance Director",
    date: "March 10, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    views: "6.2k",
    likes: 189,
    comments: 45,
    tags: ["GDPR", "CCPA", "Data Sovereignty", "Compliance"],
  },
  {
    id: "4",
    title: "Threat Intel: Weaponized Firmware and Supply Chain Attacks",
    excerpt:
      "A deep dive into emerging firmware-level threats targeting digital evidence integrity. Learn detection, prevention, and response strategies for your infrastructure.",
    category: "Security",
    author: "Michael Torres",
    authorRole: "Security Architect",
    date: "March 8, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    views: "5.1k",
    likes: 203,
    comments: 52,
    tags: ["Firmware", "Supply Chain", "Threat Intel"],
  },
  {
    id: "5",
    title: "Judicial Precedent and Digital Evidence: 2026 Court Decisions",
    excerpt:
      "Analysis of landmark court decisions shaping the admissibility and handling of digital evidence in federal and state courts this year.",
    category: "Case Law",
    author: "Judge Elena Martinez",
    authorRole: "Federal Judge (Ret.)",
    date: "March 5, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    views: "4.3k",
    likes: 167,
    comments: 38,
    tags: ["Case Law", "Precedent", "Admissibility"],
  },
  {
    id: "6",
    title: "Scaling Your Investigation Pipeline with Distributed Architecture",
    excerpt:
      "How DEMS+ leverages distributed systems to handle petabytes of evidence while maintaining sub-second query response times across global teams.",
    category: "Engineering",
    author: "Alex Kim",
    authorRole: "Lead Architect",
    date: "March 3, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    views: "3.8k",
    likes: 142,
    comments: 31,
    tags: ["Architecture", "Scalability", "Performance"],
  },
  {
    id: "7",
    title: "The Role of AI in Privilege Review and Document Classification",
    excerpt:
      "Learn how AI-powered privilege review is reducing attorney review time while maintaining accuracy and defensibility in complex litigation.",
    category: "AI/ML",
    author: "Dr. Sarah Mitchell",
    authorRole: "Chief AI Scientist",
    date: "February 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    views: "3.2k",
    likes: 98,
    comments: 24,
    tags: ["Privilege Review", "Classification", "AI"],
  },
  {
    id: "8",
    title: "GDPR, Data Sovereignty, and Cross-Border Discovery",
    excerpt:
      "Navigating the complex landscape of data protection regulations while maintaining efficient e-discovery processes across jurisdictions.",
    category: "Compliance",
    author: "Maria Rodriguez",
    authorRole: "Compliance Director",
    date: "February 25, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    views: "2.9k",
    likes: 87,
    comments: 19,
    tags: ["GDPR", "Cross-Border", "Compliance"],
  },
  {
    id: "9",
    title: "Implementing Zero-Trust Architecture in Legal Technology",
    excerpt:
      "A comprehensive guide to adopting zero-trust principles in your evidence management and discovery workflows.",
    category: "Security",
    author: "Michael Torres",
    authorRole: "Security Architect",
    date: "February 22, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    views: "2.5k",
    likes: 76,
    comments: 18,
    tags: ["Zero-Trust", "Security Architecture"],
  },
];

const CATEGORIES = [
  "All",
  "AI/ML",
  "Security",
  "Compliance",
  "Case Law",
  "Engineering",
];

const OPINION_COLUMNS = [
  {
    title: "The Future of Digital Evidence Admissibility",
    author: "Chief Justice Roberts",
    role: "Supreme Court of the United States",
    excerpt:
      "Courts must adapt to the evolving nature of digital evidence and its verification challenges. The traditional rules of evidence were designed for physical documents.",
    date: "March 2026",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
  },
  {
    title: "AI in the Courtroom: Promise and Peril",
    author: "Justice Elena Martinez",
    role: "Federal Appellate Court",
    excerpt:
      "Balancing technological advancement with fundamental due process requirements. AI can enhance judicial efficiency but must not compromise fairness.",
    date: "February 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
  },
  {
    title: "Blockchain Evidence: The New Frontier",
    author: "Judge David Thompson",
    role: "Circuit Court Judge",
    excerpt:
      "Blockchain technology offers unprecedented opportunities for evidence verification, but courts must develop new standards for blockchain-based evidence.",
    date: "January 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
  },
];

const INTERVIEWS = [
  {
    name: "Jennifer Park",
    role: "Chief Compliance Officer",
    org: "Global Financial Services",
    quote:
      "DEMS+ has revolutionized how we approach compliance audits. We've reduced audit preparation time by 60% while improving accuracy.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    date: "March 2026",
    topics: ["Compliance Automation", "Risk Management"],
  },
  {
    name: "Robert Chen",
    role: "E-Discovery Director",
    org: "Fortune 500 Law Firm",
    quote:
      "The efficiency gains are unprecedented in my 20-year career. DEMS+ has transformed our discovery process from weeks to hours.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    date: "February 2026",
    topics: ["E-Discovery", "Legal Technology"],
  },
  {
    name: "Dr. Amanda Foster",
    role: "Digital Forensics Lead",
    org: "Global Consulting Firm",
    quote:
      "The chain-of-custody features are unparalleled. Every piece of evidence is fully traceable and court-ready.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    date: "January 2026",
    topics: ["Digital Forensics", "Evidence Integrity"],
  },
];

const PEER_REVIEWS = [
  {
    title: "AI-Driven Evidence Classification: A Comparative Study",
    status: "Published",
    date: "March 2026",
    journal: "Journal of Legal Technology",
    authors: "Smith, Chen, Williams",
  },
  {
    title: "Blockchain Custody Frameworks for Legal Evidence",
    status: "Under Review",
    date: "February 2026",
    journal: "Digital Forensics Review",
    authors: "Patel, Kim, Thompson",
  },
  {
    title: "Quantum-Safe Encryption for Forensic Applications",
    status: "Accepted",
    date: "January 2026",
    journal: "Cryptography & Security",
    authors: "Lee, Martinez, Chen",
  },
  {
    title: "Machine Learning for Pattern Detection in Complex Cases",
    status: "Published",
    date: "December 2025",
    journal: "AI & Law",
    authors: "Mitchell, Rodriguez",
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {post.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        )}
        {post.trending && !post.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-black/60 backdrop-blur text-white text-[10px] font-medium rounded-full"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="px-2 py-0.5 bg-black/60 backdrop-blur text-white text-[10px] font-medium rounded-full">
              +{post.tags.length - 2}
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur rounded-full text-white hover:bg-black/80 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-600 mt-2 text-sm line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-blue-600">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">
                {post.author}
              </p>
              <p className="text-[10px] text-slate-400 truncate">
                {post.authorRole}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 flex-shrink-0">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {post.views}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1 text-xs transition-colors ${liked ? "text-rose-500" : "text-slate-400 hover:text-rose-500"}`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-rose-500" : ""}`} />
              <span>{liked ? post.likes + 1 : post.likes}</span>
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1 text-xs transition-colors ${saved ? "text-blue-600" : "text-slate-400 hover:text-blue-600"}`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-blue-600" : ""}`} />
            </button>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <MessageSquare className="w-3.5 h-3.5" />
              {post.comments}
            </span>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="text-sm font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1"
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// SIDEBAR COMPONENT
// ============================================================================

const BlogSidebar: React.FC<{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
  trendingPosts: BlogPost[];
}> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
  trendingPosts,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-6 space-y-6 shadow-sm">
      {/* Sidebar Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
          <Filter className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">Filter Articles</h3>
          <p className="text-[10px] text-slate-400">Narrow down your search</p>
        </div>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
          <Search className="w-3.5 h-3.5" />
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
          <Tag className="w-3.5 h-3.5" />
          Categories
        </label>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subscribe */}
      <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2 text-sm">
        <Bell className="w-4 h-4" />
        Subscribe to Newsletter
      </button>

      {/* Trending Topics */}
      {trendingPosts.length > 0 && (
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Trending
            </span>
            <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
              Hot
            </span>
          </div>
          <div className="space-y-2">
            {trendingPosts.slice(0, 4).map((post, idx) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="text-[10px] font-bold text-rose-400 w-5 text-center">
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-medium text-rose-500 block">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {post.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2">
        {[
          { icon: Users, value: "12.4k", label: "Readers" },
          { icon: FileText, value: "50+", label: "Articles" },
          { icon: Globe, value: "45+", label: "Countries" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center bg-slate-50 rounded-xl p-2">
            <stat.icon className="w-4 h-4 text-blue-500 mx-auto mb-0.5" />
            <div className="text-xs font-bold text-slate-800">{stat.value}</div>
            <div className="text-[9px] text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN PAGE
// ============================================================================

export const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = useMemo(() => {
    let posts = BLOG_POSTS;

    if (activeCategory !== "All") {
      posts = posts.filter((post) => post.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const trendingPosts = BLOG_POSTS.filter((p) => p.trending && !p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* ============================================================
        HERO SECTION - Clean and minimal with featured content only
      ============================================================ */}
      <section className="relative bg-gradient-to-br from-blue-900 via-[#1E1B4B] to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 border border-blue-400/30">
                  <Newspaper className="w-3.5 h-3.5 mr-1.5" />
                  The Forensic Journal
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-400/30">
                  <Zap className="w-3.5 h-3.5 mr-1.5" />
                  Weekly Dispatch
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/30">
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  2026 Best Legal Blog
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                The Modern Arbitrator
                <span className="text-blue-300 block">Chronicle</span>
              </h1>

              <p className="text-lg text-blue-200 font-light max-w-2xl leading-relaxed">
                Critical updates on global evidence compliance, metadata
                manipulation vectors, and judicial trends. Written by industry
                experts and legal scholars.
              </p>

              {/* Quick Stats - Minimal */}
              <div className="flex items-center gap-6 text-sm text-blue-300 pt-2">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  12.4k+ Readers
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  50+ Articles
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  45+ Countries
                </span>
              </div>
            </div>

            {/* Right Column - Featured Post Card */}
            {featuredPost && (
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full">
                  <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] via-[#1E1B4B]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </span>
                        <span className="px-2.5 py-0.5 bg-black/60 text-white text-xs font-medium rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="px-2.5 py-0.5 bg-rose-500/80 text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug line-clamp-2">
                        {featuredPost.title}
                      </h3>
                      <p className="text-sm text-blue-200 line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-blue-300">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {featuredPost.likes}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-blue-50 transition-all text-sm shadow-lg"
                      >
                        Read Featured Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
        TRENDING SECTION
      ============================================================ */}
      {trendingPosts.length > 0 && (
        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-rose-500" />
                <h2 className="text-xl font-bold text-slate-900">
                  Trending Now
                </h2>
                <span className="text-xs text-slate-400">
                  Most read this week
                </span>
              </div>
              <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Updated daily
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trendingPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-rose-200 hover:shadow-md transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-600 font-black text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-rose-500">
                      {post.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-0.5 text-[10px] text-slate-400">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                      <span>•</span>
                      <span>{post.likes} likes</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
        MAIN BLOG GRID WITH SIDEBAR
      ============================================================ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Left */}
            <div className="lg:col-span-1">
              <BlogSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={CATEGORIES}
                trendingPosts={trendingPosts}
              />
            </div>

            {/* Blog Grid - Right */}
            <div className="lg:col-span-3">
              {/* Header with view toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {activeCategory === "All"
                      ? "All Articles"
                      : `${activeCategory} Articles`}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? "article" : "articles"} found
                    {searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white/50"}`}
                    >
                      <Layers className="w-4 h-4 text-slate-600" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white/50"}`}
                    >
                      <FileText className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {filteredPosts.length} results
                  </span>
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div
                  className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 gap-6" : "grid-cols-1 gap-4"}`}
                >
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No articles found
                  </h3>
                  <p className="text-slate-500 mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        OPINION COLUMNS
      ============================================================ */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  Opinion
                </span>
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                  Expert Analysis
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900">
                Judicial Precedent & Analysis Columns
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Insights from leading judges and legal scholars on the evolving
                landscape of digital evidence.
              </p>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View All Columns <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPINION_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">
                      {col.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {col.author}
                    </h4>
                    <p className="text-[10px] text-slate-400">{col.role}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {col.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  {col.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{col.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {col.readTime}
                  </span>
                </div>
                <button
                  onClick={() => navigate(`/opinion/${idx + 1}`)}
                  className="mt-3 text-sm font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1"
                >
                  Read Column <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECURITY DEEP DIVE
      ============================================================ */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-rose-900 via-red-900 to-rose-800 p-8 rounded-2xl text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-rose-300" />
                </div>
                <h3 className="text-2xl font-bold">Threat Intel Series</h3>
                <p className="text-rose-200 mt-2">
                  Weaponized Firmware Subversions
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <span className="text-xl font-black block">78%</span>
                    <span className="text-[10px] text-rose-200">
                      Increase in attacks
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <span className="text-xl font-black block">12</span>
                    <span className="text-[10px] text-rose-200">
                      Vulnerabilities found
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <span className="text-xl font-black block">5</span>
                    <span className="text-[10px] text-rose-200">
                      Zero-day patches
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <button className="px-4 py-2 bg-white text-rose-900 font-bold rounded-lg hover:bg-rose-50 transition-colors text-sm">
                    Read Series
                  </button>
                  <button className="px-4 py-2 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors text-sm">
                    <Bell className="w-3 h-3 inline mr-1" />
                    Subscribe to Alerts
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
                  Security
                </span>
                <span className="text-xs px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full">
                  Critical
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mt-1">
                Threat Intel: Weaponized Firmware Subversions
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                An in-depth analysis of emerging threats targeting digital
                evidence integrity. Learn how to detect and prevent
                firmware-level attacks on your infrastructure. This
                comprehensive series covers detection methodologies, prevention
                strategies, and incident response protocols.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Detection methodologies for firmware attacks</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Prevention strategies and best practices</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Incident response and recovery protocols</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-rose-100 text-rose-700 font-bold rounded-lg hover:bg-rose-200 transition-colors">
                  Read Full Series
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        INTERVIEWS
      ============================================================ */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  Interviews
                </span>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                  Exclusive
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900">
                Conversations with Industry Leaders
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Exclusive interviews with chief compliance directors,
                e-discovery experts, and digital forensics leaders.
              </p>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View All Interviews <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERVIEWS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                    <p className="text-xs text-blue-600 font-medium">
                      {item.org}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-3 italic">
                  "{item.quote}"
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{item.date}</span>
                  <button
                    onClick={() => navigate(`/interview/${idx + 1}`)}
                    className="text-sm font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1"
                  >
                    Read Interview <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
        METRICS
      ============================================================ */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Metrics
              </span>
              <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                2026 Data
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              Industry Growth Vectors
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Key metrics driving the digital evidence and e-discovery market in
              2026.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "156%",
                label: "E-discovery Market Growth",
                sub: "Year-over-year increase",
              },
              {
                value: "78%",
                label: "Adoption of AI Forensics",
                sub: "Among legal departments",
              },
              {
                value: "43%",
                label: "Cross-Border Cases",
                sub: "International litigation increase",
              },
              {
                value: "2.4x",
                label: "Evidence Volume Growth",
                sub: "Average case data size",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto mb-2" />
                <span className="text-3xl font-black text-blue-600 block">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-slate-800 block mt-1">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Market Projection
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  Legal Tech Market Size
                </h4>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="text-2xl font-black text-slate-900">
                    $28.4B
                  </span>
                  <p className="text-xs text-slate-400">2025</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-600" />
                <div className="text-center">
                  <span className="text-2xl font-black text-blue-600">
                    $42.8B
                  </span>
                  <p className="text-xs text-slate-400">2026 (Projected)</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                +50.7% Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        WEEKLY DIGEST
      ============================================================ */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  Weekly Summary
                </span>
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                  New
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Weekly Engineering Summaries
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                Curated highlights from the past week's top articles, handpicked
                by our editorial team. Stay informed on the latest developments
                in legal technology.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                <span className="flex items-center gap-1 text-slate-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />5 articles
                  curated weekly
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Users className="w-4 h-4 text-blue-500" />
                  2.4k+ subscribers
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe to Digest
              </button>
              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                View Archive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        AUTHORS
      ============================================================ */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Authors
              </span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                Expert Cohort
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              DEMS+ Principal Engineering Cohort
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Meet the experts behind the articles. Our team of scientists,
              architects, and legal scholars.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Scientist",
                expertise: "AI/ML, Cryptography",
                articles: "24",
              },
              {
                name: "Michael Torres",
                role: "Security Lead",
                expertise: "Cybersecurity, Forensics",
                articles: "18",
              },
              {
                name: "Priya Patel",
                role: "AI Research Director",
                expertise: "NLP, Pattern Detection",
                articles: "15",
              },
              {
                name: "Dr. James Kim",
                role: "Architecture Lead",
                expertise: "Distributed Systems",
                articles: "12",
              },
              {
                name: "Maria Rodriguez",
                role: "Compliance Director",
                expertise: "GDPR, Regulatory",
                articles: "10",
              },
              {
                name: "Dr. Elena Martinez",
                role: "Legal Scholar",
                expertise: "Case Law, Precedent",
                articles: "9",
              },
              {
                name: "Alex Kim",
                role: "Cloud Architect",
                expertise: "AWS, Azure, GCP",
                articles: "8",
              },
              {
                name: "Judge David Thompson",
                role: "Legal Advisor",
                expertise: "Evidence Admissibility",
                articles: "7",
              },
            ].map((author, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-black text-blue-600">
                    {author.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900">
                  {author.name}
                </h4>
                <p className="text-xs text-blue-600 font-medium">
                  {author.role}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {author.expertise}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex justify-center">
                  <span className="text-xs text-slate-500">
                    {author.articles} articles
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
        PEER REVIEWS
      ============================================================ */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  Research
                </span>
                <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                  Peer Reviewed
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900">
                Peer Review Syntheses
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Academic research and technical papers validated by independent
                experts in the field.
              </p>
            </div>
            <button className="mt-4 md:mt-0 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
              Submit Research <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PEER_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{review.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {review.journal}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Authors: {review.authors}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold flex-shrink-0 ml-4 ${
                      review.status === "Published"
                        ? "bg-emerald-100 text-emerald-700"
                        : review.status === "Under Review"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {review.status}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{review.date}</span>
                  <button className="text-sm font-bold text-blue-600 hover:text-blue-800">
                    Read Abstract →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
        CTA
      ============================================================ */}
      <section className="py-20 px-6 bg-[#1E1B4B] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black">
            Become a Contributor
          </h2>
          <p className="text-indigo-200 mt-4 max-w-2xl mx-auto">
            Share your expertise with the legal and technology community. We're
            always looking for thought leaders, practitioners, and researchers
            to contribute to The Forensic Journal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/contribute"
              className="px-8 py-4 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
            >
              <PenTool className="w-4 h-4" />
              Submit Your Article
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Editorial Team
            </Link>
            <Link
              to="/webinars"
              className="px-8 py-4 bg-blue-600/30 border border-blue-400/30 text-white font-bold rounded-xl hover:bg-blue-600/40 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Webinars
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-indigo-300">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Expert-reviewed
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Global audience
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Cite your work
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

// ============================================================================
// ADDITIONAL ICON
// ============================================================================
const Bell = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
