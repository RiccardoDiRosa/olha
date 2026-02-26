import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { supabase } from '@/src/lib/supabase';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

interface Review {
  id: string;
  nome: string;
  stelle: number;
  testo: string;
  created_at: string;
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  
  // Form state
  const [nome, setNome] = useState('');
  const [stelle, setStelle] = useState(5);
  const [testo, setTesto] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('recensioni')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !testo || !privacy || stelle < 1 || stelle > 5) return;

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('recensioni')
        .insert([{ nome, stelle, testo }]);

      if (error) throw error;

      setSubmitStatus('success');
      setNome('');
      setStelle(5);
      setTesto('');
      setPrivacy(false);
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  return (
    <section id="recensioni" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-stone-500 mb-3">Dicono di Me</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
            Le esperienze dei miei clienti
          </h3>
          <p className="text-lg text-stone-600 font-light">
            La soddisfazione di chi si affida alle mie mani è la gratificazione più grande.
            Leggi cosa dicono dei miei trattamenti.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-900"></div>
          </div>
        ) : reviews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative"
                >
                  <MessageSquareQuote className="absolute top-8 right-8 text-stone-100" size={48} />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.stelle ? "text-amber-400 fill-amber-400" : "text-stone-200"}
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 font-light italic mb-6 relative z-10">"{review.testo}"</p>
                  <div className="mt-auto pt-6 border-t border-stone-50">
                    <p className="font-medium text-stone-900">{review.nome}</p>
                    <p className="text-xs text-stone-400 mt-1">{formatDate(review.created_at)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {reviews.length > 6 && (
              <div className="text-center mb-24">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full px-8"
                >
                  {showAll ? 'Mostra meno' : 'Mostra tutte le recensioni'}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-stone-500 mb-24 italic">
            Nessuna recensione ancora pubblicata. Sii il primo a lasciare un feedback!
          </div>
        )}

        {/* Review Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif text-stone-900 mb-2">Lascia una recensione</h4>
            <p className="text-stone-500 text-sm">Condividi la tua esperienza con gli altri.</p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center border border-emerald-100">
              <p className="font-medium mb-2">Grazie per la tua recensione!</p>
              <p className="text-sm opacity-80">Sarà pubblicata non appena verrà approvata.</p>
              <Button 
                variant="outline" 
                className="mt-6 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                onClick={() => setSubmitStatus('idle')}
              >
                Scrivi un'altra recensione
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-stone-700 mb-2">Nome</label>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Il tuo nome"
                  required
                  maxLength={50}
                  className="bg-stone-50 border-stone-200 focus-visible:ring-stone-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Valutazione</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setStelle(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        className={star <= stelle ? "text-amber-400 fill-amber-400" : "text-stone-200"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="testo" className="block text-sm font-medium text-stone-700 mb-2">La tua esperienza</label>
                <Textarea
                  id="testo"
                  value={testo}
                  onChange={(e) => setTesto(e.target.value)}
                  placeholder="Racconta come ti sei trovato..."
                  required
                  minLength={10}
                  maxLength={500}
                  className="min-h-[120px] bg-stone-50 border-stone-200 focus-visible:ring-stone-400 resize-none"
                />
                <p className="text-xs text-stone-400 mt-2 text-right">{testo.length}/500</p>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={privacy}
                    onChange={(e) => setPrivacy(e.target.checked)}
                    required
                    className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-900"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-stone-600">
                    Acconsento al trattamento dei dati personali secondo la <a href="/privacy-policy" className="text-stone-900 underline underline-offset-2">Privacy Policy</a>.
                  </label>
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-100">
                  Si è verificato un errore durante l'invio. Riprova più tardi.
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 text-base rounded-xl" 
                disabled={submitting}
              >
                {submitting ? 'Invio in corso...' : 'Invia recensione'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
