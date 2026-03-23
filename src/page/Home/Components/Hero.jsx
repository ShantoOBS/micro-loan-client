import { motion } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-50 via-purple-50/80 to-cyan-50 py-16 dark:from-slate-900 dark:via-purple-900/30 dark:to-slate-900 dark:text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Fast,<span className="text-cyan-500"> Secure</span> & <span className="text-cyan-500">Smart</span> Microloan Solutions
          </h1>

          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 max-w-xl">
            Apply for microloans easily and track approvals, EMI plans, and repayments in one platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link to="/apply-loan">
              <button className="bg-cyan-500 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:scale-105 transition-all dark:bg-cyan-500 dark:hover:bg-cyan-400">
                Apply for Loan
              </button>
            </Link>

            <Link to="/all-loans">
              <button className="border-2 cursor-pointer border-cyan-500 text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-white">
                Explore Loans
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image with decorative circles */}
        <motion.div
          className="relative w-full max-w-md shrink-0 overflow-visible"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative spinning circles behind image */}
          <div
            className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0 pointer-events-none mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] dark:mask-[linear-gradient(to_bottom,rgba(255,255,255,0.15),transparent_70%)]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 1026 1026" fill="none" className="absolute inset-0 h-full w-full animate-spin-slow">
              <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" strokeOpacity="0.7" />
              <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#hero-gradient-1)" strokeLinecap="round" />
              <defs>
                <linearGradient id="hero-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg viewBox="0 0 1026 1026" fill="none" className="absolute inset-0 h-full w-full animate-spin-reverse-slower">
              <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" strokeOpacity="0.7" />
              <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#hero-gradient-2)" strokeLinecap="round" />
              <defs>
                <linearGradient id="hero-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <img
            src="/assets/Hero-image.png"
            alt="Digital wallet and mobile banking - LoanSphere"
            className="relative z-10 w-full h-auto rounded-xl drop-shadow-xl animate-float dark:drop-shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;