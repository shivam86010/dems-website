import React from "react";
import {
  FileText,
  Video,
  Download,
  BookOpen,
  Users,
  Calendar,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: "Whitepapers",
      items: [
        "SHA-256 in Evidence Integrity",
        "Chain-of-Custody Best Practices",
        "Zero Trust for Legal Teams",
      ],
    },
    {
      icon: Video,
      title: "Webinars",
      items: [
        "Introduction to DEMS+",
        "Forensic Readiness Workshop",
        "E-Discovery Masterclass",
      ],
    },
    {
      icon: BookOpen,
      title: "Documentation",
      items: [
        "API Reference",
        "Security Architecture Guide",
        "Compliance Checklist",
      ],
    },
    {
      icon: Users,
      title: "Case Studies",
      items: [
        "Global Bank: Evidence Management",
        "Federal Agency: Chain-of-Custody",
        "Law Firm: Cost Reduction",
      ],
    },
  ];

  return (
    <div className="py-16">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Deep dives, technical documentation, and expert insights on evidence
            integrity
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((cat, idx) => (
              <div key={idx} className="border rounded-xl p-6">
                <cat.icon size={32} className="text-indigo-600" />
                <h3 className="font-bold text-xl mt-3">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="text-gray-600 hover:text-indigo-600 cursor-pointer text-sm flex items-center gap-1"
                    >
                      <ChevronRight size={14} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
