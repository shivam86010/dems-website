import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { status: 'FIR Filed', count: 47, color: '#06B6D4' },
  { status: 'Investigating', count: 89, color: '#F59E0B' },
  { status: 'Evidence', count: 56, color: '#8B5CF6' },
  { status: 'Charge Sheet', count: 31, color: '#F97316' },
  { status: 'Court', count: 18, color: '#6366F1' },
  { status: 'Closed', count: 6, color: '#64748B' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-xl">
      <p className="text-xs font-semibold text-white">{payload[0].payload.status}</p>
      <p className="text-[10px] text-slate-400 mt-1">
        Cases: <span className="text-white font-bold">{payload[0].value}</span>
      </p>
    </div>
  );
};

export default function CaseStatusChartInner() {
  return (
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-premium overflow-hidden p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-violet-100">
            {/* <Activity size={14} className="text-violet-600" /> */}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Case Status Distribution</h3>
            <p className="text-[11px] text-slate-500">Current case pipeline by stage</p>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={true} vertical={false} />
            <XAxis 
              dataKey="status" 
              tick={{ fill: '#64748B', fontSize: 10 }} 
              axisLine={false} 
              tickLine={false}
              angle={-15}
              textAnchor="end"
              height={50}
            />
            <YAxis 
              tick={{ fill: '#64748B', fontSize: 10 }} 
              axisLine={false} 
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F1F5F9' }} />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        {/* Legend grid */}
        <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-100">
          {data.map((d) => (
            <div key={`legend-${d.status}`} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                <span className="text-[10px] text-slate-600">{d.status}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-800 tabular-nums">{d.count}</span>
            </div>
          ))}
        </div>
        
        {/* Summary stats */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400">Total Active Cases</p>
            <p className="text-xl font-bold text-slate-800">247</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400">Resolution Rate</p>
            <p className="text-xl font-bold text-emerald-600">32.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
}