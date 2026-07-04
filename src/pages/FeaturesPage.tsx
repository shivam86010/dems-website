import React from "react";
import {
  Gavel,
  CloudUpload,
  Link,
  Users,
  BarChart3,
  Calendar,
  Fingerprint,
  FileText,
  Shield,
  Database,
  Clock,
  Eye,
} from "lucide-react";

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Gavel,
      title: "Case Management",
      desc: "Centralized workflows, assignments, status tracking, full lifecycle management.",
    },
    {
      icon: CloudUpload,
      title: "Secure Evidence Upload",
      desc: "Encrypted ingestion, automatic SHA-256 hashing, virus scanning, and malware detection.",
    },
    {
      icon: Link,
      title: "Chain-of-Custody",
      desc: "Immutable timestamped logs, view/download events, integrity checks, and custody transfers.",
    },
    {
      icon: Users,
      title: "RBAC + Signed URLs",
      desc: "Fine-grained roles, time-limited secure object access, and attribute-based access control.",
    },
    {
      icon: BarChart3,
      title: "Audit & Analytics",
      desc: "Complete audit logging, dashboard analytics, activity timeline, and compliance reporting.",
    },
    {
      icon: Calendar,
      title: "Hearing Scheduling",
      desc: "Meeting scheduler with evidence prep checklist, calendar integration, and reminders.",
    },
    {
      icon: Fingerprint,
      title: "Biometric Auth",
      desc: "FaceID, fingerprint, and hardware token support for multi-factor authentication.",
    },
    {
      icon: FileText,
      title: "Document Processing",
      desc: "OCR, redaction, and conversion for 200+ file formats with automated text extraction.",
    },
    {
      icon: Shield,
      title: "Zero Trust Security",
      desc: "No implicit trust. Every request verified, encrypted, and logged.",
    },
    {
      icon: Database,
      title: "Immutable Storage",
      desc: "WORM-compliant storage with retention policies and legal hold capabilities.",
    },
    {
      icon: Clock,
      title: "Activity Timeline",
      desc: "Visual timeline of every evidence interaction from ingestion to production.",
    },
    {
      icon: Eye,
      title: "Redaction Tool",
      desc: "AI-assisted redaction for PII, PHI, and classified information.",
    },
  ];

  return (
    <div className="py-16">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Enterprise Features</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Purpose-built for legal and forensic professionals who demand
            absolute integrity
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl hover:shadow-lg transition-all"
              >
                <feat.icon size={32} className="text-indigo-600" />
                <h3 className="text-xl font-bold mt-3">{feat.title}</h3>
                <p className="text-gray-600 mt-2">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
