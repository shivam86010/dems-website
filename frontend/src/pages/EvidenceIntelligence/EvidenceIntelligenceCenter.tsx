// import EvidenceHeader from './components/EvidenceHeader'
// import EvidenceGrid from './components/EvidenceGrid';
// import EvidenceAnalysisPanel from './components/EvidenceAnalysisPanel';
// import BlockchainAuditLog from './components/BlockchainAuditLog';
// import TimelineReconstruction from './components/TimelineReconstruction';

// export default function EvidenceIntelligenceCenter() {
//   return (
//       <div className="space-y-6">
//         <EvidenceHeader />
//         <div className="grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-5 gap-5">
//           {/* Evidence Grid — left 2 cols */}
//           <div className="xl:col-span-2 2xl:col-span-2">
//             <EvidenceGrid />
//           </div>
//           {/* Analysis Panel — right 3 cols */}
//           <div className="xl:col-span-3 2xl:col-span-3 space-y-5">
//             <EvidenceAnalysisPanel />
//             <TimelineReconstruction />
//           </div>
//         </div>
//         {/* Blockchain Audit Log — full width */}
//         <BlockchainAuditLog />
//       </div>
//   );
// }


// EvidenceIntelligenceCenter.tsx
import EvidenceHeader from './components/EvidenceHeader';
import EvidenceGrid from './components/EvidenceGrid';
import EvidenceAnalysisPanel from './components/EvidenceAnalysisPanel';
import BlockchainAuditLog from './components/BlockchainAuditLog';
import TimelineReconstruction from './components/TimelineReconstruction';

export default function EvidenceIntelligenceCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-[1600px] mx-auto p-5 md:p-6 space-y-6">
        <EvidenceHeader />
        
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Evidence Grid — left */}
          <div className="xl:col-span-2">
            <EvidenceGrid />
          </div>
          
          {/* Right column */}
          <div className="xl:col-span-3 space-y-6">
            <EvidenceAnalysisPanel />
            <TimelineReconstruction />
          </div>
        </div>
        
        <BlockchainAuditLog />
      </div>
    </div>
  );
}