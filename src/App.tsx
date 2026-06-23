import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Blackwork from './components/Blackwork';
import Tribal from './components/Tribal';
import ArchiveGallery from './components/ArchiveGallery';
import SkinWorkGallery from './components/SkinWorkGallery';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div id="app-viewport-root" style={{ position: 'relative' }}>
      <div className="scanline" id="global-scanline"></div>
      
      {/* Top persistent tactical navbar */}
      <header style={headerContainerStyle}>
        <div style={logoGroupStyle}>
          <span style={logoBadgeStyle}>☠ PROTOCOLO_CYBER</span>
        </div>
        
        {/* Navigation Coordinates */}
        <nav style={navLinksStyle}>
          <a href="#hero" style={linkStyle}>[00_IMPACTO]</a>
          <a href="#blackwork" style={linkStyle}>[01_CARNE]</a>
          <a href="#tribal" style={linkStyle}>[02_OSSO]</a>
          <a href="#archive-gallery" style={linkStyle}>[03_ARQUIVO]</a>
          <a href="#skinwork-gallery" style={linkStyle}>[04_SKIN_WORK]</a>
          <a href="#agendamento" style={btnBookingNavStyle}>[05_REQUERER]</a>
        </nav>

        {/* Real-time Tactic Ticker */}
        <div style={statusTrackerStyle}>
          <span style={flickerDotStyle}>●</span>
          <span style={textMonoStyle}>SYSTEM_STATUS: ONLINE</span>
        </div>
      </header>

      {/* Smooth Scroll Frame */}
      <SmoothScroll>
        <main>
          {/* Hero/Impact section */}
          <Hero />

          {/* Blackwork Section */}
          <Blackwork />

          {/* Cyber Tribal Section */}
          <Tribal />

          {/* Archive / Portfolio Section */}
          <ArchiveGallery />

          {/* Animated Tickers Between Galleries */}
          <section style={{ position: 'relative', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--black)', padding: '40px 0', overflow: 'hidden', borderTop: '2px solid var(--gray)', borderBottom: '2px solid var(--gray)' }}>
            <div className="ticker-wrap hard-edges" style={{ position: 'absolute', top: '20px', left: '-5%', width: '110%', transform: 'rotate(-2deg)', zIndex: 9 }}>
              <div className="ticker-content" style={{ animationDirection: 'reverse' }}>
                <span>GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ </span>
                <span>GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ </span>
              </div>
            </div>

            <div className="ticker-wrap ticker-wrap-red hard-edges" style={{ position: 'absolute', bottom: '20px', left: '-5%', width: '110%', transform: 'rotate(2deg)', zIndex: 10, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)' }}>
              <div className="ticker-content">
                <span>O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ </span>
                <span>O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ </span>
              </div>
            </div>
          </section>

          {/* Skin Work Gallery */}
          <SkinWorkGallery />

          {/* Additional tickers beneath the last gallery */}
          <section style={{ position: 'relative', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--black)', overflow: 'hidden', borderTop: '2px solid var(--white)', borderBottom: '2px solid var(--white)' }}>
            <div className="ticker-wrap hard-edges" style={{ position: 'absolute', top: '20px', left: '-5%', width: '110%', transform: 'rotate(-1deg)', zIndex: 9 }}>
              <div className="ticker-content" style={{ animationDirection: 'reverse' }}>
                <span>GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ </span>
                <span>GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ GABBSTATTOO __ GABSTATOO __ </span>
              </div>
            </div>

            <div className="ticker-wrap hard-edges" style={{ position: 'absolute', bottom: '20px', left: '-5%', width: '110%', transform: 'rotate(1deg)', zIndex: 10, backgroundColor: 'var(--black)', color: 'var(--white)', borderTop: '3px solid var(--white)', borderBottom: '3px solid var(--white)' }}>
              <div className="ticker-content">
                <span>CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ </span>
                <span>CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ CYBER_TRIBAL __ BLACKWORK __ DARKNESS __ </span>
              </div>
            </div>
          </section>

          {/* Booking / Closing Footer */}
          <Footer />
        </main>
      </SmoothScroll>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

// Inline Brutalist CSS in JS for Nav Bar to guarantee it overrides any framework overrides safely
const headerContainerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  borderBottom: '2px solid var(--white)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  zIndex: 9999,
  fontFamily: 'var(--font-mono)',
  backdropFilter: 'blur(10px)',
};

const logoGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const logoBadgeStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 800,
  letterSpacing: '1px',
  color: 'var(--white)',
};

const navLinksStyle: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
};

const linkStyle: React.CSSProperties = {
  fontSize: '10px',
  color: '#8c8881',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};

const btnBookingNavStyle: React.CSSProperties = {
  fontSize: '10px',
  color: 'var(--red)',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const statusTrackerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const flickerDotStyle: React.CSSProperties = {
  color: 'var(--red)',
  animation: 'blink-toggle 1s infinite steps(2)',
};

const textMonoStyle: React.CSSProperties = {
  fontSize: '9px',
  color: '#8c8881',
  letterSpacing: '0.5px',
};

// Add styles overrides for mobile in visual resize is handled in CSS queries
if (typeof window !== 'undefined' && window.innerWidth < 768) {
  // Mobile adjustments dynamically evaluated
  // Hide main nav items except the booking badge on mobile headers
}
