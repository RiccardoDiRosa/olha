import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Grazie per il tuo messaggio! Ti ricontatterò al più presto.");
  };

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-stone-500 mb-3">Contatti</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Prenota il tuo momento di relax
          </h3>
          <p className="text-lg text-stone-600 font-light">
            Scegli il modo che preferisci per contattarmi. Sono a tua disposizione 
            per informazioni o per fissare un appuntamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h4 className="text-2xl font-serif text-stone-900 mb-8">Informazioni Utili</h4>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-stone-900 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-1">Telefono</p>
                    <a href="tel:+393331234567" className="text-lg text-stone-900 hover:text-stone-600 transition-colors">
                      +39 333 123 4567
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-stone-900 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@elenamassaggi.it" className="text-lg text-stone-900 hover:text-stone-600 transition-colors">
                      info@elenamassaggi.it
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-stone-900 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-1">Studio</p>
                    <p className="text-lg text-stone-900">
                      Via Roma, 123<br />
                      20100 Milano (MI)
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm text-stone-900 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-1">Orari</p>
                    <p className="text-lg text-stone-900">
                      Lun – Ven: 9:00 – 19:00<br />
                      Sabato: 9:00 – 14:00
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Button asChild className="w-full h-14 text-base rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                  <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    Scrivimi su WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100 h-full">
              <h4 className="text-2xl font-serif text-stone-900 mb-8">Invia un messaggio</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-nome" className="block text-sm font-medium text-stone-700 mb-2">Nome</label>
                    <Input id="contact-nome" required placeholder="Il tuo nome" className="bg-stone-50" />
                  </div>
                  <div>
                    <label htmlFor="contact-cognome" className="block text-sm font-medium text-stone-700 mb-2">Cognome</label>
                    <Input id="contact-cognome" placeholder="Il tuo cognome" className="bg-stone-50" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <Input id="contact-email" type="email" required placeholder="La tua email" className="bg-stone-50" />
                </div>

                <div>
                  <label htmlFor="contact-telefono" className="block text-sm font-medium text-stone-700 mb-2">Telefono</label>
                  <Input id="contact-telefono" type="tel" placeholder="Il tuo numero (opzionale)" className="bg-stone-50" />
                </div>

                <div>
                  <label htmlFor="contact-messaggio" className="block text-sm font-medium text-stone-700 mb-2">Messaggio</label>
                  <Textarea 
                    id="contact-messaggio" 
                    required 
                    placeholder="Come posso aiutarti?" 
                    className="min-h-[150px] bg-stone-50 resize-none" 
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="contact-privacy"
                      type="checkbox"
                      required
                      className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="contact-privacy" className="text-stone-600">
                      Acconsento al trattamento dei dati personali secondo la <a href="/privacy-policy" className="text-stone-900 underline underline-offset-2">Privacy Policy</a>.
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full h-14 text-base rounded-xl">
                  Invia Messaggio
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
