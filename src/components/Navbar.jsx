import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navItems = [
    { name: 'Home', targetId: 'home' },
    { name: 'About', targetId: 'about' },
    { name: 'Experience', targetId: 'experience' },
    { name: 'Education', targetId: 'education' },
    { name: 'Projects', targetId: 'projects' },
    { name: 'Contact', targetId: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 top-0 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white flex-shrink-0 pl-[20px] lg:pl-0"
          >
            Tushar<span className="text-[#ff6b00]">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:mr-[50px]">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item.targetId)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-[#ff6b00] transition-colors text-base font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              className="text-white p-2 hover:text-[#ff6b00] transition-colors md:pr-[40px] pr-[30px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-[#ff6b00] transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
