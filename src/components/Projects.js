import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruckFast, 
  faClock, 
  faUtensils, 
  faMapLocationDot, 
  faBuilding, 
  faBox 
} from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

const PROJECT_DETAILS = {
  0: {
    en: {
      long: "We collaborate with online businesses and individual sellers across Tangier, ensuring fast, secure and reliable delivery with full tracking.",
      e1: "Optimized transport network",
      e2: "Strict time scheduling"
    },
    ar: {
      long: "نتعامل مع شركات التجارة الإلكترونية والأفراد في طنجة لضمان توصيل سريع وآمن وموثوق مع تتبع كامل لكل الطلبات.",
      e1: "شبكة نقل محسّنة للتوصيل السريع",
      e2: "نظام توقيت صارم للتسليم في الوقت"
    }
  },
  1: {
    en: {
      long: "Daily partnerships with restaurants to deliver fresh meals on time with full monitoring.",
      e1: "Professional food logistics",
      e2: "Live GPS tracking"
    },
    ar: {
      long: "شراكات يومية مع المطاعم لتوصيل الوجبات طازجة وفي الوقت المحدد مع مراقبة كاملة.",
      e1: "نظام لوجستي احترافي للأطعمة",
      e2: "تتبع مباشر عبر GPS"
    }
  },
  2: {
    en: {
      long: "Secure parcel delivery solutions for companies, offices and individuals throughout the city.",
      e1: "Business delivery solutions",
      e2: "Secure package handling"
    },
    ar: {
      long: "حلول توصيل آمنة للشركات والمكاتب والأفراد داخل المدينة مع عناية فائقة بالطرود.",
      e1: "حلول توصيل مخصصة للأعمال",
      e2: "تعامل آمن مع الطرود"
    }
  }
};

function Projects({ lang }) {

  const texts = {
    en: {
      title: "Our Projects",
      description: "Some of the successful delivery projects we are proud of.",
      projects: [
        { name: "E-commerce Delivery", icon1: faTruckFast, label1: "Fast Transport", icon2: faClock, label2: "On-Time Delivery", images: ["/riders .png", "/riders img.png"] },
        { name: "Food Delivery", icon1: faUtensils, label1: "Food Service", icon2: faMapLocationDot, label2: "GPS Tracking", images: ["/project2.png", "/food img .png"] },
        { name: "Corporate Clients", icon1: faBuilding, label1: "Business", icon2: faBox, label2: "Packages", images: ["/liv.png", "/company.png"] }
      ],
      cta: "Request a Service",
      whatsapp: "https://wa.me/212634087141"
    },
    ar: {
      title: "مشاريعنا",
      description: "بعض مشاريع التوصيل الناجحة التي نفتخر بها.",
      projects: [
        { name: "توصيل المتاجر الإلكترونية", icon1: faTruckFast, label1: "نقل سريع", icon2: faClock, label2: "توصيل في الوقت", images: ["/riders .png", "/riders img.png"] },
        { name: "توصيل الوجبات", icon1: faUtensils, label1: "خدمة الطعام", icon2: faMapLocationDot, label2: "تتبع GPS", images: ["/project2.png", "/food img .png"] },
        { name: "شركاء الشركات", icon1: faBuilding, label1: "شركات", icon2: faBox, label2: "طرود", images: ["/liv.png", "/company.png"] }
      ],
      cta: "اطلب خدمتك الآن",
      whatsapp: "https://wa.me/212634087141"
    }
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>{texts[lang].title}</div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>{texts[lang].description}</div>

      <div className="list">
        {texts[lang].projects.map((p, i) => (
          <div className="item" key={i} ref={(el) => el && divs.current.push(el)}>

            <div className="images">
              <div className="image-box">
                <img src={p.images[0]} className="front" />
                <img src={p.images[1]} className="back" />
              </div>
            </div>

            <div className="content">
              <h3>{p.name}</h3>
              <p className="long-text">{PROJECT_DETAILS[i][lang].long}</p>

              <div className="mission">
                <FontAwesomeIcon icon={p.icon1} />
                <div>
                  <h4>{p.label1}</h4>
                  <small>{PROJECT_DETAILS[i][lang].e1}</small>
                </div>
              </div>

              <div className="mission">
                <FontAwesomeIcon icon={p.icon2} />
                <div>
                  <h4>{p.label2}</h4>
                  <small>{PROJECT_DETAILS[i][lang].e2}</small>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="cta" ref={(el) => el && divs.current.push(el)}>
        <a href={texts[lang].whatsapp} target="_blank" rel="noopener noreferrer" className="btn-cta">
          {texts[lang].cta}
        </a>
      </div>
    </section>
  );
}

export default Projects;



