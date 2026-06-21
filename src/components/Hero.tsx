import { motion } from 'motion/react';
import './Hero.css';

// Using the generated high-quality Knight Skull artwork path
import knightSkullImage from '../assets/images/knight_skull_stencil_1781658211478.jpg';

export default function Hero() {
  return (
    <section className="hero-section hard-edges" id="hero">
      <div className="bg-grid-lines"></div>

      {/* Rotating vertical sidebar text */}
      <div className="vertical-label-container">
        <span className="vertical-label">[PROTOCOLO_KNIGHT_SKULL_V.01]</span>
        <span className="vertical-label-right">[SP_BR_2026]</span>
      </div>

      {/* Distressed background texture container */}
      <div className="hero-background-wrapper">
        <motion.div 
          className="hero-tribal-bg"
          initial={{ opacity: 0, scale: 1.15, rotate: -2 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundImage: `url(${knightSkullImage})` }}
        />
        <div className="hero-vignette"></div>
      </div>

      {/* Main typographic overload layout */}
      <div className="hero-title-group">
        <motion.div 
          className="glitch-text-wrapper"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title font-display">
            GABS<br/>
            TATT<br/>
            <span className="text-stroke">OO</span>
            <span className="red-accent">_</span>
          </h1>
        </motion.div>
      </div>

      {/* Overlapping stencil sticker */}
      <motion.div 
        className="floating-sticker-tag"
        initial={{ y: 50, rotate: 25, opacity: 0 }}
        animate={{ y: 0, rotate: 12, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
      >
        <span className="danger-tag font-display">PROJETOS AUTORAIS APENAS</span>
      </motion.div>

      {/* Bottom status barcode and details */}
      <div className="hero-bottom-bar">
        <div className="barcode-box">
          <div className="barcode-lines"></div>
          <p className="barcode-text">GABS TATTOO // BLACKWORK & TRIBAL</p>
        </div>
        <div className="scroll-indicator font-display">
          <span>DESCI PARA A PELE // SCROLL </span>
          <span className="blink-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
