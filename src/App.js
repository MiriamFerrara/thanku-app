import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Footer from './Footer';
import SlotMachine from './SlotMachine';
import miriamImage from './miriam.png';

const peopleData = [
  // Professori
 { id: 1, name: "Rosario", role: "Regia", type: "professor",
     dedication: "Come in un buon western, spara la verità dritto e chiaro: niente fronzoli, niente giri di parole… solo piombo e sincerità.",
     description: "Per te abbiamo scelto il giornale 📰… perché qualcuno doveva pur metterle nero su bianco, tutte le verità che spari a raffica!",
     emoji: "📰" // Giornale
   },
   { id: 2, name: "Federico", role: "Fotografo", type: "professor",
     dedication: "Federico è un fotografo calmo e riflessivo… ma prova a spostargli la luce e diventa una furia!",
     description: "Per te abbiamo scelto la luce 💡, perché sei l’unico capace di farci sentire falliti… solo con uno spostamento di luce!",
     emoji: "💡" // Luce
   },
   { id: 3, name: "Giacomo", role: "Montaggio", type: "professor",
     dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
     description: "Per te abbiamo scelto il programmatore 👨‍💻",
     emoji: "👨‍💻" //programmatore
   },
   // Studenti/Crew
   { id: 4, name: "Alessandro", role: "Assistente Regia e Montatore", type: "student",
     dedication: "Alessandro sensuale, fine ed elegante… un’anima riflessiva che ama la filosofia e trasforma ogni gesto in arte!",
     description: "Per te abbiamo scelto il ciak 🎬, perché sei bravissimo in tutto ciò che fai… come se la tua vita fosse un film e tu, il regista e l’attore protagonista.",
     emoji: "🎬" // Classico ciak
   },
   { id: 5, name: "Andrea", role: "Attore", type: "student",
     dedication: "Andrea nonostante le 50 sigarette fumate sul set, resti splendido e splendente… come se il fumo fosse solo un accessorio di scena!",
     description: "Per te abbiamo scelto la sigaretta 🚬, perché è la tua firma inconfondibile: un vizio che ti rende ancora più carismatico e misterioso!",
     emoji: "🚬" // Sigaretta
   },
   { id: 6, name: "Angela", role: "Aiuto Regia", type: "student",
     dedication: "Angela, la nostra regina indiscussa: riesce a gestire la follia del set con grazia e un sorriso, ma se le fai arrabbiare, ti punge come una rosa!",
     description: "Per te abbiamo scelto la rosa 🌹, perché sei bella e spinosa, una vera regina che sa farsi rispettare con eleganza!",
     emoji: "🌹" // Rosa rossa
   },
   { id: 7, name: "Augusto", role: "Assistenza Scenografia", type: "student",
     dedication: "Augusto avvocato scenografico, anche se per poco sul set e di vitale importanza!",
     description: "Per te abbiamo scelto la bilancia della giustizia ⚖️, perché con calma ed equilibrio riesci a risolvere ogni nostro problema… anche quelli più spinosi.!",
     emoji: "⚖️" // Avvocato (bilancia della giustizia)
   },
   { id: 8, name: "Ciro", role: "Regista", type: "student",
     dedication: "Ciro, il regista che non molla mai, anche se sembra sempre in vacanza! Con la sua calma apparente, gestisce ogni caos come una brezza marina… ma non provate a dirgli che non è concentrato!",
     description: "Per te abbiamo scelto il mare il relax 🏖️, perché anche quando il set è una tempesta, tu navighi con la tranquillità di chi è già in spiaggia!",
     emoji: "🏖️" // Mare con palme
   },
   { id: 9, name: "Ciro", role: "-", type: "student",
     dedication: "Ciro, il nostro dolcissimo Ciro, quello che con una caramella ti risolve la giornata e con un sorriso ti addolcisce il set. Un vero toccasana per tutti!",
     description: "Per te abbiamo scelto la caramella 🍬, perché sei la nostra dolcezza in persona, sempre pronto a tirarci su di morale con un tocco di zucchero!",
     emoji: "🍬" // Caramella
   },
   { id: 10, name: "Davide", role: "Regista", type: "student",
     dedication: "Davide, il regista dal cuore d'oro che guida la squadra con passione e un entusiasmo contagioso!",
     description: "Per te abbiamo scelto la medaglia 🏅, perché sei la guida che ci spinge a dare il massimo con il tuo esempio e la passione incondizionata… e non dimentichiamo la pazienza infinita che hai dimostrato lungo il percorso!",
     emoji: "🏅" // medaglia
   },
   { id: 11, name: "Francesca", role: "Attrice", type: "student",
     dedication: "Francesca, l'attrice che, tra una battuta e una lamentela, sa sorprendere con classe… e guai se manca lo spuntino!",
     description: "Per te abbiamo scelto l'orologio 🕒, ritardataria con classe: perché l’importante è arrivare e lasciare il segno!",
     emoji: "🕒" // tempo orologio
   },
   { id: 12, name: "Ivan", role: "Produzione e Montaggio", type: "student",
      dedication: "Ivan, dolce, premuroso e riservato, l’uomo che ascolta sempre con pazienza infinita e dispensa consigli da vero saggio del set.",
      description: "Per te abbiamo scelto le cuffie 🎧, perché sei l’orecchio attento che non perde mai una nota, il compagno silenzioso che rende tutto più armonioso!",
     emoji: "🎧" // cuffie
   },
   { id: 13, name: "Lorenzo", role: "DOP e Cameraman", type: "student",
     dedication: "Lorenzo, sa inquadrare la scena perfetta e non si tira mai indietro per un brindisi. Con lui, ogni ripresa è un capolavoro e ogni pausa è una festa!",
     description: "Per te abbiamo scelto il vino 🍷, perché come un buon vino, migliori con il tempo e sai rendere ogni momento indimenticabile, sia sul set che fuori!",
     emoji: "🍷" // Vino
   },
   { id: 14, name: "Mariano", role: "Edizione", type: "student",
     dedication: "Mariano, ogni sua edizione è un'opera d'arte, ogni dettaglio sotto controllo. Se c'è una virgola fuori posto, Mariano la trova e la corregge!",
     description: "Per te abbiamo scelto la mano che scrive ✍️, perché sei la nostra garanzia di perfezione, il custode di ogni parola e ogni virgola!",
     emoji: "✍️" // Precisino foglio che scrive (ho usato mano che scrive e block notes)
   },
   { id: 15, name: "Michele", role: "Fonico", type: "student",
     dedication: "Michele, il nostro fonico acrobata: non c'è suono che gli sfugga, non c'è microfono che non sappia domare. Con lui, ogni parola è musica!",
     description: "Per te abbiamo scelto il microfono 🎤, perché sei l'orecchio d'oro del set, quello che cattura ogni vibrazione e rende ogni scena un'esperienza sonora impeccabile!",
     emoji: "🎤" // Microfono
   },
   { id: 16, name: "Мила", role: "DOP", type: "student",
     dedication: "Мила con gli occhiali da sole è un enigma, senza, un'esplosione di talento. Sa sempre come catturare l'attenzione, sia davanti che dietro la macchina da presa!",
     description: "Per te abbiamo scelto gli occhiali da sole 🕶️, perché sei la diva del set, sempre con quel tocco di glamour che nasconde un'anima artistica incredibile!",
     emoji: "🕶️" // Occhiali da sole
   },
   { id: 17, name: "Raul", role: "Cameramen", type: "student",
     dedication: "Raul, il nostro cameraman trasformista: un attimo prima è dietro la macchina da presa, l'attimo dopo è pronto a recitare un ruolo con la stessa passione. Un vero uomo multitasking dello spettacolo!",
     description: "Per te abbiamo scelto le maschere teatrali 🎭, perché sei l'anima artistica del set, capace di passare da un ruolo all'altro con la stessa maestria!",
     emoji: "🎭" // Attore (maschere teatrali)
   },
   { id: 18, name: "Sara", role: "Scenografia", type: "student",
     dedication: "Sara, l'artista della scenografia, la mente che trasforma ogni difficoltà in un’opportunità. Quando serve, dal suo zaino esce sempre quello che serve: un vero e proprio colpo di genio in ogni situazione!",
     description: "Per te abbiamo scelto lo zaino 🎒, perché la tua creatività è un viaggio infinito… e il tuo bagaglio, un arsenale di soluzioni pronte all’uso!",
     emoji: "🎒" // zaino
   },
   { id: 19, name: "Simona", role: "Produzione", type: "student",
     dedication: "Simona, il diamante del Team: senza di te non ci sarebbe mai stata la pausa pranzo! Sei la nostra forza silenziosa, quella che trasforma ogni momento sul set in un’occasione speciale, dove tutti si sentono accolti!",
     description: "er te abbiamo scelto l’anello con diamante 💍, perché sei il nostro tesoro inestimabile!",
     emoji: "💍" // Anello con diamante
   },
   { id: 20, name: "Vincenzo", role: "Montatore", type: "student",
     dedication: "Vincenzo, il nostro montatore che sa come far festa con i frame: trasforma il caos in ritmo, e ogni suo taglio è una mossa sulla pista da ballo. Con lui, il montaggio è pura energia!",
     description: "Per te abbiamo scelto la faccia festosa 🥳, perché sei il re del ritmo, quello che fa ballare le immagini e trasforma ogni video in una festa!",
     emoji: "🥳" // festa
   }
];

// Componente per la schermata di benvenuto/dedica iniziale
const WelcomeScreen = ({ onEnter }) => {
  return (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
       <motion.img
             src={miriamImage}
              alt="Miriam" // Testo alternativo per accessibilità
              className="miriam-welcome-image" // Aggiungi una classe per la stilizzazione
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Dietro ogni scena, ogni inquadratura, ogni montaggio: <br />un GRAZIE di cuore
        a tutto il team e ai professionisti del cortometraggio. <br />
        Ognuno di voi ha reso questo cortometraggio unico, mettendoci un pezzo del proprio cuore.
        <br />Quest’avventura è stata epica, grazie a tutti voi!
        <br />
        <span className="film-title">SCACCO MATTO</span>!
      </motion.p>
      <motion.button
        className="enter-button"
        onClick={onEnter}
        whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-blue)', color: 'var(--element-background)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Scopri chi ha reso possibile tutto questo!
      </motion.button>
    </motion.div>
  );
};

// Componente per il popup della dedica
const DedicationPopup = ({ person, onClose }) => {
  if (!person) return null;

  // Determina se mostrare emoji o avatar nel popup
  // Se l'emoji non è definita, assumerà un avatar di fallback o non mostrerà nulla se l'avatar non è presente
  const displayMedia = person.emoji ? (
    <span className="popup-emoji">{person.emoji}</span>
  ) : (
    // Se non c'è emoji, puoi aggiungere un'immagine di fallback qui
    // Ad esempio: <img src="/path/to/default-avatar.png" alt="Avatar" className="popup-avatar" />
    // O semplicemente non mostrare nulla se non c'è né emoji né avatar specifici
    null
  );

  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="popup-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        {/* Renderizza l'immagine o l'emoji */}
        {displayMedia}
        <h2 className="popup-name" style={{ color: 'var(--accent-gold-peach)' }}>{person.name}</h2>
        <p className="popup-role">{person.role}</p>

        {/* Qui viene visualizzata la DEDICATION */}
        {person.dedication && (
          <motion.p
            className="popup-dedication"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ color: 'var(--accent-blue)' }}
          >
            "{person.dedication}"
          </motion.p>
        )}

        {/* Aggiunta per visualizzare la DESCRIPTION */}
        {person.description && (
          <motion.p
            className="popup-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ color: 'var(--text-color)' }}
          >
            {person.description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};


const VIEWS = {
  WELCOME: 'welcome',
  GALLERY: 'gallery',
  SLOT_MACHINE: 'slotMachine'
};

// Componente principale dell'App
function App() {

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [currentView, setCurrentView] = useState(VIEWS.WELCOME);

 useEffect(() => {
    window.scrollTo(0, 0); // Scrolla la finestra all'inizio (top: 0, left: 0)
  }, [currentView]); // La dipendenza [currentView] fa sì che si esegua solo quando currentView cambia

  const professors = peopleData.filter(p => p.type === 'professor');
  const students = peopleData.filter(p => p.type === 'student').sort((a, b) => a.name.localeCompare(b.name));

  const handleEnterClick = () => {
      setCurrentView(VIEWS.GALLERY); // Vai alla galleria
      // Aggiunge un'entrata nella cronologia del browser per la pagina Gallery
      window.history.pushState({ view: VIEWS.GALLERY }, '', '/gallery');
    };

    const handlePersonClick = (person) => {
      setSelectedPerson(person);
    };

    const handleClosePopup = () => {
      setSelectedPerson(null);
    };

    const handleShowSlotMachinePage = () => {
      setCurrentView(VIEWS.SLOT_MACHINE); // Vai alla pagina della slot machine
      // Aggiunge un'entrata nella cronologia del browser per la pagina Slot Machine
      window.history.pushState({ view: VIEWS.SLOT_MACHINE }, '', '/slot-machine');
    };

    // **MODIFICATO: Funzione per gestire il pulsante indietro universale**
    const handleGoBack = () => {
      window.history.back(); // Utilizza la funzione nativa del browser per tornare indietro
    };

    // Aggiungi un listener per gestire la navigazione tramite i pulsanti avanti/indietro del browser
    // Questo è cruciale per la navigazione basata sullo stato
    React.useEffect(() => {
      const handlePopState = (event) => {
        // Se c'è uno stato nella cronologia, usa quello per impostare la vista
        // Altrimenti, torna alla welcome screen (o alla default view se è diversa)
        if (event.state && event.state.view) {
          setCurrentView(event.state.view);
        } else {
          setCurrentView(VIEWS.WELCOME);
        }
      };

      window.addEventListener('popstate', handlePopState);

      // Imposta lo stato iniziale della cronologia quando l'app si carica,
      // in modo che il pulsante indietro dalla welcome screen porti fuori dall'app
      if (currentView === VIEWS.WELCOME && window.history.state === null) {
        window.history.replaceState({ view: VIEWS.WELCOME }, '', '/');
      }

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, [currentView]); // Dipendenza da currentView per re-inizializzare se cambia

    const renderPersonMedia = (person) => {
      if (person.emoji) {
        return <span className="person-emoji">{person.emoji}</span>;
      }
      return null;
    };

    return (
      <div className="App">
        {/* **NUOVO: Pulsante Indietro Universale** */}
        {currentView !== VIEWS.WELCOME && ( // Mostra il pulsante solo se NON sei nella welcome screen
          <motion.button
            className="universal-back-button"
            onClick={handleGoBack} // Gestito dalla nuova funzione handleGoBack
            whileHover={{ scale: 1.05, backgroundColor: '#C0A04C' }}
            whileTap={{ scale: 0.95 }}
          >
            &larr; Indietro
          </motion.button>
        )}

        <AnimatePresence mode='wait'>
          {currentView === VIEWS.WELCOME && (
            <WelcomeScreen key="welcome" onEnter={handleEnterClick} />
          )}

          {currentView === VIEWS.GALLERY && (
            <motion.div
              key="gallery"
              className="gallery-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="gallery-title">Il team di SCACCO MATTO</h1>
              <p className="gallery-subtitle">Clicca su ogni persona per scoprire il suo ringraziamento speciale!</p>

              {/* Sezione Professori */}
              <h2 className="section-title professor-section-title">I Professionisti</h2>
              <motion.div
                className="people-grid professor-grid"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {professors.map((person) => (
                  <motion.div
                    key={person.id}
                    className={`person-card ${person.type}`}
                    onClick={() => handlePersonClick(person)}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {renderPersonMedia(person)}
                    <h3 className="person-name">{person.name}</h3>
                    <p className="person-role">{person.role}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Separatore visivo */}
              <hr className="section-divider" />

              {/* Sezione Studenti */}
              <h2 className="section-title student-section-title">Il Team</h2>
              <motion.div
                className="people-grid student-grid"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {students.map((person) => (
                  <motion.div
                    key={person.id}
                    className={`person-card ${person.type}`}
                    onClick={() => handlePersonClick(person)}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {renderPersonMedia(person)}
                    <h3 className="person-name">{person.name}</h3>
                    <p className="person-role">{person.role}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pulsante per la Slot Machine */}
              <motion.button
                className="special-thanks-button"
                onClick={handleShowSlotMachinePage} // Cambia vista alla slot machine
                whileHover={{ scale: 1.05, backgroundColor: '#E0C06C', color: '#1A535C' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Sorpresa!
              </motion.button>

            </motion.div>
          )}

          {currentView === VIEWS.SLOT_MACHINE && (
            <motion.div
              key="slot-page"
              className="full-page-slot-container" // Nuovo contenitore per la pagina della slot
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* **RIMOSSO: Il pulsante back-to-gallery-button specifico, ora c'è quello universale** */}
              <SlotMachine peopleData={peopleData} /> {/* La slot machine occupa la pagina */}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedPerson && (
            <DedicationPopup person={selectedPerson} onClose={handleClosePopup} />
          )}
        </AnimatePresence>
        <Footer />
      </div>
    );
  }

  export default App;