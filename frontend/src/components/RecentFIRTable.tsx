import { useState } from 'react';
import { FileText, Eye, AlertTriangle, CheckCircle, Clock, MoreVertical, User, MapPin, Calendar, Shield, ChevronDown } from 'lucide-react';

const recentFIRs = [
  { id: 'FIR-2026-0421', date: '14 May 2026', time: '09:23 IST', type: 'Theft', location: 'Connaught Place, New Delhi', complainant: 'Rajesh Sharma', officer: 'Insp. Priya Singh', status: 'investigating', priority: 'high', evidence: 4, suspect: 'Unknown' },
  { id: 'FIR-2026-0418', date: '13 May 2026', time: '22:47 IST', type: 'Robbery', location: 'Rohini Sector 3, Delhi', complainant: 'Neha Gupta', officer: 'SI Amit Kumar', status: 'evidence', priority: 'critical', evidence: 12, suspect: 'Arvind Mehta' },
  { id: 'FIR-2026-0415', date: '12 May 2026', time: '14:12 IST', type: 'Cyber Crime', location: 'Noida Sector 62', complainant: 'Tech Solutions Ltd', officer: 'Insp. Rajiv Malhotra', status: 'investigating', priority: 'high', evidence: 8, suspect: 'Unknown' },
  { id: 'FIR-2026-0412', date: '11 May 2026', time: '18:35 IST', type: 'Assault', location: 'Dwarka Sector 12', complainant: 'Mohan Lal', officer: 'SI Sunita Verma', status: 'court', priority: 'medium', evidence: 6, suspect: 'Ravi Kumar' },
  { id: 'FIR-2026-0409', date: '10 May 2026', time: '07:15 IST', type: 'Vehicle Theft', location: 'Paharganj', complainant: 'Amit Kapoor', officer: 'Insp. Vikram Singh', status: 'closed', priority: 'low', evidence: 3, suspect: 'Arrested' },
  { id: 'FIR-2026-0405', date: '09 May 2026', time: '21:30 IST', type: 'Narcotics', location: 'Lajpat Nagar', complainant: 'DEB Team', officer: 'SI Rajesh Kumar', status: 'chargesheet', priority: 'critical', evidence: 24, suspect: '3 Arrested' },
];

const statusConfig = {
  investigating: { label: 'Investigating', color: 'bg-blue-500', text: 'text-blue-700', bg: 'bg-blue-50', icon: Clock },
  evidence: { label: 'Evidence Collection', color: 'bg-violet-500', text: 'text-violet-700', bg: 'bg-violet-50', icon: Shield },
  court: { label: 'Court Proceedings', color: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50', icon: FileText },
  chargesheet: { label: 'Charge Sheet Filed', color: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50', icon: CheckCircle },
  closed: { label: 'Closed', color: 'bg-slate-500', text: 'text-slate-600', bg: 'bg-slate-50', icon: CheckCircle },
};

const priorityConfig = {
  critical: { label: 'CRITICAL', color: 'bg-rose-500', text: 'text-rose-700', bg: 'bg-rose-50' },
  high: { label: 'HIGH', color: 'bg-orange-500', text: 'text-orange-700', bg: 'bg-orange-50' },
  medium: { label: 'MEDIUM', color: 'bg-amber-500', text: 'text-amber-700', bg: 'bg-amber-50' },
  low: { label: 'LOW', color: 'bg-slate-500', text: 'text-slate-600', bg: 'bg-slate-50' },
};

export default function RecentFIRTable() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = recentFIRs.filter(fir => {
    const matchSearch = fir.id.toLowerCase().includes(search.toLowerCase()) ||
                        fir.complainant.toLowerCase().includes(search.toLowerCase()) ||
                        fir.location.toLowerCase().includes(search.toLowerCase());
    if (filterStatus === 'all') return matchSearch;
    return matchSearch && fir.status === filterStatus;
  });

  const getPriorityBadge = (priority: string) => {
    const p = priorityConfig[priority as keyof typeof priorityConfig];
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${p.bg} ${p.text}`}>
        <div className={`w-1.5 h-1.5 rounded-full ${p.color} ${priority === 'critical' ? 'animate-pulse' : ''}`} />
        {p.label}
      </span>
    );
  };

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-deep-blue-100">
                <FileText size={14} className="text-deep-blue-600" />
              </div>
              <h2 className="text-base font-semibold text-slate-800">Recent FIRs</h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {filtered.length} active
              </span>
            </div>
            <p className="text-xs text-slate-500">Real-time case tracking and investigation status</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search FIR ID, complainant..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:border-deep-blue-300 focus:ring-2 focus:ring-deep-blue-500/20 transition-all outline-none w-48 md:w-56"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Status Filter */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-3 pr-7 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:border-deep-blue-300 focus:ring-2 focus:ring-deep-blue-500/20 transition-all outline-none appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="investigating">Investigating</option>
                <option value="evidence">Evidence</option>
                <option value="court">Court</option>
                <option value="chargesheet">Charge Sheet</option>
                <option value="closed">Closed</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">FIR ID</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Date & Time</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Type / Location</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Complainant / Officer</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Status / Priority</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Evidence</th>
                <th className="text-left py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Suspect</th>
                <th className="text-center py-3 px-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((fir, idx) => {
                const StatusIcon = statusConfig[fir.status as keyof typeof statusConfig]?.icon || Clock;
                return (
                  <tr key={fir.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors group">
                    <td className="py-3 px-2">
                      <span className="font-mono text-xs font-bold text-deep-blue-700">{fir.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-700">{fir.date}</span>
                        <span className="text-[10px] text-slate-400">{fir.time}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-800">{fir.type}</span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <MapPin size={9} className="text-slate-400" />
                          <span className="text-[10px] text-slate-500 truncate max-w-[150px]">{fir.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <User size={9} className="text-slate-400" />
                          <span className="text-xs text-slate-700">{fir.complainant}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-0.5">{fir.officer}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <StatusIcon size={10} className={statusConfig[fir.status as keyof typeof statusConfig]?.text || 'text-slate-500'} />
                          <span className={`text-[10px] font-semibold ${statusConfig[fir.status as keyof typeof statusConfig]?.text || 'text-slate-600'}`}>
                            {statusConfig[fir.status as keyof typeof statusConfig]?.label || fir.status}
                          </span>
                        </div>
                        {getPriorityBadge(fir.priority)}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        <Shield size={10} className="text-violet-500" />
                        <span className="text-xs font-bold text-violet-700">{fir.evidence}</span>
                        <span className="text-[10px] text-slate-400">items</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs font-medium ${
                        fir.suspect === 'Arvind Mehta' ? 'text-rose-600' :
                        fir.suspect === 'Unknown' ? 'text-amber-600' : 'text-slate-600'
                      }`}>
                        {fir.suspect}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-deep-blue-600 transition-all">
                        <Eye size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[10px] text-slate-500">Critical: 2 cases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-500">Resolved this week: 8</span>
            </div>
          </div>
          <button className="text-xs text-deep-blue-600 hover:text-deep-blue-700 font-medium flex items-center gap-1">
            View All Cases
            <ChevronDown size={12} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}