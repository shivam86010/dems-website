// components/WantedSuspectsCard.tsx
import { UserX, MapPin, Target, Award, Calendar } from 'lucide-react';

const wantedSuspects = [
  { name: 'Arvind Mehta', crime: 'Murder', location: 'Rohini Sector 3', reward: '₹2,00,000', lastSeen: '07:19 IST', confidence: 94, status: 'critical' },
  { name: 'Unknown (DL 3C AB 7823)', crime: 'Robbery / Evasion', location: 'Connaught Place', reward: '₹1,00,000', lastSeen: '07:11 IST', confidence: 88, status: 'high' },
  { name: 'Ravi Kumar (alias)', crime: 'Narcotics', location: 'Paharganj', reward: '₹75,000', lastSeen: '06:45 IST', confidence: 72, status: 'medium' },
];

export default function WantedSuspectsCard() {
  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-rose-100">
            <UserX size={14} className="text-rose-600" />
          </div>
          <h3 className="text-sm font-semibold text-slate-800">Most Wanted</h3>
          <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded-full">Active Bounties</span>
        </div>
        
        <div className="space-y-3">
          {wantedSuspects.map((suspect, idx) => (
            <div key={idx} className={`p-3 rounded-xl border ${suspect.status === 'critical' ? 'border-rose-200 bg-rose-50/50' : 'border-slate-200 bg-white'} hover:shadow-md transition-all`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-slate-800">{suspect.name}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{suspect.crime}</p>
                </div>
                {suspect.status === 'critical' && (
                  <div className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[8px] font-bold uppercase">Critical</div>
                )}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin size={10} className="text-slate-400" />
                  <span className="text-[10px] text-slate-600">{suspect.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={10} className="text-slate-400" />
                  <span className="text-[10px] text-slate-600">Last: {suspect.lastSeen}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <Award size={10} className="text-amber-500" />
                  <span className="text-[10px] font-bold text-amber-600">{suspect.reward}</span>
                  <span className="text-[9px] text-slate-400">reward</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target size={10} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-600">{suspect.confidence}%</span>
                  <span className="text-[9px] text-slate-400">match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-3 w-full py-2 text-center text-[11px] font-semibold text-deep-blue-600 hover:text-deep-blue-700 bg-slate-50 rounded-xl transition-all">
          View All Wanted Persons →
        </button>
      </div>
    </div>
  );
}