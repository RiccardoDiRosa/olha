import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Clock, Euro } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Massaggio Rilassante',
    description: 'Movimenti lenti e avvolgenti per sciogliere le tensioni, ridurre lo stress e favorire un profondo stato di relax mentale e fisico.',
    duration: '60 min',
    price: '60',
    image: 'https://picsum.photos/seed/relax/600/400'
  },
  {
    id: 2,
    title: 'Massaggio Decontratturante',
    description: 'Trattamento mirato per sciogliere le contratture muscolari, alleviare i dolori localizzati e ripristinare la normale elasticità dei tessuti.',
    duration: '50 min',
    price: '65',
    image: 'https://picsum.photos/seed/decontratturante/600/400'
  },
  {
    id: 3,
    title: 'Massaggio Sportivo',
    description: 'Ideale per atleti e sportivi. Prepara il muscolo allo sforzo, previene infortuni e accelera il recupero post-allenamento o gara.',
    duration: '60 min',
    price: '70',
    image: 'https://picsum.photos/seed/sport/600/400'
  },
  {
    id: 4,
    title: 'Riflessologia Plantare',
    description: 'Stimolazione di punti specifici del piede per riequilibrare l\'energia degli organi interni e favorire il benessere generale dell\'organismo.',
    duration: '45 min',
    price: '50',
    image: 'https://picsum.photos/seed/riflessologia/600/400'
  },
  {
    id: 5,
    title: 'Massaggio Linfodrenante',
    description: 'Tecnica dolce che favorisce il drenaggio dei liquidi linfatici, riducendo gonfiori e ritenzione idrica, migliorando la circolazione.',
    duration: '60 min',
    price: '65',
    image: 'https://picsum.photos/seed/linfodrenante/600/400'
  },
  {
    id: 6,
    title: 'Trattamento Viso & Cranio',
    description: 'Massaggio delicato per alleviare tensioni cervicali, mal di testa e stress, donando luminosità al viso e relax profondo.',
    duration: '30 min',
    price: '40',
    image: 'https://picsum.photos/seed/viso/600/400'
  }
];

export function Services() {
  return (
    <section id="servizi" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-stone-500 mb-3">I Miei Servizi</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Trattamenti per ogni esigenza
          </h3>
          <p className="text-lg text-stone-600 font-light">
            Scegli il massaggio più adatto a te. Ogni sessione è personalizzata in base 
            alle tue necessità specifiche per garantirti il massimo beneficio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group flex flex-col"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-serif text-stone-900 mb-3">{service.title}</h4>
                <p className="text-stone-600 font-light mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-stone-100 mb-6">
                  <div className="flex items-center text-stone-500 text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-stone-900 font-medium text-lg">
                    <Euro size={18} className="mr-1" />
                    <span>{service.price}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full rounded-full" variant="outline">
                  <a href="#contatti">Prenota Ora</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
