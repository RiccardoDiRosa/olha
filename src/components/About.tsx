import { motion } from 'motion/react';

export function About() {
  return (
    <section id="chi-sono" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://picsum.photos/seed/massage-profile/800/1000"
                alt="Elena - Professionista Massaggi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-stone-900 text-stone-50 p-8 rounded-full shadow-xl flex flex-col items-center justify-center w-40 h-40 border-8 border-white">
              <span className="text-4xl font-serif font-bold">10+</span>
              <span className="text-xs uppercase tracking-widest mt-1 text-center">Anni di<br/>Esperienza</span>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-stone-500 mb-3">Chi Sono</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                La passione per il benessere del corpo
              </h3>
            </div>
            
            <div className="prose prose-stone prose-lg text-stone-600 font-light">
              <p>
                Ciao, sono Elena. Da oltre dieci anni mi dedico con passione all'arte del massaggio, 
                aiutando le persone a ritrovare l'equilibrio psicofisico e a sciogliere le tensioni 
                accumulate nella vita quotidiana.
              </p>
              <p>
                Il mio approccio è olistico e personalizzato: ogni corpo ha una storia diversa e 
                necessita di un trattamento specifico. Ascolto le tue esigenze per offrirti 
                un'esperienza che va oltre il semplice rilassamento muscolare.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <h4 className="text-lg font-medium text-stone-900 mb-4">Formazione & Certificazioni</h4>
              <ul className="space-y-3 text-stone-600">
                <li className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✦</span>
                  <span>Diploma Nazionale Massaggiatore Sportivo (CSEN)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✦</span>
                  <span>Specializzazione in Massaggio Decontratturante e Miofasciale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✦</span>
                  <span>Corso Avanzato di Riflessologia Plantare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 mr-3 mt-1">✦</span>
                  <span>Operatrice Olistica del Benessere</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
