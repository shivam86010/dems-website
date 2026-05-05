export interface Case {
  id: string;
  caseNumber: string;
  title: string;
  clientName: string;
  caseType: 'civil' | 'criminal' | 'corporate';
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in_progress' | 'closed';
  startDate: string;
  endDate?: string;
  assignedMembers: string[];
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface Evidence {
  id: string;
  caseId: string;
  fileName: string;
  fileType: 'document' | 'image' | 'video';
  title: string;
  description: string;
  tags: string[];
  confidential: boolean;
  fileSize: number;
  fileHash: string;
  storagePath: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface AuditLog {
  id: string;
  action: string;
  userId: string;
  userName: string;
  caseId?: string;
  evidenceId?: string;
  details: any;
  timestamp: string;
  ipAddress: string;
}