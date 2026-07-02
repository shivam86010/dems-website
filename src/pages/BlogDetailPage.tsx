// BlogDetailPage.tsx - Premium Redesign with Custom SVG Icons
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

  TrendingUp,
  Star,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Globe,
  Users,
  FileText,
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
  content?: string;
}

// ============================================================================
// MOCK DATA
// ============================================================================

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
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    views: "12.4k",
    likes: 347,
    comments: 89,
    featured: true,
    trending: true,
    tags: ["Generative AI", "E-Discovery", "Automation", "Legal Tech"],
    content: `
      <h2>The Dawn of AI-Powered Legal Discovery</h2>
      <p>The legal industry is undergoing a seismic shift. Generative AI is no longer a futuristic concept—it's actively transforming how legal teams process, review, and analyze evidence. DEMS+ is at the forefront of this revolution, integrating cutting-edge AI capabilities that reduce review time by up to 78% while maintaining the highest standards of defensibility.</p>
      
      <h3>How AI is Reshaping E-Discovery</h3>
      <p>Traditional e-discovery processes are labor-intensive, time-consuming, and prone to human error. Legal teams spend countless hours manually reviewing documents, searching for relevant evidence, and ensuring chain-of-custody integrity. DEMS+ changes this paradigm entirely.</p>
      
      <p>Our AI-powered platform leverages:</p>
      <ul>
        <li><strong>Natural Language Processing (NLP):</strong> Understands context, sentiment, and intent in legal documents</li>
        <li><strong>Pattern Recognition:</strong> Identifies relationships and anomalies that human reviewers might miss</li>
        <li><strong>Predictive Coding:</strong> Learns from reviewer decisions to prioritize relevant documents</li>
        <li><strong>Automated Privilege Review:</strong> Identifies privileged communications with 95% accuracy</li>
      </ul>
      
      <h3>Real-World Results</h3>
      <p>In a recent study involving a Fortune 500 financial institution, DEMS+ AI capabilities delivered:</p>
      <ul>
        <li>78% reduction in document review time</li>
        <li>92% accuracy in privilege identification</li>
        <li>$4.7M in annual cost savings</li>
        <li>Zero chain-of-custody violations</li>
      </ul>
      
      <h3>The Future of AI in Legal Technology</h3>
      <p>As AI continues to evolve, DEMS+ is committed to staying at the cutting edge. Our roadmap includes advanced features like:</p>
      <ul>
        <li>Multi-lingual document processing</li>
        <li>Real-time collaboration with AI assistants</li>
        <li>Predictive analytics for case outcomes</li>
        <li>Automated compliance reporting</li>
      </ul>
      
      <p>The legal industry is on the cusp of a transformation. With DEMS+ AI-powered e-discovery, legal teams can work smarter, faster, and with greater confidence than ever before.</p>
    `,
  },
  {
    id: "2",
    title: "Zero-Knowledge Proofs: The Future of Chain of Custody Verification",
    excerpt:
      "Cryptographic zero-knowledge proofs are enabling tamper-proof evidence verification without exposing sensitive data.",
    category: "Security",
    author: "Dr. James Chen",
    authorRole: "Cryptography Lead",
    date: "March 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop",
    views: "8.7k",
    likes: 256,
    comments: 67,
    trending: true,
    tags: ["Zero-Knowledge", "Cryptography", "Chain of Custody"],
    content: `
      <h2>Revolutionizing Evidence Verification with Zero-Knowledge Proofs</h2>
      <p>In the digital age, verifying the authenticity and integrity of evidence is paramount. Zero-knowledge proofs (ZKPs) are emerging as a game-changing technology for chain-of-custody verification, allowing parties to prove the validity of evidence without revealing sensitive information.</p>
      
      <h3>What are Zero-Knowledge Proofs?</h3>
      <p>A zero-knowledge proof is a cryptographic method that allows one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself. In the context of evidence management, this means:</p>
      <ul>
        <li>Proving evidence hasn't been tampered with, without revealing the evidence content</li>
        <li>Verifying chain-of-custody without exposing sensitive case details</li>
        <li>Authenticating the identity of custodians without sharing personal information</li>
      </ul>
      
      <h3>DEMS+ Implementation of ZKPs</h3>
      <p>DEMS+ has integrated zero-knowledge proofs into its core architecture, providing:</p>
      <ul>
        <li><strong>Immutable Audit Trails:</strong> Every custody transfer is cryptographically verified</li>
        <li><strong>Privacy-Preserving Verification:</strong> Third parties can verify authenticity without accessing sensitive data</li>
        <li><strong>Tamper-Evident Evidence:</strong> Any modification to evidence is immediately detectable</li>
        <li><strong>Cross-Jurisdictional Trust:</strong> ZKPs enable verification across different legal systems</li>
      </ul>
      
      <h3>Practical Applications</h3>
      <p>Zero-knowledge proofs are particularly valuable in:</p>
      <ul>
        <li>Cross-border litigation where data sovereignty is critical</li>
        <li>Intellectual property cases where trade secrets must be protected</li>
        <li>Government investigations requiring classified information handling</li>
        <li>Corporate internal investigations with sensitive HR data</li>
      </ul>
      
      <h3>The Road Ahead</h3>
      <p>As ZKP technology matures, DEMS+ is exploring advanced applications including:</p>
      <ul>
        <li>Zero-knowledge smart contracts for evidence management</li>
        <li>Privacy-preserving analytics on encrypted evidence</li>
        <li>Decentralized identity for custody verification</li>
      </ul>
    `,
  },
  {
    id: "3",
    title:
      "Cross-Border Data Compliance: Navigating Global Regulations in 2026",
    excerpt:
      "As data sovereignty laws evolve, organizations must adapt their evidence management strategies.",
    category: "Compliance",
    author: "Maria Rodriguez",
    authorRole: "Compliance Director",
    date: "March 10, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    views: "6.2k",
    likes: 189,
    comments: 45,
    tags: ["GDPR", "CCPA", "Data Sovereignty", "Compliance"],
    content: `
      <h2>Navigating the Complex Landscape of Cross-Border Data Compliance</h2>
      <p>In 2026, organizations face an increasingly complex web of data protection regulations. From GDPR in Europe to CCPA in California, from China's PIPL to Brazil's LGPD, the global regulatory landscape is fragmented and evolving rapidly.</p>
      
      <h3>Key Regulations Shaping 2026</h3>
      <ul>
        <li><strong>GDPR (EU):</strong> Strengthened enforcement with fines up to €20M</li>
        <li><strong>CCPA/CPRA (California):</strong> Expanded consumer rights and stricter penalties</li>
        <li><strong>PIPL (China):</strong> Comprehensive data protection with localization requirements</li>
        <li><strong>LGPD (Brazil):</strong> Maturing enforcement and increased compliance demands</li>
        <li><strong>Digital Services Act (EU):</strong> New obligations for online platforms</li>
      </ul>
      
      <h3>Challenges for Evidence Management</h3>
      <p>Cross-border litigation and investigations face unique challenges:</p>
      <ul>
        <li>Data localization requirements conflicting with discovery obligations</li>
        <li>Different consent standards across jurisdictions</li>
        <li>Varying definitions of personal data and sensitive information</li>
        <li>Conflicting retention and deletion requirements</li>
      </ul>
      
      <h3>DEMS+ Compliance Solutions</h3>
      <p>DEMS+ provides comprehensive tools to navigate these challenges:</p>
      <ul>
        <li><strong>Automated Compliance Mapping:</strong> Map evidence to relevant regulations</li>
        <li><strong>Cross-Border Workflow Management:</strong> Handle data transfers compliantly</li>
        <li><strong>Privacy-Preserving Processing:</strong> Anonymize data where required</li>
        <li><strong>Real-Time Regulatory Updates:</strong> Stay current with evolving rules</li>
      </ul>
      
      <h3>Best Practices for 2026</h3>
      <p>To ensure compliance in 2026, organizations should:</p>
      <ul>
        <li>Conduct regular compliance audits</li>
        <li>Implement Privacy by Design principles</li>
        <li>Maintain detailed data mapping and inventories</li>
        <li>Establish clear data transfer mechanisms</li>
        <li>Train teams on regulatory requirements</li>
      </ul>
    `,
  },
  {
    id: "4",
    title: "Threat Intel: Weaponized Firmware and Supply Chain Attacks",
    excerpt:
      "A deep dive into emerging firmware-level threats targeting digital evidence integrity.",
    category: "Security",
    author: "Michael Torres",
    authorRole: "Security Architect",
    date: "March 8, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    views: "5.1k",
    likes: 203,
    comments: 52,
    tags: ["Firmware", "Supply Chain", "Threat Intel"],
    content: `
      <h2>Understanding Weaponized Firmware Threats in 2026</h2>
      <p>As cyber threats evolve, attackers are increasingly targeting the firmware level—the lowest layer of system software. Weaponized firmware attacks represent one of the most dangerous and difficult-to-detect threats facing digital evidence integrity today.</p>
      
      <h3>The Nature of Firmware Attacks</h3>
      <p>Firmware operates below the operating system, making it invisible to traditional security tools. Attackers exploit this by:</p>
      <ul>
        <li>Planting persistent backdoors that survive OS reinstalls</li>
        <li>Altering system behavior in subtle ways</li>
        <li>Tampering with evidence collection and verification processes</li>
        <li>Creating hard-to-detect data exfiltration channels</li>
      </ul>
      
      <h3>Supply Chain Vulnerabilities</h3>
      <p>Modern supply chains create multiple attack vectors:</p>
      <ul>
        <li>Compromised hardware during manufacturing</li>
        <li>Malicious updates delivered via trusted channels</li>
        <li>Third-party component vulnerabilities</li>
        <li>Insider threats in the supply chain</li>
      </ul>
      
      <h3>Detection and Prevention Strategies</h3>
      <p>DEMS+ implements comprehensive defenses:</p>
      <ul>
        <li><strong>Firmware Validation:</strong> Cryptographic verification of firmware integrity</li>
        <li><strong>Secure Boot:</strong> Ensures only verified firmware executes</li>
        <li><strong>Hardware Root of Trust:</strong> Foundation for all security operations</li>
        <li><strong>Continuous Monitoring:</strong> Active detection of anomalies</li>
      </ul>
      
      <h3>Incident Response for Firmware Attacks</h3>
      <p>When a firmware compromise is suspected:</p>
      <ul>
        <li>Immediately isolate affected systems</li>
        <li>Preserve all forensic evidence</li>
        <li>Engage specialized incident response teams</li>
        <li>Document the full chain of events</li>
        <li>Conduct thorough post-incident analysis</li>
      </ul>
    `,
  },
  {
    id: "5",
    title: "Judicial Precedent and Digital Evidence: 2026 Court Decisions",
    excerpt:
      "Analysis of landmark court decisions shaping the admissibility and handling of digital evidence.",
    category: "Case Law",
    author: "Judge Elena Martinez",
    authorRole: "Federal Judge (Ret.)",
    date: "March 5, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
    views: "4.3k",
    likes: 167,
    comments: 38,
    tags: ["Case Law", "Precedent", "Admissibility"],
    content: `
      <h2>Landmark Decisions Shaping Digital Evidence in 2026</h2>
      <p>Courts across jurisdictions are grappling with the challenges of digital evidence. 2026 has seen several landmark decisions that will shape how digital evidence is handled for years to come.</p>
      
      <h3>Key 2026 Decisions</h3>
      <ul>
        <li><strong>Supreme Court Digital Privacy Ruling:</strong> Established new standards for digital evidence collection</li>
        <li><strong>Federal Circuit AI Evidence Decision:</strong> Addressed admissibility of AI-generated analysis</li>
        <li><strong>Cross-Border Data Access Case:</strong> Clarified international evidence sharing protocols</li>
        <li><strong>Chain-of-Custody Digital Standard:</strong> Set requirements for digital evidence handling</li>
      </ul>
      
      <h3>Implications for Legal Practice</h3>
      <p>These decisions impact:</p>
      <ul>
        <li>How digital evidence must be collected and preserved</li>
        <li>Standards for expert testimony on digital forensics</li>
        <li>Requirements for data breach notification and response</li>
        <li>Admissibility of automated analysis and AI findings</li>
      </ul>
      
      <h3>Best Practices for Legal Teams</h3>
      <p>To ensure evidence admissibility:</p>
      <ul>
        <li>Maintain detailed documentation of collection methods</li>
        <li>Preserve complete chain-of-custody records</li>
        <li>Use validated and documented tools and processes</li>
        <li>Engage qualified experts for digital forensics</li>
        <li>Stay current with evolving case law</li>
      </ul>
    `,
  },
  {
    id: "6",
    title: "Scaling Your Investigation Pipeline with Distributed Architecture",
    excerpt:
      "How DEMS+ leverages distributed systems to handle petabytes of evidence.",
    category: "Engineering",
    author: "Alex Kim",
    authorRole: "Lead Architect",
    date: "March 3, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    views: "3.8k",
    likes: 142,
    comments: 31,
    tags: ["Architecture", "Scalability", "Performance"],
    content: `
      <h2>Building Scalable Investigation Pipelines</h2>
      <p>Modern investigations generate unprecedented volumes of data. DEMS+ is built on a distributed architecture that scales horizontally to handle petabytes of evidence while maintaining sub-second query response times.</p>
      
      <h3>Distributed Architecture Principles</h3>
      <ul>
        <li><strong>Microservices:</strong> Independent, scalable services for each function</li>
        <li><strong>Event-Driven:</strong> Asynchronous processing for high throughput</li>
        <li><strong>Data Sharding:</strong> Distribute data across multiple nodes</li>
        <li><strong>Replication:</strong> Redundancy for high availability</li>
      </ul>
      
      <h3>Performance Optimizations</h3>
      <p>DEMS+ achieves superior performance through:</p>
      <ul>
        <li>In-memory caching for frequently accessed data</li>
        <li>Intelligent indexing for fast search</li>
        <li>Compression algorithms reducing storage needs by 60%</li>
        <li>Parallel processing for batch operations</li>
      </ul>
      
      <h3>Scaling Strategies</h3>
      <p>As your investigation needs grow, DEMS+ scales with you:</p>
      <ul>
        <li>Add nodes horizontally for increased capacity</li>
        <li>Upgrade individual nodes for better performance</li>
        <li>Distribute workload across geographic regions</li>
        <li>Automatically scale based on demand</li>
      </ul>
    `,
  },
  {
    id: "7",
    title: "The Role of AI in Privilege Review and Document Classification",
    excerpt:
      "Learn how AI-powered privilege review is reducing attorney review time.",
    category: "AI/ML",
    author: "Dr. Sarah Mitchell",
    authorRole: "Chief AI Scientist",
    date: "February 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    views: "3.2k",
    likes: 98,
    comments: 24,
    tags: ["Privilege Review", "Classification", "AI"],
    content: `
      <h2>Transforming Privilege Review with AI</h2>
      <p>Privilege review is one of the most time-consuming and costly aspects of e-discovery. AI-powered privilege review is changing this, dramatically reducing review time while maintaining accuracy and defensibility.</p>
      
      <h3>The Challenge of Privilege Review</h3>
      <p>Traditional privilege review requires attorneys to manually review each document to determine if it contains privileged communications. This process is:</p>
      <ul>
        <li>Extremely time-consuming and expensive</li>
        <li>Subject to human error and inconsistency</li>
        <li>Difficult to scale for large document volumes</li>
        <li>Prone to privilege waivers and clawbacks</li>
      </ul>
      
      <h3>AI-Powered Solutions</h3>
      <p>DEMS+ AI privilege review addresses these challenges through:</p>
      <ul>
        <li><strong>Machine Learning Models:</strong> Trained on privilege logs and reviewer decisions</li>
        <li><strong>Contextual Understanding:</strong> Analyzes relationships between documents</li>
        <li><strong>Confidence Scoring:</strong> Prioritizes documents needing human review</li>
        <li><strong>Continuous Learning:</strong> Improves with each review cycle</li>
      </ul>
      
      <h3>Results and Benefits</h3>
      <p>Organizations using DEMS+ AI privilege review report:</p>
      <ul>
        <li>70-80% reduction in privilege review time</li>
        <li>95%+ accuracy in privilege identification</li>
        <li>Significant cost savings per review</li>
        <li>Reduced risk of privilege waivers</li>
      </ul>
    `,
  },
  {
    id: "8",
    title: "GDPR, Data Sovereignty, and Cross-Border Discovery",
    excerpt:
      "Navigating data protection regulations while maintaining efficient e-discovery processes.",
    category: "Compliance",
    author: "Maria Rodriguez",
    authorRole: "Compliance Director",
    date: "February 25, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    views: "2.9k",
    likes: 87,
    comments: 19,
    tags: ["GDPR", "Cross-Border", "Compliance"],
    content: `
      <h2>Balancing Compliance and Discovery Across Borders</h2>
      <p>Cross-border discovery presents unique challenges in the age of data sovereignty. Organizations must balance e-discovery obligations with data protection requirements across multiple jurisdictions.</p>
      
      <h3>Key Compliance Considerations</h3>
      <ul>
        <li>Data localization requirements in various jurisdictions</li>
        <li>Different definitions of personal data and sensitive information</li>
        <li>Varying consent and notification requirements</li>
        <li>Conflicting retention and deletion schedules</li>
        <li>Cross-border data transfer restrictions</li>
      </ul>
      
      <h3>DEMS+ Cross-Border Solutions</h3>
      <p>DEMS+ provides comprehensive tools for cross-border discovery:</p>
      <ul>
        <li>Automated compliance mapping across jurisdictions</li>
        <li>Privacy-preserving evidence processing</li>
        <li>Secure data transfer mechanisms</li>
        <li>Comprehensive audit trails for compliance</li>
      </ul>
    `,
  },
  {
    id: "9",
    title: "Implementing Zero-Trust Architecture in Legal Technology",
    excerpt:
      "A comprehensive guide to adopting zero-trust principles in evidence management.",
    category: "Security",
    author: "Michael Torres",
    authorRole: "Security Architect",
    date: "February 22, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    views: "2.5k",
    likes: 76,
    comments: 18,
    tags: ["Zero-Trust", "Security Architecture"],
    content: `
      <h2>Adopting Zero-Trust in Legal Technology</h2>
      <p>Zero-trust architecture represents a fundamental shift in security philosophy. Instead of trusting users and devices inside the network perimeter, zero-trust assumes nothing is trusted and verifies everything.</p>
      
      <h3>Zero-Trust Principles in Legal Tech</h3>
      <ul>
        <li><strong>Continuous Verification:</strong> Every access request is authenticated and authorized</li>
        <li><strong>Least Privilege:</strong> Users have minimum access needed for their role</li>
        <li><strong>Micro-segmentation:</strong> Network isolated into small, secure zones</li>
        <li><strong>Assume Breach:</strong> Design for worst-case scenarios</li>
      </ul>
      
      <h3>DEMS+ Zero-Trust Implementation</h3>
      <p>DEMS+ incorporates zero-trust principles throughout its architecture:</p>
      <ul>
        <li>Multi-factor authentication for all users</li>
        <li>Role-based access control with granular permissions</li>
        <li>Encrypted communications between all services</li>
        <li>Continuous monitoring and threat detection</li>
      </ul>
    `,
  },
];

// ============================================================================
// BLOG DETAIL COMPONENT
// ============================================================================

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const foundPost = BLOG_POSTS.find((p) => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      window.scrollTo(0, 0);
    } else {
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category,
  ).slice(0, 3);

  // Count reading time in words
  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* ============================================================
        HERO SECTION - Premium Magazine Style
      ============================================================ */}
      <section className="relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B]/90 via-[#1E1B4B]/80 to-[#0F0A3A]/95" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-300/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          <div className="max-w-4xl">
            {/* Category and Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-4 py-1.5 bg-blue-500/30 backdrop-blur border border-blue-400/30 text-blue-200 text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-4 py-1.5 bg-amber-500/30 backdrop-blur border border-amber-400/30 text-amber-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Featured
                </span>
              )}
              {post.trending && (
                <span className="px-4 py-1.5 bg-rose-500/30 backdrop-blur border border-rose-400/30 text-rose-200 text-xs font-bold rounded-full flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Trending
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {post.title}
            </h1>

            {/* Meta Info - Premium Style */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-lg font-bold text-white">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-sm text-blue-300">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-300">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="w-px h-4 bg-white/10" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="w-px h-4 bg-white/10" />
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.views} views
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 text-blue-200/80 text-xs rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        MAIN CONTENT - Premium Layout
      ============================================================ */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content - Left */}
            <div className="lg:col-span-8">
              {/* Reading Progress Indicator */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>{wordCount} words</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{readingTime} min read</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Expert review</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-800 prose-ul:space-y-1.5">
                <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
              </div>

              {/* Tags Section - Enhanced */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-wider">
                  Topics in this article
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share & Actions - Premium */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        liked
                          ? "bg-rose-50 text-rose-600 border border-rose-200 shadow-sm"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${liked ? "fill-rose-500 text-rose-500" : ""}`}
                      />
                      <span>{liked ? post.likes + 1 : post.likes}</span>
                    </button>
                    <button
                      onClick={() => setSaved(!saved)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        saved
                          ? "bg-blue-50 text-blue-600 border border-blue-200 shadow-sm"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <Bookmark
                        className={`w-5 h-5 ${saved ? "fill-blue-500 text-blue-500" : ""}`}
                      />
                      <span>{saved ? "Saved" : "Save"}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 font-medium mr-1">
                      Share:
                    </span>
                    <button className="p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-xl transition-all group">
                      <TwitterIcon className="w-4 h-4 text-slate-600 group-hover:text-sky-500 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition-all group">
                      <LinkedInIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition-all group">
                      <FacebookIcon className="w-4 h-4 text-slate-600 group-hover:text-blue-700 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <CopyIcon className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
                    </button>
                    <button className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <Mail className="w-4 h-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-6 flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {post.comments}
                    </span>{" "}
                    comments on this article
                  </span>
                  <button className="ml-auto px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                    Join Discussion
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">
                {/* Author Card - Premium */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                      <span className="text-4xl font-black text-white">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {post.author}
                    </h4>
                    <p className="text-sm text-slate-500">{post.authorRole}</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Verified Expert
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-3">
                      Contributing expert with 15+ years in legal technology
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        24 articles
                      </span>
                      <span className="w-px h-4 bg-slate-300" />
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        2.4k followers
                      </span>
                    </div>
                    <button className="mt-4 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-200 text-sm">
                      Follow Author
                    </button>
                  </div>
                </div>

                {/* Related Posts - Premium */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Related Articles
                    </h4>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.id}
                          to={`/blog/${related.id}`}
                          className="group flex gap-3 items-start hover:bg-slate-50 p-2 rounded-xl transition-colors"
                        >
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                              {related.category}
                            </span>
                            <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                              {related.title}
                            </h5>
                            <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                              <Clock className="w-3 h-3" />
                              <span>{related.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subscribe Card - Premium */}
                <div className="relative overflow-hidden rounded-2xl p-6 text-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-amber-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Weekly Digest
                      </span>
                    </div>
                    <h4 className="text-xl font-bold">
                      Subscribe to The Forensic Journal
                    </h4>
                    <p className="text-sm text-blue-100 mt-1">
                      Get weekly insights delivered to your inbox.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm text-slate-900 bg-white/95 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button className="px-5 py-2.5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap shadow-lg shadow-blue-500/25">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-blue-200/70 mt-2">
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
        RELATED POSTS - Full Width Premium Section
      ============================================================ */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  You Might Also Like
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Continue exploring related articles from {post.category}
                </p>
              </div>
              <Link
                to="/blog"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm"
              >
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      {related.category}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur text-white text-[10px] font-medium rounded-full">
                      {related.readTime}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg leading-snug">
                      {related.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-600">
                          {related.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {related.author}
                      </span>
                      <span className="text-xs text-slate-400 ml-auto">
                        {related.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 sm:hidden">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all"
              >
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
        CTA SECTION - Premium
      ============================================================ */}
      <section className="py-20 px-6 bg-[#1E1B4B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black">
            Never Miss an Update
          </h2>
          <p className="text-indigo-200 mt-4 max-w-2xl mx-auto text-lg">
            Subscribe to The Forensic Journal and stay informed about the latest
            developments in digital evidence, compliance, and legal technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
            />
            <button className="px-8 py-3.5 bg-white text-[#1E1B4B] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-indigo-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Weekly insights
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
          <p className="text-xs text-indigo-400/70 mt-4">
            No spam. Unsubscribe anytime. Read our Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
};
