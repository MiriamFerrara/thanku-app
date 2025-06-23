import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SlotMachine.css';
import saraImage from './sara.png';
import sweetImage from './sweet.png';

const SlotMachine = ({ peopleData }) => {
  const allEmojis = peopleData.map(p => p.emoji).filter(Boolean);
  const winningEmoji = "🍬";

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * allEmojis.length);
    return allEmojis[randomIndex];
  };

  const [reels, setReels] = useState([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("Premi SPIN per giocare!");
  const [isWinner, setIsWinner] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [isSaraImageZoomed, setIsSaraImageZoomed] = useState(false);
  const [showCandyRain, setShowCandyRain] = useState(false);

  const triggerCandyRain = () => {
    setShowCandyRain(true);
    setTimeout(() => setShowCandyRain(false), 3000);
  };

  const spinReels = () => {
    if (spinning) return;

    setSpinning(true);
    setMessage("Spinning...");
    setIsWinner(false);
    setIsSaraImageZoomed(false);

    const localSpinCount = spinCount + 1;
    setSpinCount(localSpinCount);

    let spinStep = 0;
    const interval = setInterval(() => {
      setReels([getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
      spinStep++;

      if (spinStep > 20) {
        clearInterval(interval);

        let finalReels;
        if (localSpinCount % 3 === 0) {
          finalReels = [winningEmoji, winningEmoji, winningEmoji];
        } else {
          finalReels = [getRandomEmoji(), getRandomEmoji(), getRandomEmoji()];
        }

        setReels(finalReels);

        const winCondition = finalReels.every((emoji) => emoji === winningEmoji);
        if (winCondition) {
          setMessage("🎉 Jackpot di dolcezza! La tua pusher di zuccheri è qui e ha portato le caramelle!🍬");
          setIsWinner(true);
          triggerCandyRain();
        } else {
          setMessage("Ritenta, sarai più fortunato!");
        }

        setSpinning(false);
      }
    }, 100);
  };

  const handleSaraImageClick = () => {
    if (spinning) return;
    setIsSaraImageZoomed(!isSaraImageZoomed);
  };

  return (
    <motion.div
      className="slot-page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showCandyRain && (
        <div className="candy-cascade">
          {Array.from({ length: 30 }).map((_, i) => (
            <img
              key={i}
              src={sweetImage}
              alt="candy"
              className="falling-candy"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      <img
        src={saraImage}
        alt="La Slot del Ringraziamento"
        className={`slot-header-image ${isSaraImageZoomed ? 'zoomed' : ''}`}
        onClick={handleSaraImageClick}
      />

      <div className="slot-reels">
        {reels.map((emoji, index) => (
          <motion.div
            key={index}
            className="reel-symbol"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: spinning ? 0 : index * 0.1 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <p className={`slot-message ${isWinner ? 'winner-message' : ''}`}>{message}</p>

      <motion.button
        className="spin-button"
        onClick={spinReels}
        disabled={spinning}
        whileHover={{
          scale: spinning ? 1 : 1.05,
          backgroundColor: spinning ? '#ccc' : '#C0A04C',
          color: spinning ? '#999' : '#FFFFFF',
        }}
        whileTap={{ scale: spinning ? 1 : 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {spinning ? '...' : 'SPIN'}
      </motion.button>
    </motion.div>
  );
};

export default SlotMachine;
