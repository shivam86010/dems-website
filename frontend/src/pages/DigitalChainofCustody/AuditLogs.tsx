// // pages/AuditLogs.tsx
// import React, { useState } from 'react';
// import { 
//   Search, 
//   Filter, 
//   Download, 
//   User, 
//   FileText, 
//   Eye, 
//   Upload, 
//   Share2,
//   Download as DownloadIcon,
//   Edit,
//   Trash2,
//   Shield,
//   Activity,
//   Clock,
//   AlertCircle,
//   CheckCircle,
//   XCircle,
//   Mail,
//   Copy,
//   X
// } from 'lucide-react';

// interface AuditLog {
//   id: string;
//   user: string;
//   action: string;
//   resource: string;
//   resourceType: string;
//   timestamp: string;
//   ip: string;
//   status: string;
//   details: string;
// }

// const AuditLogs: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterAction, setFilterAction] = useState('all');
//   const [filterDate, setFilterDate] = useState('');
//   const [currentPage] = useState(1); // Set to 1 for this demo
//   const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [shareEmail, setShareEmail] = useState('');
//   const [notification, setNotification] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });

//   const auditLogs: AuditLog[] = [
//     { id: '1', user: 'John Doe', action: 'VIEW', resource: 'Financial_Statements_Q4.pdf', resourceType: 'evidence', timestamp: '2024-12-10T10:30:00', ip: '192.168.1.1', status: 'success', details: 'Viewed evidence file' },
//     { id: '2', user: 'Sarah Smith', action: 'UPLOAD', resource: 'Transaction_Logs.xlsx', resourceType: 'evidence', timestamp: '2024-12-10T09:15:00', ip: '192.168.1.2', status: 'success', details: 'Uploaded new evidence to case FR-2024-001' },
//     { id: '3', user: 'Michael Lee', action: 'DOWNLOAD', resource: 'CCTV_Footage_Entrance.mp4', resourceType: 'evidence', timestamp: '2024-12-09T16:45:00', ip: '192.168.1.3', status: 'success', details: 'Downloaded evidence for analysis' },
//     { id: '4', user: 'Anna Chen', action: 'UPDATE', resource: 'Case FR-2024-001', resourceType: 'case', timestamp: '2024-12-09T14:20:00', ip: '192.168.1.4', status: 'success', details: 'Updated case status to Under Review' },
//     { id: '5', user: 'John Doe', action: 'SHARE', resource: 'Financial_Statements_Q4.pdf', resourceType: 'evidence', timestamp: '2024-12-09T11:00:00', ip: '192.168.1.1', status: 'success', details: 'Shared evidence with external auditor' },
//     { id: '6', user: 'Robert Wilson', action: 'LOGIN_FAILED', resource: 'User Authentication', resourceType: 'auth', timestamp: '2024-12-09T08:30:00', ip: '203.0.113.5', status: 'failed', details: 'Failed login attempt - invalid password' },
//     { id: '7', user: 'Sarah Smith', action: 'CREATE', resource: 'Case HR-2024-002', resourceType: 'case', timestamp: '2024-12-08T15:10:00', ip: '192.168.1.2', status: 'success', details: 'Created new investigation case' },
//     { id: '8', user: 'Michael Lee', action: 'DELETE', resource: 'Old_Report_Q3.pdf', resourceType: 'evidence', timestamp: '2024-12-08T13:45:00', ip: '192.168.1.3', status: 'success', details: 'Deleted obsolete evidence file' },
//   ];

//   const getActionStyle = (action: string) => {
//     switch(action) {
//       case 'VIEW': return { bg: 'bg-deep-blue-100', text: 'text-deep-blue-700', icon: <Eye size={14} /> };
//       case 'UPLOAD': return { bg: 'bg-success-100', text: 'text-success-700', icon: <Upload size={14} /> };
//       case 'DOWNLOAD': return { bg: 'bg-warning-100', text: 'text-warning-700', icon: <DownloadIcon size={14} /> };
//       case 'UPDATE': return { bg: 'bg-info-100', text: 'text-info-700', icon: <Edit size={14} /> };
//       case 'DELETE': return { bg: 'bg-error-100', text: 'text-error-700', icon: <Trash2 size={14} /> };
//       case 'SHARE': return { bg: 'bg-purple-100', text: 'text-purple-700', icon: <Share2 size={14} /> };
//       case 'CREATE': return { bg: 'bg-success-100', text: 'text-success-700', icon: <FileText size={14} /> };
//       case 'LOGIN_FAILED': return { bg: 'bg-error-100', text: 'text-error-700', icon: <AlertCircle size={14} /> };
//       default: return { bg: 'bg-slate-100', text: 'text-slate-700', icon: <Activity size={14} /> };
//     }
//   };

//   const getResourceTypeStyle = (type: string) => {
//     switch(type) {
//       case 'evidence': return { icon: <FileText size={14} className="text-deep-blue-500" />, label: 'Evidence' };
//       case 'case': return { icon: <Shield size={14} className="text-warning-500" />, label: 'Case' };
//       case 'auth': return { icon: <User size={14} className="text-error-500" />, label: 'Authentication' };
//       default: return { icon: <Activity size={14} className="text-slate-500" />, label: type };
//     }
//   };

//   const showNotification = (message: string, type: 'success' | 'error') => {
//     setNotification({ show: true, message, type });
//     setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
//   };

//   const handleViewDetails = (log: AuditLog) => {
//     setSelectedLog(log);
//     setShowDetailsModal(true);
//   };

//   const handleDownloadLog = (log: AuditLog) => {
//     try {
//       const logContent = `AUDIT LOG DETAILS\nLog ID: ${log.id}\nUser: ${log.user}\nAction: ${log.action}\nResource: ${log.resource}`;
//       const blob = new Blob([logContent], { type: 'text/plain' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `audit_log_${log.id}.txt`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//       showNotification(`Downloaded audit log for ${log.action}`, 'success');
//     } catch (error) {
//       showNotification('Download failed.', 'error');
//     }
//   };

//   const handleShareLog = (log: AuditLog) => {
//     setSelectedLog(log);
//     setShareEmail('');
//     setShowShareModal(true);
//   };

//   // NEW: Row Action Handler based on Action Type
//   const handleRowAction = (log: AuditLog) => {
//     switch (log.action) {
//       case 'DOWNLOAD':
//         handleDownloadLog(log);
//         break;
//       case 'SHARE':
//         handleShareLog(log);
//         break;
//       default:
//         handleViewDetails(log);
//         break;
//     }
//   };

//   const sendSharedLog = () => {
//     if (!shareEmail.includes('@')) {
//       showNotification('Invalid email.', 'error');
//       return;
//     }
//     showNotification(`Log shared with ${shareEmail}`, 'success');
//     setShowShareModal(false);
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     showNotification('Copied to clipboard!', 'success');
//   };

//   const filteredLogs = auditLogs.filter(log => {
//     const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          log.resource.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesAction = filterAction === 'all' || log.action === filterAction;
//     return matchesSearch && matchesAction;
//   });

//   const paginatedLogs = filteredLogs.slice(0, 10);

//   return (
//     <div className="space-y-6 p-6 bg-slate-50 min-h-screen">
//       {notification.show && (
//         <div className="fixed top-10 right-6 z-50 animate-slide-in-right">
//           <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
//             {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
//             <span className="text-sm font-medium">{notification.message}</span>
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-800">Audit Logs</h1>
//           <p className="text-slate-500">System trail and chain-of-custody tracking</p>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
//         <div className="flex flex-col lg:flex-row gap-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search users or resources..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//           <select
//             value={filterAction}
//             onChange={(e) => setFilterAction(e.target.value)}
//             className="px-4 py-2 border border-slate-200 rounded-xl bg-white"
//           >
//             <option value="all">All Actions</option>
//             <option value="VIEW">View</option>
//             <option value="DOWNLOAD">Download</option>
//             <option value="SHARE">Share</option>
//           </select>
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-slate-50 border-b border-slate-200">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Timestamp</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">User</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Action</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Resource</th>
//                 <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               {paginatedLogs.map((log) => (
//                 <tr 
//                   key={log.id} 
//                   // UPDATED: Now calls the conditional action handler
//                   onClick={() => handleRowAction(log)}
//                   className="hover:bg-slate-50 transition-colors cursor-pointer group"
//                   title={log.action === 'DOWNLOAD' ? 'Click to Download' : log.action === 'SHARE' ? 'Click to Share' : 'Click to View Details'}
//                 >
//                   <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
//                     {new Date(log.timestamp).toLocaleString()}
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className="text-sm font-medium text-slate-700">{log.user}</span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${getActionStyle(log.action).bg} ${getActionStyle(log.action).text}`}>
//                       {getActionStyle(log.action).icon}
//                       {log.action}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-mono text-blue-600">{log.resource}</span>
//                       <button 
//                         onClick={(e) => { e.stopPropagation(); copyToClipboard(log.resource); }}
//                         className="p-1 hover:bg-slate-200 rounded"
//                       >
//                         <Copy size={12} className="text-slate-400" />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center justify-center gap-2">
//                       <button 
//                         onClick={(e) => { e.stopPropagation(); handleViewDetails(log); }}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//                       >
//                         <Eye size={18} />
//                       </button>
//                       <button 
//                         onClick={(e) => { e.stopPropagation(); handleDownloadLog(log); }}
//                         className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
//                       >
//                         <DownloadIcon size={18} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Details Modal */}
//       {showDetailsModal && selectedLog && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-lg w-full shadow-xl">
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold">Log Details</h2>
//               <button onClick={() => setShowDetailsModal(false)}><X size={20}/></button>
//             </div>
//             <div className="p-6 space-y-4">
//               <p className="text-sm text-slate-600"><strong>Action:</strong> {selectedLog.action}</p>
//               <p className="text-sm text-slate-600"><strong>Resource:</strong> {selectedLog.resource}</p>
//               <p className="text-sm text-slate-600"><strong>Details:</strong> {selectedLog.details}</p>
//             </div>
//             <div className="p-6 border-t flex gap-3">
//               <button onClick={() => setShowDetailsModal(false)} className="flex-1 py-2 bg-slate-100 rounded-xl">Close</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Share Modal */}
//       {showShareModal && selectedLog && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-md w-full shadow-xl">
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold">Share Log</h2>
//               <button onClick={() => setShowShareModal(false)}><X size={20}/></button>
//             </div>
//             <div className="p-6 space-y-4">
//               <input
//                 type="email"
//                 placeholder="Enter email address"
//                 className="w-full p-2 border rounded-xl"
//                 value={shareEmail}
//                 onChange={(e) => setShareEmail(e.target.value)}
//               />
//             </div>
//             <div className="p-6 border-t flex gap-3">
//               <button onClick={sendSharedLog} className="flex-1 py-2 bg-blue-600 text-white rounded-xl">Send Email</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes slide-in-right {
//           from { opacity: 0; transform: translateX(20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
//       `}</style>
//     </div>
//   );
// };

// export default AuditLogs;


// pages/AuditLogs.tsx
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  User, 
  FileText, 
  Eye, 
  Upload, 
  Share2,
  Download as DownloadIcon,
  Edit,
  Trash2,
  Shield,
  Activity,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Mail,
  Copy,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface AuditLog {
  id: string;
  user: string;
  action: string;
  resource: string;
  resourceType: string;
  timestamp: string;
  ip: string;
  status: string;
  details: string;
}

const AuditLogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAction, setFilterAction] = useState('all');
  const [filterDate, setFilterDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareEmail, setShareEmail] = useState('');
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });

  const auditLogs: AuditLog[] = [
    { id: '1', user: 'John Doe', action: 'VIEW', resource: 'Financial_Statements_Q4.pdf', resourceType: 'evidence', timestamp: '2024-12-10T10:30:00', ip: '192.168.1.1', status: 'success', details: 'Viewed evidence file' },
    { id: '2', user: 'Sarah Smith', action: 'UPLOAD', resource: 'Transaction_Logs.xlsx', resourceType: 'evidence', timestamp: '2024-12-10T09:15:00', ip: '192.168.1.2', status: 'success', details: 'Uploaded new evidence to case FR-2024-001' },
    { id: '3', user: 'Michael Lee', action: 'DOWNLOAD', resource: 'CCTV_Footage_Entrance.mp4', resourceType: 'evidence', timestamp: '2024-12-09T16:45:00', ip: '192.168.1.3', status: 'success', details: 'Downloaded evidence for analysis' },
    { id: '4', user: 'Anna Chen', action: 'UPDATE', resource: 'Case FR-2024-001', resourceType: 'case', timestamp: '2024-12-09T14:20:00', ip: '192.168.1.4', status: 'success', details: 'Updated case status to Under Review' },
    { id: '5', user: 'John Doe', action: 'SHARE', resource: 'Financial_Statements_Q4.pdf', resourceType: 'evidence', timestamp: '2024-12-09T11:00:00', ip: '192.168.1.1', status: 'success', details: 'Shared evidence with external auditor' },
    { id: '6', user: 'Robert Wilson', action: 'LOGIN_FAILED', resource: 'User Authentication', resourceType: 'auth', timestamp: '2024-12-09T08:30:00', ip: '203.0.113.5', status: 'failed', details: 'Failed login attempt - invalid password' },
    { id: '7', user: 'Sarah Smith', action: 'CREATE', resource: 'Case HR-2024-002', resourceType: 'case', timestamp: '2024-12-08T15:10:00', ip: '192.168.1.2', status: 'success', details: 'Created new investigation case' },
    { id: '8', user: 'Michael Lee', action: 'DELETE', resource: 'Old_Report_Q3.pdf', resourceType: 'evidence', timestamp: '2024-12-08T13:45:00', ip: '192.168.1.3', status: 'success', details: 'Deleted obsolete evidence file' },
  ];

  const getActionStyle = (action: string) => {
    switch(action) {
      case 'VIEW': return { bg: 'bg-deep-blue-100', text: 'text-deep-blue-700', icon: <Eye size={14} /> };
      case 'UPLOAD': return { bg: 'bg-success-100', text: 'text-success-700', icon: <Upload size={14} /> };
      case 'DOWNLOAD': return { bg: 'bg-warning-100', text: 'text-warning-700', icon: <DownloadIcon size={14} /> };
      case 'UPDATE': return { bg: 'bg-indigo-100', text: 'text-indigo-700', icon: <Edit size={14} /> };
      case 'DELETE': return { bg: 'bg-error-100', text: 'text-error-700', icon: <Trash2 size={14} /> };
      case 'SHARE': return { bg: 'bg-purple-100', text: 'text-purple-700', icon: <Share2 size={14} /> };
      case 'CREATE': return { bg: 'bg-success-100', text: 'text-success-700', icon: <FileText size={14} /> };
      case 'LOGIN_FAILED': return { bg: 'bg-error-100', text: 'text-error-700', icon: <AlertCircle size={14} /> };
      default: return { bg: 'bg-slate-100', text: 'text-slate-700', icon: <Activity size={14} /> };
    }
  };

  const getResourceTypeStyle = (type: string) => {
    switch(type) {
      case 'evidence': return { icon: <FileText size={14} className="text-deep-blue-500" />, label: 'Evidence' };
      case 'case': return { icon: <Shield size={14} className="text-warning-500" />, label: 'Case' };
      case 'auth': return { icon: <User size={14} className="text-error-500" />, label: 'Authentication' };
      default: return { icon: <Activity size={14} className="text-slate-500" />, label: type };
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleViewDetails = (log: AuditLog, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedLog(log);
    setShowDetailsModal(true);
  };

  const handleDownloadLog = (log: AuditLog, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const logContent = `AUDIT LOG DETAILS
=================
Log ID: ${log.id}
Timestamp: ${new Date(log.timestamp).toLocaleString()}
User: ${log.user}
Action: ${log.action}
Resource: ${log.resource}
Resource Type: ${log.resourceType}
IP Address: ${log.ip}
Status: ${log.status}
Details: ${log.details}
Exported By: System Admin
Export Date: ${new Date().toLocaleString()}`;
      
      const blob = new Blob([logContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `audit_log_${log.id}_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showNotification(`Downloaded audit log for ${log.action} action`, 'success');
    } catch (error) {
      showNotification('Download failed. Please try again.', 'error');
    }
  };

  const handleShareLog = (log: AuditLog, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLog(log);
    setShareEmail('');
    setShowShareModal(true);
  };

  const sendSharedLog = () => {
    if (!shareEmail) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    if (!shareEmail.includes('@') || !shareEmail.includes('.')) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    setTimeout(() => {
      showNotification(`Audit log shared successfully with ${shareEmail}`, 'success');
      setShowShareModal(false);
      setShareEmail('');
      setSelectedLog(null);
    }, 1500);
  };

  const copyToClipboard = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    showNotification('Copied to clipboard!', 'success');
  };

  // Filter logs
  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAction = filterAction === 'all' || log.action === filterAction;
    const matchesDate = !filterDate || log.timestamp.startsWith(filterDate);
    return matchesSearch && matchesAction && matchesDate;
  });

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLogs = filteredLogs.slice(startIndex, startIndex + itemsPerPage);

  // Stats
  const stats = {
    total: auditLogs.length,
    today: auditLogs.filter(log => log.timestamp.startsWith(new Date().toISOString().split('T')[0])).length,
    uniqueUsers: new Set(auditLogs.map(log => log.user)).size,
    failedActions: auditLogs.filter(log => log.status === 'failed').length
  };

  const exportAllLogs = () => {
    try {
      let allLogsContent = 'AUDIT LOGS EXPORT\n=================\n\n';
      allLogsContent += `Total Logs: ${filteredLogs.length}\n`;
      allLogsContent += `Export Date: ${new Date().toLocaleString()}\n`;
      allLogsContent += `Filters Applied: Action=${filterAction}, Date=${filterDate || 'All'}, Search=${searchQuery || 'None'}\n\n`;
      allLogsContent += `DETAILED LOGS\n${'='.repeat(50)}\n\n`;
      
      filteredLogs.forEach((log, index) => {
        allLogsContent += `[${index + 1}] LOG ID: ${log.id}\n`;
        allLogsContent += `    Timestamp: ${new Date(log.timestamp).toLocaleString()}\n`;
        allLogsContent += `    User: ${log.user}\n`;
        allLogsContent += `    Action: ${log.action}\n`;
        allLogsContent += `    Resource: ${log.resource}\n`;
        allLogsContent += `    Type: ${log.resourceType}\n`;
        allLogsContent += `    IP: ${log.ip}\n`;
        allLogsContent += `    Status: ${log.status}\n`;
        allLogsContent += `    Details: ${log.details}\n`;
        allLogsContent += `    ${'-'.repeat(50)}\n`;
      });
      
      const blob = new Blob([allLogsContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `audit_logs_export_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showNotification(`Exported ${filteredLogs.length} audit logs successfully!`, 'success');
    } catch (error) {
      showNotification('Export failed. Please try again.', 'error');
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-20 right-6 z-50 animate-slide-in-right">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${
            notification.type === 'success' ? 'bg-success-500 text-white' : 'bg-error-500 text-white'
          }`}>
            {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Audit Logs</h1>
          <p className="text-slate-500 mt-1">Complete system audit trail with chain-of-custody tracking</p>
        </div>
        <button 
          onClick={exportAllLogs}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all"
        >
          <Download size={18} />
          <span>Export Logs</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Events</span>
            <Activity size={18} className="text-deep-blue-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Today</span>
            <Clock size={18} className="text-warning-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">{stats.today}</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Active Users</span>
            <User size={18} className="text-success-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">{stats.uniqueUsers}</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Failed Actions</span>
            <AlertCircle size={18} className="text-error-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">{stats.failedActions}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by user, resource, or action..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Actions</option>
              <option value="VIEW">View</option>
              <option value="UPLOAD">Upload</option>
              <option value="DOWNLOAD">Download</option>
              <option value="UPDATE">Update</option>
              <option value="DELETE">Delete</option>
              <option value="SHARE">Share</option>
              <option value="CREATE">Create</option>
              <option value="LOGIN_FAILED">Login Failed</option>
            </select>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
            />
            <button className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Action</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Resource</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">IP Address</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedLogs.map((log) => (
                <tr 
                  key={log.id} 
                  onClick={(e) => handleViewDetails(log, e)}
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-premium flex items-center justify-center text-white text-[10px] font-medium">
                        {log.user.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{log.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${getActionStyle(log.action).bg} ${getActionStyle(log.action).text}`}>
                      {getActionStyle(log.action).icon}
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-deep-blue-600">{log.resource}</span>
                      <button 
                        onClick={(e) => copyToClipboard(log.resource, e)}
                        className="p-1 hover:bg-slate-100 rounded transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Copy size={12} className="text-slate-400 hover:text-deep-blue-500" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {getResourceTypeStyle(log.resourceType).icon}
                      <span className="text-sm capitalize text-slate-600">{getResourceTypeStyle(log.resourceType).label}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs text-slate-500 font-mono">{log.ip}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 text-xs ${
                      log.status === 'success' ? 'text-success-600' : 'text-error-600'
                    }`}>
                      {log.status === 'success' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {log.status === 'success' ? 'Success' : 'Failed'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={(e) => handleViewDetails(log, e)}
                        className="p-2 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50 transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={(e) => handleDownloadLog(log, e)}
                        className="p-2 rounded-lg text-success-600 hover:bg-success-50 transition-colors"
                        title="Download Log"
                      >
                        <Download size={18} />
                      </button>
                      <button 
                        onClick={(e) => handleShareLog(log, e)}
                        className="p-2 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
                        title="Share Log"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="text-sm text-slate-500">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredLogs.length)} of {filteredLogs.length} logs
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        currentPage === pageNum
                          ? 'bg-gradient-premium text-white shadow-glow'
                          : 'border border-slate-200 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredLogs.length === 0 && (
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-12 text-center">
          <Activity size={64} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-medium text-slate-800 mb-2">No audit logs found</h3>
          <p className="text-slate-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* View Details Modal - Beautified */}
      {showDetailsModal && selectedLog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-scale-up">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Audit Log Details</h2>
                <p className="text-sm text-slate-500 mt-1">Complete information about this audit event</p>
              </div>
              <button 
                onClick={() => setShowDetailsModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 space-y-4 max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Log ID</p>
                  <p className="text-sm font-mono font-medium text-deep-blue-600 mt-1">{selectedLog.id}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Timestamp</p>
                  <p className="text-sm font-medium text-slate-700 mt-1">{new Date(selectedLog.timestamp).toLocaleString()}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">User</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center text-white text-xs font-medium">
                      {selectedLog.user.charAt(0)}
                    </div>
                    <p className="text-sm font-medium text-slate-700">{selectedLog.user}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">IP Address</p>
                  <p className="text-sm font-mono text-slate-600 mt-1">{selectedLog.ip}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Action</p>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full mt-1 ${getActionStyle(selectedLog.action).bg} ${getActionStyle(selectedLog.action).text}`}>
                    {getActionStyle(selectedLog.action).icon}
                    {selectedLog.action}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Status</p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium mt-1 ${
                    selectedLog.status === 'success' ? 'text-success-600' : 'text-error-600'
                  }`}>
                    {selectedLog.status === 'success' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                    {selectedLog.status === 'success' ? 'Success' : 'Failed'}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100 md:col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Resource</p>
                  <p className="text-sm font-mono text-deep-blue-600 mt-1 break-all">{selectedLog.resource}</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100 md:col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Resource Type</p>
                  <div className="flex items-center gap-2 mt-1">
                    {getResourceTypeStyle(selectedLog.resourceType).icon}
                    <p className="text-sm font-medium text-slate-700">{getResourceTypeStyle(selectedLog.resourceType).label}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100 md:col-span-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Details</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{selectedLog.details}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 p-6 border-t border-slate-100 bg-slate-50">
              <button
                onClick={() => {
                  handleDownloadLog(selectedLog, {} as React.MouseEvent);
                  setShowDetailsModal(false);
                }}
                className="flex-1 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} />
                <span>Export This Log</span>
              </button>
              <button
                onClick={() => {
                  handleShareLog(selectedLog, {} as React.MouseEvent);
                  setShowDetailsModal(false);
                }}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal - Beautified */}
      {showShareModal && selectedLog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-up">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Share Audit Log</h2>
                <p className="text-sm text-slate-500 mt-1">Send this audit log via email</p>
              </div>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-gradient-to-br from-deep-blue-50 to-white rounded-xl p-4 border border-deep-blue-100">
                <p className="text-xs text-deep-blue-600 uppercase tracking-wider">Log Information</p>
                <p className="text-sm font-medium text-slate-800 mt-1">{selectedLog.action} - {selectedLog.resource}</p>
                <p className="text-xs text-slate-500 mt-1">{new Date(selectedLog.timestamp).toLocaleString()}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Recipient Email *</label>
                <input
                  type="email"
                  value={shareEmail}
                  onChange={(e) => setShareEmail(e.target.value)}
                  placeholder="recipient@example.com"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 transition-all"
                />
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-600 font-medium mb-2">The recipient will receive:</p>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li className="flex items-center gap-2">✓ Audit log details in text format</li>
                  <li className="flex items-center gap-2">✓ Complete timestamp and user information</li>
                  <li className="flex items-center gap-2">✓ Action and resource details</li>
                  <li className="flex items-center gap-2">✓ IP address and status information</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-3 p-6 border-t border-slate-100 bg-slate-50">
              <button
                onClick={() => setShowShareModal(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={sendSharedLog}
                className="flex-1 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-up {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuditLogs;