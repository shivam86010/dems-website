import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D+</span>
              </div>
              <span className="font-bold text-white text-xl">
                DEMS<span className="text-indigo-400">+</span>
              </span>
            </Link>
            <p className="text-sm mt-3">
              Distributed Evidence & Case Management Platform. Enterprise-grade
              security for legal & forensic teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link
                  to="/features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="hover:text-white transition-colors"
                >
                  Security workflows
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-white transition-colors"
                >
                  Chain-of-custody
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-white transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="hover:text-white transition-colors"
                >
                  Compliance center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  GDPR
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="hover:text-white transition-colors"
                >
                  Security Whitepaper
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © 2026 DEMS+ — Secure Evidence, Chain-of-Custody & Case Management.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
