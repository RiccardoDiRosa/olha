import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-stone-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-stone prose-lg text-stone-600 font-light">
            <p>
              Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR).
            </p>
            
            <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento è Elena Massaggi, con sede in Via Roma 123, 20100 Milano (MI), P.IVA 12345678901.
              Email di contatto: info@elenamassaggi.it.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">2. Finalità del Trattamento</h2>
            <p>
              I dati personali forniti volontariamente dagli utenti (nome, email, telefono, ecc.) tramite i form di contatto 
              o di recensione presenti sul sito sono trattati per le seguenti finalità:
            </p>
            <ul>
              <li>Rispondere alle richieste di informazioni o di prenotazione;</li>
              <li>Pubblicare le recensioni sul sito (previo consenso e moderazione);</li>
              <li>Adempiere ad obblighi di legge.</li>
            </ul>

            <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">3. Base Giuridica</h2>
            <p>
              La base giuridica del trattamento è il consenso dell'interessato, espresso tramite l'apposita spunta 
              nei form presenti sul sito, e l'esecuzione di misure precontrattuali adottate su richiesta dello stesso.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">4. Conservazione dei Dati</h2>
            <p>
              I dati saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti, 
              e comunque nel rispetto dei termini di legge. Le recensioni approvate rimarranno pubblicate sul sito fino a 
              richiesta di rimozione da parte dell'interessato.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-4">5. Diritti dell'Interessato</h2>
            <p>
              In ogni momento, l'utente può esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica, 
              cancellazione, limitazione, portabilità, opposizione) inviando una comunicazione all'indirizzo email del Titolare.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
