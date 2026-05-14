import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { week: '25 Mar', firs: 31, resolved: 18, critical: 7 },
  { week: '01 Apr', firs: 44, resolved: 22, critical: 11 },
  { week: '08 Apr', firs: 38, resolved: 29, critical: 8 },
  { week: '15 Apr', firs: 52, resolved: 31, critical: 14 },
  { week: '22 Apr', firs: 41, resolved: 27, critical: 9 },
  { week: '29 Apr', firs: 63, resolved: 35, critical: 18 },
  { week: '06 May', firs: 57, resolved: 41, critical: 12 },
  { week: '14 May', firs: 71, resolved: 38, critical: 21 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-xl">
      <p className="text-xs font-semibold text-white mb-2">{label}</p>
      {payload.map((p: any) => (
        <div key={`tt-${p.dataKey}`} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-[10px] text-slate-400 capitalize">{p.dataKey === 'firs' ? 'FIRs Filed' : p.dataKey === 'resolved' ? 'Resolved' : 'Critical'}:</span>
          <span className="text-xs font-semibold text-white">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function CaseTrendsChartInner() {
  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-cyan-100">
                <TrendingUp size={14} className="text-cyan-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800">Case Trends</h3>
            </div>
            <p className="text-[11px] text-slate-500">Weekly case filings and resolution rates</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="text-[9px] text-slate-500">FIRs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[9px] text-slate-500">Resolved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[9px] text-slate-500">Critical</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="grad-firs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-resolved" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="grad-critical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#F43F5E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis 
              dataKey="week" 
              tick={{ fill: '#64748B', fontSize: 10 }} 
              axisLine={false} 
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#64748B', fontSize: 10 }} 
              axisLine={false} 
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="firs" 
              stroke="#06B6D4" 
              strokeWidth={2.5} 
              fill="url(#grad-firs)" 
              name="firs"
            />
            <Area 
              type="monotone" 
              dataKey="resolved" 
              stroke="#10B981" 
              strokeWidth={2.5} 
              fill="url(#grad-resolved)" 
              name="resolved"
            />
            <Area 
              type="monotone" 
              dataKey="critical" 
              stroke="#F43F5E" 
              strokeWidth={2.5} 
              fill="url(#grad-critical)" 
              name="critical"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}