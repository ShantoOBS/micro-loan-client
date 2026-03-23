import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Integrate with newsletter API
      setEmail('');
    }
  };

  const footerLinks = [
    { label: 'Features', to: '/' },
    { label: 'All Loans', to: '/all-loans' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="mt-auto bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Branding & Navigation */}
          <div className="flex flex-col gap-6">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500">
                  <div className="absolute h-4 w-1 rounded-full bg-white" />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-900 dark:text-white">
                    Loan<span className="text-cyan-500">Sphere</span>
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    Smart micro-lending for everyone.
                  </p>
                </div>
              </Link>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 text-gray-600 dark:text-gray-400 font-medium">
                {footerLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: App Download Card */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800/80 p-5 flex items-center gap-4 max-w-sm">
            <div className="shrink-0 p-2 rounded-lg border-2 border-cyan-500 bg-white dark:bg-gray-900">
              {/* Placeholder QR Code pattern */}
              <svg
                viewBox="0 0 100 100"
                className="h-20 w-20"
                fill="currentColor"
              >
                <rect width="100" height="100" fill="white" />
                <rect x="10" y="10" width="25" height="25" fill="black" />
                <rect x="65" y="10" width="25" height="25" fill="black" />
                <rect x="10" y="65" width="25" height="25" fill="black" />
                <rect x="40" y="10" width="8" height="8" fill="black" />
                <rect x="52" y="10" width="8" height="8" fill="black" />
                <rect x="10" y="40" width="8" height="8" fill="black" />
                <rect x="10" y="52" width="8" height="8" fill="black" />
                <rect x="40" y="40" width="35" height="35" fill="black" />
                <rect x="48" y="48" width="20" height="20" fill="white" />
                <rect x="52" y="52" width="12" height="12" fill="black" />
                <rect x="65" y="40" width="8" height="8" fill="black" />
                <rect x="65" y="52" width="8" height="8" fill="black" />
                <rect x="40" y="65" width="8" height="8" fill="black" />
                <rect x="52" y="65" width="8" height="8" fill="black" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Download the app
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md w-full sm:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer px-5 py-2.5 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Join our newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
