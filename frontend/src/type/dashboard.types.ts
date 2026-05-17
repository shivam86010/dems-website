export interface Stats {
  totalCases: number;
  pendingCases: number;
  aiSummarized: number;
  evidenceVerified: number;
  priorityHigh: number;
  backlogReduction: number;
}

export interface MonthlyData {
  month: string;
  newCases: number;
  resolved: number;
  pending: number;
  aiProcessed: number;
}

export interface PriorityData {
  name: string;
  value: number;
  color: string;
}

export interface JudgeLoadData {
  judge: string;
  activeCases: number;
  resolvedMonth: number;
  pendingOver90: number;
}

export interface PendingAgeData {
  name: string;
  value: number;
  color: string;
}

export interface HearingData {
  month: string;
  scheduled: number;
  conducted: number;
  adjourned: number;
  percentage: number;
}

export interface EvidenceAdmissibilityData {
  type: string;
  submitted: number;
  admitted: number;
  rate: number;
}

export interface DisposalRateData {
  type: string;
  filed: number;
  disposed: number;
  rate: number;
}

export interface DisposalVsFilingData {
  month: string;
  filed: number;
  disposed: number;
  gap: number;
}

export interface BacklogProjection {
  month: string;
  actual: number | null;
  projected: number;
  target: number;
}

export interface RecentCase {
  id: string;
  title: string;
  crime: string;
  priority: "critical" | "high" | "medium" | "low";
  date: string;
  aiSummary: boolean;
}

export interface PendingAlert {
  id: number;
  case: string;
  caseId: string;
  pending: string;
  issue: string;
  action: "Request Evidence" | "Summon Witness" | "Verify Now";
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color?: string;
    fill?: string;
  }>;
  label?: string;
}
