import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faGlobe, faBox, faMoneyBillWave, faHeadset, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Services({ lang }) { // ✅ use lang prop
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  // ✅ translations
  const translations = {
    en: {
      title: "Our Services",
      desc: "We offer fast, reliable and tailored delivery solutions.",
      list: [
        { name: "Express Delivery", des: "We ensure ultra-fast delivery across the city with experienced couriers.", icon: faMotorcycle },
        { name: "International Delivery", des: "Send your packages worldwide thanks to our reliable partner network.", icon: faGlobe },
        { name: "Order Tracking", des: "Each order is tracked in real time to ensure transparency and security.", icon: faBox },
        { name: "Cash on Delivery", des: "Give your clients more flexibility with payment upon delivery.", icon: faMoneyBillWave },
        { name: "24/7 Customer Service", des: "A dedicated team is available anytime to answer questions and solve problems.", icon: faHeadset },
        { name: "Cash Back", des: "Benefit from a loyalty program with partial refunds on your deliveries.", icon: faRotateLeft },
      ]
    },
    ar: {
      title: "خدماتنا",
      desc: "نقدم حلول توصيل سريعة وموثوقة ومناسبة لاحتياجاتكم.",
      list: [
        { name: "توصيل سريع", des: "نضمن توصيلاً سريعاً داخل المدينة مع فريق من السائقين المحترفين.", icon: faMotorcycle },
        { name: "توصيل دولي", des: "أرسل طرودك إلى جميع أنحاء العالم بفضل شبكة شركائنا الموثوقين.", icon: faGlobe },
        { name: "تتبع الطلبات", des: "يتم تتبع كل طلب في الوقت الفعلي لضمان الشفافية والأمان.", icon: faBox },
        { name: "الدفع عند الاستلام", des: "امنح عملاءك مرونة أكبر مع خيار الدفع عند الاستلام.", icon: faMoneyBillWave },
        { name: "خدمة عملاء 24/7", des: "فريق متخصص متاح في أي وقت للإجابة على أسئلتكم وحل مشاكلكم.", icon: faHeadset },
        { name: "استرجاع نقدي", des: "استفد من برنامج ولاء مع استرجاع جزئي على توصيلاتك.", icon: faRotateLeft },
      ]
    }
  };

  const current = translations[lang]; // ✅ current translation

  return (
    <section className='services' ref={scrollTab} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        {current.title}
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {current.desc}
      </div>
      <div className="list">
        {
          current.list.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Services;
