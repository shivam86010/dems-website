// pages/EvidenceVault.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Upload, 
  FileText, 
  Image, 
  Video, 
  Download,
  Database, 
  Eye, 
  Lock,
  Unlock,
  Calendar,
  User,
  Tag,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Shield,
  Clock
} from 'lucide-react';

const EvidenceVault: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const evidenceItems = [
    { id: '1', name: 'Financial_Statements_Q4.pdf', type: 'document', size: '2.3 MB', caseId: 'FR-2024-001', caseName: 'Financial Fraud Investigation', uploadedBy: 'John Doe', date: '2024-12-01', hash: '8f3a9c2e...', confidential: true },
    { id: '2', name: 'Transaction_Logs.xlsx', type: 'document', size: '1.8 MB', caseId: 'FR-2024-001', caseName: 'Financial Fraud Investigation', uploadedBy: 'Sarah Smith', date: '2024-12-02', hash: 'a7c3e5g9...', confidential: false },
    { id: '3', name: 'CCTV_Footage_Entrance.mp4', type: 'video', size: '156 MB', caseId: 'FR-2024-001', caseName: 'Financial Fraud Investigation', uploadedBy: 'John Doe', date: '2024-12-03', hash: 'b8d4f6h0...', confidential: true },
    { id: '4', name: 'Employee_Statement.pdf', type: 'document', size: '0.5 MB', caseId: 'HR-2024-002', caseName: 'Employee Misconduct', uploadedBy: 'Michael Lee', date: '2024-12-04', hash: 'c9e5g7i1...', confidential: false },
    { id: '5', name: 'Email_Evidence.eml', type: 'document', size: '0.3 MB', caseId: 'CP-2024-003', caseName: 'Trade Secret Theft', uploadedBy: 'Anna Chen', date: '2024-12-05', hash: 'd0f6h8j2...', confidential: true },
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'document': return <FileText size={18} className="text-deep-blue-600" />;
      case 'image': return <Image size={18} className="text-success-600" />;
      case 'video': return <Video size={18} className="text-warning-600" />;
      default: return <FileText size={18} className="text-slate-600" />;
    }
  };

  const getTypeBg = (type: string) => {
    switch(type) {
      case 'document': return 'bg-deep-blue-100';
      case 'image': return 'bg-success-100';
      case 'video': return 'bg-warning-100';
      default: return 'bg-slate-100';
    }
  };

  const filteredItems = evidenceItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.caseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Evidence Vault</h1>
          <p className="text-slate-500 mt-1">Secure storage with chain-of-custody tracking</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-premium text-white rounded-xl hover:shadow-glow transition-all">
          <Upload size={18} />
          <span>Upload Evidence</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Items</span>
            <FileText size={18} className="text-deep-blue-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">1,892</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Confidential</span>
            <Lock size={18} className="text-error-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">423</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Cases</span>
            <Tag size={18} className="text-warning-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">24</p>
        </div>
        <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Size</span>
            <Database size={18} className="text-success-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800 mt-2">2.4 GB</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search evidence by name or case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Types</option>
              <option value="document">Documents</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
            </select>
            <button className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Evidence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/dashboard/evidence-details/${item.id}`)}
            className="bg-white rounded-2xl shadow-premium border border-slate-100 p-5 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-3 rounded-xl ${getTypeBg(item.type)}`}>
                {getTypeIcon(item.type)}
              </div>
              {item.confidential ? (
                <Lock size={14} className="text-error-500" />
              ) : (
                <Unlock size={14} className="text-success-500" />
              )}
            </div>
            
            <h3 className="font-semibold text-slate-800 mb-1 truncate">{item.name}</h3>
            <p className="text-xs text-slate-500 mb-3">{item.caseName}</p>
            
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span>{item.size}</span>
              <span>•</span>
              <span>Uploaded {item.date}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-premium flex items-center justify-center text-white text-[8px] font-medium">
                  {item.uploadedBy.charAt(0)}
                </div>
                <span className="text-xs text-slate-600">{item.uploadedBy}</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-xs text-slate-400 font-mono">{item.hash}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-12 text-center">
          <FileText size={64} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-medium text-slate-800 mb-2">No evidence found</h3>
          <p className="text-slate-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default EvidenceVault;