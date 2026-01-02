import './App.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // ⬅️ أيقونة السهم
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import ThreeDBackground from './components/3DBackground';


function App() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
useEffect(() => {
  document.documentElement.lang = lang;
}, [lang]);

  return (
    <>
      <ThreeDBackground />

    

      {/* ✅ زر واحد فاليسار لتغيير اللغة */}
      <div className="lang-btn-wrapper left">
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {lang === 'en' ? 'English' : 'العربية'}{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevron ${menuOpen ? "open" : ""}`}
            />
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <button
                className="lang-btn en"
                onClick={() => {
                  setLang('en');
                  setMenuOpen(false);
                }}
              >
                English
              </button>
              <button
                className="lang-btn ar"
                onClick={() => {
                  setLang('ar');
                  setMenuOpen(false);
                }}
              >
                العربية
              </button>
            </div>
          )}
        </div>
      </div>

      <main>
        <NavBar lang={lang} />
        <Home lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Contacts lang={lang} />
      </main>
    </>
  );
}

export default App;





