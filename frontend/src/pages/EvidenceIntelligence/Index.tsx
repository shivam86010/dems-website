// import CaseTrendsChartInner from '../../components/CaseTrendsChartInner'
// import CaseStatusChart from '../../components/CaseStatusChartInner'
// // import FieldMapPage from './FieldMapPage'

// // const Index = () => {
// //   return (
// //     <>
// //      <div className='flex'>
// //       <CaseTrendsChartInner/>
// //       <CaseStatusChart/>
// //     </div>

// //     <FieldMapPage />
// //     </>
   

    
    
// //   )
// // }

// // export default Index



// import FieldMapPage from './FieldMapPage';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       <div className="max-w-[1600px] mx-auto p-5 md:p-6 space-y-6">
//         {/* Charts Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <CaseTrendsChartInner />
//           <CaseStatusChart />
//         </div>
        
//         {/* Map Section */}
//         <FieldMapPage />
//       </div>
//     </div>
//   );
// };

// export default Index;



import CaseTrendsChartInner from '../../components/CaseTrendsChartInner'
import CaseStatusChart from '../../components/CaseStatusChartInner'
import FieldMapPage from './FieldMapPage';
import PoliceDashboardStats from '../../components/PoliceDashboardStats';
import QuickActions from '../../components/QuickActions';
import RecentFIRTable from '../../components/RecentFIRTable';
import AlertsNotifications from '../../components/AlertsNotifications';
import WantedSuspectsCard from '../../components/WantedSuspectsCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-[1600px] mx-auto p-5 md:p-6 space-y-6">
        {/* Header Section with Stats */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Police Command Dashboard</h1>
              <p className="text-sm text-slate-500 mt-0.5">Real-time intelligence & case management system</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-emerald-700">Connected to Blockchain</span>
              </div>
            </div>
          </div>
          <PoliceDashboardStats />
        </div>

        {/* Quick Actions Row */}
        <QuickActions />

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CaseTrendsChartInner />
          </div>
          <div>
            <CaseStatusChart />
          </div>
        </div>

        {/* Alerts and Wanted Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AlertsNotifications />
          <WantedSuspectsCard />
        </div>

        {/* Recent FIRs Table */}
        <RecentFIRTable />

        {/* Map Section */}
        <FieldMapPage />
      </div>
    </div>
  );
};

export default Index;