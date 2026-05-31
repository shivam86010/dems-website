import React from "react";
import {
  Shield,
  Lock,
  Fingerprint,
  Eye,
  Database,
  FileCheck,
  Server,
  Wifi,
  Key,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const SecurityPage: React.FC = () => {
  const certs = [
    "SOC2 Type II",
    "ISO 27001",
    "FedRAMP High",
    "GDPR",
    "HIPAA",
    "CJIS",
    "PCI DSS Level 1",
  ];

  return (
    <div className="py-16">
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Security & Compliance</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Defense-in-depth architecture designed for the most regulated
            environments
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold">
                Security First Architecture
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="text-indigo-600 mt-1" />
                  <div>
                    <strong className="font-semibold">
                      Encryption at Rest & In Transit
                    </strong>
                    <p className="text-gray-500 text-sm">
                      AES-256 for data at rest, TLS 1.3 for all communications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Fingerprint className="text-indigo-600 mt-1" />
                  <div>
                    <strong className="font-semibold">
                      Zero Trust Network
                    </strong>
                    <p className="text-gray-500 text-sm">
                      No implicit trust, continuous verification of every
                      request
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="text-indigo-600 mt-1" />
                  <div>
                    <strong className="font-semibold">
                      Immutable Audit Trail
                    </strong>
                    <p className="text-gray-500 text-sm">
                      Every action logged, cryptographically sealed, cannot be
                      altered
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Key className="text-indigo-600 mt-1" />
                  <div>
                    <strong className="font-semibold">Key Management</strong>
                    <p className="text-gray-500 text-sm">
                      Hardware Security Modules (HSM) and BYOK support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-bold text-xl">Compliance Certifications</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className="bg-white border px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold">Continuous Monitoring</h4>
                <p className="text-sm text-gray-500 mt-1">
                  24/7/365 security operations center with real-time threat
                  detection and automated incident response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
