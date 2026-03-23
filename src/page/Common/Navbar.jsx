import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { ThemeContext } from '../../Provider/ThemProvider';
import { useContext } from 'react';
import { LuSunMoon } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";
const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
   ${isActive
     ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 dark:bg-cyan-500/30'
     : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 hover:text-cyan-600 dark:hover:text-cyan-400'
   }`;

const mobileNavLinkClass = ({ isActive }) =>
  `block px-4 py-3 rounded-lg text-base font-medium transition-colors
   ${isActive
     ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
     : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
   }`;

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500">
                  <div className="absolute h-4 w-1 rounded-full bg-white" />
                </div>
                <div>
                  <span className="font-bold text-xl text-gray-900 dark:text-white">
                    Loan<span className="text-cyan-500">Sphere</span>
                  </span>
                
                </div>
              </Link>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/all-loans" className={navLinkClass}>All Loans</NavLink>
            {!isLoggedIn && (
              <>
                <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
                <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              </>
            )}
            {isLoggedIn && (
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-lg text-gray-600 cursor-pointer hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-gray-300 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
               <BsFillMoonStarsFill className='h-5 w-5' />

              ) : (
                <IoSunnySharp className='h-5 w-5' />
              )}
            </button>

            {!isLoggedIn ? (
              <div className="ml-2 flex items-center gap-1">
                <NavLink
                  to="/login"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-gray-300 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400 transition-colors"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                >
                  Register
                </NavLink>
              </div>
            ) : (
              <div className="ml-2 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400 font-semibold text-sm">
                  {user?.name?.[0]?.toUpperCase() ?? 'U'}
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile: Right side - Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-gray-600 hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-gray-300 dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400"
              aria-label="Toggle theme"
            >
               {theme === 'dark' ? (
               <BsFillMoonStarsFill className='h-5 w-5' />

              ) : (
                <IoSunnySharp className='h-5 w-5' />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="space-y-1 px-4 py-4">
            <NavLink to="/" className={mobileNavLinkClass} end onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/all-loans" className={mobileNavLinkClass} onClick={closeMobileMenu}>All Loans</NavLink>
            {!isLoggedIn && (
              <>
                <NavLink to="/about" className={mobileNavLinkClass} onClick={closeMobileMenu}>About Us</NavLink>
                <NavLink to="/contact" className={mobileNavLinkClass} onClick={closeMobileMenu}>Contact</NavLink>
                <NavLink to="/login" className={mobileNavLinkClass} onClick={closeMobileMenu}>Login</NavLink>
                <NavLink
                  to="/register"
                  className="block px-4 py-3 rounded-lg text-base font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors text-center"
                  onClick={closeMobileMenu}
                >
                  Register
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <NavLink to="/dashboard" className={mobileNavLinkClass} onClick={closeMobileMenu}>Dashboard</NavLink>
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-600 dark:bg-cyan-500/30 dark:text-cyan-400 font-semibold">
                    {user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-medium">{user?.name ?? 'User'}</span>
                </div>
                <button
                  onClick={() => { logout(); closeMobileMenu(); }}
                  className="block w-full px-4 py-3 text-left rounded-lg text-base font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
