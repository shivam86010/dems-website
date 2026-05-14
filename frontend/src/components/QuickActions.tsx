import { Plus, Upload, Search, FileText, Users, MapPin, Bell, Send, Shield, AlertCircle } from 'lucide-react';

const actions = [
  { label: 'New FIR', icon: Plus, color: 'from-deep-blue-500 to-deep-blue-600', bg: 'bg-deep-blue-50', text: 'text-deep-blue-600' },
  { label: 'Upload Evidence', icon: Upload, color: 'from-cyan-500 to-cyan-600', bg: 'bg-cyan-50', text: 'text-cyan-600' },
  { label: 'Search Database', icon: Search, color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', text: 'text-violet-600' },
  { label: 'Generate Report', icon: FileText, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { label: 'Patrol Dispatch', icon: MapPin, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-600' },
  { label: 'Emergency Alert', icon: AlertCircle, color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-600' },
];

export default function QuickActions() {
  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-slate-100">
            <Send size={14} className="text-slate-600" />
          </div>
          <h3 className="text-sm font-semibold text-slate-800">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <button key={idx} className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5">
                <div className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center transition-all group-hover:scale-110`}>
                  <Icon size={18} className={action.text} />
                </div>
                <span className="text-[10px] font-medium text-slate-600 text-center">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}