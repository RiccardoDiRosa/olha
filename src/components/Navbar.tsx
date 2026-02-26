import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi Sono', href: '#chi-sono' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Galleria', href: '#galleria' },
    { name: 'Recensioni', href: '#recensioni' },
    { name: 'Contatti', href: '#contatti' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ScrollSpy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-serif font-semibold text-stone-900">
              Elena Massaggi
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-stone-900',
                  activeSection === link.href.substring(1)
                    ? 'text-stone-900 underline underline-offset-8 decoration-2 decoration-stone-400'
                    : 'text-stone-600'
                )}
              >
                {link.name}
              </a>
            ))}
            <Button asChild variant="default" size="sm">
              <a href="#contatti">Prenota Ora</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute top-full left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-md text-base font-medium',
                  activeSection === link.href.substring(1)
                    ? 'bg-stone-50 text-stone-900'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full">
                <a href="#contatti" onClick={() => setIsMobileMenuOpen(false)}>Prenota Ora</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
