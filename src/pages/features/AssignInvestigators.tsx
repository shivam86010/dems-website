import React, { useEffect, useMemo, useState } from "react";

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

// --- Types & Interfaces ---
interface RegionBandwidth {
  id: string;
  name: string;
  load: number;
  activeCases: number;
  trend: "UP" | "DOWN" | "STABLE";
  leadForensic: string;
}

// --- Mock Data ---
const REGIONAL_METRICS: RegionBandwidth[] = [
  {
    id: "reg-1",
    name: "North America Central (NAC)",
    load: 89,
    activeCases: 142,
    trend: "UP",
    leadForensic: "Det. M. Thorne",
  },
  {
    id: "reg-2",
    name: "European Union West (EUW)",
    load: 64,
    activeCases: 98,
    trend: "STABLE",
    leadForensic: "Dr. A. Vance",
  },
  {
    id: "reg-3",
    name: "Asia Pacific South (APS)",
    load: 31,
    activeCases: 44,
    trend: "DOWN",
    leadForensic: "L. Park",
  },
];

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  filled = false,
}) => (
  <span
    className={`material-symbols-outlined leading-none select-none ${className}`}
    style={filled ? { fontVariationSettings: '"FILL" 1' } : undefined}
  >
    {name}
  </span>
);

const SentinelBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <span className={`sentinel-badge font-label-code ${className}`}>
    {children}
  </span>
);

interface Specialist {
  name: string;
  id: string;
  specialty: string;
  jurisdiction: string;
  status: "ONLINE" | "IN COURT";
  image: string;
  ring: "tertiary" | "secondary";
}

const specialists: Specialist[] = [
  {
    name: "Dr. Aris Vance",
    id: "0x9928AF",
    specialty: "Crypto-Forensics",
    jurisdiction: "EU / GBR",
    status: "ONLINE",
    ring: "tertiary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBATfQUnJ3dBVMlP3HJAhH_18ylHGn4a4do_z6532p35sw8X-VLC_5n4Sw-UJg9ILYc0mg9q3LeoOHdXQhlJKyIZRoAFjszBYIRhs5Awp87mjcPYkuieoXr4p6SndFRbVJX1J7f0wYgQR6EeWyAzMqQEFVcJD9fx-d0zyo8scEtdjmvh6rpPXYpvz99VQAtw8FIrqcAJtzBU2LApM6LHKAeCE1s7iZC1YUIINAjs4enx0xMxrMGckD5",
  },
  {
    name: "Katia Romanov",
    id: "0x8821BB",
    specialty: "Mobile Artifacts",
    jurisdiction: "USA / CAN",
    status: "ONLINE",
    ring: "tertiary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDUL4S2khotUKNp00nptZ0ny699NwmvpRsYEmZnWVIzKWMxVYibAFjK6_H0Oklg_m350uIdBVkg0s26tr3TwiL3zEJAfppyIWvcLTX2iTN_QlTwSZI7RgQFwWkTEjGbbYeed99stBz65s7mvHvqLcFj1EGxsk0a_owBLAX0jOue67RitlxZEKdMw2KqfWTQYpoBj2C_YxyPtI-jXJG997vFRj7sU14wItWzSuUyVDN1zBzVc_L_ek-",
  },
  {
    name: "Lin Park",
    id: "0x1277FF",
    specialty: "Legal Compliance",
    jurisdiction: "APAC / SGP",
    status: "IN COURT",
    ring: "secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqISPquUU75B1duKIohK42ZoWIHUeDbu8VYRDvdm-qk9IM_02mpM_R1AOK_onXJIjapvtt-PGcV-pLn_7ACvnuDrRYQG0ivX-mj_FBqSZd1kD38kd2-S6xQI8CJx7oZpgsYB53aCt56mGwIlRDWY5X9kX40JchiuXpY066V9nqzZjglawKdBXoH1qqpgWyXoPZgllkBm_Wuoz3hzgg6E_L4CuE3HojszGHA1rW7QsDokXrb491W499",
  },
  {
    name: "Marcus Chen",
    id: "0x4431CC",
    specialty: "Cloud Extraction",
    jurisdiction: "GLOBAL",
    status: "ONLINE",
    ring: "tertiary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApMiuUofIMYQDocGAKhzmkd2Kpz1ggOMjP8NJbsC3-bGkBsoSZhdFwJQ1BPwxRI6LiicIy5jzA090QVOVo6mUzhWLjM3pnnUCa2Za-whCNjKAefrNuOobYiHlPy2vA6ITBDDb3KuEV55HrC2tXVzBpablnHdXMEi0A1_XECTF8UkhQ3Hk7aK4lqapQTf6wRtK3c59A5GtXaezzKiTK-hbz2_V_kQT3kEt38uzrfbaAYaMVyGL80_oH",
  },
];

interface MissionEnv {
  title: string;
  accent: "primary" | "secondary" | "tertiary";
  desc: string;
  cta: string;
  image: string;
}

const missionEnvironments: MissionEnv[] = [
  {
    title: "Digital Forensics",
    accent: "primary",
    desc: "Bit-level analysis environments with integrated hardware write-blocker telemetry.",
    cta: "Initialize Lab",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKP5gO7c9uAnaLRwXBpanpqzCc4NPEgYWeGU1axwfdryNqBC31rbv_lt9pls1tKZFIO6roXgd4SnLlmtyv9YP0lCkjibzmOZmddRjmnQlKTLfoxYfGXhI8AGKSzYD7GZzXrrV6JeWAEzZHyfhZnDGSZYenew8EB-hOQKNYUXnuSS_sKpALHXaAEKnQYCaJSbr1GUzChQNjBsxcbYfCBTymv3DXiW0iR4wxqYQF8Pcwdl9F06_KBCby",
  },
  {
    title: "Legal Review",
    accent: "secondary",
    desc: "Privilege log management and high-speed document tagging for litigation readiness.",
    cta: "Open War Room",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKZU1TLGRKag4dBwMEm8movIzYc2uXsXBVJxBSt6udlXxlbUGfFhroCSFwbxTuSXd1GQyTf4XZyk6ve0Qc0eeqV9CzjVuOiQxFpjPK4zodP6qhwYsJAb-nYvqwRDg4eE3DagMW8MY5OB0jTEl2R9U_lJA1uHuqcP6N1yrlImS9iruVsrPTOHSCslg1cwPOW9_R1pv86dJlXO4zPGuQCGHR03TxKDTjh15xRk6cZcY8lA2dsPtykEHl",
  },
  {
    title: "Field Logistics",
    accent: "tertiary",
    desc: "Real-time geolocation tracking and encrypted mobile evidence intake for field agents.",
    cta: "Command Field",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBseEYDaNVoO11rLSHRD6pa7rFVkt05Pl_5aMP5gl_uPCXL5OXX7I7w_ne4ZIl3tZMzqPF2XxqV-2yRXFOy5n0FBOgzb6BiO8eQrcuKcRqJXq-zDPYmCk0YpDQzZADg_nLe9868dmbko1Sbe5MBVt8gBbai2HflSBSp8urMpkIy4Z5-C-1aVGpzg-jnrmbZylLtodx9YpdWUsngXJzl-BLvmGyzal289s_v1ZtmuW8MzQx7LnmcFM-j",
  },
];

const federalBadges = [
  "FBI-SENTINEL",
  "INTERPOL-RED",
  "EUROPOL-L3",
  "NIST-800",
  "GCHQ-CYBER",
  "BKA-VERIFIED",
  "SANS-GSEC",
  "ISC2-CISSP",
  "DOJ-CLEARED",
  "DOD-SECRET",
  "FIPS-140",
  "ISO-27001",
];

interface Certification {
  name: string;
  refId: string;
  icon: string;
  renewalLabel: string;
  renewalColor: string;
  barColor: string;
  barWidth: string;
  pulse?: boolean;
  holders: number;
  extraHolders?: number;
}

const certifications: Certification[] = [
  {
    name: "CISSP",
    refId: "#ISC2-99812-AF",
    icon: "verified_user",
    renewalLabel: "142 Days Remaining",
    renewalColor: "text-primary",
    barColor: "bg-primary",
    barWidth: "w-[65%]",
    holders: 3,
  },
  {
    name: "EnCE",
    refId: "#GUID-443-OT",
    icon: "terminal",
    renewalLabel: "12 Days Remaining",
    renewalColor: "text-error",
    barColor: "bg-error",
    barWidth: "w-[12%]",
    pulse: true,
    holders: 2,
  },
  {
    name: "CFE",
    refId: "#ACFE-8812-LL",
    icon: "account_balance",
    renewalLabel: "482 Days Remaining",
    renewalColor: "text-tertiary",
    barColor: "bg-tertiary",
    barWidth: "w-[88%]",
    holders: 3,
    extraHolders: 5,
  },
];

const roiStats = [
  {
    value: "64%",
    color: "text-primary",
    title: "Faster Case Intake",
    desc: "Eliminate manual investigator matching and historical conflict checking delays.",
  },
  {
    value: "0.0%",
    color: "text-tertiary",
    title: "Compliance Errors",
    desc: "Automated jurisdictional alignment prevents procedural inadmissibility and legal risk.",
  },
  {
    value: "22%",
    color: "text-secondary",
    title: "Resource Optimization",
    desc: "Maximize specialist utilization across globally distributed team members.",
  },
];

const faqs = [
  {
    q: 'How is the "Forensic Match" score calculated?',
    a: "The matching score utilizes a proprietary Bayesian inference model that weights four primary dimensions: historical artifact resolution velocity, current jurisdictional clearance standing, active cognitive load, and specialist niche certifications.",
  },
  {
    q: "What encryption is used for assignment audit logs?",
    a: "Every assignment event is hashed using SHA-256 and appended to an immutable, permissioned blockchain ledger. Data in transit is secured via TLS 1.3 with AES-256-GCM encryption.",
  },
  {
    q: "Can internal ethical walls be overridden by administrators?",
    a: 'Overrides require a "Multi-Signature Authorization" protocol, needing three separate verified clearance holders to approve the waiver. Every override action is flagged for priority audit.',
  },
];

/* ------------------------------------------------------------------------ */
/*  Font / global style injection                                           */
/* ------------------------------------------------------------------------ */

const useFonts = () => {
  useEffect(() => {
    const links = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block",
    ];
    const created: HTMLLinkElement[] = [];
    links.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      created.push(link);
    });
    return () => created.forEach((l) => l.remove());
  }, []);
};

/* ------------------------------------------------------------------------ */
/*  Section: Heatmap grid (client-generated random saturation cells)        */
/* ------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------ */
/*  Main component                                                          */
/* ------------------------------------------------------------------------ */

const AssignInvestigators: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "critical" | "nominal"
  >("all");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Generates matrix visualization clusters deterministically
  const saturationNodes = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < 180; i++) {
      // Create pseudorandom distribution metrics
      const loadFactor = Math.abs(
        Math.sin(i * 0.15) * 0.6 + Math.cos(i * 0.05) * 0.4,
      );
      let status: "high" | "nominal" | "available" = "available";
      let colorClass = "bg-surface-container-highest hover:bg-surface-bright";

      if (loadFactor > 0.82) {
        status = "high";
        colorClass =
          "bg-error shadow-[0_0_8px_rgba(255,180,171,0.4)] animate-pulse";
      } else if (loadFactor > 0.4) {
        status = "nominal";
        colorClass = "bg-primary/80 shadow-[0_0_6px_rgba(196,193,251,0.2)]";
      }

      nodes.push({
        id: i,
        status,
        colorClass,
        percentage: Math.round(loadFactor * 100),
      });
    }
    return nodes;
  }, []);

  // Filter nodes based on interactive tabs
  const filteredNodes = useMemo(() => {
    if (activeFilter === "critical")
      return saturationNodes.map((n) =>
        n.status === "high"
          ? n
          : { ...n, colorClass: "bg-surface-container/20 opacity-20" },
      );
    if (activeFilter === "nominal")
      return saturationNodes.map((n) =>
        n.status === "nominal"
          ? n
          : { ...n, colorClass: "bg-surface-container/20 opacity-20" },
      );
    return saturationNodes;
  }, [saturationNodes, activeFilter]);
  useFonts();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-body-base text-[#e5e1e6] bg-[#131316] antialiased selection:bg-[#4F46E5]/30 min-h-screen">
      <style>{`
        .sentinel-badge {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .glass-panel {
          background-color: rgba(32, 31, 35, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(71, 70, 79, 0.4);
        }
        .halo-glow {
          box-shadow: 0 0 25px rgba(79, 70, 229, 0.45);
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #47464f;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      <main>
        {/* ------------------------------------------------------------- */}
        {/* 1. Hero Section                                                */}
        {/* ------------------------------------------------------------- */}
        <section className="relative min-h-screen flex items-center  px-4 sm:px-6 lg:px-[32px] max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3626ce]/20 border border-[#4F46E5]/30 text-[#4F46E5] sentinel-badge">
                <Icon name="verified" className="text-[14px]" />
                Sentinel Integrity: Active
              </div>
              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[64px] leading-tight text-[#e5e1e6] max-w-xl font-bold">
                Assign Investigators with{" "}
                <span className="text-[#c4c1fb]">Surgical Precision</span>
              </h1>
              <p className="text-[#c8c5d0] text-base sm:text-lg max-w-lg leading-relaxed">
                The DEMS+ Intelligence Engine orchestrates your global force,
                matching cases to investigators based on jurisdiction, clearance
                levels, and verified expertise—protected by real-time blockchain
                integrity checks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-lg halo-glow hover:scale-105 transition-transform">
                  Initialize Assignment
                </button>
                <button className="px-8 py-4 bg-[#353438]/50 border border-[#47464f] text-[#e5e1e6] rounded-lg hover:bg-[#353438] transition-colors">
                  View Capacity Map
                </button>
              </div>
              <div className="pt-4 sm:pt-8 flex flex-wrap items-center gap-4 sm:gap-6 opacity-60">
                <span className="font-label-code text-[#c8c5d0] text-xs">
                  SHA-256: 8a4f...3c92
                </span>
                <div className="h-4 w-px bg-[#47464f] hidden sm:block" />
                <span className="flex items-center gap-2 text-[#4edea3] sentinel-badge">
                  <Icon name="verified" className="text-sm" filled />
                  Verifiable Match Engine
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border-[#c4c1fb]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <SentinelBadge className="text-[#c4c1fb]/50">
                    Core_Module_v4.2
                  </SentinelBadge>
                </div>
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <Icon name="target" className="text-[#c4c1fb]" />
                  Intelligent Vector Match
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-[#201f23] rounded-xl border border-[#47464f]/30">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
                        style={{
                          backgroundImage: `url("${specialists[0].image}")`,
                        }}
                      />
                      <div>
                        <p className="font-bold text-sm">Det. Marcus Thorne</p>
                        <p className="text-xs text-[#c8c5d0]">
                          L3 Forensic Architect
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#4edea3] font-bold">98.4% Match</p>
                      <p className="text-[10px] text-[#c8c5d0] font-label-code">
                        Confidence Score
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#c4c1fb]/5 border border-[#c4c1fb]/20 rounded-xl">
                      <Icon
                        name="gavel"
                        className="text-[#c4c1fb] text-sm mb-2"
                      />
                      <p className="text-[10px] text-[#c8c5d0] uppercase font-bold">
                        Jurisdiction
                      </p>
                      <p className="text-sm font-bold">EU / INTERPOL</p>
                    </div>
                    <div className="p-4 bg-[#4edea3]/5 border border-[#4edea3]/20 rounded-xl">
                      <Icon
                        name="verified_user"
                        className="text-[#4edea3] text-sm mb-2"
                      />
                      <p className="text-[10px] text-[#c8c5d0] uppercase font-bold">
                        Security Clearance
                      </p>
                      <p className="text-sm font-bold">TOP SECRET / SCI</p>
                    </div>
                  </div>
                  <div className="h-24 w-full flex items-end gap-1 px-2 pb-2 bg-[#0e0e11] rounded-xl">
                    <div className="flex-1 bg-[#c4c1fb]/20 h-[40%] animate-pulse" />
                    <div className="flex-1 bg-[#c4c1fb]/40 h-[60%]" />
                    <div className="flex-1 bg-[#c4c1fb]/60 h-[55%]" />
                    <div className="flex-1 bg-[#c4c1fb] h-[95%] shadow-[0_0_15px_#c4c1fb]" />
                    <div className="flex-1 bg-[#c4c1fb]/40 h-[70%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 2. Algorithmic Resource Orchestration                          */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] bg-[#0e0e11]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <SentinelBadge className="text-[#c4c1fb] mb-4 block">
                  Engine Logic
                </SentinelBadge>
                <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mb-6">
                  Orchestrating Expertise with{" "}
                  <span className="text-[#4edea3]">Algorithmic Rigor</span>
                </h2>
                <p className="text-[#c8c5d0] text-base sm:text-lg leading-relaxed mb-8">
                  The DEMS+ engine doesn&apos;t just look at availability. It
                  analyzes over 50 forensic-specific data points to match the
                  right specialist to the right evidence, ensuring zero
                  chain-of-custody friction.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <Icon name="psychology" className="text-[#4edea3] mt-1" />
                    <div>
                      <p className="font-bold">Cognitive Skill Mapping</p>
                      <p className="text-sm text-[#c8c5d0]">
                        Matches historical performance on similar case
                        archetypes.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Icon name="history" className="text-[#4edea3] mt-1" />
                    <div>
                      <p className="font-bold">Throughput Prediction</p>
                      <p className="text-sm text-[#c8c5d0]">
                        Forecasts completion timelines based on individual
                        forensic velocity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-[#4F46E5]">
                  <h4 className="font-bold mb-2">Workload Analysis</h4>
                  <div className="h-1 w-full bg-[#353438] rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-[#4F46E5] w-3/4" />
                  </div>
                  <p className="text-xs text-[#c8c5d0]">
                    Analyzing active case latency across 12 distributed labs.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-[#4edea3]">
                  <h4 className="font-bold mb-2">Credential Audit</h4>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-bold rounded">
                      CISSP
                    </span>
                    <span className="px-2 py-1 bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-bold rounded">
                      CFE
                    </span>
                  </div>
                  <p className="text-xs text-[#c8c5d0] mt-4">
                    Real-time sync with federal certification repositories.
                  </p>
                </div>
                <div className="sm:col-span-2 glass-panel p-6 sm:p-8 rounded-2xl flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#c4c1fb]">12ms</p>
                      <p className="text-[10px] text-[#c8c5d0] uppercase font-bold">
                        Matching Latency
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#4edea3]">0%</p>
                      <p className="text-[10px] text-[#c8c5d0] uppercase font-bold">
                        Conflict Error
                      </p>
                    </div>
                  </div>
                  <button className="p-4 rounded-full bg-[#353438] border border-[#47464f] hover:bg-[#201f23] transition-colors">
                    <Icon name="refresh" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 3. Real-time Team Saturation Heatmaps                          */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-outline-variant/30 bg-surface-container-lowest/50 relative overflow-hidden">
          {/* Decorative background glow blur */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-error/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  Dynamic Capacity Monitor
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
                  Regional Forensic{" "}
                  <span className="text-primary">Bandwidth & Saturation</span>
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  DEMS+ balances compute nodes alongside human investigator
                  assets. Track target telemetry overhead across global
                  operational theaters to isolate backlogs before
                  chain-of-custody pipelines undergo critical failure.
                </p>
              </div>

              {/* Interactive Filtering Tabs */}
              <div className="flex bg-surface-container p-1 rounded border border-outline-variant/40 self-start lg:self-end">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-sm transition-all uppercase ${activeFilter === "all" ? "bg-surface-container-high text-primary shadow-sm border border-outline-variant/30" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Full Grid
                </button>
                <button
                  onClick={() => setActiveFilter("critical")}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-sm transition-all uppercase ${activeFilter === "critical" ? "bg-error/10 text-error shadow-sm border border-error/20" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Critical Overloads
                </button>
                <button
                  onClick={() => setActiveFilter("nominal")}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-sm transition-all uppercase ${activeFilter === "nominal" ? "bg-primary/10 text-primary shadow-sm border border-primary/20" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Nominal Assets
                </button>
              </div>
            </div>

            {/* Modular Dashboard Structure Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Core Analytics Telemetry Cards */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 bg-surface-container/40 border border-outline-variant/20 rounded-sm font-mono text-xs text-on-surface-variant flex justify-between uppercase tracking-wider">
                  <span>Cluster Telemetry Node</span>
                  <span className="text-primary">Active // SEC_AUTH_OK</span>
                </div>

                {REGIONAL_METRICS.map((region) => (
                  <div
                    key={region.id}
                    className="p-5 bg-surface-container-low border border-outline-variant/30 rounded shadow-sm hover:border-outline transition-all space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm text-on-surface">
                          {region.name}
                        </h4>
                        <p className="text-[11px] text-on-surface-variant font-mono mt-0.5">
                          Lead: {region.leadForensic}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm ${region.load > 80 ? "bg-error/10 text-error border border-error/20" : "bg-surface-container-highest text-on-surface"}`}
                      >
                        {region.load}% Capacity
                      </span>
                    </div>

                    {/* Micro Progress Bar */}
                    <div className="space-y-1.5">
                      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${region.load > 80 ? "bg-error" : "bg-primary"}`}
                          style={{ width: `${region.load}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">
                            folder_open
                          </span>
                          {region.activeCases} Active Cases
                        </span>
                        <span
                          className={`flex items-center gap-0.5 ${region.trend === "UP" ? "text-error" : region.trend === "DOWN" ? "text-tertiary" : "text-on-surface-variant"}`}
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            {region.trend === "UP"
                              ? "trending_up"
                              : region.trend === "DOWN"
                                ? "trending_down"
                                : "trending_flat"}
                          </span>
                          {region.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: High-Density Interactive Saturation Grid Map */}
              <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 rounded shadow-xl relative">
                {/* Grid Header Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-outline-variant/20 gap-4">
                  <div className="flex flex-wrap gap-4 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-error rounded-sm animate-pulse" />
                      <span className="text-on-surface-variant">
                        Overload (&gt;85%)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-primary rounded-sm" />
                      <span className="text-on-surface-variant">
                        Nominal (40-85%)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-surface-container-highest rounded-sm" />
                      <span className="text-on-surface-variant">
                        Available (&lt;40%)
                      </span>
                    </div>
                  </div>

                  <div className="px-3 py-1 bg-surface-container text-primary border border-outline-variant/40 font-mono text-xs rounded-sm">
                    System Load Average:{" "}
                    <strong className="text-on-surface">68.2%</strong>
                  </div>
                </div>

                {/* Matrix Block Cluster */}
                <div className="relative">
                  <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-1.5 p-2 bg-background/40 border border-outline-variant/20 rounded-sm">
                    {filteredNodes.map((node) => (
                      <div
                        key={node.id}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className={`aspect-square rounded-[2px] transition-all duration-300 cursor-crosshair relative ${node.colorClass}`}
                      >
                        {/* Hover state localized contextual popup label */}
                        {hoveredNode === node.id && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 bg-surface-bright border border-outline-variant text-[10px] font-mono text-on-surface px-2 py-1 rounded shadow-md whitespace-nowrap pointer-events-none">
                            Node Cluster #{node.id} • Load: {node.percentage}%
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Timeline Markers */}
                <div className="mt-6 flex justify-between font-mono text-on-surface-variant text-[10px] uppercase tracking-widest opacity-80">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>{" "}
                    MON 00:00 UTC
                  </span>
                  <span>WED 12:00</span>
                  <span>FRI 23:59 UTC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 4. Global Specialist Directory                                 */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#201f23] px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <SentinelBadge className="text-[#4edea3]">
                  Verified Force
                </SentinelBadge>
                <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-2">
                  Specialist Global Directory
                </h2>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-grow md:w-64">
                  <Icon
                    name="search"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c8c5d0]"
                  />
                  <input
                    className="w-full bg-[#131316] border-[#47464f] rounded-lg pl-10 py-2 text-sm focus:ring-primary"
                    placeholder="Search certifications, ID, or region..."
                    type="text"
                  />
                </div>
                <button className="bg-[#353438] p-2 rounded-lg border border-[#47464f] shrink-0">
                  <Icon name="filter_list" />
                </button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialists.map((s) => (
                <div
                  key={s.id}
                  className={`glass-panel p-6 rounded-xl hover:border-[#c4c1fb] transition-all group cursor-pointer ${
                    s.status === "IN COURT" ? "opacity-60" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-cover bg-center border-2 ${
                        s.ring === "tertiary"
                          ? "border-[#4edea3]"
                          : "border-[#4F46E5]"
                      }`}
                      style={{ backgroundImage: `url("${s.image}")` }}
                    />
                    <span
                      className={`text-[10px] font-label-code px-2 py-0.5 rounded ${
                        s.status === "ONLINE"
                          ? "text-[#4edea3] bg-[#4edea3]/10"
                          : "text-[#4F46E5] bg-[#4F46E5]/10"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <h4 className="font-bold group-hover:text-[#c4c1fb] transition-colors">
                    {s.name}
                  </h4>
                  <p className="text-xs text-[#c8c5d0] font-label-code mb-4">
                    ID: {s.id}
                  </p>
                  <div className="space-y-2 border-t border-[#47464f]/30 pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#c8c5d0]">Specialty</span>
                      <span className="font-bold">{s.specialty}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#c8c5d0]">Jurisdiction</span>
                      <span className="font-bold">{s.jurisdiction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 5. Jurisdictional Logic Engine                                 */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#c4c1fb]/10 blur-[100px] rounded-full" />
              <div className="glass-panel p-6 sm:p-8 rounded-3xl relative z-10 border-[#4edea3]/30">
                <div className="flex items-center gap-3 mb-8 border-b border-[#47464f]/30 pb-4">
                  <Icon name="gavel" className="text-[#4edea3]" />
                  <SentinelBadge className="text-[#e5e1e6]">
                    Compliance_Auto_Check.py
                  </SentinelBadge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 p-4 bg-[#201f23] rounded-lg border border-[#4edea3]/20">
                    <div className="flex items-center gap-4">
                      <Icon name="public" className="text-[#4edea3]" />
                      <div>
                        <p className="text-sm font-bold">
                          Evidence Origin: Germany
                        </p>
                        <p className="text-[10px] text-[#c8c5d0]">
                          GDPR Art. 48 Alignment
                        </p>
                      </div>
                    </div>
                    <Icon
                      name="check_circle"
                      className="text-[#4edea3] shrink-0"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-4 bg-[#201f23] rounded-lg border border-[#4edea3]/20">
                    <div className="flex items-center gap-4">
                      <Icon name="shield_lock" className="text-[#4edea3]" />
                      <div>
                        <p className="text-sm font-bold">
                          Investigator: UK-SC Cleared
                        </p>
                        <p className="text-[10px] text-[#c8c5d0]">
                          Cross-Border Protocol Valid
                        </p>
                      </div>
                    </div>
                    <Icon
                      name="check_circle"
                      className="text-[#4edea3] shrink-0"
                    />
                  </div>
                  <div className="bg-[#4edea3]/10 border border-[#4edea3] p-6 rounded-xl text-center animate-pulse mt-4">
                    <p className="text-[#4edea3] font-bold tracking-widest uppercase text-sm">
                      Valid Jurisdictional Match
                    </p>
                    <p className="text-[10px] font-label-code text-[#4edea3]/60 mt-1">
                      HASH: 4e21...de93
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <SentinelBadge className="text-[#c4c1fb]">
                Cross-Border Security
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold leading-tight">
                Automated Jurisdictional{" "}
                <span className="text-[#c4c1fb]">Alignment Engine</span>
              </h2>
              <p className="text-[#c8c5d0] text-base sm:text-lg">
                Never worry about evidence inadmissibility due to cross-border
                credential errors. Our engine cross-references the legal origin
                of artifacts against the professional standing and
                jurisdictional authorization of every team member in real-time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Icon name="lock_open" className="text-[#c4c1fb]" />
                  <p className="font-bold text-sm">Dynamic Clearance</p>
                  <p className="text-xs text-[#c8c5d0]">
                    Unlocks workspace modules based on investigator&apos;s
                    current standing.
                  </p>
                </div>
                <div className="space-y-2">
                  <Icon name="history_edu" className="text-[#c4c1fb]" />
                  <p className="font-bold text-sm">Immutable Logs</p>
                  <p className="text-xs text-[#c8c5d0]">
                    Every clearance check is hashed and stored for legal audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 6. Ethical Wall & COI Shield                                   */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#201f23] px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mb-4">
              Ethical Wall &amp;{" "}
              <span className="text-[#ffb4ab]">COI Shield</span>
            </h2>
            <p className="text-[#c8c5d0] max-w-2xl mx-auto">
              Immutable protection against professional conflicts. Automated
              scanning of case parties against investigator history and
              relationship nodes.
            </p>
          </div>
          <div className="max-w-4xl mx-auto glass-panel p-1 rounded-3xl relative">
            <div className="bg-[#0e0e11] p-6 sm:p-12 rounded-3xl text-center space-y-8 border border-[#ffb4ab]/20">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-[#ffb4ab]/20 flex items-center justify-center animate-ping absolute" />
                  <div className="w-24 h-24 rounded-full border-4 border-[#ffb4ab] flex items-center justify-center relative bg-[#131316]">
                    <Icon name="block" className="text-4xl text-[#ffb4ab]" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">
                  Conflict Detected: Case #441-X
                </h3>
                <p className="text-[#c8c5d0] text-sm max-w-md mx-auto">
                  Investigator <strong>Marcus Chen</strong> previously consulted
                  for the opposing counsel&apos;s affiliate (2021).{" "}
                  <span className="text-[#ffb4ab] font-bold">
                    Automated Exclusion Active.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-2 border border-[#47464f] text-xs font-bold rounded uppercase hover:bg-[#353438] transition-colors">
                  View Exclusion Audit
                </button>
                <button className="px-6 py-2 bg-[#ffb4ab]/20 border border-[#ffb4ab]/50 text-[#ffb4ab] text-xs font-bold rounded uppercase hover:bg-[#ffb4ab]/30 transition-colors">
                  Request Override
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 7. Specialized Mission Environments                            */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <SentinelBadge className="text-[#c4c1fb]">
                  Role-Based UX
                </SentinelBadge>
                <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-2">
                  Specialized{" "}
                  <span className="text-[#c4c1fb]">Mission Environments</span>
                </h2>
              </div>
              <p className="text-[#c8c5d0] md:max-w-xs md:text-right text-sm">
                Personalized UI configurations for every persona in the forensic
                lifecycle.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {missionEnvironments.map((env) => (
                <div
                  key={env.title}
                  className="group relative aspect-[3/4] overflow-hidden rounded-3xl glass-panel cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url("${env.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/40 to-transparent" />
                  <div className="absolute bottom-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h4
                      className={`font-bold text-2xl mb-2 text-${env.accent}`}
                    >
                      {env.title}
                    </h4>
                    <p className="text-sm text-[#c8c5d0] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                      {env.desc}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-2 text-${env.accent} text-xs font-bold uppercase tracking-wider`}
                    >
                      {env.cta}{" "}
                      <Icon name="arrow_forward" className="text-sm" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 8. Burnout Prevention & Mental Resilience                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#0e0e11] px-4 sm:px-6 lg:px-[32px] border-y border-[#47464f]/30">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 sm:space-y-8">
              <SentinelBadge className="text-[#ffb4ab]">
                Personnel Vitality
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold">
                Vigilance &amp;{" "}
                <span className="text-[#4edea3]">Mental Resilience</span>
              </h2>
              <p className="text-[#c8c5d0] text-base sm:text-lg leading-relaxed">
                Forensic work is mentally taxing. DEMS+ calculates{" "}
                <span className="text-[#e5e1e6] font-bold">
                  Mental Fatigue Scores
                </span>{" "}
                based on exposure to sensitive content, continuous focus hours,
                and historical saturation.
              </p>
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl border-[#ffb4ab]/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#c8c5d0]">
                      Exposure Threshold
                    </span>
                    <span className="text-xs font-label-code text-[#ffb4ab]">
                      CRITICAL (92%)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-[#353438] rounded-full overflow-hidden">
                    <div className="h-full bg-[#ffb4ab] w-[92%] shadow-[0_0_15px_#ffb4ab]" />
                  </div>
                  <p className="mt-4 text-xs italic text-[#c8c5d0]">
                    &quot;System-mandated cooldown initiated for Case Lead V.
                    Thorne (6 hours remaining)&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-panel p-6 sm:p-10 rounded-[40px] border-[#c4c1fb]/20 bg-[#c4c1fb]/5">
                <h3 className="font-bold text-xl mb-8 flex items-center gap-2">
                  <Icon name="monitoring" className="text-[#c4c1fb]" />
                  Personnel Focus Metrics
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-[#c8c5d0]">
                      Cognitive Load
                    </p>
                    <p className="text-3xl sm:text-4xl font-display-lg font-bold text-[#c4c1fb]">
                      0.92
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-[#c8c5d0]">
                      Pulse Index
                    </p>
                    <p className="text-3xl sm:text-4xl font-display-lg font-bold text-[#4edea3]">
                      Normal
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-[#c8c5d0]">
                      Session Time
                    </p>
                    <p className="text-3xl sm:text-4xl font-display-lg font-bold text-[#e5e1e6]">
                      14.2h
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-[#c8c5d0]">
                      Risk Score
                    </p>
                    <p className="text-3xl sm:text-4xl font-display-lg font-bold text-[#ffb4ab]">
                      HIGH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 9. Federal Clearance Vault                                     */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <SentinelBadge className="text-[#c4c1fb]">
                Live Database Sync
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-4">
                Federal Clearance Vault
              </h2>
              <p className="text-[#c8c5d0] mt-4 max-w-2xl mx-auto">
                Real-time synchronization with international police databases to
                ensure investigator standing is current, verified, and
                immutable.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {federalBadges.map((badge) => (
                <div
                  key={badge}
                  className="p-4 glass-panel rounded-xl text-center border-dashed border-[#47464f]/50 hover:border-[#c4c1fb]/50 transition-colors group cursor-default"
                >
                  <Icon
                    name="verified"
                    className="text-sm text-[#c4c1fb] group-hover:scale-110 transition-transform mb-2 block"
                  />
                  <p className="text-[10px] font-label-code text-[#c8c5d0] leading-tight">
                    {badge}
                    <br />
                    ACTIVE SYNC
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 10. Dynamic Certification Ledger                               */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#0e0e11] border-y border-[#47464f]/20 px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
              <div>
                <SentinelBadge className="text-[#c4c1fb]">
                  Live Credential Stream
                </SentinelBadge>
                <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-2">
                  Dynamic Certification Ledger
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[#4edea3]">
                <Icon name="sync" className="animate-spin text-sm" />
                <span className="text-xs font-label-code">
                  Blockchain Verified
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-panel p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon name={cert.icon} className="text-[120px]" />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-bold text-lg">{cert.name}</h4>
                      <p className="text-xs text-[#c8c5d0] font-label-code">
                        {cert.refId}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#c8c5d0]">Renewal Window</span>
                        <span className={`font-bold ${cert.renewalColor}`}>
                          {cert.renewalLabel}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-[#201f23] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cert.barColor} ${cert.barWidth} ${
                            cert.pulse ? "animate-pulse" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#47464f]/20 flex justify-between items-center">
                      <p className="text-[10px] text-[#c8c5d0] uppercase font-bold">
                        Assigned Holders
                      </p>
                      <div className="flex -space-x-2">
                        {Array.from({ length: cert.holders }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full border border-[#928f9a] ${
                              [
                                "bg-[#3626ce]",
                                "bg-[#c4c1fb]/20",
                                "bg-[#4edea3]/40",
                                "bg-[#c4c1fb]",
                                "bg-[#4F46E5]",
                              ][i % 5]
                            }`}
                          />
                        ))}
                        {cert.extraHolders && (
                          <div className="w-6 h-6 rounded-full bg-[#131316] border border-[#928f9a] flex items-center justify-center text-[8px] font-bold">
                            +{cert.extraHolders}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 11. Jurisdictional Conflict Resolver                           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8">
              <SentinelBadge className="text-[#4F46E5]">
                Conflict Mediation
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold leading-tight">
                Jurisdictional{" "}
                <span className="text-[#4F46E5]">Conflict Resolver</span>
              </h2>
              <p className="text-[#c8c5d0] text-base sm:text-lg">
                Automated resolution of regulatory friction. When cross-border
                investigations trigger competing legal mandates (e.g., EU-GDPR
                Right to Erasure vs. US-SEC Data Retention), DEMS+ applies
                weighted policy kernels to flag and resolve the impasse.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#4F46E5]/5 border border-[#4F46E5]/20 rounded-xl">
                  <Icon name="balance" className="text-[#4F46E5]" />
                  <div>
                    <p className="font-bold text-sm">Policy Prioritization</p>
                    <p className="text-xs text-[#c8c5d0]">
                      Real-time weighting of local vs. international statutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#4edea3]/5 border border-[#4edea3]/20 rounded-xl">
                  <Icon name="fact_check" className="text-[#4edea3]" />
                  <div>
                    <p className="font-bold text-sm">Automated Waivers</p>
                    <p className="text-xs text-[#c8c5d0]">
                      Generates jurisdiction-specific legal justification logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border-[#4F46E5]/30">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-8 border-b border-[#47464f]/30 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse" />
                    <span className="text-xs font-bold font-label-code">
                      OVERLAP DETECTED: 0xEE41
                    </span>
                  </div>
                  <SentinelBadge className="text-[8px]">
                    Resolution: Active
                  </SentinelBadge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-[#201f23] rounded-lg border-l-4 border-l-[#c4c1fb]">
                    <p className="text-[10px] text-[#c4c1fb] font-bold uppercase mb-1">
                      Origin: Germany
                    </p>
                    <p className="text-xs font-bold">GDPR Art. 32</p>
                    <p className="text-[9px] text-[#c8c5d0] mt-2 italic">
                      Privacy First Protection
                    </p>
                  </div>
                  <div className="p-4 bg-[#201f23] rounded-lg border-l-4 border-l-[#4F46E5]">
                    <p className="text-[10px] text-[#4F46E5] font-bold uppercase mb-1">
                      Target: USA
                    </p>
                    <p className="text-xs font-bold">FRCP Rule 34</p>
                    <p className="text-[9px] text-[#c8c5d0] mt-2 italic">
                      Mandatory Discovery
                    </p>
                  </div>
                </div>
                <div className="bg-[#0e0e11] p-6 rounded-xl border border-[#47464f]/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <Icon name="published_with_changes" className="text-6xl" />
                  </div>
                  <p className="text-xs font-label-code text-center relative z-10">
                    <span className="text-[#4edea3] font-bold">[RESOLVED]</span>
                    <br />
                    Applied Anonymization Masking (EU-Node)
                    <br />
                    Full Metadata Transfer (US-Node)
                    <br />
                    <span className="text-[10px] opacity-50">
                      Match Accuracy: 99.8%
                    </span>
                  </p>
                </div>
                <button className="w-full mt-6 py-3 bg-[#4F46E5]/20 hover:bg-[#4F46E5]/30 border border-[#4F46E5]/50 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors">
                  Download Mediation Log (SHA-256)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 12. Executive Resource Forecasting                             */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#201f23] px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <SentinelBadge className="text-[#c4c1fb]">
                Strategic Outlook
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-2">
                Executive Resource Forecasting
              </h2>
              <p className="text-[#c8c5d0] mt-4 max-w-2xl mx-auto">
                Predicting team bandwidth and specialization gaps 3-6 months in
                advance using historical litigation cycles and current case
                intake velocity.
              </p>
            </div>
            <div className="aspect-[4/3] sm:aspect-[21/9] w-full glass-panel rounded-[32px] relative overflow-hidden border border-[#c4c1fb]/20 group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHZ0iD7NMdk7VlJxZMec6436ANBHEmmH9DPVS2zCoxWxMoXc10RjoGiYt8M_mGAKf4UqOr0qoSaycdKI2CnZ-dZlGwM5Y-wFpA6E1Q26uxaEDqM0WrP2Kr5y9fLq3p-cUS-Pdh9Ix5sIkAC_Oo_FkkrYcO5HLexJs850DdlfthS_5qLmCo8sy7F0rBCWUMQaJypLKEEcMy8_cVOoyfR9H8dL06vUR88ZHwRs_CI7ORx2OVrguAnACD"
                  alt="Predictive Analytics Visualization"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent" />
              </div>

              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10 flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-1.5 bg-[#0e0e11]/80 backdrop-blur-md border border-[#c4c1fb]/30 rounded-full">
                  <Icon name="analytics" className="text-[#c4c1fb] text-sm" />
                  <span className="text-[10px] font-label-code text-[#c4c1fb] tracking-widest uppercase">
                    Model: Forensic-AI-04
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 py-1.5 bg-[#0e0e11]/80 backdrop-blur-md border border-[#4edea3]/30 rounded-full">
                  <Icon name="verified" className="text-[#4edea3] text-sm" />
                  <span className="text-[10px] font-label-code text-[#4edea3] tracking-widest uppercase">
                    Confidence: 98.4%
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 py-1.5 bg-[#0e0e11]/80 backdrop-blur-md border border-[#4F46E5]/30 rounded-full">
                  <Icon
                    name="event_repeat"
                    className="text-[#4F46E5] text-sm"
                  />
                  <span className="text-[10px] font-label-code text-[#4F46E5] tracking-widest uppercase">
                    Horizon: +180 Days
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 z-10 bg-gradient-to-t from-[#131316]/90 to-transparent">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#4F46E5] shadow-[0_0_10px_#4F46E5]" />
                        <span className="text-xs font-bold text-[#e5e1e6]">
                          Active Capacity
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#c4c1fb] shadow-[0_0_10px_#c4c1fb]" />
                        <span className="text-xs font-bold text-[#e5e1e6]">
                          Predicted Surge
                        </span>
                      </div>
                    </div>
                    <p className="text-[10px] font-label-code text-[#c8c5d0] uppercase tracking-widest">
                      Strategic Resource Allocation Matrix // Q4 2024 - Q1 2025
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <SentinelBadge className="text-[#c4c1fb] text-[10px]">
                      Live Forecast Engine
                    </SentinelBadge>
                    <p className="text-[8px] text-[#c8c5d0] mt-1">
                      SHA-256: 9f2e...a1b4
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#928f9a 1px, transparent 1px), linear-gradient(90deg, #928f9a 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 13. Credential API Integration                                 */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] bg-[#201f23] border-y border-[#47464f]/20">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3] sentinel-badge">
                <Icon name="api" className="text-[12px]" />
                Unified Credential API
              </div>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold">
                Technical{" "}
                <span className="text-[#4edea3]">Interoperability</span>
              </h2>
              <p className="text-[#c8c5d0]">
                DEMS+ maintains persistent, encrypted pipelines to the
                world&apos;s leading certification bodies. Real-time status
                checks ensure that no investigator is assigned to a case if
                their standing has lapsed—even for a second.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["SANS", "ISC2", "ACFE"].map((org) => (
                  <img
                    key={org}
                    alt={org}
                    className="grayscale hover:grayscale-0 transition-all h-8 w-8"
                    src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 glass-panel p-1 rounded-2xl overflow-hidden">
              <div className="bg-[#0e0e11] p-4 sm:p-8 rounded-2xl font-label-code text-xs text-[#c8c5d0] overflow-x-auto custom-scrollbar">
                <div className="flex flex-wrap gap-4 mb-6 border-b border-[#47464f] pb-4">
                  <span className="text-[#4edea3] font-bold">
                    GET /api/v1/auth/credentials
                  </span>
                  <span className="opacity-30">|</span>
                  <span className="text-[#c4c1fb]">200 OK</span>
                </div>
                <pre className="space-y-1 whitespace-pre">
                  <span className="text-[#4F46E5]">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#c4c1fb]">
                    &quot;investigator_id&quot;
                  </span>
                  : <span className="text-[#4edea3]">&quot;0x9928AF&quot;</span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-[#c4c1fb]">
                    &quot;status&quot;
                  </span>:{" "}
                  <span className="text-[#4edea3]">
                    &quot;ACTIVE_STANDING&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-[#c4c1fb]">
                    &quot;authorities&quot;
                  </span>
                  : [{"\n"}
                  {"    {"}
                  {"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;provider&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">
                    &quot;SANS_INSTITUTE&quot;
                  </span>
                  ,{"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;cert_id&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">&quot;GCFE-44192&quot;</span>
                  ,{"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;valid_until&quot;
                  </span>
                  :{" "}
                  <span className="text-[#e5e1e6]">&quot;2026-04-12&quot;</span>
                  {"\n"}
                  {"    },"}
                  {"\n"}
                  {"    {"}
                  {"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;provider&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">
                    &quot;EUROPOL_EFC&quot;
                  </span>
                  ,{"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;standing&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">
                    &quot;LEVEL_3_ARCHITECT&quot;
                  </span>
                  ,{"\n"}
                  {"      "}
                  <span className="text-[#c4c1fb]">
                    &quot;clearance&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">
                    &quot;CONFIDENTIAL&quot;
                  </span>
                  {"\n"}
                  {"    }"}
                  {"\n"}
                  {"  ],"}
                  {"\n"}
                  {"  "}
                  <span className="text-[#c4c1fb]">
                    &quot;last_sync&quot;
                  </span>:{" "}
                  <span className="text-[#e5e1e6]">
                    &quot;2024-08-21T14:22:01Z&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-[#c4c1fb]">
                    &quot;integrity_hash&quot;
                  </span>
                  :{" "}
                  <span className="text-[#4edea3]">
                    &quot;f2d7e...91c3&quot;
                  </span>
                  {"\n"}
                  <span className="text-[#4F46E5]">{"}"}</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 14. Team Collaboration & Peer Review                           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px] overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="glass-panel p-6 sm:p-10 rounded-[32px] border-[#4edea3]/20 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#4edea3]/10 blur-3xl rounded-full" />
                <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
                  <Icon name="group_verified" className="text-[#4edea3]" />
                  Four-Eyes Verification Pipeline
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 sm:gap-6 p-4 bg-[#201f23] rounded-2xl border border-[#47464f]/30">
                    <div className="w-12 h-12 rounded-full bg-[#4F46E5]/20 flex items-center justify-center text-[#4F46E5] font-bold shrink-0">
                      1
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold">
                        Primary Analyst Initial Match
                      </p>
                      <p className="text-[10px] text-[#c8c5d0]">
                        Automated assignment based on vector scores.
                      </p>
                    </div>
                    <Icon
                      name="check_circle"
                      className="text-[#4edea3] shrink-0"
                    />
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 p-4 bg-[#2a292d] rounded-2xl border-2 border-[#c4c1fb] shadow-[0_0_15px_rgba(196,193,251,0.2)]">
                    <div className="w-12 h-12 rounded-full bg-[#c4c1fb]/20 flex items-center justify-center text-[#c4c1fb] font-bold shrink-0">
                      2
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold">
                        Peer Review / COI Validation
                      </p>
                      <p className="text-[10px] text-[#c8c5d0]">
                        Independent validation of match integrity.
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb] animate-bounce" />
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb] animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb] animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 p-4 bg-[#201f23]/50 rounded-2xl border border-[#47464f]/30 opacity-50">
                    <div className="w-12 h-12 rounded-full bg-[#47464f] flex items-center justify-center text-white font-bold text-xs shrink-0">
                      3
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold">Immutable Deployment</p>
                      <p className="text-[10px] text-[#c8c5d0]">
                        Chain-of-custody locked for lifecycle.
                      </p>
                    </div>
                    <Icon name="lock" className="text-[#47464f] shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <SentinelBadge className="text-[#4edea3]">
                Operational Integrity
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold leading-tight">
                Collaborative{" "}
                <span className="text-[#4edea3]">Peer Review</span>
              </h2>
              <p className="text-[#c8c5d0] text-base sm:text-lg">
                Critical assignments require human-in-the-loop validation. Our
                &quot;Four-Eyes&quot; protocol mandates that high-stakes matches
                are peer-reviewed for potential bias or subtle conflicts of
                interest that automated scanners might miss.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-bold text-sm mb-2">Zero-Trust Review</h4>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Reviewers are assigned anonymously to prevent internal
                    collusion during the assignment phase.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2">Blind Audit Logs</h4>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Every peer decision is cryptographically signed and archived
                    for external judicial review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 15. Operational ROI                                            */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 bg-[#c4c1fb]/5 px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mb-12">
                  Forensic{" "}
                  <span className="text-[#c4c1fb]">Operational ROI</span>
                </h2>
                <div className="space-y-10 sm:space-y-12">
                  {roiStats.map((stat) => (
                    <div key={stat.title} className="flex items-start gap-6">
                      <div
                        className={`text-4xl sm:text-5xl font-display-lg font-bold ${stat.color}`}
                      >
                        {stat.value}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{stat.title}</h4>
                        <p className="text-[#c8c5d0] text-sm">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel p-6 sm:p-12 rounded-[48px] relative border-[#c4c1fb]/20">
                <h3 className="font-bold text-2xl mb-10">
                  Efficiency Comparison
                </h3>
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between text-xs mb-3 text-[#c8c5d0] uppercase font-bold tracking-widest">
                      <span>Legacy Manual Management</span>
                      <span>~48 Hours</span>
                    </div>
                    <div className="h-5 w-full bg-[#201f23] rounded-full overflow-hidden">
                      <div className="h-full bg-[#928f9a] w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-3 text-[#c4c1fb] uppercase font-bold tracking-widest">
                      <span>DEMS+ Automated Routing</span>
                      <span>4.2 Minutes</span>
                    </div>
                    <div className="h-5 w-full bg-[#201f23] rounded-full overflow-hidden">
                      <div className="h-full bg-[#c4c1fb] w-[8%] shadow-[0_0_20px_#c4c1fb]" />
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-[#47464f]/30 text-center">
                  <p className="text-xs font-label-code text-[#c8c5d0]">
                    Audit Validated by Global Forensic Group (Q3 2024)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 16. Technical FAQ                                              */}
        {/* ------------------------------------------------------------- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-[32px]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <SentinelBadge className="text-[#c4c1fb]">
                Knowledge Base
              </SentinelBadge>
              <h2 className="font-display-lg text-3xl sm:text-4xl font-bold mt-2">
                Technical Protocols
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={faq.q}
                    className="glass-panel p-6 rounded-2xl cursor-pointer hover:border-[#c4c1fb] transition-colors group"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h4 className="font-bold">{faq.q}</h4>
                      <Icon
                        name={isOpen ? "expand_less" : "expand_more"}
                        className={`shrink-0 transition-colors ${
                          isOpen
                            ? "text-[#c4c1fb]"
                            : "group-hover:text-[#c4c1fb]"
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <div className="mt-4 text-sm text-[#c8c5d0] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 17. Final CTA                                                  */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-[32px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#c4c1fb]/5" />
          <div className="max-w-[1440px] mx-auto glass-panel p-8 sm:p-16 rounded-[48px] text-center relative z-10 border-[#c4c1fb]/30 shadow-[0_0_50px_rgba(196,193,251,0.1)]">
            <h2 className="font-display-lg text-3xl sm:text-5xl font-bold mb-6">
              Master Your Mission{" "}
              <span className="text-[#c4c1fb]">Resource Orchestration</span>
            </h2>
            <p className="text-[#c8c5d0] text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Deploy the world&apos;s first automated forensic assignment engine
              and secure your digital investigations with immutable, zero-trust
              precision.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-[#4F46E5] text-white font-bold rounded-xl halo-glow text-base sm:text-lg hover:scale-105 transition-transform">
                Request Enterprise Access
              </button>
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-[#353438] border border-[#47464f] text-[#e5e1e6] rounded-xl text-base sm:text-lg hover:bg-[#201f23] transition-colors">
                Speak with a Forensic Engineer
              </button>
            </div>
            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 opacity-50">
              {[
                ["ISO/IEC 27001", "CERTIFIED"],
                ["SOC2 TYPE II", "VERIFIED"],
                ["FIPS 140-3", "COMPLIANT"],
              ].map(([label, status]) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <SentinelBadge className="text-[8px]">{label}</SentinelBadge>
                  <p className="font-bold text-[10px]">{status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AssignInvestigators;
