// pages/Reports.tsx
import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Shield, 
  Users, 
  FolderKanban,
  Database,
  Clock,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Printer,
  Mail,
  X,
  Eye,
  Trash2
} from 'lucide-react';

interface GeneratedReport {
  id: string;
  name: string;
  date: string;
  size: string;
  type: string;
  generatedBy: string;
  fileUrl?: string;
  content?: string;
}

const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReports, setGeneratedReports] = useState<GeneratedReport[]>([
    { id: '1', name: 'Chain of Custody Report - Case FR-2024-001', date: '2024-12-10', size: '2.4 MB', type: 'PDF', generatedBy: 'John Doe' },
    { id: '2', name: 'Evidence Inventory - December 2024', date: '2024-12-09', size: '1.2 MB', type: 'Excel', generatedBy: 'Sarah Smith' },
    { id: '3', name: 'User Activity Report - Q4 2024', date: '2024-12-08', size: '3.1 MB', type: 'PDF', generatedBy: 'Michael Lee' },
    { id: '4', name: 'Case Summary Report', date: '2024-12-07', size: '1.8 MB', type: 'PDF', generatedBy: 'Anna Chen' },
  ]);
  
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState({ to: '', subject: '', message: '' });
  const [selectedReportForEmail, setSelectedReportForEmail] = useState<GeneratedReport | null>(null);
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });

  const reportCategories = [
    {
      title: 'Chain of Custody Reports',
      icon: Shield,
      color: 'deep-blue',
      reports: [
        { id: 'coc-case', name: 'Case Chain of Custody Report', description: 'Complete audit trail for a specific case', format: 'PDF' },
        { id: 'coc-evidence', name: 'Evidence Chain of Custody Report', description: 'Track evidence handling and access history', format: 'PDF' },
        { id: 'coc-timeline', name: 'Timeline Analysis Report', description: 'Visual timeline of all case activities', format: 'PDF' },
      ]
    },
    {
      title: 'Case Reports',
      icon: FolderKanban,
      color: 'warning',
      reports: [
        { id: 'case-summary', name: 'Case Summary Report', description: 'Overview of all active and closed cases', format: 'PDF/Excel' },
        { id: 'case-status', name: 'Case Status Report', description: 'Status distribution and progress tracking', format: 'PDF' },
        { id: 'case-details', name: 'Detailed Case Report', description: 'Complete case information with evidence', format: 'PDF' },
      ]
    },
    {
      title: 'Evidence Reports',
      icon: Database,
      color: 'success',
      reports: [
        { id: 'evidence-inventory', name: 'Evidence Inventory Report', description: 'Complete list of all evidence items', format: 'Excel' },
        { id: 'evidence-activity', name: 'Evidence Activity Report', description: 'Upload, view, and download statistics', format: 'PDF' },
        { id: 'evidence-chain', name: 'Evidence Chain Report', description: 'Full chain of custody for all evidence', format: 'PDF' },
      ]
    },
    {
      title: 'User & Compliance Reports',
      icon: Users,
      color: 'slate',
      reports: [
        { id: 'user-activity', name: 'User Activity Report', description: 'User actions and access logs', format: 'PDF/Excel' },
        { id: 'compliance-audit', name: 'Compliance Audit Report', description: 'Regulatory compliance summary', format: 'PDF' },
        { id: 'access-summary', name: 'Access Summary Report', description: 'Who accessed what and when', format: 'PDF' },
      ]
    }
  ];

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
  };

  const generateSamplePDF = async (reportName: string): Promise<string> => {
    // Simulate PDF generation - In real app, this would call an API
    return new Promise((resolve) => {
      setTimeout(() => {
        const blob = new Blob([`Sample PDF Content for ${reportName}`], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        resolve(url);
      }, 1500);
    });
  };

  const handleGenerateReport = async (reportId: string) => {
    setIsGenerating(true);
    setSelectedReport(reportId);
    
    try {
      const report = reportCategories.flatMap(c => c.reports).find(r => r.id === reportId);
      if (report) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const newReport: GeneratedReport = {
          id: Date.now().toString(),
          name: `${report.name} - ${new Date().toLocaleDateString()}`,
          date: new Date().toISOString().split('T')[0],
          size: `${Math.floor(Math.random() * 5) + 1}.${Math.floor(Math.random() * 9) + 1} MB`,
          type: report.format.split('/')[0],
          generatedBy: 'Current User',
          fileUrl: await generateSamplePDF(report.name)
        };
        
        setGeneratedReports(prev => [newReport, ...prev]);
        showNotification(`Report "${report.name}" generated successfully!`, 'success');
      }
    } catch (error) {
      showNotification('Failed to generate report. Please try again.', 'error');
    } finally {
      setIsGenerating(false);
      setSelectedReport(null);
    }
  };

  const handleDownload = (report: GeneratedReport) => {
    try {
      // Create sample content for download
      const content = `Report: ${report.name}\nDate Generated: ${report.date}\nGenerated By: ${report.generatedBy}\n\nThis is a sample report content. In production, this would be the actual report data.`;
      
      const blob = new Blob([content], { type: report.type === 'PDF' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${report.name.replace(/\s/g, '_')}.${report.type.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showNotification(`Downloading "${report.name}"...`, 'success');
    } catch (error) {
      showNotification('Download failed. Please try again.', 'error');
    }
  };

  const handlePrint = (report: GeneratedReport) => {
    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${report.name}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
              h1 { color: #1E3A8A; border-bottom: 2px solid #1E3A8A; padding-bottom: 10px; }
              .header { margin-bottom: 30px; }
              .content { margin-top: 20px; }
              .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc; text-align: center; color: #666; }
              @media print {
                body { margin: 0; padding: 20px; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>${report.name}</h1>
              <p><strong>Date Generated:</strong> ${report.date}</p>
              <p><strong>Generated By:</strong> ${report.generatedBy}</p>
              <p><strong>Report ID:</strong> ${report.id}</p>
            </div>
            <div class="content">
              <h3>Report Summary</h3>
              <p>This is a printed version of the report "${report.name}".</p>
              <p>In production, this would contain the actual report data including charts, tables, and detailed analysis.</p>
              <h3>Key Findings</h3>
              <ul>
                <li>Sample finding 1</li>
                <li>Sample finding 2</li>
                <li>Sample finding 3</li>
              </ul>
            </div>
            <div class="footer">
              <p>Confidential - For authorized use only</p>
              <p>Generated by InvestiGuard Compliance System</p>
            </div>
            <button onclick="window.print()" style="margin-top: 20px; padding: 10px 20px; background: #1E3A8A; color: white; border: none; border-radius: 5px; cursor: pointer;">Print</button>
          </body>
          </html>
        `);
        printWindow.document.close();
      }
      showNotification(`Preparing "${report.name}" for printing...`, 'success');
    } catch (error) {
      showNotification('Print failed. Please try again.', 'error');
    }
  };

  const handleEmail = (report: GeneratedReport) => {
    setSelectedReportForEmail(report);
    setEmailData({
      to: '',
      subject: `Report: ${report.name}`,
      message: `Please find attached the report "${report.name}" generated on ${report.date}.`
    });
    setShowEmailModal(true);
  };

  const sendEmail = () => {
    if (!emailData.to) {
      showNotification('Please enter a recipient email address.', 'error');
      return;
    }
    
    // Simulate email sending
    setTimeout(() => {
      showNotification(`Report sent to ${emailData.to} successfully!`, 'success');
      setShowEmailModal(false);
      setEmailData({ to: '', subject: '', message: '' });
      setSelectedReportForEmail(null);
    }, 1500);
  };

  const deleteReport = (reportId: string) => {
    setGeneratedReports(prev => prev.filter(r => r.id !== reportId));
    showNotification('Report deleted successfully!', 'success');
  };

  const viewReport = (report: GeneratedReport) => {
    window.open(`#`, '_blank');
    showNotification(`Opening "${report.name}"...`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-20 right-6 z-50 animate-slide-in-right">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${
            notification.type === 'success' ? 'bg-success-500 text-white' : 'bg-error-500 text-white'
          }`}>
            {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span className="text-sm">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Reports</h1>
        <p className="text-slate-500 mt-1">Generate and download compliance and investigation reports</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-premium rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-90">Total Reports</span>
            <FileText size={18} className="opacity-90" />
          </div>
          <p className="text-2xl font-bold mt-2">{generatedReports.length}</p>
          <p className="text-xs opacity-75 mt-1">Generated this month</p>
        </div>
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Chain of Custody</span>
            <Shield size={18} className="text-deep-blue-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            {generatedReports.filter(r => r.name.includes('Chain of Custody')).length}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Case Reports</span>
            <FolderKanban size={18} className="text-warning-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            {generatedReports.filter(r => r.name.includes('Case')).length}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">User Reports</span>
            <Users size={18} className="text-success-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            {generatedReports.filter(r => r.name.includes('User')).length}
          </p>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-6">
        <h3 className="font-semibold text-slate-800 mb-4">Report Period</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">End Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
            <div className={`p-4 bg-${category.color}-50 border-b border-${category.color}-100`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-${category.color}-100`}>
                  <category.icon size={20} className={`text-${category.color}-600`} />
                </div>
                <h3 className="font-semibold text-slate-800">{category.title}</h3>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {category.reports.map((report) => (
                <div key={report.id} className="p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-800">{report.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{report.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Format: {report.format}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleGenerateReport(report.id)}
                      disabled={isGenerating && selectedReport === report.id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gradient-premium text-white rounded-lg hover:shadow-glow transition-all text-sm disabled:opacity-50"
                    >
                      {isGenerating && selectedReport === report.id ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          <span>Generate</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Generated Reports */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Recently Generated Reports</h3>
          <p className="text-xs text-slate-500 mt-1">Download, print, email, or manage previously generated reports</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date Generated</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Format</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Generated By</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {generatedReports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-deep-blue-500" />
                      <span className="text-sm font-medium text-slate-700">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{report.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{report.size}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{report.generatedBy}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => viewReport(report)}
                        className="p-1.5 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50 transition-colors"
                        title="View Report"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleDownload(report)}
                        className="p-1.5 rounded-lg text-success-600 hover:bg-success-50 transition-colors"
                        title="Download"
                      >
                        <Download size={16} />
                      </button>
                      <button 
                        onClick={() => handlePrint(report)}
                        className="p-1.5 rounded-lg text-warning-600 hover:bg-warning-50 transition-colors"
                        title="Print"
                      >
                        <Printer size={16} />
                      </button>
                      <button 
                        onClick={() => handleEmail(report)}
                        className="p-1.5 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
                        title="Email"
                      >
                        <Mail size={16} />
                      </button>
                      <button 
                        onClick={() => deleteReport(report.id)}
                        className="p-1.5 rounded-lg text-error-600 hover:bg-error-50 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all">
          <FileText size={18} />
          <span className="text-sm">Schedule Report</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50">
          <BarChart3 size={18} />
          <span className="text-sm">Analytics Dashboard</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50">
          <PieChart size={18} />
          <span className="text-sm">Custom Report</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50">
          <TrendingUp size={18} />
          <span className="text-sm">Export Dashboard</span>
        </button>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedReportForEmail && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-md w-full animate-scale-up">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Email Report</h2>
                <p className="text-sm text-slate-500 mt-1">Send "{selectedReportForEmail.name}" via email</p>
              </div>
              <button 
                onClick={() => setShowEmailModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Recipient Email *</label>
                <input
                  type="email"
                  value={emailData.to}
                  onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                  placeholder="recipient@example.com"
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  value={emailData.message}
                  onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 resize-none"
                  placeholder="Enter your message here..."
                />
              </div>
              <div className="bg-slate-50 rounded-xl p-3">
                <p className="text-xs text-slate-500">
                  <strong>Attachment:</strong> {selectedReportForEmail.name}.{selectedReportForEmail.type.toLowerCase()}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 p-6 border-t border-slate-100">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={sendEmail}
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
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
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

export default Reports;