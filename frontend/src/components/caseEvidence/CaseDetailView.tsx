// pages/CaseDetailView.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Image, 
  Video, 
  Download, 
  Eye, 
  Clock, 
  User, 
  Shield, 
  Lock, 
  Calendar, 
  Briefcase,
  Plus,
  X,
  Fingerprint,
  Key,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import UploadEvidenceModal from './UploadEvidenceModal';

const CaseDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence' | 'timeline'>('overview');
  
  // State for access verification
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState<any>(null);
  const [accessType, setAccessType] = useState<'view' | 'download'>('view');
  const [accessId, setAccessId] = useState('');
  const [accessPassword, setAccessPassword] = useState('');
  const [accessError, setAccessError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  // Mock case data - in real app, fetch based on id
  const caseData = {
    id: id || '1',
    caseNumber: 'CR-2024-001',
    title: 'Cyber Fraud Investigation',
    clientName: 'Tech Corp Ltd',
    caseType: 'criminal',
    priority: 'high',
    status: 'in_progress',
    startDate: '2024-12-01',
    endDate: null,
    assignedMembers: ['Det. Smith', 'Det. Johnson', 'Investigator Chen'],
    evidenceCount: 23,
    lastUpdated: '2024-12-10T14:30:00',
    createdBy: 'Commander Lee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  const evidenceItems = [
    {
      id: '1',
      name: 'CCTV_Footage_001.mp4',
      type: 'video',
      size: '45.2 MB',
      uploadedBy: 'Det. Smith',
      uploadedAt: '2024-12-01T10:30:00',
      hash: 'a3f5c8e9d2f1b4a6c8e9d2f1b4a6c8e9',
      confidential: true,
      thumbnail: 'https://via.placeholder.com/300x200/1E3A8A/FFFFFF?text=Video+Preview',
      url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
    },
    {
      id: '2',
      name: 'Suspect_Statement.pdf',
      type: 'document',
      size: '2.1 MB',
      uploadedBy: 'Det. Johnson',
      uploadedAt: '2024-12-02T14:15:00',
      hash: 'b7d9f2a1c3e5g7i9k1m3o5q7s9u1w3y',
      confidential: true,
      thumbnail: 'https://via.placeholder.com/300x200/16A34A/FFFFFF?text=PDF+Document',
      url: '#'
    },
    {
      id: '3',
      name: 'Crime_Scene_Photos.zip',
      type: 'image',
      size: '78.3 MB',
      uploadedBy: 'Investigator Chen',
      uploadedAt: '2024-12-03T09:45:00',
      hash: 'c8e0f3b2d4e6f8h0j2l4n6p8r0t2v4x',
      confidential: false,
      thumbnail: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Image+Gallery',
      url: 'https://via.placeholder.com/800x500'
    }
  ];

  const timeline = [
    { action: 'Case created', user: 'Commander Smith', timestamp: '2024-12-01T09:00:00', details: 'Initial case creation' },
    { action: 'Evidence uploaded', user: 'Det. Johnson', timestamp: '2024-12-01T10:30:00', details: 'CCTV footage added' },
    { action: 'Status updated', user: 'Det. Smith', timestamp: '2024-12-02T11:00:00', details: 'Changed to In Progress' }
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'critical': return 'error';
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'slate';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch(priority) {
      case 'critical': return 'Critical';
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return priority;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'open': return 'success';
      case 'in_progress': return 'warning';
      case 'closed': return 'slate';
      default: return 'slate';
    }
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'open': return 'Open';
      case 'in_progress': return 'In Progress';
      case 'closed': return 'Closed';
      default: return status;
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'document': return <FileText size={16} />;
      case 'image': return <Image size={16} />;
      case 'video': return <Video size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const handleViewEvidence = (evidence: any) => {
    setSelectedEvidence(evidence);
    setAccessType('view');
    setAccessId('');
    setAccessPassword('');
    setAccessError('');
    setShowAccessModal(true);
  };

  const handleDownloadEvidence = (evidence: any) => {
    setSelectedEvidence(evidence);
    setAccessType('download');
    setAccessId('');
    setAccessPassword('');
    setAccessError('');
    setShowAccessModal(true);
  };

  const verifyAccess = async () => {
    setIsVerifying(true);
    setAccessError('');
    
    // Simulate API call to verify credentials
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Demo verification - in real app, verify with backend
    if (accessId === 'admin' && accessPassword === 'admin123') {
      if (accessType === 'view') {
        // Show preview based on file type
        if (selectedEvidence.type === 'video') {
          setPreviewUrl(selectedEvidence.url);
          setShowPreview(true);
        } else if (selectedEvidence.type === 'image') {
          setPreviewUrl(selectedEvidence.thumbnail);
          setShowPreview(true);
        } else if (selectedEvidence.type === 'document') {
          // For PDF, open in new tab or iframe
          window.open('#', '_blank');
          alert('Document would open in PDF viewer');
        }
        setShowAccessModal(false);
        // Log access for audit trail
        console.log(`Evidence viewed: ${selectedEvidence.name} by user ${accessId} at ${new Date().toISOString()}`);
      } else if (accessType === 'download') {
        // Trigger download
        const link = document.createElement('a');
        link.href = selectedEvidence.url;
        link.download = selectedEvidence.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowAccessModal(false);
        // Log download for audit trail
        console.log(`Evidence downloaded: ${selectedEvidence.name} by user ${accessId} at ${new Date().toISOString()}`);
      }
    } else {
      setAccessError('Invalid ID or Password. Please check your credentials.');
    }
    
    setIsVerifying(false);
  };

  const renderPreviewContent = () => {
    if (!selectedEvidence) return null;
    
    if (selectedEvidence.type === 'video') {
      return (
        <div className="space-y-4">
          <video 
            controls 
            autoPlay 
            className="w-full rounded-xl shadow-lg"
            src={previewUrl}
          >
            Your browser does not support the video tag.
          </video>
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-slate-800 mb-2">Evidence Details</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-500">File Name:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.name}</p>
              </div>
              <div>
                <span className="text-slate-500">File Size:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.size}</p>
              </div>
              <div>
                <span className="text-slate-500">Uploaded By:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.uploadedBy}</p>
              </div>
              <div>
                <span className="text-slate-500">SHA-256 Hash:</span>
                <p className="font-mono text-xs text-slate-600">{selectedEvidence.hash}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    if (selectedEvidence.type === 'image') {
      return (
        <div className="space-y-4">
          <img 
            src={previewUrl} 
            alt={selectedEvidence.name}
            className="w-full rounded-xl shadow-lg"
          />
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-slate-800 mb-2">Evidence Details</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-slate-500">File Name:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.name}</p>
              </div>
              <div>
                <span className="text-slate-500">File Size:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.size}</p>
              </div>
              <div>
                <span className="text-slate-500">Uploaded By:</span>
                <p className="font-medium text-slate-700">{selectedEvidence.uploadedBy}</p>
              </div>
              <div>
                <span className="text-slate-500">SHA-256 Hash:</span>
                <p className="font-mono text-xs text-slate-600">{selectedEvidence.hash}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/cases')}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <ArrowLeft size={20} className="text-slate-600" />
              </button>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-bold text-slate-800">{caseData.title}</h1>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getPriorityColor(caseData.priority)}-100 text-${getPriorityColor(caseData.priority)}-700`}>
                    {getPriorityLabel(caseData.priority)} Priority
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getStatusColor(caseData.status)}-100 text-${getStatusColor(caseData.status)}-700`}>
                    {getStatusLabel(caseData.status)}
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-mono mt-1">{caseData.caseNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 border-t border-slate-100">
          <div className="flex gap-6">
            {['overview', 'evidence', 'timeline'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-2 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab
                    ? 'text-deep-blue-600 border-deep-blue-600'
                    : 'text-slate-500 border-transparent hover:text-slate-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Case Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-premium border border-slate-100">
                  <Briefcase size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Case Type</p>
                    <p className="text-sm font-medium text-slate-800 capitalize">{caseData.caseType}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-premium border border-slate-100">
                  <User size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Client Name</p>
                    <p className="text-sm font-medium text-slate-800">{caseData.clientName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-premium border border-slate-100">
                  <Calendar size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Start Date</p>
                    <p className="text-sm font-medium text-slate-800">{caseData.startDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-premium border border-slate-100">
                  <Clock size={18} className="text-deep-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <p className="text-sm font-medium text-slate-800 capitalize">{caseData.status.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-6">
                <h4 className="text-sm font-medium text-slate-800 mb-3">Description</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{caseData.description}</p>
              </div>

              {/* Assigned Members */}
              <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-6">
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
                className="w-full p-4 border-2 border-dashed border-slate-300 rounded-xl hover:border-deep-blue-400 hover:bg-deep-blue-50 transition-all group bg-white"
              >
                <div className="flex items-center justify-center gap-2 text-slate-500 group-hover:text-deep-blue-600">
                  <Plus size={20} />
                  <span>Upload New Evidence</span>
                </div>
              </button>

              {evidenceItems.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-premium border border-slate-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-slate-800">{item.name}</p>
                          {item.confidential && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-error-100 text-error-700 text-xs rounded-full">
                              <Lock size={10} />
                              Confidential
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                          <span>{item.size}</span>
                          <span>•</span>
                          <span>Uploaded by {item.uploadedBy}</span>
                          <span>•</span>
                          <span>{new Date(item.uploadedAt).toLocaleString()}</span>
                          <span>•</span>
                          <span className="font-mono">Hash: {item.hash.substring(0, 16)}...</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewEvidence(item)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="View Evidence"
                      >
                        <Eye size={16} className="text-slate-500" />
                      </button>
                      <button 
                        onClick={() => handleDownloadEvidence(item)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Download Evidence"
                      >
                        <Download size={16} className="text-slate-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-6">
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
            </div>
          )}
        </div>
      </div>

      {/* Access Verification Modal */}
      {showAccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-md w-full animate-scale-up">
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {accessType === 'view' ? 'View Evidence' : 'Download Evidence'}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {selectedEvidence?.name}
                  </p>
                </div>
                <button 
                  onClick={() => setShowAccessModal(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {/* Security Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-deep-blue-100 flex items-center justify-center">
                  <Shield size={32} className="text-deep-blue-600" />
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-600">
                  This evidence is {selectedEvidence?.confidential ? 'confidential' : 'restricted'}. 
                  Please enter your authorized ID and password to {accessType === 'view' ? 'view' : 'download'} this evidence.
                </p>
              </div>

              {/* ID Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Authorized ID
                </label>
                <div className="relative">
                  <Key size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={accessId}
                    onChange={(e) => setAccessId(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 transition-all"
                    placeholder="Enter your authorized ID"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Fingerprint size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={accessPassword}
                    onChange={(e) => setAccessPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 transition-all"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Error Message */}
              {accessError && (
                <div className="bg-error-50 border border-error-200 rounded-xl p-3 flex items-center gap-2">
                  <AlertCircle size={16} className="text-error-600" />
                  <p className="text-sm text-error-700">{accessError}</p>
                </div>
              )}

              {/* Security Note */}
              <div className="bg-slate-50 rounded-xl p-3 text-center">
                <p className="text-xs text-slate-500">
                  All access attempts are logged for security compliance. Unauthorized access is prohibited.
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t border-slate-100">
              <button
                onClick={() => setShowAccessModal(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={verifyAccess}
                disabled={isVerifying}
                className="flex-1 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isVerifying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Shield size={16} />
                    <span>{accessType === 'view' ? 'View Evidence' : 'Download Evidence'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-premium-lg max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scale-up">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{selectedEvidence?.name}</h3>
                <p className="text-xs text-slate-500">Evidence Preview</p>
              </div>
              <button 
                onClick={() => {
                  setShowPreview(false);
                  setPreviewUrl('');
                  setSelectedEvidence(null);
                }}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
              {renderPreviewContent()}
            </div>
          </div>
        </div>
      )}

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

export default CaseDetailView;