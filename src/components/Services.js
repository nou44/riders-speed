import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faGlobe, faBox, faMoneyBillWave, faHeadset, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
const SERVICE_DETAILS = {
  0: {
    en: {
      title: "Express Delivery",
      text: "Rider of Speed is a professional delivery company based in Tangier, operating 24/24 across Northern Morocco including Tangier, Asilah, Larache, Ksar El Kebir and Tetouan. We provide ultra-fast same-day delivery for businesses and individuals who value reliability, speed and secure handling.",
      points: [
        "Same-day express shipping",
        "24/24 operational service",
        "Coverage across Northern Morocco",
        "Professional trained couriers",
       
      ]
    },
    ar: {
      title: "التوصيل السريع",
      text: "Rider of Speed هي شركة توصيل احترافية مقرها طنجة، تعمل 24/24 في شمال المغرب وتشمل طنجة، أصيلة، العرائش، القصر الكبير وتطوان.",
      points: [
        "توصيل سريع في نفس اليوم",
        "خدمة 24/24",
        "تغطية كاملة لشمال المغرب",
        "سعاة محترفون",
     
      ]
    }
  },

  1: {
    en: {
      title: "International Delivery",
      text: "We provide reliable international shipping with fast processing and secure handling worldwide.",
      points: [
        "Worldwide shipping",
        "Customs assistance",
        "Secure transport",
        "Fast processing",
        "Live updates",
        "Dedicated support"
      ]
    },
    ar: {
      title: "التوصيل الدولي",
      text: "نوفر حلول شحن دولية موثوقة بمعالجة سريعة وأمان عالي وتغطية عالمية.",
      points: [
        "شحن عالمي",
        "مساعدة جمركية",
        "نقل آمن",
        "معالجة سريعة",
        "تحديثات مباشرة",
        "دعم مخصص"
      ]
    }
  },
    2: {
    en: {
      title: "Order Tracking",
      text: "Rider of Speed provides real-time order tracking so you always know where your shipment is. Our smart tracking system ensures transparency, reliability and peace of mind for both businesses and customers.",
      points: [
        "Real-time shipment tracking",
        "Live status updates",
        "Full delivery transparency",
        "Accurate location monitoring",
  
      ]
    },
    ar: {
      title: "تتبع الطلبات",
      text: "توفر Rider of Speed نظام تتبع مباشر للطلبات حتى تكون على اطلاع دائم بموقع شحنتك مع شفافية وأمان كاملين.",
      points: [
        "تتبع مباشر للشحنات",
        "تحديثات فورية للحالة",
        "شفافية كاملة في التوصيل",
        "تحديد دقيق للموقع",
       
      ]
    }
  },
3: {
  en: {
    title: "Cash on Delivery",
    text: "Rider of Speed offers flexible Cash on Delivery service allowing customers to pay only when their shipment arrives. This increases trust, boosts sales, and improves customer satisfaction.",
    points: [
      "Payment upon delivery",
      "Increased customer trust",
      "No online payment required",
      "Reduced order cancellations",
    
    ]
  },
  ar: {
    title: "الدفع عند الاستلام",
    text: "توفر Rider of Speed خدمة الدفع عند الاستلام لتمكين الزبناء من الدفع بعد استلام الطرد مما يعزز الثقة ويزيد من المبيعات.",
    points: [
      "الدفع بعد الاستلام",
      "تعزيز ثقة الزبناء",
      "لا حاجة للدفع الإلكتروني",
      "تقليل إلغاء الطلبات",
     
    ]
  }
},
4: {
  en: {
    title: "24/24  Service",
    text: "Rider of Speed provides round-the-clock customer support to ensure your deliveries run smoothly at any time of the day. Our support team is always ready to assist you with tracking, issues, and service guidance.",
    points: [
      "24/24 live customer support",
      "Instant problem resolution",
      "Professional assistance",
      "Multi-channel communication",
      
    ]
  },
  ar: {
    title: "خدمة  24/24",
    text: "توفر Rider of Speed دعماً متواصلاً على مدار الساعة لضمان سير عمليات التوصيل بسلاسة في أي وقت.",
    points: [
      "دعم متواصل 24/24",
      "حل فوري للمشاكل",
      "مساعدة احترافية",
      "تواصل عبر عدة قنوات",
  
    ]
  }
},
5: {
  en: {
    title: "Cash Back",
    text: "Rider of Speed offers a flexible cash-back system that rewards loyal clients and frequent deliveries. Earn money back on your shipments and enjoy more value with every delivery.",
    points: [
      "Cash back on eligible deliveries",
      "Loyalty rewards program",
      "Instant balance tracking",
      "Transparent refund policy",
    
    ]
  },
  ar: {
    title: "الاسترجاع النقدي",
    text: "توفر Rider of Speed نظام استرجاع نقدي مرن يكافئ الزبناء الأوفياء وكثرة الشحنات، لتحصل على قيمة أكبر مع كل عملية توصيل.",
    points: [
      "استرجاع نقدي على التوصيلات المؤهلة",
      "برنامج ولاء للزبناء",
      "تتبع فوري للرصيد",
      "سياسة استرجاع شفافة",
  
    ]
  }
},

  
};


function Services({ lang }) {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [active, setActive] = useState(null);

  const translations = {
    en: {
      title: "Our Services",
      desc: "We offer fast, reliable and tailored delivery solutions.",
      list: [
        { name: "Express Delivery", des: "Fast city delivery", icon: faMotorcycle,  },
        { name: "International Delivery", des: "Worldwide shipping", icon: faGlobe, details: "More details here..." },
        { name: "Order Tracking", des: "Track orders live", icon: faBox, details: "More details here..." },
        { name: "Cash on Delivery", des: "Pay on arrival", icon: faMoneyBillWave, details: "More details here..." },
        { name: "24/7 Customer Service", des: "Always available", icon: faHeadset, details: "More details here..." },
        { name: "Cash Back", des: "Refund system", icon: faRotateLeft, details: "More details here..." },
      ]
    },
    ar: {
      title: "خدماتنا",
      desc: "نقدم حلول توصيل سريعة وموثوقة.",
      list: [
        { name: "توصيل سريع", des: "توصيل داخل المدينة", icon: faMotorcycle, },
        { name: "توصيل دولي", des: "شحن عالمي", icon: faGlobe, details: "تفاصيل أكثر..." },
        { name: "تتبع الطلبات", des: "تتبع مباشر", icon: faBox, details: "تفاصيل أكثر..." },
        { name: "الدفع عند الاستلام", des: "ادفع عند التوصيل", icon: faMoneyBillWave, details: "تفاصيل أكثر..." },
        { name: "خدمة العملاء 24/7", des: "دعم دائم", icon: faHeadset, details: "تفاصيل أكثر..." },
        { name: "استرجاع نقدي", des: "نظام استرجاع", icon: faRotateLeft, details: "تفاصيل أكثر..." },
      ]
    }
  };

 const current = translations[lang] || translations.en;


  return (
    <section className="services" ref={scrollTab} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="title">{current.title}</div>
      <div className="des">{current.desc}</div>

      <div className="list expanded">
        {current.list.map((item, i) => (
          <div
            key={i}
            className={`item ${active === i ? "active" : ""} ${active !== null && active !== i ? "hidden" : ""}`}
            onClick={() => setActive(i)}
          >

            {active === i && (
              <button className="back" onClick={(e) => { e.stopPropagation(); setActive(null); }}>
                ← Back
              </button>
            )}

            <FontAwesomeIcon icon={item.icon} />
            <h3>{item.name}</h3>
            <div className="des">{item.des}</div>

{active === i && SERVICE_DETAILS[i] && (
  <div className="details">


 {active === i && i === 0 && (
  <div className="service-content animate">

    <div className="service-media">
      <video src="/riders vedio 1.mp4" autoPlay loop muted playsInline />
    </div>

    <div className="service-text">
     <h2>{SERVICE_DETAILS[0][lang].title}</h2>
<p>{SERVICE_DETAILS[0][lang].text}</p>

<ul>
  {SERVICE_DETAILS[0][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}

 {active === i && i === 1 && (
  <div className="service-content animate">

    <div className="service-media">
      <video src="/localisation levraison .mp4" autoPlay loop muted playsInline />
    </div>

    <div className="service-text">
     <h2>{SERVICE_DETAILS[1][lang].title}</h2>
<p>{SERVICE_DETAILS[1][lang].text}</p>

<ul>
  {SERVICE_DETAILS[1][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}

{active === i && i === 2 && (
  <div className="service-content animate">

    <div className="service-media">
      <video src="/ordre Tacking.mp4" autoPlay loop muted playsInline />
    </div>

    <div className="service-text">
    <h2>{SERVICE_DETAILS[2][lang].title}</h2>
<p>{SERVICE_DETAILS[2][lang].text}</p>

<ul>
  {SERVICE_DETAILS[2][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}


{active === i && i === 3 && (
  <div className="service-content animate">

    <div className="service-media">
   <video src={process.env.PUBLIC_URL + "/cash.mp4"} autoPlay loop muted />

    </div>

    <div className="service-text">
    <h2>{SERVICE_DETAILS[3][lang].title}</h2>
<p>{SERVICE_DETAILS[3][lang].text}</p>

<ul>
  {SERVICE_DETAILS[3][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}
   

{active === i && i === 4 && (
  <div className="service-content animate">

    <div className="service-media">
      <video src="/24.24.mp4" autoPlay loop muted playsInline />
    </div>

    <div className="service-text">
    <h2>{SERVICE_DETAILS[4][lang].title}</h2>
<p>{SERVICE_DETAILS[4][lang].text}</p>

<ul>
  {SERVICE_DETAILS[4][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}
   
{active === i && i === 5 && (
  <div className="service-content animate">

    <div className="service-media">
      <video src="/cashback.mp4" autoPlay loop muted playsInline />
    </div>

    <div className="service-text">
    <h2>{SERVICE_DETAILS[5][lang].title}</h2>
<p>{SERVICE_DETAILS[5][lang].text}</p>

<ul>
  {SERVICE_DETAILS[5][lang].points.map((p, k) => (

          <li key={k}>✔ {p}</li>
        ))}
      </ul>
    </div>

  </div>
)}

  </div>
)}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

