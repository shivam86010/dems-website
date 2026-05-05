// components/CaseDetails.tsx
import React, { useState } from 'react';
import { X, FileText, Image, Video, Download, Eye, Clock, User, Tag, Shield, Lock, Unlock, Hash, Calendar, Briefcase, AlertTriangle } from 'lucide-react';
import UploadEvidenceModal from './UploadEvidenceModal';

interface CaseDetailsProps {
  case: any;
  onClose: () => void;
}

const CaseDetails: React.FC<CaseDetailsProps> = ({ case: caseData, onClose }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence' | 'timeline'>('overview');

  const evidenceItems = [
    {
      id: '1',
      name: 'CCTV_Footage_001.mp4',
      type: 'video',
      size: '45.2 MB',
      uploadedBy: 'Det. Smith',
      uploadedAt: '2024-12-01T10:30:00',
      hash: 'a3f5c8e...',
      confidential: false
    },
    {
      id: '2',
      name: 'Suspect_Statement.pdf',
      type: 'document',
      size: '2.1 MB',
      uploadedBy: 'Det. Johnson',
      uploadedAt: '2024-12-02T14:15:00',
      hash: 'b7d9f2a...',
      confidential: true
    }
  ];

  const timeline = [
    { action: 'Case created', user: 'Commander Smith', timestamp: '2024-12-01T09:00:00', details: 'Initial case creation' },
    { action: 'Evidence uploaded', user: 'Det. Johnson', timestamp: '2024-12-01T10:30:00', details: 'CCTV footage added' },
    { action: 'Status updated', user: 'Det. Smith', timestamp: '2024-12-02T11:00:00', details: 'Changed to In Progress' }
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'document': return <FileText size={16} />;
      case 'image': return <Image size={16} />;
      case 'video': return <Video size={16} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-premium-lg max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-bold text-slate-800">{caseData.title}</h2>
              <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${caseData.priority === 'high' ? 'error' : caseData.priority === 'medium' ? 'warning' : 'success'}-100 text-${caseData.priority === 'high' ? 'error' : caseData.priority === 'medium' ? 'warning' : 'success'}-700`}>
                {caseData.priority.toUpperCase()} Priority
              </span>
            </div>
            <p className="text-sm text-slate-500 font-mono">{caseData.caseNumber}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-4 border-b border-slate-100 bg-slate-50">
          {['overview', 'evidence', 'timeline'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-deep-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Case Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <Briefcase size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Case Type</p>
                    <p className="text-sm font-medium text-slate-800 capitalize">{caseData.caseType}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <User size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Client Name</p>
                    <p className="text-sm font-medium text-slate-800">{caseData.clientName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <Calendar size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Start Date</p>
                    <p className="text-sm font-medium text-slate-800">{caseData.startDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <Clock size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <p className="text-sm font-medium text-slate-800 capitalize">{caseData.status.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-slate-800 mb-2">Description</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Assigned Members */}
              <div>
                <h4 className="text-sm font-medium text-slate-800 mb-3">Assigned Members</h4>
                <div className="flex flex-wrap gap-2">
                  {caseData.assignedMembers.map((member: string) => (
                    <span key={member} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evidence' && (
            <div className="space-y-4">
              <button
                onClick={() => setShowUploadModal(true)}
                className="w-full p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-deep-blue-400 hover:bg-deep-blue-50 transition-all group"
              >
                <div className="flex items-center justify-center gap-2 text-slate-500 group-hover:text-deep-blue-600">
                  <FileText size={20} />
                  <span>Upload New Evidence</span>
                </div>
              </button>

              {evidenceItems.map(item => (
                <div key={item.id} className="bg-slate-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-slate-800">{item.name}</p>
                          {item.confidential && <Lock size={12} className="text-error-500" />}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                          <span>{item.size}</span>
                          <span>•</span>
                          <span>Uploaded by {item.uploadedBy}</span>
                          <span>•</span>
                          <span>{new Date(item.uploadedAt).toLocaleString()}</span>
                          <span>•</span>
                          <span className="font-mono">Hash: {item.hash}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white rounded-lg transition-colors">
                        <Eye size={16} className="text-slate-500" />
                      </button>
                      <button className="p-2 hover:bg-white rounded-lg transition-colors">
                        <Download size={16} className="text-slate-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200"></div>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-deep-blue-500 flex items-center justify-center">
                      <Shield size={14} className="text-deep-blue-500" />
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-slate-800">{item.action}</p>
                        <p className="text-xs text-slate-500">{new Date(item.timestamp).toLocaleString()}</p>
                      </div>
                      <p className="text-sm text-slate-600">by {item.user}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadEvidenceModal
          caseId={caseData.id}
          caseTitle={caseData.title}
          onClose={() => setShowUploadModal(false)}
          onSuccess={() => {
            // Refresh evidence list
          }}
        />
      )}
    </div>
  );
};

export default CaseDetails;