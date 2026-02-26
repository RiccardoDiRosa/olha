import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/massage-hero/1920/1080?blur=2"
          alt="Atmosfera rilassante studio massaggi"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/50 to-stone-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-stone-200/50 text-stone-700 text-sm font-medium tracking-wider uppercase mb-4">
            Benessere & Relax
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">
            Massaggi su misura per il tuo benessere
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Ritrova l'equilibrio tra corpo e mente con trattamenti personalizzati.
            Dalla tensione muscolare al puro relax, un'esperienza dedicata a te.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full">
              <a href="#contatti">Prenota una sessione</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-stone-300 bg-transparent hover:bg-stone-100">
              <a href="#servizi">Scopri i servizi</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-stone-500">Scorri</span>
        <div className="w-[1px] h-12 bg-stone-300 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-stone-600"
          />
        </div>
      </motion.div>
    </section>
  );
}
