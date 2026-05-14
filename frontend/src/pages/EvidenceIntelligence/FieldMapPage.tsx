import { useState } from 'react';
import { Map, AlertCircle, Users, Navigation, Layers, ZoomIn, ZoomOut, Crosshair, Target, Clock, Shield, Radio, TrendingUp, Activity } from 'lucide-react';

const suspects = [
  { id: 'sus-001', name: 'Arvind Mehta', caseId: 'NXF-2024-1891', status: 'wanted', lastSeen: '07:19 IST', location: 'Rohini Sector 3', confidence: 94, type: 'face-match' },
  { id: 'sus-002', name: 'Unknown — DL 3C AB 7823', caseId: 'NXF-2024-2103', status: 'vehicle-spotted', lastSeen: '07:11 IST', location: 'Connaught Place', confidence: 88, type: 'plate-match' },
  { id: 'sus-003', name: 'Ravi Kumar (alias)', caseId: 'NXF-2024-1998', status: 'under-watch', lastSeen: '06:45 IST', location: 'Paharganj', confidence: 72, type: 'informant' },
  { id: 'sus-004', name: 'Cluster — 3 suspects', caseId: 'NXF-2024-2089', status: 'linked', lastSeen: '06:18 IST', location: 'Dwarka Sector 12', confidence: 79, type: 'face-cluster' },
  { id: 'sus-005', name: 'Pradeep Singh', caseId: 'NXF-2024-1774', status: 'under-watch', lastSeen: '05:30 IST', location: 'Noida Sector 18', confidence: 65, type: 'digital-trace' },
];

const incidents = [
  { id: 'inc-001', type: 'robbery', location: 'Connaught Place', time: '12 May 2026', severity: 'critical' },
  { id: 'inc-002', type: 'theft', location: 'Dwarka Sector 12', time: '10 May 2026', severity: 'high' },
  { id: 'inc-003', type: 'fraud', location: 'Lajpat Nagar', time: '01 May 2026', severity: 'high' },
  { id: 'inc-004', type: 'narcotics', location: 'Paharganj', time: '18 Apr 2026', severity: 'critical' },
  { id: 'inc-005', type: 'murder', location: 'Rohini Sector 3', time: '05 Apr 2026', severity: 'critical' },
  { id: 'inc-006', type: 'cybercrime', location: 'Noida IT Park', time: '22 Mar 2026', severity: 'medium' },
];

const statusColors: Record<string, string> = {
  wanted: 'bg-rose-500',
  'vehicle-spotted': 'bg-amber-500',
  'under-watch': 'bg-blue-500',
  linked: 'bg-violet-500',
};

const statusLabels: Record<string, string> = {
  wanted: 'WANTED',
  'vehicle-spotted': 'Vehicle Spotted',
  'under-watch': 'Under Watch',
  linked: 'Linked',
};

const suspectPositions: Record<string, { x: number; y: number }> = {
  'sus-001': { x: 38, y: 22 },
  'sus-002': { x: 52, y: 48 },
  'sus-003': { x: 50, y: 44 },
  'sus-004': { x: 22, y: 65 },
  'sus-005': { x: 82, y: 72 },
};

const incidentPositions: Record<string, { x: number; y: number }> = {
  'inc-001': { x: 52, y: 48 },
  'inc-002': { x: 22, y: 65 },
  'inc-003': { x: 55, y: 62 },
  'inc-004': { x: 50, y: 44 },
  'inc-005': { x: 38, y: 22 },
  'inc-006': { x: 82, y: 72 },
};

export default function FieldMapPage() {
  const [selectedSuspect, setSelectedSuspect] = useState<typeof suspects[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'suspects' | 'incidents'>('all');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-deep-blue-600 via-navy-700 to-navy-800 shadow-premium">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231E3A8A" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" /> */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative p-6 md:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-glow">
                  <Map size={18} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">Field Intelligence Map</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1.5 text-xs text-white/70">
                      <Radio size={10} className="text-cyan-400 animate-pulse" />
                      Live tracking
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-xs text-white/70">Last updated: 07:22 IST</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/60">Live suspect locations · Active incidents · Patrol zones</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                {(['all', 'suspects', 'incidents'] as const).map((f) => (
                  <button 
                    key={f} 
                    onClick={() => setFilter(f)} 
                    className={`text-xs px-4 py-1.5 rounded-lg font-semibold capitalize transition-all ${
                      filter === f 
                        ? 'bg-white/20 text-white shadow-sm' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {f === 'all' ? 'All Layers' : f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Map Container */}
        <div className="xl:col-span-3 relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
          {/* Map Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Target size={12} className="text-rose-500" />
                <span className="text-[10px] font-semibold text-rose-600 uppercase">Wanted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[10px] font-semibold text-slate-600 uppercase">Vehicle Spotted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-semibold text-slate-600 uppercase">Under Watch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-[10px] font-semibold text-slate-600 uppercase">Linked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 transform rotate-45 bg-rose-500" />
                <span className="text-[10px] font-semibold text-slate-600 uppercase">Critical Incident</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all">
                <ZoomIn size={14} />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all">
                <ZoomOut size={14} />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all">
                <Layers size={14} />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all">
                <Crosshair size={14} />
              </button>
            </div>
          </div>

          {/* Map Area */}
          <div className="relative w-full bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 overflow-hidden" style={{ height: '480px' }}>
            {/* Grid overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22D3EE" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
            </svg>
            
            {/* Road networks */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <line x1="0%" y1="48%" x2="100%" y2="48%" stroke="#475569" strokeWidth="2.5" strokeDasharray="8 4" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#475569" strokeWidth="2.5" strokeDasharray="8 4" />
              <line x1="0%" y1="65%" x2="100%" y2="65%" stroke="#334155" strokeWidth="2" />
              <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="#334155" strokeWidth="2" />
              <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="#334155" strokeWidth="2" />
              <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="#334155" strokeWidth="1.5" />
              <line x1="15%" y1="0%" x2="85%" y2="100%" stroke="#1E293B" strokeWidth="1.5" />
              <line x1="85%" y1="0%" x2="15%" y2="100%" stroke="#1E293B" strokeWidth="1.5" />
            </svg>

            {/* Heat zones */}
            <div className="absolute rounded-full bg-rose-500/20 blur-3xl" style={{ width: '140px', height: '140px', left: '46%', top: '38%', transform: 'translate(-50%,-50%)' }} />
            <div className="absolute rounded-full bg-amber-500/15 blur-3xl" style={{ width: '120px', height: '120px', left: '18%', top: '60%', transform: 'translate(-50%,-50%)' }} />
            <div className="absolute rounded-full bg-rose-500/15 blur-2xl" style={{ width: '100px', height: '100px', left: '36%', top: '18%', transform: 'translate(-50%,-50%)' }} />
            <div className="absolute rounded-full bg-violet-500/10 blur-2xl" style={{ width: '110px', height: '110px', left: '76%', top: '68%', transform: 'translate(-50%,-50%)' }} />

            {/* Location labels */}
            <div className="absolute top-[16%] left-[34%] text-[10px] text-cyan-400/60 font-mono font-semibold tracking-wider pointer-events-none">ROHINI SECTOR 3</div>
            <div className="absolute top-[42%] left-[47%] text-[10px] text-white/40 font-mono pointer-events-none">CENTRAL DELHI</div>
            <div className="absolute top-[58%] left-[14%] text-[10px] text-white/40 font-mono pointer-events-none">DWARKA</div>
            <div className="absolute top-[66%] left-[78%] text-[10px] text-white/40 font-mono pointer-events-none">NOIDA</div>
            <div className="absolute top-[78%] left-[48%] text-[10px] text-white/40 font-mono pointer-events-none">GURUGRAM</div>
            <div className="absolute top-[28%] left-[62%] text-[10px] text-white/30 font-mono pointer-events-none">LAJPAT NAGAR</div>

            {/* Incidents */}
            {(filter === 'all' || filter === 'incidents') && incidents.map((inc) => {
              const pos = incidentPositions[inc.id];
              const severityColor = inc.severity === 'critical' ? 'bg-rose-500 border-rose-400' : inc.severity === 'high' ? 'bg-amber-500 border-amber-400' : 'bg-blue-500 border-blue-400';
              return (
                <div key={inc.id} className="absolute group" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)' }}>
                  <div className={`w-3.5 h-3.5 rounded-sm rotate-45 border-2 ${severityColor} shadow-lg transition-transform group-hover:scale-150`} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20 pointer-events-none">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 shadow-xl whitespace-nowrap">
                      <p className="text-xs font-semibold text-white capitalize">{inc.type}</p>
                      <p className="text-[10px] text-slate-400">{inc.location}</p>
                      <p className="text-[10px] text-rose-400 font-mono">{inc.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Suspects */}
            {(filter === 'all' || filter === 'suspects') && suspects.map((s) => {
              const pos = suspectPositions[s.id];
              const isSelected = selectedSuspect?.id === s.id;
              return (
                <div key={s.id} className="absolute cursor-pointer group" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)' }} onClick={() => setSelectedSuspect(isSelected ? null : s)}>
                  {s.status === 'wanted' && (
                    <div className="absolute inset-0 rounded-full bg-rose-500/40 animate-ping" style={{ width: '28px', height: '28px', margin: '-6px' }} />
                  )}
                  <div className={`relative w-5 h-5 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${isSelected ? 'scale-150 ring-2 ring-white/50' : 'group-hover:scale-125'} ${statusColors[s.status]}`}>
                    {s.status === 'wanted' && (
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
                    )}
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20 pointer-events-none">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 shadow-xl min-w-[160px]">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-white">{s.name}</p>
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${
                          s.status === 'wanted' ? 'bg-rose-500/20 text-rose-400' :
                          s.status === 'vehicle-spotted' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {statusLabels[s.status]}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400">{s.location}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="font-mono text-[9px] text-cyan-400">{s.caseId}</span>
                        <span className="text-[9px] font-bold text-emerald-400">{s.confidence}% match</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Selected suspect detail panel */}
            {selectedSuspect && (
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-gradient-to-r from-slate-900 to-navy-900 border border-cyan-500/30 rounded-xl p-4 shadow-glow animate-fade-in">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${statusColors[selectedSuspect.status]}`} />
                    <span className={`text-[10px] font-bold ${
                      selectedSuspect.status === 'wanted' ? 'text-rose-400' :
                      selectedSuspect.status === 'vehicle-spotted' ? 'text-amber-400' : 'text-blue-400'
                    }`}>
                      {statusLabels[selectedSuspect.status]}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedSuspect(null)} 
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm font-bold text-white">{selectedSuspect.name}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5">
                    <Map size={10} className="text-slate-500" />
                    <span className="text-xs text-slate-300">{selectedSuspect.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={10} className="text-slate-500" />
                    <span className="text-xs text-slate-300">Last seen: {selectedSuspect.lastSeen}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-800">
                  <span className="font-mono text-[10px] text-cyan-400">{selectedSuspect.caseId}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Target size={10} className="text-emerald-400" />
                    </div>
                    <span className="text-xs font-bold text-emerald-400">{selectedSuspect.confidence}% confidence</span>
                  </div>
                </div>
              </div>
            )}

            {/* Compass */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center">
              <Navigation size={14} className="text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="xl:col-span-1 space-y-5">
          {/* Active Suspects */}
          <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
            <div className="relative p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-violet-100">
                    <Users size={14} className="text-violet-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">Active Suspects</h3>
                </div>
                <span className="text-[10px] font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">{suspects.length}</span>
              </div>
              <div className="space-y-2">
                {suspects.map((s) => (
                  <div 
                    key={s.id} 
                    onClick={() => setSelectedSuspect(selectedSuspect?.id === s.id ? null : s)} 
                    className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedSuspect?.id === s.id 
                        ? 'border-cyan-400 bg-gradient-to-r from-cyan-50 to-transparent shadow-md' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${statusColors[s.status]}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <p className="text-sm font-semibold text-slate-800 truncate">{s.name}</p>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            s.confidence >= 90 ? 'bg-emerald-100 text-emerald-700' :
                            s.confidence >= 75 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {s.confidence}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{s.location}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="font-mono text-[10px] text-cyan-600">{s.caseId}</span>
                          <div className="flex items-center gap-1">
                            <Clock size={8} className="text-slate-400" />
                            <span className="text-[10px] text-slate-400">{s.lastSeen}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
            <div className="relative p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-rose-100">
                  <AlertCircle size={14} className="text-rose-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800">Critical Incidents</h3>
              </div>
              <div className="space-y-2">
                {incidents.slice(0, 5).map((inc) => (
                  <div key={inc.id} className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${
                      inc.severity === 'critical' ? 'bg-rose-500 animate-pulse' : 
                      inc.severity === 'high' ? 'bg-amber-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-700 capitalize truncate">{inc.type}</p>
                        <span className="text-[9px] text-slate-400">{inc.time.split(' ')[0]}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 truncate">{inc.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Total incidents this month</span>
                  <span className="font-bold text-slate-700">24</span>
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1">
                  <span className="text-slate-400">Critical cases</span>
                  <span className="font-bold text-rose-600">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}