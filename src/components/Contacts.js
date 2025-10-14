import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts({ lang }) {
  const texts = {
    en: {
      title: "Contact Us",
      description:
        "Get in touch with Riders of Speed. We are always ready to answer your questions and provide support.",
      phone: "Phone Number",
      email: "Email",
      instagram: "Instagram",
    },
    ar: {
      title: "اتصل بنا",
      description:
        "تواصل مع Riders of Speed. نحن دائمًا مستعدون للإجابة على أسئلتك وتقديم الدعم.",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      instagram: "إنستغرام",
    },
  };

  const [listContacts] = useState([
    {
      titleKey: "phone",
      value: "+212634087141",
    },
    {
      titleKey: "email",
      value: "redouanettaheri464@gmail.com",
    },
    {
      titleKey: "instagram",
      value: "@Riders of speed",
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        {texts[lang].title}
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {texts[lang].description}
      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((item, key) => (
          <div className="item" key={key}>
            <h3>{texts[lang][item.titleKey]}</h3>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;

