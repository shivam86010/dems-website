// components/EvidenceHeader.tsx
import React from 'react';
import { Upload, PackageCheck, Filter, Shield } from 'lucide-react';

export default function EvidenceHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 rounded-lg bg-gradient-premium">
            <Shield size={16} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Evidence Intelligence</h1>
          <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-deep-blue-500/15 text-deep-blue-400 border border-deep-blue-500/30 uppercase tracking-wider">
            AI Active
          </span>
        </div>
        <p className="text-sm text-slate-500">
          Case NXF-2024-1891 · Murder — Rohini Sector 3 · 41 evidence items · Last sync: 07:20 IST
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all text-sm">
          <Filter size={14} />
          Filter
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all text-sm">
          <PackageCheck size={14} />
          Generate Court Bundle
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all text-sm">
          <Upload size={14} />
          Upload Evidence
        </button>
      </div>
    </div>
  );
}