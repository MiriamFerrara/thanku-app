import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const peopleData = [
  // Professori
  {
    id: 1,
    name: "Rosario",
    role: "Regia",
    type: "professor",
    dedication: "Come in un buon western, spara la verità dritto e chiaro: niente fronzoli, niente giri di parole… solo piombo e sincerità.",
    description: "Per te abbiamo scelto il giornale 📰… perché qualcuno doveva pur metterle nero su bianco, tutte le verità che spari a raffica!",
    emoji: "📰" // Giornale
  },
  {
    id: 2,
    name: "Federico",
    role: "Fotografo",
    type: "professor",
   dedication: "Federico è un fotografo calmo e riflessivo… ma prova a spostargli la luce e diventa una furia!",
   description: "Per te abbiamo scelto la luce 💡, perché sei l’unico capace di farci sentire falliti… solo con uno spostamento di luce!",
   emoji: "💡" // Luce
  },
  {
    id: 3,
    name: "Giacomo",
    role: "Montaggio",
    type: "professor",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
    description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "👨‍💻"
  },
  // Studenti/Crew
  {
    id: 4,
    name: "Alessandro",
    role: "Assistente Regia e Montatore",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
    description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🎬" // Classico ciak
  },
  {
    id: 5,
    name: "Andrea",
    role: "Attore",
    type: "student",
     dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
     description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🚬" // Sigaretta
  },
  {
    id: 6,
    name: "Angela",
    role: "Aiuto Regia",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
    description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🌹" // Rosa rossa
  },
  {
    id: 7,
    name: "Augusto",
    role: "Assistenza Scenografia",
    type: "student",
     dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
     description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "⚖️" // Avvocato (bilancia della giustizia)
  },
  {
    id: 8,
    name: "Ciro",
    role: "Regista",
    type: "student",
     dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
    description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🏖️" // Mare con palme
  },
  {
    id: 9,
    name: "Ciro", // Questo Ciro ha il ruolo "-", probabilmente un altro Ciro
    role: "-",
    type: "student",
   dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
   description: "Per te abbiamo scelto il programmatore 👨‍💻",
   emoji: "🍬" // Caramella
  },
  {
    id: 10,
    name: "Davide",
    role: "Regista",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
    description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🏅" // Emoticon cuore con mani
  },
  {
    id: 11,
    name: "Francesca",
    role: "Attrice",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
     description: "Per te abbiamo scelto il programmatore 👨‍💻",
    emoji: "🕒" // Cibo tempo (ho messo noodles e orologio)
  },
  {
    id: 12,
    name: "Ivan",
    role: "Produzione e Montaggio",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",

       description: "Per te abbiamo scelto il programmatore 👨‍💻",
       emoji: "🖥️" // Computer (laptop)
  },
  {
    id: 13,
    name: "Lorenzo",
    role: "DOP e Cameramen",
    type: "student",
   dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
      description: "Per te abbiamo scelto il programmatore 👨‍💻",
      emoji: "🍷" // Vino
  },
  {
    id: 14,
    name: "Mariano",
    role: "Edizione",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
       description: "Per te abbiamo scelto il programmatore 👨‍💻", emoji: "✍️" // Precisino foglio che scrive (ho usato mano che scrive e block notes)
  },
  {
    id: 15,
    name: "Michele",
    role: "Fonico",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
       description: "Per te abbiamo scelto il programmatore 👨‍💻",emoji: "🎤" // Microfono e piedi
  },
  {
    id: 16,
    name: "Mila",
    role: "DOP Attrice",
    type: "student",
   dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
      description: "Per te abbiamo scelto il programmatore 👨‍💻", emoji: "🕶️" // Occhiali da sole
  },
  {
    id: 17,
    name: "Raul",
    role: "Cameramen",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
       description: "Per te abbiamo scelto il programmatore 👨‍💻", emoji: "🎭" // Attore (maschere teatrali)
  },
  {
    id: 18,
    name: "Sara",
    role: "Scenografia",
    type: "student",
   dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
      description: "Per te abbiamo scelto il programmatore 👨‍💻", emoji: "🎒" // Punto interrogativo (se intendevi "punto indiano" come "segno caratteristico", ho usato un "?" come placeholder, fammi sapere se intendevi altro!)
  },
  {
    id: 19,
    name: "Simona",
    role: "Produzione",
    type: "student",
    dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
       description: "Per te abbiamo scelto il programmatore 👨‍💻", emoji: "💍" // Anello con diamante
  },
  {
    id: 20,
    name: "Vincenzo",
    role: "Montatore",
    type: "student",
     dedication: "Giacomo è come un programmatore 👨‍💻: un attimo prima va tutto alla perfezione e ti manda in paradiso, l’attimo dopo va in crash e ti cancella dal mondo!",
        description: "Per te abbiamo scelto il programmatore 👨‍💻",emoji: "🥳" // Palla discoteca
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
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Grazie per questa esperienza indimenticabile!
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Dietro ogni scena, ogni inquadratura, ogni montaggio: <br />un GRAZIE di cuore
        a tutta la crew e ai professionisti del cortometraggio. <br />
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

// Componente principale dell'App
function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const professors = peopleData.filter(p => p.type === 'professor');
  const students = peopleData.filter(p => p.type === 'student').sort((a, b) => a.name.localeCompare(b.name));

  const handleEnterClick = () => {
    setShowGallery(true);
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClosePopup = () => {
    setSelectedPerson(null);
  };

  const renderPersonMedia = (person) => {
    if (person.emoji) {
      return <span className="person-emoji">{person.emoji}</span>;
    }
    // Puoi aggiungere un'immagine di fallback o un div vuoto se non c'è emoji
    // Ad esempio: return <img src="/path/to/default-avatar.png" alt="Avatar" className="person-avatar" />;
    return null; // Non mostra nulla se non c'è emoji
  };

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        {!showGallery ? (
          <WelcomeScreen key="welcome" onEnter={handleEnterClick} />
        ) : (
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
                  {/* Usa la funzione di rendering */}
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
                  {/* Usa la funzione di rendering */}
                  {renderPersonMedia(person)}
                  <h3 className="person-name">{person.name}</h3>
                  <p className="person-role">{person.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPerson && (
          <DedicationPopup person={selectedPerson} onClose={handleClosePopup} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;