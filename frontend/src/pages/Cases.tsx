// pages/Cases.tsx
import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Eye, Edit, Trash2, FileText, Shield, Clock, User, Tag, ChevronRight, ChevronLeft, Download, Printer } from 'lucide-react';
import CreateCaseModal from '../components/caseEvidence/CreateCaseModal';
import CaseDetails from '../components/caseEvidence/CaseDetails';

const Cases: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<string>('startDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const cases = [
    {
      id: '1',
      caseNumber: 'CR-2024-001',
      title: 'Cyber Fraud Investigation',
      clientName: 'Tech Corp Ltd',
      caseType: 'criminal',
      priority: 'high',
      status: 'in_progress',
      startDate: '2024-12-01',
      endDate: null,
      assignedMembers: ['Det. Smith', 'Det. Johnson'],
      evidenceCount: 23,
      lastUpdated: '2024-12-10T14:30:00',
      createdBy: 'Commander Lee'
    },
    {
      id: '2',
      caseNumber: 'CR-2024-002',
      title: 'Evidence Tampering Case',
      clientName: 'State vs Unknown',
      caseType: 'criminal',
      priority: 'critical',
      status: 'open',
      startDate: '2024-12-05',
      endDate: null,
      assignedMembers: ['Det. Williams', 'Investigator Chen'],
      evidenceCount: 8,
      lastUpdated: '2024-12-09T09:15:00',
      createdBy: 'Commander Lee'
    },
    {
      id: '3',
      caseNumber: 'CV-2024-003',
      title: 'Corporate Espionage',
      clientName: 'Innovate Inc',
      caseType: 'corporate',
      priority: 'high',
      status: 'in_progress',
      startDate: '2024-11-28',
      endDate: null,
      assignedMembers: ['Det. Smith', 'Det. Johnson', 'Investigator Chen'],
      evidenceCount: 45,
      lastUpdated: '2024-12-08T16:45:00',
      createdBy: 'Commander Lee'
    },
    {
      id: '4',
      caseNumber: 'CR-2024-004',
      title: 'Money Laundering',
      clientName: 'Federal Bank',
      caseType: 'criminal',
      priority: 'medium',
      status: 'closed',
      startDate: '2024-10-15',
      endDate: '2024-12-01',
      assignedMembers: ['Det. Johnson', 'Det. Williams'],
      evidenceCount: 67,
      lastUpdated: '2024-12-01T10:00:00',
      createdBy: 'Commander Lee'
    },
    {
      id: '5',
      caseNumber: 'CR-2024-005',
      title: 'Digital Evidence Recovery',
      clientName: 'Cyber Security Unit',
      caseType: 'criminal',
      priority: 'low',
      status: 'open',
      startDate: '2024-12-08',
      endDate: null,
      assignedMembers: ['Det. Smith'],
      evidenceCount: 3,
      lastUpdated: '2024-12-09T11:20:00',
      createdBy: 'Commander Lee'
    },
    {
      id: '6',
      caseNumber: 'CR-2024-006',
      title: 'Bank Fraud Investigation',
      clientName: 'National Bank',
      caseType: 'criminal',
      priority: 'critical',
      status: 'in_progress',
      startDate: '2024-12-03',
      endDate: null,
      assignedMembers: ['Det. Johnson', 'Investigator Chen', 'Det. Smith'],
      evidenceCount: 34,
      lastUpdated: '2024-12-09T16:20:00',
      createdBy: 'Commander Lee'
    }
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

  const getCaseTypeColor = (type: string) => {
    switch(type) {
      case 'criminal': return 'error';
      case 'civil': return 'warning';
      case 'corporate': return 'deep-blue';
      default: return 'slate';
    }
  };

  // Filter cases
  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = caseItem.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseItem.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || caseItem.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || caseItem.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Sort cases
  const sortedCases = [...filteredCases].sort((a, b) => {
    let aValue = a[sortField as keyof typeof a];
    let bValue = b[sortField as keyof typeof b];
    
    if (sortField === 'startDate' || sortField === 'lastUpdated') {
      aValue = new Date(aValue as string).getTime();
      bValue = new Date(bValue as string).getTime();
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedCases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCases = sortedCases.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  // Define fixed columns (left and right)
  const leftFixedColumns = ['caseNumber'];
  const rightFixedColumns = ['actions'];

  return (
    <main className="h-full flex flex-col p-6">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Case Management</h1>
            <p className="text-slate-500 mt-1">Manage and track all criminal cases</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all">
              <Download size={18} />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-all">
              <Printer size={18} />
              <span>Print</span>
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-premium hover:bg-gradient-premium-hover text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-glow"
            >
              <Plus size={18} />
              <span>New Case</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-4 mb-6 flex-shrink-0">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search cases by number, title, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 focus:ring-2 focus:ring-deep-blue-400/20 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-deep-blue-400 bg-white"
            >
              <option value="all">All Priority</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={18} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Cases Table - With Fixed Left and Right Columns */}
      <div className="bg-white rounded-2xl shadow-premium border border-slate-100 flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto">
          <div className="relative min-w-[1400px]">
            <table className="w-full table-fixed">
              <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  {/* Fixed Left Column - Case # */}
                  <th 
                    onClick={() => handleSort('caseNumber')}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:text-deep-blue-600 transition-colors whitespace-nowrap sticky left-0 bg-slate-50 z-20 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]"
                    style={{ width: '120px' }}
                  >
                    Case # {getSortIcon('caseNumber')}
                  </th>
                  
                  {/* Scrollable Middle Columns */}
                  <th 
                    onClick={() => handleSort('title')}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:text-deep-blue-600 transition-colors whitespace-nowrap"
                    style={{ width: '200px' }}
                  >
                    Title {getSortIcon('title')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '150px' }}>
                    Client
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '100px' }}>
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '100px' }}>
                    Priority
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '100px' }}>
                    Status
                  </th>
                  <th 
                    onClick={() => handleSort('startDate')}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:text-deep-blue-600 transition-colors whitespace-nowrap"
                    style={{ width: '100px' }}
                  >
                    Start Date {getSortIcon('startDate')}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '100px' }}>
                    Evidence
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap" style={{ width: '150px' }}>
                    Assigned To
                  </th>
                  <th 
                    onClick={() => handleSort('lastUpdated')}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:text-deep-blue-600 transition-colors whitespace-nowrap"
                    style={{ width: '120px' }}
                  >
                    Last Updated {getSortIcon('lastUpdated')}
                  </th>
                  
                  {/* Fixed Right Column - Actions */}
                  <th 
                    className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap sticky right-0 bg-slate-50 z-20 shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.05)]"
                    style={{ width: '100px' }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedCases.map((caseItem) => (
                  <tr 
                    key={caseItem.id}
                    className="hover:bg-slate-50 transition-colors cursor-pointer group"
                    onClick={() => setSelectedCase(caseItem)}
                  >
                    {/* Fixed Left Column - Case # */}
                    <td className="px-4 py-3 whitespace-nowrap sticky left-0 bg-white group-hover:bg-slate-50 z-10 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                      <span className="text-sm font-mono font-medium text-deep-blue-600">
                        {caseItem.caseNumber}
                      </span>
                    </td>
                    
                    {/* Scrollable Middle Columns */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm font-medium text-slate-800 truncate block" style={{ maxWidth: '180px' }}>
                        {caseItem.title}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm text-slate-600 truncate block" style={{ maxWidth: '130px' }}>
                        {caseItem.clientName}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full bg-${getCaseTypeColor(caseItem.caseType)}-100 text-${getCaseTypeColor(caseItem.caseType)}-700 capitalize whitespace-nowrap`}>
                        {caseItem.caseType}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-${getPriorityColor(caseItem.priority)}-100 text-${getPriorityColor(caseItem.priority)}-700 whitespace-nowrap`}>
                        <Shield size={10} />
                        {getPriorityLabel(caseItem.priority)}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full bg-${getStatusColor(caseItem.status)}-100 text-${getStatusColor(caseItem.status)}-700 whitespace-nowrap`}>
                        {getStatusLabel(caseItem.status)}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm text-slate-600">{caseItem.startDate}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <FileText size={14} className="text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">{caseItem.evidenceCount}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex -space-x-2">
                        {caseItem.assignedMembers.slice(0, 3).map((member, idx) => (
                          <div 
                            key={idx}
                            className="w-7 h-7 rounded-full bg-gradient-premium flex items-center justify-center text-white text-xs font-medium ring-2 ring-white"
                            title={member}
                          >
                            {member.charAt(0)}
                          </div>
                        ))}
                        {caseItem.assignedMembers.length > 3 && (
                          <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 ring-2 ring-white">
                            +{caseItem.assignedMembers.length - 3}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm text-slate-500">
                        {new Date(caseItem.lastUpdated).toLocaleDateString()}
                      </span>
                    </td>
                    
                    {/* Fixed Right Column - Actions */}
                    <td className="px-4 py-3 text-center whitespace-nowrap sticky right-0 bg-white group-hover:bg-slate-50 z-10 shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.05)]">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCase(caseItem);
                          }}
                          className="p-1.5 rounded-lg text-deep-blue-600 hover:bg-deep-blue-50 transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-error-500 hover:bg-error-50 transition-colors"
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

        {/* Pagination - Fixed at bottom */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex-shrink-0">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="text-sm text-slate-500">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedCases.length)} of {sortedCases.length} cases
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
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
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-12 text-center flex-1 flex items-center justify-center">
          <div>
            <FileText size={64} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-medium text-slate-800 mb-2">No cases found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterStatus('all');
                setFilterPriority('all');
              }}
              className="text-deep-blue-600 hover:text-deep-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}

      {/* Create Case Modal */}
      {showCreateModal && (
        <CreateCaseModal onClose={() => setShowCreateModal(false)} />
      )}

      {/* Case Details Modal */}
      {selectedCase && (
        <CaseDetails case={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </main>
  );
};

export default Cases;