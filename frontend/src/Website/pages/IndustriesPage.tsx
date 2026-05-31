import React from "react";
import {
  Building2,
  Landmark,
  
  Gavel,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Users,
  Briefcase,
  Scale,
} from "lucide-react";

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      icon: Building2,
      title: "Corporations",
      desc: "E-discovery, internal investigations, contract review for Energy, Financial Services, Pharma, Tech.",
      features: [
        "Fortune 500 compliant",
        "Cross-border e-discovery",
        "Internal audit trails",
      ],
    },
    {
      icon: Landmark,
      title: "Federal Agencies",
      desc: "FedRAMP-authorized solution for legal intelligence and evidence management.",
      features: [
        "FedRAMP High ready",
        "IL4/IL5 compatible",
        "Continuous monitoring",
      ],
    },
    {
      icon: Building2,
      title: "State & Local Agencies",
      desc: "Manage more cases, big and small, with one unified secure platform.",
      features: ["CJIS compliant", "Budget-friendly", "Scalable"],
    },
    {
      icon: Gavel,
      title: "Law Firms",
      desc: "Faster results, lower costs, and business growth with secure flexible solution.",
      features: [
        "Client portals",
        "Billable hours tracking",
        "Court-ready exports",
      ],
    },
    {
      icon: Scale,
      title: "Legal Departments",
      desc: "In-house legal teams gain control over evidence and reduce outside counsel spend.",
      features: [
        "Matter management",
        "Outside counsel collaboration",
        "Cost control",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cyber Insurers",
      desc: "Breach response technology that impacts project outcomes.",
      features: ["Incident response", "Claims validation", "Risk assessment"],
    },
    {
      icon: Microscope,
      title: "Digital Forensics",
      desc: "SHA-256 chain-of-custody for forensic labs and examiners.",
      features: [
        "Forensic toolkit integration",
        "Expert witness reports",
        "Tool validation",
      ],
    },
    {
      icon: GraduationCap,
      title: "Academic Programs",
      desc: "Hands-on legal technology experience for law, forensics, and data science students.",
      features: ["Academic licensing", "Curriculum support", "Research access"],
    },
  ];

  return (
    <div className="py-16">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Trusted by organizations across every sector to secure their digital
            evidence
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <ind.icon
                    size={40}
                    className="text-indigo-600 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{ind.title}</h3>
                    <p className="text-gray-500 mt-1">{ind.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {ind.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
