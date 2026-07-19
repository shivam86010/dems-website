import React, { useState, useEffect } from "react";

// --- Icons & Fonts Injection (Simulated via React Side-Effects) ---
// In a standard production app, you would add these links to your index.html
const injectGoogleFontsAndStyles = () => {
  if (
    typeof window !== "undefined" &&
    !document.getElementById("sentinel-forensics-fonts")
  ) {
    const linkFonts = document.createElement("link");
    linkFonts.id = "sentinel-forensics-fonts";
    linkFonts.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    linkFonts.rel = "stylesheet";
    document.head.appendChild(linkFonts);

    const linkIcons = document.createElement("link");
    linkIcons.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    linkIcons.rel = "stylesheet";
    document.head.appendChild(linkIcons);

    const styleTag = document.createElement("style");
    styleTag.textContent = `
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-panel {
        background: rgba(30, 27, 75, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(71, 70, 79, 0.5);
      }
      @keyframes scroll-text {
        from { transform: translateY(0); }
        to { transform: translateY(-50%); }
      }
      .animate-scroll-y {
        animation: scroll-text 30s linear infinite;
      }
    `;
    document.head.appendChild(styleTag);
  }
};

export default function EvidenceTagging() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    injectGoogleFontsAndStyles();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#131316] text-[#e5e1e6] font-['Inter'] antialiased min-h-screen selection:bg-[#c4c1fb] selection:text-[#181445]">
      
      {/* Main Content */}
      <main >
        {/* Section 1: Cinematic Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#47464f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(54,38,206,0.15),transparent_70%)] pointer-events-none"></div>
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #47464f 1px, transparent 1px)",
              bgSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-[1440px] mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e1b4b]/30 border border-[#c4c1fb]/20 rounded-full mb-8 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[#c4c1fb] text-[16px]">
                  verified_user
                </span>
                <span className="text-[#c4c1fb] font-['JetBrains_Mono'] text-xs font-medium tracking-widest">
                  SENTINEL INTEGRITY SYSTEM
                </span>
              </div>
              <h1 className="text-5xl md:text-[72px] font-bold mb-8 text-[#e5e1e6] leading-[1.1] tracking-tight">
                AI-Driven Taxonomy with <br />
                <span className="bg-gradient-to-r from-[#c3c0ff] via-[#c4c1fb] to-[#4edea3] bg-clip-text text-transparent">
                  Forensic Intent.
                </span>
              </h1>
              <p className="text-[#c8c5d0] max-w-xl mb-12 text-[18px] leading-relaxed">
                Transform raw data streams into verifiable legal assets.
                Sentinel’s neural core classifies millions of files with
                surgical precision, ensuring no privilege is missed and every
                connection is mapped.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-[#c4c1fb] text-[#2d2a5b] px-10 py-5 rounded-2xl text-2xl font-semibold hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(196,193,251,0.3)]">
                  Initialize Core{" "}
                  <span className="material-symbols-outlined">bolt</span>
                </button>
                <button className="border border-[#47464f] px-10 py-5 rounded-2xl text-2xl font-semibold hover:bg-[#2a292d] transition-all backdrop-blur-sm">
                  Technical Specs
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative z-10 glass-panel p-2 rounded-[40px] border-[#c4c1fb]/30 shadow-[0_0_80px_rgba(78,222,163,0.1)] group">
                <div className="absolute -inset-4 bg-[#4edea3]/10 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute -inset-4 bg-[#c4c1fb]/10 blur-[80px] rounded-full opacity-30"></div>
                <img
                  alt="Forensic AI Neural Core"
                  className="rounded-[32px] relative z-10 w-full h-auto shadow-2xl border border-[#47464f]/30"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-fFPfRppzR3B-Gi-sF1QxB6kngzPY7EprE31hHt0eaHdPXXYrxrYzbYqgkeQcWxNgly3ZG7EGJzWo78I7q-PUA3NQNIbpEu2HFQgUMzk6Yhftq5R4wh5b8ijjqkL771Bo6xY_mu_Mx22Tc0YAluKH38SIKJJrwJo2u6-ldSxFNLkg71MW5lkIrISgvd_SaAmHLmcnGto7Qsisxz1xRDW4i2QaCzgEfsZ8MsdsuUTYyqc0qR7LqRhi"
                />
                <div className="absolute -top-8 -right-8 glass-panel p-4 rounded-2xl border-[#c4c1fb]/30 animate-pulse z-20">
                  <p className="text-[10px] font-['JetBrains_Mono'] font-medium text-[#c4c1fb] mb-1">
                    PROCESSING SPEED
                  </p>
                  <p className="text-[18px] font-bold text-[#e5e1e6]">
                    1.2 PB/s
                  </p>
                </div>
                <div className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-2xl border-[#4edea3]/30 z-20">
                  <p className="text-[10px] font-['JetBrains_Mono'] font-medium text-[#4edea3] mb-1">
                    NEURAL CONFIDENCE
                  </p>
                  <p className="text-[18px] font-bold text-[#e5e1e6]">99.98%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 glass-panel px-4 py-2 rounded-full border-[#47464f]/30 flex items-center gap-4 overflow-hidden max-w-md h-10">
            <span className="text-[#4edea3] font-['JetBrains_Mono'] text-[10px] whitespace-nowrap">
              LIVE_HASH_STREAM:
            </span>
            <div className="flex flex-col gap-6 animate-scroll-y font-['JetBrains_Mono'] text-[10px] text-[#c8c5d0]">
              <span>SHA-256: 7d6c7b9a8f... [VERIFIED]</span>
              <span>SHA-256: e3b0c44298... [VERIFIED]</span>
              <span>SHA-256: a2f3c4d5e6... [PENDING]</span>
              {/* Duplicate array for endless seamless looping translation setup */}
              <span>SHA-256: 7d6c7b9a8f... [VERIFIED]</span>
              <span>SHA-256: e3b0c44298... [VERIFIED]</span>
              <span>SHA-256: a2f3c4d5e6... [PENDING]</span>
            </div>
          </div>
        </section>

        {/* Section 2: Real-time AI Auto-Tagging */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-bold mb-6 text-[#e5e1e6] tracking-tight">
                Real-time AI Auto-Tagging
              </h2>
              <p className="text-[#c8c5d0] mb-8 text-sm leading-relaxed">
                Witness the speed of investigative intelligence. Our DEMS+
                Cognitive Partner identifies legal relevance, sentiment markers,
                and evidentiary categories in milliseconds, not hours.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-[#201f23] border border-[#47464f]/30">
                  <span className="material-symbols-outlined text-[#4edea3]">
                    done_all
                  </span>
                  <div>
                    <p className="font-bold text-[#e5e1e6]">
                      99.9% Recall Rate
                    </p>
                    <p className="text-xs text-[#c8c5d0]">
                      Industry-leading accuracy in identifying high-stakes legal
                      entities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-[#201f23] border border-[#47464f]/30">
                  <span className="material-symbols-outlined text-[#c3c0ff]">
                    speed
                  </span>
                  <div>
                    <p className="font-bold text-[#e5e1e6]">
                      Sub-100ms Inference
                    </p>
                    <p className="text-xs text-[#c8c5d0]">
                      Analyze documents as they hit the EvidenceVault in
                      real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div className="flex justify-between mb-4 border-b border-[#47464f] pb-2">
                <span className="font-['JetBrains_Mono'] font-medium text-[#c3c0ff] text-xs">
                  active_stream_v0.9
                </span>
                <span className="font-['JetBrains_Mono'] font-medium text-[#4edea3] text-xs tracking-wider animate-pulse">
                  PROCESSING...
                </span>
              </div>
              <div className="space-y-3">
                {/* Entry 1 */}
                <div className="p-3 bg-[#2a292d] rounded-lg border-l-4 border-[#4edea3] animate-pulse">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c4c1fb]">
                      email_4421.eml
                    </span>
                    <span className="text-[#4edea3] font-['JetBrains_Mono'] text-[10px] bg-[#4edea3]/10 px-1 rounded">
                      VERIFIED
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <span className="px-2 py-0.5 bg-[#93000a] text-[#ffdad6] text-[10px] rounded font-bold">
                      PII DETECTED
                    </span>
                    <span className="px-2 py-0.5 bg-[#1e1b4b] text-[#8683ba] text-[10px] rounded font-medium">
                      LEGAL_PRIVILEGE
                    </span>
                    <span className="px-2 py-0.5 bg-[#3626ce] text-[#b3b1ff] text-[10px] rounded font-medium">
                      SENTIMENT: URGENT
                    </span>
                  </div>
                </div>
                {/* Entry 2 */}
                <div className="p-3 bg-[#1c1b1f] rounded-lg border-l-4 border-[#928f9a]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0]">
                      report_final_q3.pdf
                    </span>
                    <span className="text-[#c8c5d0] font-['JetBrains_Mono'] text-[10px]">
                      SCANNING
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <span className="px-2 py-0.5 bg-[#353438] text-[#c8c5d0] text-[10px] rounded">
                      CORPORATE_IP
                    </span>
                  </div>
                </div>
                {/* Entry 3 */}
                <div className="p-3 bg-[#1c1b1f] rounded-lg border-l-4 border-[#c4c1fb]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0]">
                      chat_log_whatsapp_01.txt
                    </span>
                    <span className="text-[#4edea3] font-['JetBrains_Mono'] text-[10px]">
                      TAGGED
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-2">
                    <span className="px-2 py-0.5 bg-[#1e1b4b] text-[#8683ba] text-[10px] rounded">
                      ADMISSIONS
                    </span>
                    <span className="px-2 py-0.5 bg-[#002819] text-[#009d6c] text-[10px] rounded">
                      IDENTITY: CONFIRMED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Advanced PII Masking */}
        <section className="py-24 bg-[#0e0e11]">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[40px] font-bold mb-4 tracking-tight">
                Advanced PII Masking
              </h2>
              <p className="text-[#c8c5d0] max-w-2xl mx-auto text-sm">
                Zero-trust privacy by design. Automatically redact names, SSNs,
                and sensitive data before any human review occurs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#201f23] border border-[#47464f] hover:border-[#c4c1fb] transition-all group cursor-default">
                <span className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-6 block group-hover:scale-110 transition-transform w-fit">
                  visibility_off
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-[#e5e1e6]">
                  Non-Destructive Redaction
                </h3>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  Reviewers see placeholders while the underlying data remains
                  cryptographically secured in the Vault.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#201f23] border border-[#47464f] hover:border-[#c4c1fb] transition-all group cursor-default">
                <span className="material-symbols-outlined text-[#4edea3] text-4xl mb-6 block group-hover:scale-110 transition-transform w-fit">
                  fingerprint
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-[#e5e1e6]">
                  Identity Fingerprinting
                </h3>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  Unique IDs replace PII, allowing investigators to track
                  subjects across documents without exposing identities.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#201f23] border border-[#47464f] hover:border-[#c4c1fb] transition-all group cursor-default">
                <span className="material-symbols-outlined text-[#c3c0ff] text-4xl mb-6 block group-hover:scale-110 transition-transform w-fit">
                  gavel
                </span>
                <h3 className="text-2xl font-semibold mb-4 text-[#e5e1e6]">
                  Compliance Validation
                </h3>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  Instantly generate GDPR and CCPA-compliant exports with
                  automated privilege logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Custom Taxonomy Engine */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-square glass-panel rounded-3xl p-8 flex items-center justify-center">
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#c4c1fb] flex items-center justify-center rounded-lg shadow-lg shadow-[#c4c1fb]/20">
                      <span className="material-symbols-outlined text-[#2d2a5b]">
                        account_tree
                      </span>
                    </div>
                    <div className="h-1 bg-[#c4c1fb] flex-grow rounded-full"></div>
                  </div>
                  <div className="ml-16 space-y-4 border-l border-[#c4c1fb]/30 pl-8 relative">
                    <div className="p-3 bg-[#353438] rounded border border-[#47464f] flex justify-between items-center">
                      <span className="font-['JetBrains_Mono'] text-xs">
                        Intellectual_Property
                      </span>
                      <span className="material-symbols-outlined text-[#4edea3] text-sm">
                        check_circle
                      </span>
                    </div>
                    <div className="p-3 bg-[#353438] rounded border border-[#47464f] flex justify-between items-center">
                      <span className="font-['JetBrains_Mono'] text-xs">
                        Financial_Fraud
                      </span>
                      <span className="material-symbols-outlined text-[#4edea3] text-sm">
                        check_circle
                      </span>
                    </div>
                    <div className="p-3 bg-[#2a292d] rounded border border-[#c4c1fb]/50 flex justify-between items-center">
                      <span className="font-['JetBrains_Mono'] text-xs text-[#c4c1fb]">
                        Internal_Governance
                      </span>
                      <span className="material-symbols-outlined text-[#c4c1fb] text-sm animate-spin">
                        sync
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-[40px] font-bold mb-6 tracking-tight">
                Bespoke Classification Trees
              </h2>
              <p className="text-[#c8c5d0] mb-8 text-sm leading-relaxed">
                Your practice area is unique. Build multi-layered taxonomy
                structures using our intuitive "Cognitive Partner" logic. Train
                the AI on your specific case law and firm standards in minutes.
              </p>
              <ul className="space-y-4 text-sm text-[#e5e1e6]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] font-bold">
                    check
                  </span>{" "}
                  Hierarchical Parent-Child Mapping
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] font-bold">
                    check
                  </span>{" "}
                  Rule-Based "Smart Folders"
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] font-bold">
                    check
                  </span>{" "}
                  Dynamic Weights for Relevancy
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Cross-Case Semantic Linking */}
        <section className="py-24 bg-[#201f23]">
          <div className="max-w-[1440px] mx-auto px-8 text-center">
            <h2 className="text-[40px] font-bold mb-12 tracking-tight">
              Cross-Case Semantic Linking
            </h2>

            {/* Mesh/Network Container Layer placeholder */}
            <div className="h-[400px] relative w-full mb-12 rounded-3xl overflow-hidden bg-[#0e0e11] border border-[#47464f] flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#e5e1e6 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 bg-[#131316]/80 backdrop-blur px-6 py-4 rounded-xl border border-[#c4c1fb]/20 text-center shadow-xl">
                <p className="font-['JetBrains_Mono'] text-xs font-medium text-[#c4c1fb] mb-2">
                  NETWORK_DENSITY: HIGH
                </p>
                <p className="text-xs text-[#c8c5d0]">
                  Finding connections across 1.2M files in 4 clusters...
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-[#2a292d] border border-[#47464f]">
                <p className="text-5xl font-bold text-[#c3c0ff] mb-1">14k</p>
                <p className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0] font-medium">
                  Links Identified
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#2a292d] border border-[#47464f]">
                <p className="text-5xl font-bold text-[#4edea3] mb-1">04</p>
                <p className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0] font-medium">
                  Global Connections
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#2a292d] border border-[#47464f]">
                <p className="text-5xl font-bold text-[#c4c1fb] mb-1">89%</p>
                <p className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0] font-medium">
                  Relevancy Score
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#2a292d] border border-[#47464f]">
                <p className="text-5xl font-bold text-[#e5e1e6] mb-1">∞</p>
                <p className="font-['JetBrains_Mono'] text-xs text-[#c8c5d0] font-medium">
                  Scalability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: OCR Deep-Dive */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-bold mb-6 tracking-tight">
                Bit-Level OCR Extraction
              </h2>
              <p className="text-[#c8c5d0] mb-10 text-sm leading-relaxed">
                Handwritten notes, faxed receipts, and low-res scans are no
                longer dead ends. Our OCR engine uses multi-pass spectral
                analysis to extract text from the noise.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#201f23] rounded-lg border border-[#47464f]/20 shadow-sm">
                  <span className="text-sm font-medium">
                    Handwritten Legal Notes
                  </span>
                  <span className="text-[#4edea3] font-['JetBrains_Mono'] text-xs font-medium">
                    94% CONFIDENCE
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#201f23] rounded-lg border border-[#47464f]/20 shadow-sm">
                  <span className="text-sm font-medium">
                    Distorted Thermal Receipts
                  </span>
                  <span className="text-[#4edea3] font-['JetBrains_Mono'] text-xs font-medium">
                    88% CONFIDENCE
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#201f23] rounded-lg border border-[#47464f]/20 shadow-sm">
                  <span className="text-sm font-medium">
                    Multilingual Schematics
                  </span>
                  <span className="text-[#c3c0ff] font-['JetBrains_Mono'] text-xs font-medium">
                    PROCESSED
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <img
                className="rounded-3xl border border-[#47464f] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full object-cover"
                alt="Analytical technical schematic engine data details"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjiQkH7IRIKjl0hXrtEKV6DBcJVlYkxOfuduca0RAPQO9d5VPxd4b414ik_uFmhmXvp2NsowemLXAE5zYSzYXtEM7IGIzs5iV7nwyiRJhTReXaTd5ExKn3rR08DODxN68ouO-5_Bkt28igkkPEfpLc_DajAXvsdkYof6hd43SeY5DtX9ofY6ue46ux1SaM7oIuzxo8ZROk5mDaa4ZmR_CHcJfqZ59WyWwgN6pJX1DR8ZqwRcauevG6"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#131316]/80 to-transparent flex items-end p-8">
                <div className="glass-panel p-4 rounded-xl w-full border border-[#47464f]/60">
                  <p className="font-['JetBrains_Mono'] font-medium text-[#c3c0ff] text-xs mb-1">
                    OCR_DEBUG_LOG
                  </p>
                  <p className="text-xs text-[#c8c5d0] truncate font-['JetBrains_Mono']">
                    Processing chunk 76a... Identified entity: "Contract
                    Amendment B"... Confidence: 0.992
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Multimedia Analysis */}
        <section className="py-24 bg-[#0e0e11] border-y border-[#47464f]">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[40px] font-bold mb-4 tracking-tight">
                  Multimedia Intelligence
                </h2>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  Automated object and face detection in video evidence with
                  high-fidelity bounding box overlays and activity heatmaps.
                </p>
              </div>
              <button className="bg-[#1e1b4b] text-[#8683ba] px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#1e1b4b]/80 transition-all font-bold text-sm tracking-wide shrink-0">
                <span className="material-symbols-outlined">play_circle</span>{" "}
                Watch Demo
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#201f23] border border-[#47464f] group">
                <div
                  className="w-full h-full bg-cover bg-center opacity-60 transform transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWqRwiLNeJVrLkZIrRGtB0ul_OjIjgoVQabcZW3-az8Dh4iG2Eddzefb1tY5195ul5hDKxDuVZwLX6Eq5bTQyb30OxPgXkP__aq4yjGV8OMLQ4Ae6zjaY3qD0huMRGjYZ93-WXz2INaWwVKWPHWRnjYaoWiR99vLbUZCD-93y8mm9BBwYn2b4Eki25pTX9hkoVP7I73yTZQudKJcq1nOnWe8oBH71-CgMliQeUv-cgGMNIaeU0yiyR')",
                  }}
                ></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-[#93000a] text-[#ffdad6] text-[10px] font-bold rounded shadow-sm">
                    LIVE_TRACKING
                  </span>
                  <span className="px-2 py-1 bg-[#2a292d] text-[#e5e1e6] text-[10px] rounded font-['JetBrains_Mono'] font-medium border border-[#47464f]/40">
                    CAM_04_NORTH
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 glass-panel p-2 rounded text-[10px] font-['JetBrains_Mono'] font-medium text-[#e5e1e6]">
                  IDENTIFIED: 4 SUBJECTS, 2 VEHICLES
                </div>
              </div>

              <div className="grid grid-rows-2 gap-8">
                <div className="p-8 rounded-3xl bg-[#201f23] border border-[#47464f] flex gap-6 items-start shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#3626ce] flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#c3c0ff]">
                      face
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#e5e1e6]">
                      Subject Matching
                    </h3>
                    <p className="text-[#c8c5d0] text-sm leading-relaxed">
                      Sync identities across different camera angles and file
                      types automatically.
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-[#201f23] border border-[#47464f] flex gap-6 items-start shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#002819] flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[#4edea3]">
                      analytics
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#e5e1e6]">
                      Temporal Heatmaps
                    </h3>
                    <p className="text-[#c8c5d0] text-sm leading-relaxed">
                      Visualize activity density over time to identify anomalies
                      in lengthy video feeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Forensic Audit (Zero Trust) */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto">
          <div className="glass-panel p-6 md:p-12 rounded-[40px] border-[#c4c1fb]/20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4edea3]/10 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="inline-block p-4 bg-[#002819] rounded-2xl mb-6 shadow-md border border-[#47464f]/30">
                  <span className="material-symbols-outlined text-[#4edea3] text-4xl block">
                    verified_user
                  </span>
                </div>
                <h2 className="text-[40px] font-bold mb-6 tracking-tight leading-tight">
                  Zero-Trust Audit Trail
                </h2>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  Every AI suggestion, human override, and tag modification is
                  signed with a SHA-256 hash and logged to an immutable ledger.
                  Forensic integrity is never compromised.
                </p>
              </div>

              <div className="lg:w-2/3 flex items-center">
                <div className="bg-[#0e0e11] rounded-2xl border border-[#47464f]/50 overflow-hidden font-['JetBrains_Mono'] w-full shadow-lg">
                  <div className="grid grid-cols-4 p-4 border-b border-[#47464f] bg-[#2a292d] text-[10px] text-[#c8c5d0] font-bold tracking-wider">
                    <span>TIMESTAMP</span>
                    <span>ACTOR</span>
                    <span>ACTION</span>
                    <span>VERIFICATION_HASH</span>
                  </div>
                  <div className="divide-y divide-[#47464f]/30 text-[11px] font-medium">
                    <div className="grid grid-cols-4 p-4 hover:bg-[#2a292d] transition-colors">
                      <span className="text-[#c8c5d0]">14:02:11</span>
                      <span className="text-[#c3c0ff]">SYSTEM_COGNITIVE</span>
                      <span className="text-[#e5e1e6]">
                        Auto-Tag: PRIVILEGED
                      </span>
                      <span className="text-[#4edea3] truncate pr-2">
                        8f2d...4a12
                      </span>
                    </div>
                    <div className="grid grid-cols-4 p-4 hover:bg-[#2a292d] transition-colors">
                      <span className="text-[#c8c5d0]">14:05:44</span>
                      <span className="text-[#e5e1e6]">INV_STEVENS</span>
                      <span className="text-[#c4c1fb]">
                        Override: CONFIRMED
                      </span>
                      <span className="text-[#4edea3] truncate pr-2">
                        b3c1...99e2
                      </span>
                    </div>
                    <div className="grid grid-cols-4 p-4 hover:bg-[#2a292d] transition-colors">
                      <span className="text-[#c8c5d0]">14:10:02</span>
                      <span className="text-[#c3c0ff]">SYSTEM_COGNITIVE</span>
                      <span className="text-[#e5e1e6]">
                        Entity_Link: CASE_B
                      </span>
                      <span className="text-[#4edea3] truncate pr-2">
                        cc45...11a0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Bulk Classification Hub */}
        <section className="py-24 bg-[#2a292d]">
          <div className="max-w-[1440px] mx-auto px-8 text-center">
            <h2 className="text-[40px] font-bold mb-6 tracking-tight">
              Bulk Classification Hub
            </h2>
            <p className="text-[#c8c5d0] max-w-2xl mx-auto mb-16 text-sm">
              Handle multi-terabyte datasets with one-click categorization
              logic. Efficiency for the scale of modern litigation.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 items-start text-left">
              <div className="bg-[#0e0e11] p-8 rounded-3xl border border-[#47464f] shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-semibold text-[#e5e1e6]">
                    Ingestion Queue
                  </span>
                  <span className="px-3 py-1 bg-[#4edea3]/10 text-[#4edea3] font-['JetBrains_Mono'] text-[10px] font-medium rounded border border-[#4edea3]/20">
                    98% OPTIMIZED
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-['JetBrains_Mono'] text-xs text-[#c8c5d0] mb-2 font-medium">
                      <span>Financial_Records.zip</span>
                      <span>1.2TB / 4.5M Files</span>
                    </div>
                    <div className="w-full bg-[#2a292d] h-2 rounded-full overflow-hidden p-[1px]">
                      <div className="w-3/4 h-full bg-[#c4c1fb] rounded-full shadow-[0_0_8px_rgba(196,193,251,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-['JetBrains_Mono'] text-xs text-[#c8c5d0] mb-2 font-medium">
                      <span>Communication_Logs_Export</span>
                      <span>450GB / 12M Entries</span>
                    </div>
                    <div className="w-full bg-[#2a292d] h-2 rounded-full overflow-hidden p-[1px]">
                      <div className="w-1/2 h-full bg-[#c3c0ff] rounded-full shadow-[0_0_8px_rgba(195,192,255,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f] shadow-sm hover:border-[#c4c1fb]/50 transition-colors">
                  <span className="material-symbols-outlined text-[#c4c1fb] text-3xl mb-4 block">
                    move_to_inbox
                  </span>
                  <p className="font-bold text-[#e5e1e6] mb-1">Auto-Routing</p>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Send relevant files to specific review teams automatically.
                  </p>
                </div>
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f] shadow-sm hover:border-[#c3c0ff]/50 transition-colors">
                  <span className="material-symbols-outlined text-[#c3c0ff] text-3xl mb-4 block">
                    filter_alt
                  </span>
                  <p className="font-bold text-[#e5e1e6] mb-1">
                    Smart Deduplication
                  </p>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Remove redundant data clusters across the entire database.
                  </p>
                </div>
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f] shadow-sm hover:border-[#4edea3]/50 transition-colors">
                  <span className="material-symbols-outlined text-[#4edea3] text-3xl mb-4 block">
                    settings_suggest
                  </span>
                  <p className="font-bold text-[#e5e1e6] mb-1">
                    Predictive Coding
                  </p>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Learn from initial reviews to tag the rest of the set.
                  </p>
                </div>
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f] shadow-sm hover:border-[#ffb4ab]/50 transition-colors">
                  <span className="material-symbols-outlined text-[#ffb4ab] text-3xl mb-4 block">
                    lock_reset
                  </span>
                  <p className="font-bold text-[#e5e1e6] mb-1">
                    Privilege Shield
                  </p>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Quarantine likely privileged data instantly upon ingestion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Jurisdictional Language Processing */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-bold mb-6 tracking-tight">
                Global Context, Local Law
              </h2>
              <p className="text-[#c8c5d0] mb-8 text-sm leading-relaxed">
                Supporting 100+ languages with legal-context-aware translation.
                Our AI understands the nuance of jurisdictional jargon in any
                language.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Mandarin",
                  "Arabic",
                  "French (EU Law)",
                  "German",
                  "Japanese",
                  "Spanish",
                  "Portuguese",
                  "+93 More",
                ].map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#201f23] border border-[#47464f] rounded-full font-['JetBrains_Mono'] text-xs font-medium text-[#c8c5d0]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel p-8 rounded-3xl border border-[#c4c1fb]/20 shadow-2xl relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#c3c0ff] font-medium">
                    SOURCE: GERMAN (LEGAL_TECH)
                  </span>
                  <span className="material-symbols-outlined text-[#c3c0ff]">
                    translate
                  </span>
                </div>
                <p className="italic text-[#c8c5d0] mb-6 text-sm leading-relaxed">
                  "Die Vertraulichkeit der Kommunikation zwischen Anwalt und
                  Mandant ist nach deutschem Recht absolut geschützt."
                </p>
                <div className="h-px bg-[#47464f] mb-6 opacity-40"></div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#4edea3] font-medium">
                    TRANSLATED: ENGLISH
                  </span>
                  <span className="text-[#4edea3] font-['JetBrains_Mono'] text-xs font-bold tracking-wider">
                    LEGAL_MATCH: 100%
                  </span>
                </div>
                <p className="text-[#e5e1e6] text-sm leading-relaxed font-medium">
                  "Attorney-client communication privilege is absolute under
                  German Law."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Technical ROI Module */}
        <section className="py-24 bg-[#131316] border-t border-[#47464f]/30">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-[#1c1b1f] rounded-3xl border-b-4 border-[#c4c1fb] shadow-md transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-5xl font-bold text-[#c4c1fb] mb-2">80%</h3>
                <p className="text-2xl font-semibold mb-2 text-[#e5e1e6]">
                  Efficiency Gain
                </p>
                <p className="text-[#c8c5d0] text-xs leading-relaxed">
                  Reduction in manual document review time compared to
                  traditional eDiscovery.
                </p>
              </div>
              <div className="text-center p-8 bg-[#1c1b1f] rounded-3xl border-b-4 border-[#4edea3] shadow-md transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-5xl font-bold text-[#4edea3] mb-2">0.0%</h3>
                <p className="text-2xl font-semibold mb-2 text-[#e5e1e6]">
                  Missed Privilege
                </p>
                <p className="text-[#c8c5d0] text-xs leading-relaxed">
                  Zero critical privilege markers missed in validation testing
                  over 10M docs.
                </p>
              </div>
              <div className="text-center p-8 bg-[#1c1b1f] rounded-3xl border-b-4 border-[#c3c0ff] shadow-md transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-5xl font-bold text-[#c3c0ff] mb-2">5X</h3>
                <p className="text-2xl font-semibold mb-2 text-[#e5e1e6]">
                  ROI Velocity
                </p>
                <p className="text-[#c8c5d0] text-xs leading-relaxed">
                  Faster case turnaround times, enabling higher caseload
                  capacity for firms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Final CTA */}
        <section className="py-32 relative overflow-hidden text-center bg-[#0e0e11]">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#c4c1fb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 px-4">
            <h2 className="text-5xl md:text-[64px] font-bold mb-8 leading-tight tracking-tight text-[#e5e1e6]">
              Accelerate Your <br />
              <span className="text-[#c4c1fb]">Forensic Intelligence.</span>
            </h2>
            <p className="text-[#c8c5d0] max-w-xl mx-auto mb-12 text-sm leading-relaxed">
              Join the 500+ law enforcement agencies and top-tier law firms
              already securing the future of digital evidence with
              SentinelForensics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#c4c1fb] text-[#2d2a5b] px-10 py-5 rounded-2xl text-2xl font-semibold shadow-lg shadow-[#c4c1fb]/20 hover:scale-105 transition-all">
                Request Demo Access
              </button>
              <button className="border border-[#47464f] px-10 py-5 rounded-2xl text-2xl font-semibold hover:bg-[#2a292d] transition-all">
                Talk to a Forensic Expert
              </button>
            </div>
          </div>
        </section>
      </main>

      
      
    </div>
  );
}
