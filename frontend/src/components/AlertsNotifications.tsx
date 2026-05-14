// components/AlertsNotifications.tsx
import { useState } from 'react';
import { Bell, AlertTriangle, Info, CheckCircle, X, ChevronRight, Zap, Radio } from 'lucide-react';

const alerts = [
  { id: 1, type: 'critical', title: 'High-priority suspect spotted', message: 'Arvind Mehta last seen near Rohini Metro Station', time: '2 min ago', icon: AlertTriangle, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 2, type: 'warning', title: 'Evidence chain verification', message: 'New blockchain transaction added for case EVD-4441', time: '15 min ago', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 3, type: 'info', title: 'AI analysis complete', message: 'Facial recognition results ready for 3 evidence items', time: '1 hour ago', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 4, type: 'info', title: 'Patrol report submitted', message: 'Zone 4 night patrol report available', time: '3 hours ago', icon: Radio, color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

export default function AlertsNotifications() {
  const [showAll, setShowAll] = useState(false);
  const displayedAlerts = showAll ? alerts : alerts.slice(0, 3);

  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
      
      <div className="relative p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-rose-100">
              <Bell size={14} className="text-rose-600" />
            </div>
            <h3 className="text-sm font-semibold text-slate-800">Live Alerts</h3>
            <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded-full">{alerts.length}</span>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="text-[10px] text-deep-blue-600 hover:text-deep-blue-700 font-medium flex items-center gap-1"
          >
            {showAll ? 'Show Less' : 'View All'}
            <ChevronRight size={10} />
          </button>
        </div>
        
        <div className="space-y-2">
          {displayedAlerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div key={alert.id} className={`p-3 rounded-xl border ${alert.type === 'critical' ? 'border-rose-200 bg-rose-50/30' : 'border-slate-100 bg-slate-50/30'} hover:shadow-md transition-all group`}>
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg ${alert.bg} shrink-0`}>
                    <Icon size={12} className={alert.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-xs font-semibold text-slate-800">{alert.title}</p>
                      <span className="text-[9px] text-slate-400">{alert.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{alert.message}</p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-600">
                    <X size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-slate-500">System online</span>
          </div>
          <span className="text-[9px] text-slate-400">Last sync: 07:22 IST</span>
        </div>
      </div>
    </div>
  );
}