import React, { useState } from "react";

// Explicit type definition for Accordion component props
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 rounded overflow-hidden">
      <button
        className="w-full p-6 flex justify-between items-center text-[#e5e1e6] hover:bg-[#201f23] transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold">{title}</span>
        <span
          className="material-symbols-outlined transform transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="p-6 bg-[#0e0e11] text-[#c8c5d0] text-sm border-t border-[#47464f]">
          {children}
        </div>
      )}
    </div>
  );
};

export default function VersionControl() {
  const [scrubX, setScrubX] = useState<number>(50);

  const handleTimelineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setScrubX(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="bg-[#131316] text-[#e5e1e6] font-sans antialiased selection:bg-[#c3c0ff]/30">
      {/* Inject Material Symbols Dynamic Link inside component context */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

     
     

      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e1b4b] border border-[#c4c1fb]/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="font-mono text-xs text-[#c4c1fb] uppercase tracking-widest">
                Protocol V.4.8.2 Active
              </span>
            </div>
            <h1 className="font-sans text-5xl font-bold text-[#e5e1e6] mb-6 leading-[1.1]">
              Evidence Versioning with{" "}
              <span class="text-[#c4c1fb]">Cryptographic Certainty.</span>
            </h1>
            <p className="text-lg text-[#c8c5d0] max-w-xl mb-10 leading-relaxed">
              DEMS+ introduces "Historical Ghosting"—a non-destructive
              visualization layer that allows forensic investigators to traverse
              the temporal state of any digital asset while maintaining a
              mathematical air-gap.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#c3c0ff] text-[#1d00a5] font-bold rounded shadow-lg hover:shadow-[#c3c0ff]/20 transition-all">
                Initialize Evidence Scrutiny
              </button>
              <button className="px-8 py-4 border border-[#928f9a] text-[#e5e1e6] font-bold rounded hover:bg-[#201f23] transition-all">
                View NIST Framework
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#4edea3]/55">
                HASH: 7f83b1...2e1a
              </div>
              <div className="flex flex-col gap-6">
                {/* Ghosting Visualization Mockup */}
                <div className="relative h-64 w-full bg-[#0e0e11] rounded border border-[#47464f] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <span
                      className="material-symbols-outlined text-[120px] text-[#c4c1fb]/20"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      description
                    </span>
                  </div>
                  <div className="relative w-48 h-64 border-2 border-[#c4c1fb]/30 bg-[#1e1b4b]/10 backdrop-blur-sm -rotate-6 translate-x-[-10%] flex items-center justify-center">
                    <span className="font-mono text-[10px] text-[#c4c1fb]">
                      VERSION 1.2
                    </span>
                  </div>
                  <div className="absolute w-48 h-64 border-2 border-[#4edea3] bg-[#002819]/20 backdrop-blur-md rotate-3 translate-x-[10%] flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-full h-full p-4 overflow-hidden">
                      <div className="h-2 w-1/2 bg-[#4edea3]/40 mb-2"></div>
                      <div className="h-2 w-3/4 bg-[#4edea3]/40 mb-2"></div>
                      <div className="h-2 w-1/4 bg-[#ffb4ab]/40 mb-2 border border-[#ffb4ab] animate-pulse"></div>
                      <div className="h-2 w-2/3 bg-[#4edea3]/40 mb-2"></div>
                    </div>
                    <span className="font-mono text-[10px] text-[#4edea3]">
                      VERSION 1.3 (DELTA ACTIVE)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#201f23] p-4 rounded border border-[#47464f]">
                    <div className="font-mono text-xs text-[#c8c5d0] mb-1">
                      METADATA SHIFT
                    </div>
                    <div className="text-2xl font-semibold text-[#4edea3]">
                      +14.2%
                    </div>
                  </div>
                  <div className="bg-[#201f23] p-4 rounded border border-[#47464f]">
                    <div className="font-mono text-xs text-[#c8c5d0] mb-1">
                      HASH INTEGRITY
                    </div>
                    <div className="text-2xl font-semibold text-[#c4c1fb]">
                      SECURE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ghosting Engine */}
      <section className="py-24 bg-[#0e0e11] relative">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold text-[#e5e1e6] mb-4">
              The "Ghosting" Engine
            </h2>
            <p className="text-[#c8c5d0] max-w-2xl mx-auto">
              Visualizing forensic evolution without compromising the integrity
              of the original master file. A zero-trust approach to historical
              analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-8 rounded-xl border-l-4 border-l-[#4edea3]">
              <span className="material-symbols-outlined text-[#4edea3] mb-4 text-3xl">
                visibility
              </span>
              <h3 className="text-xl font-semibold text-[#e5e1e6] mb-3">
                Non-Destructive Overlays
              </h3>
              <p className="text-[#c8c5d0] text-sm leading-relaxed">
                Toggle between historical states using transparent layers. See
                exactly where metadata was appended or file headers were
                modified by automated recovery scripts.
              </p>
            </div>
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-8 rounded-xl border-l-4 border-l-[#c4c1fb]">
              <span className="material-symbols-outlined text-[#c4c1fb] mb-4 text-3xl">
                terminal
              </span>
              <h3 className="text-xl font-semibold text-[#e5e1e6] mb-3">
                Temporal Shadowing
              </h3>
              <p className="text-[#c8c5d0] text-sm leading-relaxed">
                Every action creates a "Ghost Record." Investigators can shadow
                past analysis paths to understand the logic of previous forensic
                conclusions without creating a new fork.
              </p>
            </div>
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-8 rounded-xl border-l-4 border-l-[#c3c0ff]">
              <span className="material-symbols-outlined text-[#c3c0ff] mb-4 text-3xl">
                layers
              </span>
              <h3 className="text-xl font-semibold text-[#e5e1e6] mb-3">
                Sub-Bit Verification
              </h3>
              <p className="text-[#c8c5d0] text-sm leading-relaxed">
                Compare file clusters at the bitwise level. Our engine
                highlights shifts in Slack Space and Unallocated clusters that
                occur between versioning timestamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immutable Serialization Deep Dive */}
      <section className="py-24 bg-[#131316] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 w-full">
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-[#201f23] rounded border border-[#47464f] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[#c4c1fb]">SHA-256 GENERIC_V1:</span>
                <span className="text-[#c8c5d0] break-all">
                  e3b0c44298fc1c149afbf4c8996fb92427...
                </span>
              </div>
              <div className="ml-8 p-4 bg-[#1e1b4b]/30 border-l-2 border-[#c4c1fb] rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[#c3c0ff]">LINK_POINTER:</span>
                <span className="text-[#c8c5d0]">-&gt; NODE_001_V2</span>
              </div>
              <div className="p-4 bg-[#201f23] rounded border border-[#47464f] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[#c4c1fb]">SHA-256 GENERIC_V2:</span>
                <span className="text-[#c8c5d0] break-all">
                  8f1d2e3c4b5a6d7e8f9a0b1c2d3e4f5a...
                </span>
              </div>
              <div className="ml-8 p-4 bg-[#002819]/30 border-l-2 border-[#4edea3] rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[#4edea3]">VERIFICATION:</span>
                <span className="text-[#c8c5d0]">SIGNED_BY_ROOT_AUTH</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-[#e5e1e6] mb-6">
              Immutable Serialization
            </h2>
            <p className="text-[#c8c5d0] mb-8 leading-relaxed">
              Every modification to the evidence package—including the addition
              of notes or tags—is treated as a new "Block" in the local forensic
              chain. We utilize SHA-256 serialization with double-salt
              encryption to ensure that the timeline is mathematically
              impossible to alter retrospectively.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#4edea3]">
                  verified_user
                </span>
                <div>
                  <p className="font-bold text-[#e5e1e6]">
                    Deterministic Hashing
                  </p>
                  <p className="text-sm text-[#c8c5d0]">
                    Identical inputs always yield the same hash, providing
                    instant collision detection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#4edea3]">
                  link
                </span>
                <div>
                  <p className="font-bold text-[#e5e1e6]">
                    Merkle Tree Anchoring
                  </p>
                  <p className="text-sm text-[#c8c5d0]">
                    Large evidence sets are hashed into a hierarchy, allowing
                    for partial verification without exposing the entire set.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Scrubbing */}
      <section className="py-24 bg-[#201f23]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#e5e1e6] mb-2">
                Forensic Time Machine
              </h2>
              <p className="text-[#c8c5d0]">
                Scrub through evidence evolution at millisecond resolution.
              </p>
            </div>
            <div className="flex items-center gap-4 font-mono text-[#c8c5d0] text-xs">
              <span>
                CURRENT VIEW:{" "}
                <span className="text-[#4edea3]">2024-05-12T14:22:01.004Z</span>
              </span>
              <span className="px-2 py-1 bg-[#2a292d] rounded text-[10px] border border-[#47464f]">
                LIVE SYNC
              </span>
            </div>
          </div>

          <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-8 rounded-xl shadow-2xl">
            <div
              className="h-48 bg-[#131316] rounded-lg border border-[#47464f] mb-6 relative overflow-hidden flex items-end p-2 gap-1 cursor-ew-resize"
              onMouseMove={handleTimelineMouseMove}
            >
              {/* Data Tracks Architecture Simulation */}
              <div className="flex-1 bg-[#c4c1fb]/20 h-[10%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[15%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/40 h-[40%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#4edea3] h-[80%] rounded-t-sm animate-pulse"></div>
              <div className="flex-1 bg-[#c4c1fb]/40 h-[30%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[10%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[50%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[20%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/60 h-[90%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[15%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[10%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[25%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[60%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[10%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/20 h-[15%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/40 h-[40%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#4edea3] h-[70%] rounded-t-sm"></div>
              <div className="flex-1 bg-[#c4c1fb]/40 h-[30%] rounded-t-sm"></div>

              {/* Dynamic scrub visual tracker overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: `linear-gradient(90deg, transparent, #4edea3 ${scrubX}%, transparent)`,
                }}
              ></div>
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#4edea3] shadow-[0_0_15px_#4edea3] transition-all duration-75 pointer-events-none"
                style={{ left: `${scrubX}%` }}
              ></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded bg-[#2a292d] border border-[#47464f] text-[#e5e1e6] hover:bg-[#c4c1fb]/20 transition-all">
                  <span className="material-symbols-outlined">fast_rewind</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded bg-[#c4c1fb] text-[#2d2a5b] shadow-lg">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded bg-[#2a292d] border border-[#47464f] text-[#e5e1e6] hover:bg-[#c4c1fb]/20 transition-all">
                  <span className="material-symbols-outlined">
                    fast_forward
                  </span>
                </button>
              </div>
              <div className="flex-1 w-full mx-0 sm:mx-8 relative">
                <div className="h-1 bg-[#47464f] rounded-full w-full"></div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4edea3] rounded-full shadow-[0_0_10px_#4edea3] cursor-pointer"
                  style={{ left: `calc(${scrubX}% - 8px)` }}
                ></div>
              </div>
              <div className="flex gap-4 w-full sm:w-auto justify-between">
                <button className="px-4 py-2 text-xs font-mono border border-[#4edea3]/40 text-[#4edea3] rounded whitespace-nowrap">
                  SNAPSHOT V1.3.1
                </button>
                <button className="px-4 py-2 text-xs font-mono bg-[#353438] border border-[#47464f] text-[#e5e1e6] rounded whitespace-nowrap">
                  EXPORT TIMELINE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conflict Resolution */}
      <section className="py-24 bg-[#131316]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#e5e1e6] mb-6">
              Master Timeline Arbitration
            </h2>
            <p className="text-[#c8c5d0] mb-8 leading-relaxed">
              In multi-investigator environments, DEMS+ handles concurrent edits
              through a proprietary consensus algorithm. Instead of traditional
              "overwriting," the system forks temporal branches that can be
              audited and merged back into the master record with
              dual-authorized digital signatures.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded bg-[#201f23] border border-[#47464f]">
                <div className="w-12 h-12 rounded-full bg-[#c4c1fb]/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#c4c1fb]">
                    groups
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#e5e1e6]">
                    Collaborative Locking
                  </h4>
                  <p className="text-sm text-[#c8c5d0]">
                    Optional atomic locking for critical metadata fields to
                    prevent race conditions during heavy forensic intake.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded bg-[#201f23] border border-[#47464f]">
                <div className="w-12 h-12 rounded-full bg-[#4edea3]/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#4edea3]">
                    history_edu
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#e5e1e6]">
                    Signature Aggregation
                  </h4>
                  <p className="text-sm text-[#c8c5d0]">
                    Merge requests require validation from all involved parties'
                    cryptographic keys before commitment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Security blur element using native absolute layered masking architecture */}
            <div className="p-6 bg-[#1c1b1f] rounded-xl border border-[#47464f] relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-10 after:bg-gradient-to-t after:from-[#1e1b4b]/80 after:to-transparent after:backdrop-blur-[4px] after:pointer-events-none">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#e5e1e6]">
                  CONFLICT_RESOLVER_DAEMON
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-[#93000a] text-[#ffdad6] rounded font-semibold">
                  CONFLICT DETECTED
                </span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#2a292d] rounded border border-[#47464f]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-[#c4c1fb] font-bold">
                      INV_SARAH_W
                    </span>
                    <span className="text-[10px] text-[#c8c5d0]">
                      FILE_ID: PX-992
                    </span>
                  </div>
                  <div className="text-sm text-[#c8c5d0] italic">
                    "Updated header metadata for disk image..."
                  </div>
                </div>
                <div className="flex justify-center relative py-2">
                  <div className="h-8 w-0.5 bg-[#47464f]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffb4ab] text-[10px] px-2 py-0.5 text-[#690005] font-bold rounded">
                    MERGE REQUIRED
                  </div>
                </div>
                <div className="p-4 bg-[#2a292d] rounded border border-[#47464f]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-[#c3c0ff] font-bold">
                      INV_MARCUS_R
                    </span>
                    <span className="text-[10px] text-[#c8c5d0]">
                      FILE_ID: PX-992
                    </span>
                  </div>
                  <div className="text-sm text-[#c8c5d0] italic">
                    "Flagging cluster 4022 for potential steganography..."
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-2 relative z-10">
                <button className="flex-1 py-2 bg-[#4edea3] text-[#003824] text-xs font-bold rounded hover:opacity-90 transition-all">
                  AUTONOMOUS MERGE
                </button>
                <button className="flex-1 py-2 bg-[#353438] text-[#e5e1e6] text-xs font-bold rounded hover:bg-[#2a292d] transition-all">
                  MANUAL REVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delta-Level Audit Feeds */}
      <section className="py-24 bg-[#0e0e11] style-dots-grid">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
            Bit-Level Delta Audit
          </h2>
          <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-[#2a292d] font-mono text-[#c8c5d0] uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-4 border-b border-[#47464f]">Sequence</th>
                    <th className="p-4 border-b border-[#47464f]">Timestamp</th>
                    <th className="p-4 border-b border-[#47464f]">Actor_ID</th>
                    <th className="p-4 border-b border-[#47464f]">
                      Bit_Shift_Delta
                    </th>
                    <th className="p-4 border-b border-[#47464f]">Status</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs text-[#e5e1e6]">
                  <tr className="hover:bg-[#c4c1fb]/10 transition-colors border-b border-[#47464f]">
                    <td className="p-4">#9,211,001</td>
                    <td className="p-4">12:01:04.22</td>
                    <td className="p-4 text-[#c4c1fb]">SYS_CORE_DAEMON</td>
                    <td className="p-4 text-[#4edea3]">
                      +0x22F - [0x00..0x1F]
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/30 rounded-full text-[10px]">
                        VERIFIED
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#c4c1fb]/10 transition-colors border-b border-[#47464f]">
                    <td className="p-4">#9,211,002</td>
                    <td className="p-4">12:01:05.11</td>
                    <td className="p-4 text-[#c4c1fb]">AGENT_SMITH_04</td>
                    <td className="p-4 text-[#ffb4ab]">-0x12A - [NULL_PTR]</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/30 rounded-full text-[10px]">
                        VERIFIED
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#c4c1fb]/10 transition-colors">
                    <td className="p-4">#9,211,003</td>
                    <td className="p-4">12:01:08.99</td>
                    <td className="p-4 text-[#c4c1fb]">SYS_CORE_DAEMON</td>
                    <td className="p-4 text-[#4edea3]">+0x00A - [SEC_HDR]</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/30 rounded-full text-[10px]">
                        VERIFIED
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#201f23] text-center border-t border-[#47464f]">
              <button className="text-[#4edea3] text-xs font-bold uppercase tracking-widest hover:underline transition-all">
                Download Full Binary Trace (.DMSL)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissibility Assurance */}
      <section className="py-24 bg-[#131316]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#4edea3]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 p-10 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#4edea3] text-[#003824] flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(78,222,163,0.3)]">
                  <span className="material-symbols-outlined text-3xl">
                    gavel
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#e5e1e6]">
                    Legal-Ready Export
                  </h3>
                  <p className="text-sm text-[#c8c5d0]">
                    Validated for courtroom presentation.
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-4 bg-[#0e0e11] rounded border border-[#47464f] font-mono text-[11px] text-[#c8c5d0] leading-relaxed break-all">
                <p>--- BEGIN SENTINEL INTEGRITY MANIFEST ---</p>
                <p>CASE_UID: FED-2024-X99</p>
                <p>ITEM_ID: EVIDENCE_PK_A1</p>
                <p>CERT_TYPE: NIST_800_88_V1</p>
                <p>
                  SIGNATURE:{" "}
                  <span class="text-[#c4c1fb]">
                    MIIBCAYJKoZIhvcNAQcCoIIB8TCCAfECAQEx...
                  </span>
                </p>
                <p>--- END MANIFEST ---</p>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#131316] bg-[#1e1b4b]"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#131316] bg-[#3626ce]"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#131316] bg-[#002819]"></div>
                </div>
                <span className="text-xs text-[#4edea3] font-bold">
                  DIGITALLY SIGNED BY 14 NODES
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#e5e1e6] mb-6">
              Courtroom-Admissible Logs
            </h2>
            <p className="text-[#c8c5d0] mb-10 text-lg leading-relaxed">
              DEMS+ isn't just about security—it's about admissibility. Our
              version control logs are structured according to Federal Rules of
              Evidence (FRE) standards, automatically generating comprehensive
              "Chain of Custody" affidavits for every micro-adjustment in the
              case file.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-[#4edea3]">
                  check_circle
                </span>
                <h4 className="font-bold text-[#e5e1e6]">FRE 902(13)</h4>
                <p className="text-sm text-[#c8c5d0]">
                  Self-authenticating electronic records generated by a forensic
                  process.
                </p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-[#4edea3]">
                  check_circle
                </span>
                <h4 className="font-bold text-[#e5e1e6]">FRE 902(14)</h4>
                <p className="text-sm text-[#c8c5d0]">
                  Certified data copied from an electronic device using
                  cryptographic hashes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Air-Gapped Archival */}
      <section className="py-24 bg-[#201f23] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-[#e5e1e6] mb-4">
            Automated Rollback Protection
          </h2>
          <p className="text-[#c8c5d0] max-w-2xl mx-auto mb-16">
            Our "Air-Gapped Archival" protocol prevents unauthorized deletions.
            Once a version is committed, it is replicated across 3 physically
            separated storage tiers, making it immune to ransomware or insider
            tampering.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-[#131316]/60 backdrop-blur-md border border-[#47464f] rounded-lg text-left">
              <div className="text-xl font-semibold text-[#c4c1fb] mb-2">
                Tier 1
              </div>
              <div className="text-xs font-mono text-[#c8c5d0] mb-4">
                Hot Cache (NVMe)
              </div>
              <div className="h-1 bg-[#c4c1fb] w-full rounded"></div>
            </div>
            <div className="p-6 bg-[#131316]/60 backdrop-blur-md border border-[#47464f] rounded-lg text-left">
              <div className="text-xl font-semibold text-[#c3c0ff] mb-2">
                Tier 2
              </div>
              <div className="text-xs font-mono text-[#c8c5d0] mb-4">
                Cold Storage (Object)
              </div>
              <div className="h-1 bg-[#c3c0ff] w-2/3 rounded"></div>
            </div>
            <div className="p-6 bg-[#131316]/60 backdrop-blur-md border border-[#47464f] rounded-lg text-left">
              <div className="text-xl font-semibold text-[#4edea3] mb-2">
                Tier 3
              </div>
              <div className="text-xs font-mono text-[#c8c5d0] mb-4">
                Immutable WORM
              </div>
              <div className="h-1 bg-[#4edea3] w-full rounded"></div>
            </div>
            <div className="p-6 bg-[#131316]/60 backdrop-blur-md border border-[#47464f] rounded-lg text-left">
              <div className="text-xl font-semibold text-[#ffb4ab] mb-2">
                Tier 4
              </div>
              <div className="text-xs font-mono text-[#c8c5d0] mb-4">
                Offline Vault
              </div>
              <div className="h-1 bg-[#ffb4ab] w-1/4 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Delta Comparisons */}
      <section className="py-24 bg-[#131316]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#e5e1e6] mb-12">
            Comparative Forensic View
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Text Delta */}
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 rounded-xl overflow-hidden">
              <div className="bg-[#2a292d] p-4 border-b border-[#47464f] flex justify-between items-center">
                <span className="text-xs font-bold text-[#e5e1e6] uppercase">
                  Metadata Comparison
                </span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>
              <div className="p-6 font-mono text-xs leading-loose">
                <div className="bg-[#ffb4ab]/10 text-[#ffb4ab] border-l-2 border-[#ffb4ab] px-2 mb-1">
                  - FILE_CREATED: 2024-01-01 12:00:00
                </div>
                <div className="bg-[#4edea3]/10 text-[#4edea3] border-l-2 border-[#4edea3] px-2 mb-1">
                  + FILE_CREATED: 2023-12-31 23:59:59
                </div>
                <div className="px-2 text-[#c8c5d0]">
                  {" "}
                  FILE_OWNER: SYSTEM_ROOT
                </div>
                <div className="bg-[#ffb4ab]/10 text-[#ffb4ab] border-l-2 border-[#ffb4ab] px-2 mb-1">
                  - ACCESS_LEVEL: 0755
                </div>
                <div className="bg-[#4edea3]/10 text-[#4edea3] border-l-2 border-[#4edea3] px-2 mb-1">
                  + ACCESS_LEVEL: 0777 [WARN]
                </div>
              </div>
            </div>

            {/* Binary Delta */}
            <div className="bg-[#1e1b4b]/40 backdrop-blur-[12px] border border-[#2e2a6e]/50 rounded-xl overflow-hidden">
              <div className="bg-[#2a292d] p-4 border-b border-[#47464f] flex justify-between items-center">
                <span className="text-xs font-bold text-[#e5e1e6] uppercase">
                  Binary Hex Shift
                </span>
                <span className="text-[10px] text-[#4edea3]">
                  0.02% DISCREPANCY
                </span>
              </div>
              <div className="p-6 font-mono text-xs grid grid-cols-4 gap-2 opacity-80">
                <div className="text-[#c8c5d0]">FF 23 A1</div>
                <div className="text-[#c8c5d0]">00 12 CC</div>
                <div className="text-[#4edea3] font-bold bg-[#4edea3]/10 px-1 rounded">
                  AF 99 21
                </div>
                <div className="text-[#c8c5d0]">04 B2 11</div>
                <div className="text-[#ffb4ab] font-bold bg-[#ffb4ab]/10 px-1 rounded">
                  66 32 BB
                </div>
                <div className="text-[#c8c5d0]">88 EE FF</div>
                <div className="text-[#c8c5d0]">01 02 03</div>
                <div className="text-[#c8c5d0]">FE DC BA</div>
                <div className="text-[#c8c5d0]">FF 23 A1</div>
                <div className="text-[#c8c5d0]">00 12 CC</div>
                <div className="text-[#c8c5d0]">AF 99 21</div>
                <div className="text-[#c8c5d0]">04 B2 11</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Standards Compliance */}
      <section className="py-24 bg-[#0e0e11] border-y border-[#47464f]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a292d] rounded flex items-center justify-center mx-auto mb-4 border border-[#47464f]">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <div className="text-xs font-bold text-[#e5e1e6]">
                NIST 800-190
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a292d] rounded flex items-center justify-center mx-auto mb-4 border border-[#47464f]">
                <span className="material-symbols-outlined text-3xl">
                  shield
                </span>
              </div>
              <div className="text-xs font-bold text-[#e5e1e6]">FIPS 140-3</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a292d] rounded flex items-center justify-center mx-auto mb-4 border border-[#47464f]">
                <span className="material-symbols-outlined text-3xl">
                  policy
                </span>
              </div>
              <div className="text-xs font-bold text-[#e5e1e6]">
                ISO/IEC 27001
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a292d] rounded flex items-center justify-center mx-auto mb-4 border border-[#47464f]">
                <span className="material-symbols-outlined text-3xl">
                  security
                </span>
              </div>
              <div className="text-xs font-bold text-[#e5e1e6]">
                CJIS COMPLIANT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Accordion */}
      <section className="py-24 bg-[#131316]">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="space-y-4">
            <AccordionItem title="Encryption Layers (AES-256-GCM)">
              All version blobs are encrypted at rest using AES-256-GCM with
              unique Initialization Vectors (IV). Key rotation is handled via
              Hardware Security Modules (HSM) following NIST SP 800-57
              guidelines.
            </AccordionItem>
            <AccordionItem title="Hashing & Salting Protocols">
              DEMS+ utilizes the SHA-3 (Keccak) family for primary data
              integrity checks, supplemented by BLAKE3 for high-performance
              delta indexing in large forensic containers (E01/L01).
            </AccordionItem>
            <AccordionItem title="Network Topology (Zero-Knowledge)">
              Communications between investigators and the evidence vault are
              protected by TLS 1.3 with mandatory mTLS (mutual authentication).
              The server has zero knowledge of the actual evidence content
              during transit.
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-[#1e1b4b]">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-[#e5e1e6] mb-6">
            Eliminate Doubt from Your Investigations.
          </h2>
          <p className="text-lg text-[#8683ba] max-w-2xl mx-auto mb-12">
            Deploy the world's most advanced immutable version control system
            today. Trusted by federal agencies and top-tier forensic labs
            globally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-5 bg-[#4edea3] text-[#003824] font-bold text-lg rounded shadow-2xl hover:scale-105 transition-all">
              Request Operational Demo
            </button>
            <button className="px-10 py-5 bg-[#131316] text-[#e5e1e6] border border-[#928f9a] font-bold text-lg rounded hover:bg-[#201f23] transition-all">
              Download Technical Whitepaper
            </button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[#8683ba] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span> 100%
              Uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span> SOC2
              Type II Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span> 24/7
              Forensic Support
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
