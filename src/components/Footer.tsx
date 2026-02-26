import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-serif font-semibold text-stone-50 mb-4 inline-block">
              Elena Massaggi
            </a>
            <p className="text-stone-500 max-w-sm mb-6 font-light">
              Massaggi su misura per il tuo benessere. Ritrova l'equilibrio 
              tra corpo e mente con trattamenti personalizzati.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-50 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-50 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-50 font-medium mb-6 uppercase tracking-widest text-sm">Navigazione</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-stone-50 transition-colors">Home</a></li>
              <li><a href="#chi-sono" className="hover:text-stone-50 transition-colors">Chi Sono</a></li>
              <li><a href="#servizi" className="hover:text-stone-50 transition-colors">Servizi</a></li>
              <li><a href="#galleria" className="hover:text-stone-50 transition-colors">Galleria</a></li>
              <li><a href="#recensioni" className="hover:text-stone-50 transition-colors">Recensioni</a></li>
              <li><a href="#contatti" className="hover:text-stone-50 transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-stone-50 font-medium mb-6 uppercase tracking-widest text-sm">Legale</h4>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="hover:text-stone-50 transition-colors">Privacy Policy</a></li>
              <li><a href="/cookie-policy" className="hover:text-stone-50 transition-colors">Cookie Policy</a></li>
              <li><a href="/termini" className="hover:text-stone-50 transition-colors">Termini e Condizioni</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Elena Massaggi. Tutti i diritti riservati.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            P.IVA 12345678901
          </p>
        </div>
      </div>
    </footer>
  );
}
