import { useState } from 'react';
import { Shield, Copy, CheckCheck, ChevronDown, ChevronUp, Lock, Upload, Link, Hash, Fingerprint, Award } from 'lucide-react';

const auditEntries = [
  {
    id: 'chain-001',
    txId: 'NXF-BC-0x7f3a9d2c1e8b4f01',
    action: 'UPLOAD',
    icon: Upload,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    evidenceId: 'EVD-4441',
    actor: 'Rajan Verma · Badge DL-CID-2847',
    timestamp: '05 May 2026, 22:14:37 IST',
    hash: 'a3f9e2c1d8b047c6f5e4d3b2a1908765fedc4321ba987654',
    prevHash: '0000000000000000000000000000000000000000000000000',
    block: '0x4A81F2',
    verified: true,
    note: 'Initial evidence upload from field device',
  },
  {
    id: 'chain-002',
    txId: 'NXF-BC-0x8a2b1c3d4e5f6a07',
    action: 'AI_PROCESS',
    icon: Lock,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    evidenceId: 'EVD-4441',
    actor: 'NexusForce AI Engine v2.1',
    timestamp: '05 May 2026, 23:02:11 IST',
    hash: 'b4e7c3f2a1d809e6f5d4c3b2a1908765fedc4321ba987655',
    prevHash: 'a3f9e2c1d8b047c6f5e4d3b2a1908765fedc4321ba987654',
    block: '0x4A82C1',
    verified: true,
    note: 'YOLOv8 + FaceNet analysis completed. Results sealed.',
  },
];

const actionLabels: Record<string, string> = {
  UPLOAD: 'Uploaded',
  AI_PROCESS: 'AI Processed',
  VIEW: 'Viewed',
  ANNOTATE: 'Annotated',
  TRANSFER: 'Transferred',
  VERIFY: 'Verify',
};

const actionColors: Record<string, string> = {
  UPLOAD: 'bg-cyan-100 text-cyan-700',
  AI_PROCESS: 'bg-violet-100 text-violet-700',
  VIEW: 'bg-blue-100 text-blue-700',
  ANNOTATE: 'bg-amber-100 text-amber-700',
  TRANSFER: 'bg-emerald-100 text-emerald-700',
  VERIFY: 'bg-success/10 text-success',
};

export default function BlockchainAuditLog() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyHash = (hash: string, id: string) => {
    navigator.clipboard.writeText(hash).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden animate-slide-in-right">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-glow">
                <Shield size={14} className="text-white" />
              </div>
              <h2 className="text-base font-semibold text-navy-900">Blockchain Chain of Custody</h2>
            </div>
            <p className="text-xs text-slate-500">
              Immutable audit log · Evidence EVD-4441 · {auditEntries.length} transactions · All verified
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">CHAIN INTACT</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium transition-all duration-200 hover:bg-slate-200 hover:text-slate-900">
              <Award size={12} />
              Export Audit
            </button>
          </div>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-3 px-3 pb-3 border-b border-slate-200 mb-3">
          {['TX ID', 'Action', 'Actor', 'Timestamp', 'Block', 'Hash', 'Status', ''].map((h, i) => (
            <div
              key={`audit-th-${i + 1}`}
              className={`text-[10px] font-semibold uppercase tracking-wider text-slate-400 ${
                i === 0 ? 'col-span-2' : i === 2 ? 'col-span-2' : i === 3 ? 'col-span-2' : i === 5 ? 'col-span-2' : 'col-span-1'
              }`}
            >
              {h}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {auditEntries.map((entry, idx) => {
            const Icon = entry.icon;
            const isExpanded = expandedId === entry.id;
            const isCopied = copiedId === entry.id;

            return (
              <div key={entry.id} className="rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md">
                <div
                  className="grid grid-cols-12 gap-3 px-3 py-3 items-center cursor-pointer hover:bg-slate-50/80 transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                >
                  {/* TX ID */}
                  <div className="col-span-2">
                    <div className="flex items-center gap-1.5">
                      <Link size={10} className="text-slate-400" />
                      <span className="font-mono text-xs text-slate-600 truncate block">{entry.txId.slice(0, 18)}…</span>
                    </div>
                  </div>
                  {/* Action */}
                  <div className="col-span-1 flex items-center gap-1.5">
                    <div className={`p-1 rounded-lg ${entry.bg}`}>
                      <Icon size={10} className={entry.color} />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${actionColors[entry.action] ?? 'bg-slate-100 text-slate-600'}`}>
                      {actionLabels[entry.action] ?? entry.action}
                    </span>
                  </div>
                  {/* Actor */}
                  <div className="col-span-2">
                    <span className="text-xs text-slate-700 truncate block">{entry.actor.split(' · ')[0]}</span>
                    {entry.actor.includes('·') && (
                      <span className="font-mono text-[10px] text-slate-400 truncate block">{entry.actor.split(' · ')[1]}</span>
                    )}
                  </div>
                  {/* Timestamp */}
                  <div className="col-span-2">
                    <span className="font-mono text-[11px] text-slate-500">{entry.timestamp}</span>
                  </div>
                  {/* Block */}
                  <div className="col-span-1">
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-50">
                      <Hash size={8} className="text-cyan-500" />
                      <span className="font-mono text-[10px] font-semibold text-cyan-600">{entry.block}</span>
                    </div>
                  </div>
                  {/* Hash */}
                  <div className="col-span-2 flex items-center gap-1.5">
                    <Fingerprint size={10} className="text-slate-400" />
                    <span className="font-mono text-[11px] text-slate-500 truncate">{entry.hash.slice(0, 14)}…</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); copyHash(entry.hash, entry.id); }}
                      className="p-0.5 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all shrink-0"
                      title="Copy full hash"
                    >
                      {isCopied ? <CheckCheck size={10} className="text-emerald-500" /> : <Copy size={10} />}
                    </button>
                  </div>
                  {/* Status */}
                  <div className="col-span-1">
                    {entry.verified ? (
                      <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCheck size={10} />
                        Valid
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-rose-500">INVALID</span>
                    )}
                  </div>
                  {/* Expand */}
                  <div className="col-span-1 flex justify-end">
                    {isExpanded ? (
                      <ChevronUp size={14} className="text-slate-400" />
                    ) : (
                      <ChevronDown size={14} className="text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 border-t border-slate-100 bg-slate-50/50 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Full TX ID</p>
                        <p className="font-mono text-xs text-slate-600 break-all bg-white p-2 rounded-lg border border-slate-200">{entry.txId}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Note</p>
                        <p className="text-sm text-slate-700 bg-white p-2 rounded-lg border border-slate-200">{entry.note}</p>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Current Hash (SHA-256)</p>
                        <p className="font-mono text-xs text-slate-600 break-all bg-slate-100 p-2 rounded-lg font-mono">{entry.hash}</p>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Previous Hash</p>
                        <p className="font-mono text-xs text-slate-500 break-all bg-slate-100 p-2 rounded-lg">{entry.prevHash}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Integrity summary */}
        <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 flex items-center gap-4">
          <div className="p-2 rounded-xl bg-emerald-100">
            <Shield size={18} className="text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-800">Chain Integrity Verified</p>
            <p className="text-xs text-emerald-700/70 mt-0.5">
              All {auditEntries.length} transactions form an unbroken hash chain. Last verified: 14 May 2026, 07:20 IST · Block 0x4AC9B7
            </p>
          </div>
          <div className="ml-auto">
            <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
              <CheckCheck size={16} className="text-emerald-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}