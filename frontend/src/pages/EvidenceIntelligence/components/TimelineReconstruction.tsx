import { useState } from 'react';
import { Clock, MapPin, Video, FileText, Calendar, Target, Navigation } from 'lucide-react';

const timelineEvents = [
  {
    id: 'evt-001',
    time: '20:27 IST',
    date: '05 May 2026',
    type: 'cctv',
    icon: Video,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    title: 'Suspect vehicle detected — Entry point',
    detail: 'DL 3C AB 7823 (white Swift) enters Rohini Sector 3 via Gate A',
    source: 'CCTV Cam 01 · EVD-4442',
    confidence: 91,
    location: 'Gate A, Rohini Sector 3',
  },
  {
    id: 'evt-002',
    time: '20:31 IST',
    date: '05 May 2026',
    type: 'cctv',
    icon: Video,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    title: 'Suspect Arvind Mehta identified',
    detail: 'Face matched at 94% confidence. Suspect enters building compound.',
    source: 'CCTV Cam 04 · EVD-4441',
    confidence: 94,
    location: 'Gate B, Rohini Sector 3',
  },
];

export default function TimelineReconstruction() {
  const [expanded, setExpanded] = useState<string | null>('evt-002');

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/5 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-glow">
                <Clock size={14} className="text-white" />
              </div>
              <h2 className="text-base font-semibold text-navy-900">Event Timeline Reconstruction</h2>
            </div>
            <p className="text-xs text-slate-500">
              Auto-generated from CCTV, witness statements, GPS & call records
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-700 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <Calendar size={10} />
            {timelineEvents?.length} events · 05 May 2026
          </span>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-amber-400 to-slate-300" />

          <div className="space-y-2">
            {timelineEvents?.map((evt, idx) => {
              const Icon = evt?.icon;
              const isExpanded = expanded === evt?.id;
              const isLast = idx === timelineEvents?.length - 1;

              return (
                <div key={evt?.id} className="relative pl-14">
                  {/* Timeline node */}
                  <div className="absolute left-0 w-[55px] flex justify-center" style={{ top: '12px' }}>
                    <div className={`w-9 h-9 rounded-full ${evt?.bg} border-2 ${evt?.border} flex items-center justify-center z-10 relative shadow-sm`}>
                      <Icon size={14} className={evt?.color} />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setExpanded(isExpanded ? null : evt?.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 mb-1.5 ${
                      isExpanded 
                        ? `${evt?.border} bg-gradient-to-r ${evt?.bg} to-white shadow-md` 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-slate-700">{evt?.time}</span>
                        <span className="text-[10px] text-slate-400">{evt?.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Target size={10} className="text-slate-400" />
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          evt?.confidence >= 90 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : evt?.confidence >= 75 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-rose-100 text-rose-700'
                        }`}>
                          {evt?.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    
                    <p className={`text-sm font-semibold ${evt?.type === 'object' ? 'text-rose-600' : 'text-slate-800'}`}>
                      {evt?.title}
                    </p>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 animate-fade-in">
                        <p className="text-sm text-slate-600 leading-relaxed">{evt?.detail}</p>
                        <div className="flex items-center gap-3 pt-1">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-slate-400" />
                            <span className="text-xs text-slate-500">{evt?.location}</span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-slate-300" />
                          <div className="flex items-center gap-1.5">
                            <FileText size={12} className="text-deep-blue-400" />
                            <span className="font-mono text-xs text-slate-500">{evt?.source}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span className="text-[10px] font-medium text-cyan-600">AI CORRELATED EVENT</span>
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
          <Navigation size={12} className="text-slate-400" />
          <span className="text-[11px] text-slate-500">Timeline automatically synchronized from multiple data sources</span>
        </div>
      </div>
    </div>
  );
}