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

function Projects({ lang }) {
  const texts = {
    en: {
      title: "Our Projects",
      description: "Some of the successful delivery projects we are proud of.",
      projects: [
        {
          name: "E-commerce Delivery",
          des: "Fast and reliable delivery system for online shops in Northern Morocco.",
          icon1: faTruckFast,
          label1: "Fast Transport",
          icon2: faClock,
          label2: "On-Time Delivery",
          images: "/project3.png"
        },
        {
          name: "Food Delivery",
          des: "Daily collaboration with restaurants to deliver fresh meals.",
          icon1: faUtensils,
          label1: "Food Service",
          icon2: faMapLocationDot,
          label2: "GPS Tracking",
          images: "/project2.png"
        },
        {
          name: "Corporate Clients",
          des: "Parcel delivery between local companies and offices.",
          icon1: faBuilding,
          label1: "Business",
          icon2: faBox,
          label2: "Packages",
          images: "/project1.png"
        }
      ],
      cta: "Request a Service",
      whatsapp: "https://wa.me/212634087141" // ✅ WhatsApp link
    },
    ar: {
      title: "مشاريعنا",
      description: "بعض مشاريع التوصيل الناجحة التي نفتخر بها.",
      projects: [
        {
          name: "توصيل المتاجر الإلكترونية",
          des: "نظام سريع وموثوق لتوصيل طلبات المتاجر الإلكترونية في شمال المغرب.",
          icon1: faTruckFast,
          label1: "نقل سريع",
          icon2: faClock,
          label2: "توصيل في الوقت",
          images: "/project3.png"
        },
        {
          name: "توصيل الوجبات",
          des: "تعاون يومي مع مطاعم لتوصيل الوجبات طازجة.",
          icon1: faUtensils,
          label1: "خدمة الطعام",
          icon2: faMapLocationDot,
          label2: "تتبع GPS",
          images: "/project2.png"
        },
        {
          name: "شركاء الشركات",
          des: "توصيل الطرود بين الشركات المحلية والفروع.",
          icon1: faBuilding,
          label1: "شركات",
          icon2: faBox,
          label2: "طرود",
          images: "/project1.png"
        }
      ],
      cta: "اطلب خدمتك الآن",
      whatsapp: "https://wa.me/212634087141" // ✅ WhatsApp link
    }
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        {texts[lang].title}
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {texts[lang].description}
      </div>

      <div className="list">
        {texts[lang].projects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>

              <div className="mission">
                <div><FontAwesomeIcon icon={value.icon1} /></div>
                <div>
                  <h4>{value.label1}</h4>
                </div>
              </div>

              <div className="mission">
                <div><FontAwesomeIcon icon={value.icon2} /></div>
                <div>
                  <h4>{value.label2}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Call to Action Button */}
      <div className="cta" ref={(el) => el && divs.current.push(el)}>
        <a href={texts[lang].whatsapp} target="_blank" rel="noopener noreferrer" className="btn-cta">
          {texts[lang].cta}
        </a>
      </div>
    </section>
  );
}

export default Projects;


