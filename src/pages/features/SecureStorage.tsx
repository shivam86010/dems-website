import React, { useState } from "react";

// Custom injection for global styling and animations mimicking the exact template design
const customStyles = `
  .glass {
    background: rgba(30, 27, 75, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(46, 42, 110, 0.5);
  }
  .glow-secondary {
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  }
  @keyframes scrollUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  .scrolling-text {
    animation: scrollUp 30s linear infinite;
  }
`;

export default function SecureStorage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#131316] text-[#e5e1e6] font-sans antialiased overflow-x-hidden selection:bg-[#1e1b4b] selection:text-[#c4c1fb]">
      <style>{customStyles}</style>

      {/* Material Symbols Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <main >
        {/* 1. Hero: Cryptographic Certainty */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-8 border-b border-[#47464f]">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              alt="Forensic AI Core"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvjjIdKX7VYJny-ENvwuC7_yjD0p9us_7iz1XIPcDsbmq3pt02zNQgUGpF_M9tNM8oogTKDe0UDfBVuPl0flQLnPjnTir0ljdyobVVrWnbb0w3FnM28TIDHitrra74Cy2sbsZsOU9KZ97EJloGMvtJg6zP9v2UP9ZcbXHocASNSgpax0WXvk8Kb8HHjCdjhbAVTkOszju7UukZjPD6gwn6X_2BpdYEKIXhjMXA57zTS-2qohZcDiIIjKVE"
            />
          </div>
          <div className="relative z-10 max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-[#4edea3] font-mono text-[12px] leading-[16px] uppercase tracking-widest border border-[#4edea3]/30">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              Immutable Custody Guaranteed
            </div>
            <h1 className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#e5e1e6]">
              Secure Storage with{" "}
              <span className="text-[#c4c1fb]">Cryptographic Certainty</span>
            </h1>
            <p className="text-[#c8c5d0] text-[24px] leading-[32px] font-normal max-w-2xl mx-auto">
              Enterprise-grade Zero-Trust architecture designed for the absolute
              integrity of forensic evidence and legal discovery.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button className="bg-[#3626ce] text-[#c3c0ff] px-8 py-3 rounded-xl font-bold text-[20px] leading-[28px] hover:glow-secondary transition-all active:scale-95">
                Initialize Vault
              </button>
              <button className="glass px-8 py-3 rounded-xl font-bold text-[20px] leading-[28px] border border-[#47464f] hover:bg-[#353438] transition-all">
                Review Specs
              </button>
            </div>
          </div>

          {/* Live Hash Stream Interaction */}
          <div className="absolute bottom-8 right-8 w-64 h-32 overflow-hidden glass rounded-lg p-3 hidden xl:block">
            <div className="text-[10px] font-mono text-[#c4c1fb]/50 uppercase mb-2">
              Real-time SHA-256 stream
            </div>
            <div className="scrolling-text space-y-1">
              <div className="text-[10px] font-mono text-[#4edea3]">
                0x8f2d...4e1a-VERIFIED
              </div>
              <div className="text-[10px] font-mono text-[#c8c5d0]">
                0x3a1c...9b2e-SYNCING
              </div>
              <div className="text-[10px] font-mono text-[#4edea3]">
                0xcd45...1f78-VERIFIED
              </div>
              <div className="text-[10px] font-mono text-[#4edea3]">
                0x76ab...de09-VERIFIED
              </div>
              <div className="text-[10px] font-mono text-[#c8c5d0]">
                0xef12...34cd-PENDING
              </div>
              <div className="text-[10px] font-mono text-[#4edea3]">
                0x9900...88ff-VERIFIED
              </div>
              {/* Loop duplicates for animation mapping */}
              <div className="text-[10px] font-mono text-[#4edea3]">
                0x8f2d...4e1a-VERIFIED
              </div>
              <div className="text-[10px] font-mono text-[#c8c5d0]">
                0x3a1c...9b2e-SYNCING
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Architecture of Trust */}
        <section className="py-24 px-8 bg-[#0e0e11]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-bold text-[24px] leading-[32px] text-[#c4c1fb]">
                The Architecture of Trust
              </h2>
              <p className="text-[#c8c5d0] text-[14px] leading-[20px] leading-relaxed">
                DEMS+ bypasses traditional file-system vulnerabilities by
                implementing a proprietary Zero-Trust storage stack. Every byte
                is signed, every access is verified, and every move is logged in
                an immutable ledger.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 glass rounded-xl border-l-4 border-[#c4c1fb]">
                  <h4 class="font-bold text-[#e5e1e6] mb-2">Credential API</h4>
                  <p className="text-[12px] leading-[16px] text-[#c8c5d0]">
                    Direct integration with global certification authorities.
                  </p>
                </div>
                <div className="p-4 glass rounded-xl border-l-4 border-[#4edea3]">
                  <h4 class="font-bold text-[#e5e1e6] mb-2">Integrity Nodes</h4>
                  <p className="text-[12px] leading-[16px] text-[#c8c5d0]">
                    Distributed validation of data checksums at 10ms intervals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                alt="Architecture Diagram"
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full"
                src="https://lh3.googleusercontent.com/aida/AP1WRLt-C57wvz0QspBFm-9BbhQxIbhJ9qkbmn57bbyTtm3pBxHNr1QZa67Yh5UAEzL6IFd1u49HgaIcCiEpVenWk6DfuDC4PvRUbabzsxPxjU9fllYVAVSkmNymlOSjXb-3kXamfFmN6X8zfnR-uFNjG8N4ocCLkh5k8liCtfLd9WKNJA7raEjYX76SVF1RkKLV_CB_dIwUE9jFskmmck1BfQqBYeE8ChH6c85mN-d1asLJOIzdV2FDsSOw-AI"
              />
              <div className="absolute -bottom-4 -right-4 p-4 glass rounded-lg border border-[#c4c1fb]/30">
                <div className="text-[#c4c1fb] font-mono text-[12px] leading-[16px]">
                  SYSTEM_STATUS: NOMINAL
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-[#4edea3] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-[#4edea3] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-[#4edea3] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AES-256-GCM Encryption */}
        <section className="py-24 px-8 bg-[#131316] border-y border-[#47464f]">
          <div className="max-w-[1440px] mx-auto text-center mb-16">
            <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6] mb-4">
              AES-256-GCM Protection
            </h2>
            <p className="text-[#c8c5d0] max-w-2xl mx-auto">
              Galois/Counter Mode (GCM) ensures not just confidentiality, but
              authenticity and integrity of every data block at rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#201f23] rounded-2xl border border-[#47464f] hover:border-[#c4c1fb] transition-colors group">
              <span
                className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-4 group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                enhanced_encryption
              </span>
              <h3 className="font-semibold text-[24px] leading-[32px] text-[#e5e1e6] mb-3">
                Envelope Encryption
              </h3>
              <p className="text-[#c8c5d0] text-[12px] leading-[16px]">
                Data keys are encrypted by master keys stored in FIPS 140-2
                Level 3 Hardware Security Modules (HSM).
              </p>
            </div>
            <div className="p-8 bg-[#201f23] rounded-2xl border border-[#47464f] hover:border-[#c4c1fb] transition-colors group">
              <span
                className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-4 group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                vpn_key
              </span>
              <h3 className="font-semibold text-[24px] leading-[32px] text-[#e5e1e6] mb-3">
                Key Rotation
              </h3>
              <p className="text-[#c8c5d0] text-[12px] leading-[16px]">
                Automatic cryptographic key rotation every 90 days or upon
                specific forensic triggers to minimize exposure windows.
              </p>
            </div>
            <div className="p-8 bg-[#201f23] rounded-2xl border border-[#47464f] hover:border-[#c4c1fb] transition-colors group">
              <span
                className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-4 group-hover:scale-110 transition-transform block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_lock
              </span>
              <h3 className="font-semibold text-[24px] leading-[32px] text-[#e5e1e6] mb-3">
                Zero-Knowledge
              </h3>
              <p className="text-[#c8c5d0] text-[12px] leading-[16px]">
                DEMS+ administrators have no access to raw data. Keys are
                generated and stored exclusively within the client's silo.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Multi-Region Residency */}
        <section className="py-24 px-8 bg-[#0e0e11]">
          <div className="max-w-[1440px] mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6]">
                  Multi-Region Residency
                </h2>
                <p className="text-[#c8c5d0] mt-2">
                  Global data sovereignty compliance across 40+ regions.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#4edea3]/10 text-[#4edea3] rounded-full text-[12px] leading-[16px] font-bold border border-[#4edea3]/20">
                  GDPR Ready
                </span>
                <span className="px-3 py-1 bg-[#c4c1fb]/10 text-[#c4c1fb] rounded-full text-[12px] leading-[16px] font-bold border border-[#c4c1fb]/20">
                  HIPAA Compliant
                </span>
              </div>
            </div>
            <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#201f23] rounded-3xl overflow-hidden border border-[#47464f]">
              <div
                className="absolute inset-0 grayscale opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDG6n83XMhcbwSB-NC1weXALh-Swht_xk3Qg243au24KAXvvaXy1KiiJh-EM8kHqcxU1L3T9iZK94gDSvWdfawd2ocJRtEt23_5mJg6shRf5hjjnRVnWAhmmZN0AboRYb51k5kxsaTYpphVsOZ_Tk5kWB2K9wkatgYUMkePViCF2mWKx65Z-b9VsOFhj7D3lLdR8JDVOFkZCe9gk3QiNKYeKNgAJczeOku7jmzgPEcUE1qX_fZlptNL')",
                }}
              ></div>
              {/* Pulsing Nodes */}
              <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                <div className="w-4 h-4 bg-[#c4c1fb] rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-[#c4c1fb] rounded-full relative shadow-[0_0_15px_rgba(196,193,251,0.8)]"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[12px] leading-[16px] z-20">
                  US-EAST-1: ACTIVE
                </div>
              </div>
              <div className="absolute top-1/3 left-[45%] group cursor-pointer">
                <div className="w-4 h-4 bg-[#4edea3] rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-[#4edea3] rounded-full relative shadow-[0_0_15px_rgba(78,222,163,0.8)]"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[12px] leading-[16px] z-20">
                  EU-WEST-2: SECURED
                </div>
              </div>
              <div className="absolute bottom-6 right-6 glass p-4 rounded-xl border border-[#47464f] max-w-xs">
                <h4 class="font-bold text-[#e5e1e6] text-[14px] leading-[20px]">
                  Jurisdictional Control
                </h4>
                <p className="text-[#c8c5d0] text-[12px] leading-[16px] mt-1">
                  Specify data domicile at the bucket level to satisfy local
                  discovery laws and avoid cross-border data transfer issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Air-Gapped Immutable Archival */}
        <section className="py-24 px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-96 bg-[#201f23] rounded-2xl border border-[#47464f] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-around py-8 px-4 opacity-30">
              <div className="h-1 bg-[#47464f] w-full"></div>
              <div className="h-1 bg-[#47464f] w-full"></div>
              <div className="h-1 bg-[#47464f] w-full"></div>
              <div className="h-1 bg-[#47464f] w-full"></div>
            </div>
            <div className="z-10 text-center space-y-4">
              <span
                className="material-symbols-outlined text-8xl text-[#c4c1fb] block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
              <div className="font-mono text-[#c4c1fb] text-xl">
                WORM_PROTOCOL_LOCKED
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#e5e1e6] leading-tight">
              Air-Gapped{" "}
              <span className="text-[#4edea3]">Immutable Archival</span>
            </h2>
            <p className="text-[#c8c5d0] text-[24px] leading-[32px] font-normal">
              Once evidence is committed, it cannot be modified, overwritten, or
              deleted by any user—including system administrators—until the
              retention period expires.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-[#4edea3]">
                  check_circle
                </span>
                <span className="text-[#e5e1e6]">
                  Cryptographic 'Write Once, Read Many' (WORM) hardware
                  enforcement.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-[#4edea3]">
                  check_circle
                </span>
                <span className="text-[#e5e1e6]">
                  Physical isolation options for high-sensitivity criminal
                  evidence.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-[#4edea3]">
                  check_circle
                </span>
                <span className="text-[#e5e1e6]">
                  Automatic archival to cold storage after 365 days of
                  inactivity.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Quantum-Resistant Cryptography */}
        <section className="py-24 px-8 bg-[#2a292d] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-gradient-to-l from-[#c4c1fb] to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <span className="material-symbols-outlined text-6xl text-[#c4c1fb] animate-pulse block">
              bolt
            </span>
            <h2 className="font-bold text-[24px] leading-[32px] text-[#c4c1fb]">
              Quantum-Resistant Cryptography
            </h2>
            <p className="text-[#c8c5d0] text-[14px] leading-[20px] leading-relaxed">
              The 'Store Now, Decrypt Later' threat is real. DEMS+ integrates
              Lattice-based cryptography to ensure your forensic assets remain
              secure against future Shor’s algorithm attacks and quantum
              computing breakthroughs.
            </p>
            <div className="flex justify-center flex-wrap gap-6 pt-4">
              <div className="px-6 py-4 glass rounded-xl border-b-2 border-[#c4c1fb]">
                <div className="text-[12px] leading-[16px] text-[#c4c1fb] mb-1">
                  Standard
                </div>
                <div className="font-bold">RSA / ECC</div>
              </div>
              <div className="px-6 py-4 glass rounded-xl border-b-2 border-[#4edea3]">
                <div className="text-[12px] leading-[16px] text-[#4edea3] mb-1">
                  DEMS+ Integration
                </div>
                <div className="font-bold">Kyber-1024 / Dilithium</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Real-Time Integrity Monitoring Dashboard */}
        <section className="py-24 px-8 bg-[#131316]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6]">
                  Vigilant Monitoring
                </h2>
                <p className="text-[#c8c5d0] text-[12px] leading-[16px]">
                  Our AI monitors storage heartbeat every millisecond. Any
                  deviation in file headers or metadata triggers an immediate
                  forensic lockdown.
                </p>
                <button className="w-full py-3 glass rounded-lg text-[#c4c1fb] font-bold hover:bg-[#c4c1fb]/10 transition-all">
                  View Demo Alert
                </button>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f]">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-[12px] leading-[16px] text-[#c8c5d0] uppercase">
                        System Health
                      </div>
                      <div className="text-[24px] leading-[32px] font-bold text-[#4edea3]">
                        99.999% Uptime
                      </div>
                    </div>
                    <span
                      className="material-symbols-outlined text-[#4edea3]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      speed
                    </span>
                  </div>
                  <div className="flex gap-1 h-12 items-end">
                    <div className="w-full bg-[#4edea3] h-[80%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[95%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[70%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[90%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[85%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[98%] rounded-t-sm"></div>
                    <div className="w-full bg-[#4edea3] h-[92%] rounded-t-sm"></div>
                  </div>
                </div>
                <div className="p-6 bg-[#201f23] rounded-2xl border border-[#47464f]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[12px] leading-[16px] text-[#c8c5d0] uppercase">
                        Tamper Alerts
                      </div>
                      <div className="text-[24px] leading-[32px] font-bold text-[#e5e1e6]">
                        0 Detections
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#c8c5d0]">
                      warning
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-[#353438]/30 rounded text-[12px] leading-[16px]">
                      <span className="w-2 h-2 bg-[#4edea3] rounded-full"></span>
                      <span className="text-[#c8c5d0]">
                        Metadata verified at 14:02:11
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-[#353438]/30 rounded text-[12px] leading-[16px]">
                      <span className="w-2 h-2 bg-[#4edea3] rounded-full"></span>
                      <span className="text-[#c8c5d0]">
                        Metadata verified at 14:02:10
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-[#353438]/30 rounded text-[12px] leading-[16px]">
                      <span className="w-2 h-2 bg-[#4edea3] rounded-full"></span>
                      <span className="text-[#c8c5d0]">
                        Metadata verified at 14:02:09
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Hardware-Rooted Trust */}
        <section className="py-24 px-8 bg-[#0e0e11]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6]">
                Hardware-Rooted Trust
              </h2>
              <p className="text-[#c8c5d0]">
                Security starts at the silicon. DEMS+ utilizes TPM 2.0 (Trusted
                Platform Module) and Cloud HSMs to ensure keys never touch
                memory in plain text.
              </p>
              <div className="flex gap-4">
                <div className="p-4 glass rounded-xl text-center flex-1">
                  <div className="text-[#c4c1fb] font-bold text-[24px] leading-[32px]">
                    TPM 2.0
                  </div>
                  <div className="text-[12px] leading-[16px] text-[#c8c5d0]">
                    Boot Integrity
                  </div>
                </div>
                <div className="p-4 glass rounded-xl text-center flex-1">
                  <div className="text-[#c4c1fb] font-bold text-[24px] leading-[32px]">
                    HSM
                  </div>
                  <div className="text-[12px] leading-[16px] text-[#c8c5d0]">
                    Key Custody
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 bg-[#201f23] border border-[#47464f] rounded-2xl flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #4F46E5 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative flex flex-col items-center">
                <span className="material-symbols-outlined text-7xl text-[#c4c1fb]">
                  memory
                </span>
                <div className="mt-4 px-4 py-1 bg-[#c4c1fb]/20 text-[#c4c1fb] rounded-full font-mono text-[12px] leading-[16px]">
                  SILICON_VALIDATED
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Data Deletion & Expired TTL */}
        <section className="py-24 px-8 border-t border-[#47464f]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6]">
              Secure Shredding (NIST 800-88)
            </h2>
            <p className="text-[#c8c5d0]">
              When the legal retention period ends, DEMS+ executes a
              cryptographic wipe. By deleting the unique encryption key for that
              specific object, the data becomes instantly and mathematically
              unrecoverable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-[#c8c5d0] block">
                  timer
                </span>
                <h4 class="font-bold">TTL Enforcement</h4>
                <p className="text-[12px] leading-[16px] text-[#c8c5d0]">
                  Auto-delete on expiration.
                </p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-[#c8c5d0] block">
                  content_cut
                </span>
                <h4 class="font-bold">Crypto-Shredding</h4>
                <p className="text-[12px] leading-[16px] text-[#c8c5d0]">
                  Key deletion protocol.
                </p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-[#c8c5d0] block">
                  description
                </span>
                <h4 class="font-bold">Certificate of Destruction</h4>
                <p className="text-[12px] leading-[16px] text-[#c8c5d0]">
                  Automated audit proof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Forensic Efficiency Metrics */}
        <section className="py-24 px-8 bg-[#201f23]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6] text-center mb-16">
              Forensic Performance
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 glass rounded-2xl">
                <div className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#c4c1fb]">
                  420<span className="text-[24px] leading-[32px]">ms</span>
                </div>
                <div className="text-[#c8c5d0] text-[12px] leading-[16px] uppercase tracking-wider mt-2">
                  Avg. Retrieval Speed
                </div>
              </div>
              <div className="text-center p-8 glass rounded-2xl">
                <div className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#c4c1fb]">
                  90<span className="text-[24px] leading-[32px]">%</span>
                </div>
                <div className="text-[#c8c5d0] text-[12px] leading-[16px] uppercase tracking-wider mt-2">
                  Cost Reduction
                </div>
              </div>
              <div className="text-center p-8 glass rounded-2xl">
                <div className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#4edea3]">
                  0<span className="text-[24px] leading-[32px]">s</span>
                </div>
                <div className="text-[#c8c5d0] text-[12px] leading-[16px] uppercase tracking-wider mt-2">
                  Integrity Lag
                </div>
              </div>
              <div className="text-center p-8 glass rounded-2xl">
                <div className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#4edea3]">
                  Exa
                </div>
                <div className="text-[#c8c5d0] text-[12px] leading-[16px] uppercase tracking-wider mt-2">
                  Scale Capacity
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Compliance Vault */}
        <section className="py-24 px-8 bg-[#131316] border-y border-[#47464f] overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6]">
                The Compliance Vault
              </h2>
              <p className="text-[#c8c5d0] mt-2">
                Third-party validated security certifications.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#353438] rounded-full mb-4 flex items-center justify-center border border-[#47464f]">
                  <span className="font-bold text-[24px] leading-[32px]">
                    SOC2
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">
                  Type II Certified
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#353438] rounded-full mb-4 flex items-center justify-center border border-[#47464f]">
                  <span className="font-bold text-[24px] leading-[32px]">
                    FIPS
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">
                  140-3 Validated
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#353438] rounded-full mb-4 flex items-center justify-center border border-[#47464f]">
                  <span className="font-bold text-[24px] leading-[32px]">
                    HIPAA
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">PHS Security</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#353438] rounded-full mb-4 flex items-center justify-center border border-[#47464f]">
                  <span className="font-bold text-[24px] leading-[32px]">
                    GDPR
                  </span>
                </div>
                <span className="text-[12px] leading-[16px]">
                  DPA Compliant
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Technical Specifications Table */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6] mb-8">
              Technical Specifications
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[#47464f]">
              <table className="w-full text-left text-[12px] leading-[16px]">
                <thead className="bg-[#2a292d] text-[#c8c5d0] uppercase font-mono">
                  <tr>
                    <th className="p-4">Parameter</th>
                    <th className="p-4">Standard Tier</th>
                    <th className="p-4">Enterprise Sentinel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#47464f]">
                  <tr className="hover:bg-[#353438]/30 transition-colors">
                    <td className="p-4 font-bold">Max Object Size</td>
                    <td className="p-4">5 TB</td>
                    <td className="p-4">Unlimited (Multipart)</td>
                  </tr>
                  <tr className="hover:bg-[#353438]/30 transition-colors">
                    <td className="p-4 font-bold">Latency (TTFB)</td>
                    <td className="p-4">&lt; 80ms</td>
                    <td className="p-4">&lt; 40ms (Global Acceleration)</td>
                  </tr>
                  <tr className="hover:bg-[#353438]/30 transition-colors">
                    <td className="p-4 font-bold">Encryption Algorithm</td>
                    <td className="p-4">AES-256-GCM</td>
                    <td className="p-4">AES-GCM + Kyber-1024</td>
                  </tr>
                  <tr className="hover:bg-[#353438]/30 transition-colors">
                    <td className="p-4 font-bold">Integrity Checks</td>
                    <td className="p-4">Hourly</td>
                    <td className="p-4">Real-time Heartbeat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="py-24 px-8 bg-[#0e0e11]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-[24px] leading-[32px] text-[#e5e1e6] mb-12 text-center">
              Security FAQ
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How does the air-gap override work?",
                  a: "Overrides are only possible through a 'Quorum Approval' process requiring physical security keys from three pre-authorized officers. There is no single-point-of-failure or 'God Mode' account.",
                },
                {
                  q: "Are jurisdictional laws handled automatically?",
                  a: "Yes. When a bucket is created, users select the governing jurisdiction. DEMS+ then applies a specific compliance overlay that restricts data egress based on that region's legal framework.",
                },
                {
                  q: "What happens during a hardware failure?",
                  a: "We maintain 11 nines of durability (99.999999999%) by replicating data across at least three physically distinct availability zones within your chosen region.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="p-6 glass rounded-2xl border border-[#47464f] cursor-pointer"
                >
                  <div className="flex justify-between items-center font-bold text-[#e5e1e6]">
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined transition-transform duration-200 ${activeFaq === index ? "rotate-180" : ""}`}
                    >
                      expand_more
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[#c8c5d0] leading-relaxed text-[14px] leading-[20px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Final CTA */}
        <section className="py-24 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1e1b4b] opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-bold text-[48px] leading-[56px] letter-spacing-[-0.02em] text-[#e5e1e6]">
              Secure Your Evidence Infrastructure
            </h2>
            <p className="text-[#c8c5d0] text-[24px] leading-[32px]">
              Join 500+ global agencies using DEMS+ for immutable forensic
              custody.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#c4c1fb] text-[#2d2a5b] px-10 py-4 rounded-full font-bold text-[20px] leading-[28px] hover:opacity-90 transition-all shadow-xl">
                Contact Security Engineer
              </button>
              <button className="glass px-10 py-4 rounded-full font-bold text-[20px] leading-[28px] border border-[#c4c1fb] hover:bg-[#c4c1fb]/10 transition-all">
                Request Architecture PDF
              </button>
            </div>
          </div>
        </section>
      </main>

     
     
    </div>
  );
}
