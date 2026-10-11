import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "flag-icons/css/flag-icons.min.css";
import { useCurrency } from "../context/CurrencyContext";

const Currency = () => {
  const languages = [
    { code: "en", name: "English", flag: "gb" },
    { code: "tr", name: "Turkish", flag: "tr" },
    { code: "ar", name: "Arabic", flag: "sa" },
  ];

  // }

  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle d-inline-flex align-items-center gap-2 border-0 bg-transparent text-secondary"
        type="button"
        id="Currency"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className={`fi fi-${selectedLang.flag}`}></span>
        <span>{selectedLang.name}</span>
      </button>

      <ul
        className="dropdown-menu shadow-sm py-1"
        aria-labelledby="Currency"
        style={{ minWidth: "150px" }}
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={`dropdown-item d-flex align-items-center gap-3 py-2 ${
                selectedLang.code === lang.code ? "active" : ""
              }`}
              type="button"
              onClick={() => {
                setSelectedLang(lang);
                i18n.changeLanguage(lang.code);
              }}
            >
              <span className={`fi fi-${lang.flag}`}></span>
              <span>{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function TopNav() {
  const { setCurrency1 } = useCurrency();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 d-none d-lg-block">
            <a
              href=""
              className="link-dark text-decoration-none me-3 pe-2 border-end border-1 border-dark"
            >
              {t("topnav.about_us")}
            </a>
            <a
              href=""
              className="link-dark text-decoration-none me-3 pe-2 border-end border-1 border-dark"
            >
              {t("topnav.careers")}
            </a>
            <a href="" className="link-dark text-decoration-none me-3">
              {t("topnav.open_a_shop")}
            </a>
          </div>

          <div className="col-lg-4 d-none d-lg-flex text-center align-items-center justify-content-center">
            <p className="my-auto">
              {t("topnav.free_shipping_for_al")}{" "}
              <span className="text-success">$75.00</span>
            </p>
          </div>

          <div className="col-lg-4  d-flex justify-content-end align-items-center gap-3">
            <p className="mb-0 d-none d-lg-block">
              {t("topnav.need_help_call_us")}
              <span className="text-success">{t("topnav.1800_900")}</span>{" "}
              <i className="bi bi-telephone-fill"></i>
            </p>
            <Currency />
            <select onChange={(e) => setCurrency1(e.target.value)} className="form-control w-25">
              <option value="USD">USD</option>
              <option value="SYP">SYP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
