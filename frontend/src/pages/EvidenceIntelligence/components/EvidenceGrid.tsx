
// import React, { useState } from 'react';
// import { Video, Image, Mic, FileText, Cpu, CheckCircle2, AlertTriangle, Search } from 'lucide-react';
// // import StatusBadge from './components/ui/StatusBadge';

// // Backend integration point: replace with API call to /api/cases/:caseId/evidence
// const evidenceItems = [
//   {
//     id: 'evd-4441',
//     label: 'EVD-4441',
//     type: 'video',
//     filename: 'CCTV_Rohini_Cam04_2026-05-05.mp4',
//     size: '2.3 GB',
//     status: 'blockchain-sealed' as const,
//     aiStatus: 'complete',
//     detections: { faces: 2, plates: 1, weapons: 0, objects: 7 },
//     confidence: 94,
//     uploadedBy: 'Rajan Verma',
//     uploadedAt: '05 May 2026, 22:14',
//     hash: 'a3f9e2c1d8b047',
//     tampered: false,
//   },
//   {
//     id: 'evd-4440',
//     label: 'EVD-4440',
//     type: 'image',
//     filename: 'crime_scene_photo_01.jpg',
//     size: '8.4 MB',
//     status: 'verified' as const,
//     aiStatus: 'complete',
//     detections: { faces: 0, plates: 0, weapons: 1, objects: 12 },
//     confidence: 88,
//     uploadedBy: 'Forensics Team',
//     uploadedAt: '06 May 2026, 09:31',
//     hash: 'b7c3a1f4e920d5',
//     tampered: false,
//   },
// ];

// const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
//   video: { icon: Video, color: 'text-blue-400', bg: 'bg-blue-500/10' },
//   image: { icon: Image, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
//   audio: { icon: Mic, color: 'text-amber-400', bg: 'bg-amber-500/10' },
//   document: { icon: FileText, color: 'text-violet-400', bg: 'bg-violet-500/10' },
// };

// const filterOptions = ['All', 'Video', 'Image', 'Audio', 'Document', 'Tampered', 'Processing'];

// interface EvidenceGridProps {
//   onSelect?: (id: string) => void;
// }

// export default function EvidenceGrid({ onSelect }: EvidenceGridProps) {
//   const [selected, setSelected] = useState('evd-4441');
//   const [filter, setFilter] = useState('All');
//   const [search, setSearch] = useState('');

//   const filtered = evidenceItems.filter((e) => {
//     const matchSearch =
//       e.label.toLowerCase().includes(search.toLowerCase()) ||
//       e.filename.toLowerCase().includes(search.toLowerCase());
//     if (filter === 'All') return matchSearch;
//     if (filter === 'Tampered') return matchSearch && e.tampered;
//     if (filter === 'Processing') return matchSearch && e.aiStatus !== 'complete';
//     return matchSearch && e.type.toLowerCase() === filter.toLowerCase();
//   });

//   return (
//     <div className="card-surface p-4 h-full">
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="text-base font-semibold text-foreground">Evidence Items</h2>
//         <span className="text-2xs text-muted-foreground">{filtered.length} of {evidenceItems.length}</span>
//       </div>

//       {/* Search */}
//       <div className="relative mb-3">
//         <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
//         <input
//           type="text"
//           placeholder="Search evidence…"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input-field pl-8 py-2 text-xs h-8 w-full"
//         />
//       </div>

//       {/* Filter chips */}
//       <div className="flex flex-wrap gap-1.5 mb-3">
//         {filterOptions.map((f) => (
//           <button
//             key={`filter-chip-${f}`}
//             onClick={() => setFilter(f)}
//             className={`text-2xs font-semibold px-2.5 py-1 rounded-full transition-all ${
//               filter === f
//                 ? 'bg-primary/20 text-primary border border-primary/30' :'bg-muted text-muted-foreground hover:text-foreground border border-transparent'
//             }`}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* Items list */}
//       <div className="space-y-1.5 max-h-[640px] overflow-y-auto scrollbar-thin pr-1">
//         {filtered.map((item) => {
//           const tc = typeConfig[item.type] ?? typeConfig.document;
//           const TypeIcon = tc.icon;
//           const isSelected = selected === item.id;

//           return (
//             <button
//               key={item.id}
//               onClick={() => { setSelected(item.id); onSelect?.(item.id); }}
//               className={`w-full text-left p-3 rounded-lg border transition-all duration-150 ${
//                 isSelected
//                   ? 'border-primary/40 bg-primary/8 glow-blue'
//                   : item.tampered
//                   ? 'border-red-500/30 bg-red-500/5 hover:border-red-500/50' :'border-border bg-muted/10 hover:border-border/80 hover:bg-muted/20'
//               }`}
//             >
//               <div className="flex items-start gap-3">
//                 <div className={`w-8 h-8 rounded-md ${tc.bg} flex items-center justify-center shrink-0`}>
//                   <TypeIcon size={15} className={tc.color} />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-1.5 mb-0.5">
//                     <span className="font-mono text-2xs font-bold text-primary">{item.label}</span>
//                     {item.tampered && (
//                       <AlertTriangle size={11} className="text-red-400 shrink-0" />
//                     )}
//                     {item.aiStatus === 'complete' && !item.tampered && (
//                       <CheckCircle2 size={11} className="text-success shrink-0" />
//                     )}
//                     {item.aiStatus === 'processing' && (
//                       <Cpu size={11} className="text-violet-400 animate-pulse shrink-0" />
//                     )}
//                   </div>
//                   <p className="text-2xs text-foreground font-medium truncate">{item.filename}</p>
//                   <div className="flex items-center gap-2 mt-1">
//                     <span className="text-2xs text-muted-foreground">{item.size}</span>
//                     {item.hash && (
//                       <span className="hash-text truncate max-w-[80px]">{item.hash}…</span>
//                     )}
//                     {item.confidence !== null && (
//                       <span className="text-2xs font-bold text-emerald-400 ml-auto">{item.confidence}%</span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Detections row */}
//               {item.detections && (
//                 <div className="flex gap-3 mt-2 pt-2 border-t border-border/40">
//                   {item.detections.faces > 0 && (
//                     <span className="text-2xs text-violet-400 font-semibold">{item.detections.faces} face{item.detections.faces > 1 ? 's' : ''}</span>
//                   )}
//                   {item.detections.plates > 0 && (
//                     <span className="text-2xs text-amber-400 font-semibold">{item.detections.plates} plate</span>
//                   )}
//                   {item.detections.weapons > 0 && (
//                     <span className="text-2xs text-red-400 font-semibold">{item.detections.weapons} weapon</span>
//                   )}
//                   {item.detections.objects > 0 && (
//                     <span className="text-2xs text-blue-400 font-semibold">{item.detections.objects} obj</span>
//                   )}
//                   {item.detections.faces === 0 && item.detections.plates === 0 && item.detections.weapons === 0 && item.detections.objects === 0 && (
//                     <span className="text-2xs text-muted-foreground">No detections</span>
//                   )}
//                   {/* <div className="ml-auto">
//                     <StatusBadge status={item.status} size="sm" />
//                   </div> */}
//                 </div>
//               )}

//               {item.tampered && (
//                 <div className="mt-2 pt-2 border-t border-red-500/20 flex items-center gap-1.5">
//                   <AlertTriangle size={11} className="text-red-400" />
//                   <span className="text-2xs font-bold text-red-400">HASH MISMATCH — INTEGRITY VIOLATION</span>
//                 </div>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// components/EvidenceGrid.tsx
import React, { useState } from 'react';
import { Video, Image, Mic, FileText, Cpu, CheckCircle2, AlertTriangle, Search, Shield, Fingerprint, Calendar, HardDrive } from 'lucide-react';

const evidenceItems = [
  {
    id: 'evd-4441',
    label: 'EVD-4441',
    type: 'video',
    filename: 'CCTV_Rohini_Cam04_2026-05-05.mp4',
    size: '2.3 GB',
    status: 'blockchain-sealed' as const,
    aiStatus: 'complete',
    detections: { faces: 2, plates: 1, weapons: 0, objects: 7 },
    confidence: 94,
    uploadedBy: 'Rajan Verma',
    uploadedAt: '05 May 2026, 22:14',
    hash: 'a3f9e2c1d8b047',
    tampered: false,
  },
  {
    id: 'evd-4440',
    label: 'EVD-4440',
    type: 'image',
    filename: 'crime_scene_photo_01.jpg',
    size: '8.4 MB',
    status: 'verified' as const,
    aiStatus: 'complete',
    detections: { faces: 0, plates: 0, weapons: 1, objects: 12 },
    confidence: 88,
    uploadedBy: 'Forensics Team',
    uploadedAt: '06 May 2026, 09:31',
    hash: 'b7c3a1f4e920d5',
    tampered: false,
  },
];

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string; gradient: string }> = {
  video: { icon: Video, color: 'text-cyan-400', bg: 'bg-cyan-500/10', gradient: 'from-cyan-500/20 to-transparent' },
  image: { icon: Image, color: 'text-emerald-400', bg: 'bg-emerald-500/10', gradient: 'from-emerald-500/20 to-transparent' },
  audio: { icon: Mic, color: 'text-amber-400', bg: 'bg-amber-500/10', gradient: 'from-amber-500/20 to-transparent' },
  document: { icon: FileText, color: 'text-violet-400', bg: 'bg-violet-500/10', gradient: 'from-violet-500/20 to-transparent' },
};

const filterOptions = ['All', 'Video', 'Image', 'Audio', 'Document', 'Tampered', 'Processing'];

interface EvidenceGridProps {
  onSelect?: (id: string) => void;
}

export default function EvidenceGrid({ onSelect }: EvidenceGridProps) {
  const [selected, setSelected] = useState('evd-4441');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = evidenceItems.filter((e) => {
    const matchSearch =
      e.label.toLowerCase().includes(search.toLowerCase()) ||
      e.filename.toLowerCase().includes(search.toLowerCase());
    if (filter === 'All') return matchSearch;
    if (filter === 'Tampered') return matchSearch && e.tampered;
    if (filter === 'Processing') return matchSearch && e.aiStatus !== 'complete';
    return matchSearch && e.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden animate-slide-in-left">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue-50/30 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-deep-blue-500 to-navy-600 shadow-glow">
              <Shield size={14} className="text-white" />
            </div>
            <h2 className="text-base font-semibold text-navy-900">Evidence Items</h2>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">{filtered.length} of {evidenceItems.length}</span>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search evidence by ID or filename..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-deep-blue-300 focus:ring-2 focus:ring-deep-blue-500/20 transition-all outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {filterOptions.map((f) => (
            <button
              key={`filter-chip-${f}`}
              onClick={() => setFilter(f)}
              className={`text-xs font-medium px-3 py-1.5 rounded-xl transition-all duration-200 ${
                filter === f
                  ? 'bg-deep-blue-500 text-white shadow-md shadow-deep-blue-500/30' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Items list */}
        <div className="space-y-2.5 max-h-[640px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent pr-1">
          {filtered.map((item, idx) => {
            const tc = typeConfig[item.type] ?? typeConfig.document;
            const TypeIcon = tc.icon;
            const isSelected = selected === item.id;

            return (
              <button
                key={item.id}
                onClick={() => { setSelected(item.id); onSelect?.(item.id); }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                  isSelected
                    ? 'border-deep-blue-400 bg-gradient-to-r from-deep-blue-50/80 to-transparent shadow-md'
                    : item.tampered
                    ? 'border-rose-200 bg-rose-50/50 hover:border-rose-300 hover:bg-rose-50'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${tc.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                      <TypeIcon size={18} className={tc.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-deep-blue-700">{item.label}</span>
                        {item.tampered && (
                          <AlertTriangle size={12} className="text-rose-500 shrink-0" />
                        )}
                        {item.aiStatus === 'complete' && !item.tampered && (
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        )}
                        {item.aiStatus === 'processing' && (
                          <Cpu size={12} className="text-amber-500 animate-pulse shrink-0" />
                        )}
                        {item.status === 'blockchain-sealed' && !item.tampered && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-cyan-100 text-cyan-700">Blockchain Sealed</span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-slate-700 truncate">{item.filename}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1">
                          <HardDrive size={10} className="text-slate-400" />
                          <span className="text-xs text-slate-500">{item.size}</span>
                        </div>
                        {item.hash && (
                          <div className="flex items-center gap-1">
                            <Fingerprint size={10} className="text-slate-400" />
                            <span className="font-mono text-xs text-slate-500 truncate max-w-[80px]">{item.hash}…</span>
                          </div>
                        )}
                        {item.confidence !== null && (
                          <div className="flex items-center gap-1 ml-auto">
                            <span className="text-xs font-bold text-emerald-600">{item.confidence}%</span>
                            <span className="text-[10px] text-slate-400">match</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Detections row */}
                  {item.detections && (
                    <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                      {item.detections.faces > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          {item.detections.faces} face{item.detections.faces > 1 ? 's' : ''}
                        </span>
                      )}
                      {item.detections.plates > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {item.detections.plates} plate
                        </span>
                      )}
                      {item.detections.weapons > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                          {item.detections.weapons} weapon
                        </span>
                      )}
                      {item.detections.objects > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {item.detections.objects} obj
                        </span>
                      )}
                      {item.detections.faces === 0 && item.detections.plates === 0 && item.detections.weapons === 0 && item.detections.objects === 0 && (
                        <span className="text-xs text-slate-400">No detections</span>
                      )}
                    </div>
                  )}

                  {item.tampered && (
                    <div className="mt-3 pt-3 border-t border-rose-200 flex items-center gap-1.5">
                      <AlertTriangle size={12} className="text-rose-500" />
                      <span className="text-xs font-bold text-rose-600">HASH MISMATCH — INTEGRITY VIOLATION</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
