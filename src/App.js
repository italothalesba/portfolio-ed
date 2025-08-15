import React, { useState, useEffect } from 'react';
import './App.css'; 

// Importa sua foto local
import profileImage from './assets/profile-photo.jpg'; 

import { 
  FaWhatsapp, FaUser, FaStethoscope, FaGraduationCap, 
  FaCog, FaEnvelope, FaBars, FaTimes 
} from 'react-icons/fa';

// O componente Section continua o mesmo
function Section({ title, icon, id, children }) {
    return (
        <section id={id} className="section">
            <h2 className="section-title">{icon}{title}</h2>
            {children}
        </section>
    );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="App">
      
      {/* --- CORREÇÃO APLICADA NESTA LINHA --- */}
      <nav className={`main-nav ${isScrolled ? 'scrolled aninhado-container' : ' aninhado-container'}`}>
          <div className="nav-logo">Antônia Edvânia</div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#header" onClick={closeMenu}>Início</a></li>
              <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experiência</a></li>
              <li><a href="#education" onClick={closeMenu}>Formação</a></li>
              <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          </ul>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
      </nav>

      {/* --- HEADER CORRIGIDO PARA CORRESPONDER À IMAGEM --- */}
      <header id="header" className="header-container"> 
          <div className="header-content">
              {/* Sua foto local é usada aqui */}
              <img src={profileImage} alt="Antônia Edvânia" className="profile-image" />
              
              <h1 className="header-title">Edvânia Alcântara</h1>
              <h2 className="header-subtitle">Técnica em Radiologia em Formação</h2>
              <p className="header-description">
                Construindo uma carreira em Radiologia com foco em diagnósticos precisos e cuidado ao paciente.
              </p>
          </div>
      </header>
      
      <main>
        {/* As seções abaixo estão corretas e não precisam de alteração */}
        <Section id="about" title="Sobre Mim" icon={<FaUser />}><p>Meu objetivo é consolidar minha carreira na Radiologia, aplicando minha experiência prática em exames de imagem e centro cirúrgico para apoiar a equipe de saúde.</p></Section>
        <Section id="experience" title="Experiência em Radiologia" icon={<FaStethoscope />}><div className="card"><h3>Estágio em Radiologia</h3><span className="card-subtitle">Hospital São Raimundo (02/2025 - 08/2025)</span><p>Ampla vivência em exames de Raios-X, com atuação e suporte direto à equipe médica no ambiente de centro cirúrgico.</p></div><div className="card"><h3>Estágio em Radiologia</h3><span className="card-subtitle">Hospital Regional do Cariri (07/2024 - 12/2024)</span><p>Desenvolvimento de competências em Tomografia e Ressonância Magnética, com foco na operação de equipamentos e aplicação de protocolos.</p></div></Section>
        <Section id="education" title="Formação e Cursos" icon={<FaGraduationCap />}><div className="card"><h3>Técnico em Radiologia</h3><span className="card-subtitle">Conclusão Prevista: 08/2025</span></div><div className="card"><h3>Cursos Relevantes</h3><span className="card-subtitle">Ressonância Magnética, Tomografia, Posicionamento Radiológico.</span></div></Section>
        <Section id="skills" title="Habilidades" icon={<FaCog />}><ul className="skills-list"><li className="skill-item">Habilitação A & B</li><li className="skill-item">Boa Comunicação</li><li className="skill-item">Trabalho em Equipe</li><li className="skill-item">Resolução de Problemas</li></ul></Section>
        <Section id="contact" title="Contato" icon={<FaEnvelope />}><div className="contact-section"><p>Vamos conversar sobre como minhas habilidades podem contribuir para sua equipe.</p><a href="https://api.whatsapp.com/send?phone=5588999887039" target="_blank" rel="noopener noreferrer" className="contact-button"><FaWhatsapp /> Entrar em Contato</a></div></Section>
      </main>

      <a 
        href="https://api.whatsapp.com/send?phone=5588999887039" 
        className="whatsapp-float-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;