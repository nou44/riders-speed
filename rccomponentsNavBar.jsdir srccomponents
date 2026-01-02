import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ activeTab, lang }) => {
  const dispatch = useDispatch();

  // ✅ النصوص باللغتين
  const texts = {
    en: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contacts: "Contacts",
    },
    ar: {
      home: "الرئيسية",
      services: "خدماتنا",
      projects: "المشاريع",
      contacts: "اتصل بنا",
    }
  };

  const [linkNav] = useState(["home", "services", "projects", "contacts"]);
  const [statusNav, changeStatusNav] = useState(null);

  const toggleNav = () => {
    changeStatusNav(statusNav === null ? "active" : null);
  };

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className={statusNav}>
        {linkNav.map((value) => (
          <span
            key={value}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {texts[lang][value]}
          </span>
        ))}
      </nav>

      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
