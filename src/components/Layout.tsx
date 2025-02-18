import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Shield, Zap, Heart, Hammer, Target, Radiation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: '/captain-america', name: 'Captain America', Icon: Shield, color: 'hover:text-blue-400' },
    { path: '/iron-man', name: 'Iron Man', Icon: Zap, color: 'hover:text-red-400' },
    { path: '/thor', name: 'Thor', Icon: Hammer, color: 'hover:text-green-400' },
    { path: '/black-widow', name: 'Black Widow', Icon: Heart, color: 'hover:text-red-400' },
    { path: '/hawkeye', name: 'Hawkeye', Icon: Target, color: 'hover:text-green-400' },
    { path: '/hulk', name: 'Hulk', Icon: Radiation, color: 'hover:text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-green-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500/30">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Shield className="h-8 w-8 text-blue-400" />
              <span>The Avengers</span>
            </Link>
            <div className="flex gap-6 overflow-x-auto pb-2">
              {navLinks.map(({ path, name, Icon, color }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-gray-100 ${color} flex items-center gap-1 relative px-2 py-1 transition-colors ${
                    location.pathname === path ? 'text-white font-semibold' : ''
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                  {location.pathname === path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-blue-900/40 via-black/60 to-green-900/40 p-8 rounded-lg shadow-2xl backdrop-blur-sm border border-red-500/20"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-md border-t border-red-500/30 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">The Avengers</h3>
              <p className="text-gray-100">
                Earth's Mightiest Heroes stand as the planet's first line of defense against the world's most powerful threats.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(({ path, name }) => (
                  <li key={path}>
                    <Link to={path} className="text-gray-100 hover:text-white transition-colors">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-500/20 text-center text-gray-100">
            <p>© {new Date().getFullYear()} The Avengers. Earth's Mightiest Heroes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}