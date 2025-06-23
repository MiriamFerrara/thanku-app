import React from 'react';
import { motion } from 'framer-motion';
// Importa le icone che desideri utilizzare
import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; // Ad esempio, per l'email

const Footer = () => {
  return (
    <motion.footer
      className="app-footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h4>Creatrice</h4>
          <p>Miriam Ferrara</p>
          <p>
            <MdEmail size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="mailto:miriamferrara1397@gmail.com">miriamferrara1397@gmail.com</a>
          </p>
          <p>
            <FaInstagram size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="https://www.instagram.com/mirimiferrara/" target="_blank" rel="noopener noreferrer">@mirimiferrara</a>
          </p>
          <p>
            <FaLinkedin size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="https://www.linkedin.com/in/miriam-ferrara" target="_blank" rel="noopener noreferrer">Miriam Ferrara</a>
          </p>
          <p>
            <FaGithub size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="https://github.com/MiriamFerrara" target="_blank" rel="noopener noreferrer">MiriamFerrara</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Collaborazione Speciale</h4>
          <p>Sara Ferrara</p>
          <p>
            <FaInstagram size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="http://instagram.com/woon.saraferrara/" target="_blank" rel="noopener noreferrer">@woon.saraferrara</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Scuola di cinema Pigrecoemme</h4>
          <p>
            <FaGlobe size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="https://www.pigrecoemme.com/" target="_blank" rel="noopener noreferrer">Pigrecoemme</a>
          </p>
<p>Progetti realizzati per la scuola:</p>
            <p>
              <FaGlobe size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <a href="https://miriamferrara.github.io/equisprint8/" target="_blank" rel="noopener noreferrer">Equisprint8</a>
            </p>
            <p>
              <FaGlobe size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              <a href="https://miriamferrara.github.io/slot-machine/" target="_blank" rel="noopener noreferrer">Slot Machine</a>
            </p>
        </div>
      </div>

      <p className="footer-note">
        &copy; {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
};

export default Footer;