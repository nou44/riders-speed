import React, { useRef } from 'react';
import CustomHook from './CustomHook';

function Home({ lang }) {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  // ✅ النصوص باللغتين
  const texts = {
    en: {
      description:
        "Riders of Speed is the leading delivery company in Northern Morocco. We provide fast, reliable, and professional service to ensure the best experience for our customers.",
      seeMore: "See More"
    },
    ar: {
      description:
        "Riders of Speed هي شركة رائدة في خدمات التوصيل بشمال المغرب. نقدم خدمة سريعة، موثوقة واحترافية لضمان أفضل تجربة لعملائنا.",
      seeMore: "المزيد"
    }
  };

  // ✅ Social Icons مباشرة هنا
  const socialItems = [
    { name: "whatsap", href: "https://whatsap.com/", src: "/whatsap.png" },
    { name: "discord", href: "https://discord.com/", src: "/discord.png" },
    { name: "instagrame", href: "https://instagrame.com/", src: "/instagrame.png" },
  ];

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          RIDERS OF <span>SPEED</span>
        </div>

        {/* ✅ الوصف حسب اللغة */}
        <div className="des">{texts[lang].description}</div>

        <a
          href="/democv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active"
        >
          {texts[lang].seeMore}
        </a>
      </div>

      <div className="avatar">
        <div className="card">
          <img src="riders/logo.png" alt="Riders of Speed Logo" />
          <div className="info">
            <div>Delivery</div>
            <div>Company</div>
            <div>24/24</div>
            <div>REDOUAN</div>
          </div>
        </div>
      </div>

      {/* ✅ Social Icons */}
      <ul className="social-icons">
        {socialItems.map((it) => (
          <li key={it.name}>
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={it.name}
            >
              <img src={it.src} alt={it.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;


