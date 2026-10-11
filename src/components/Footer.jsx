import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section
        className="newsletter mt-5 py-5 container"
        style={{
          backgroundColor: "#204468",
          backgroundImage:
            "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/bg-newsletter.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom ",
          backgroundSize: "",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between g-5">
            <div className="col-lg-4">
              <h2 className="mb-3 fw-bold">
                {t("footer.subscribe_get")} <span className="text-warning">{t("footer.10_off")}</span>
              </h2>
              <p className="mb-0 text-white">
                {t("footer.get_email_updates_on")}
              </p>
            </div>

            <div className="col-lg-4 mt-0  mx-auto">
              <div className="  d-flex align-items-center justify-content-end gap-3">
                <div className="flex-grow-1">
                  <div className="input-group input-group-lg shadow-sm">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder={t("footer.your_email_address")}
                      aria-label="Your email address"
                    />
                    <button className="btn btn-warning px-4 fw-semibold">
                      {t("footer.sign_up")}
                    </button>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-light border-top  container">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-3">
              <h4 className="mb-3 fw-bold">{t("footer.contact")}</h4>
              <p className="mb-2 text-secondary">
                <strong className="text-dark">{t("footer.address")}</strong>
                <br />
                502 New Design Str, Melbourne, United States
              </p>
              <p className="mb-2 text-secondary">
                <strong className="text-dark">{t("footer.phone")}</strong>
                <br />
                {t("footer.01_123456789")}
              </p>
              <p className="mb-0 text-secondary">
                <strong className="text-dark">{t("footer.email")}:</strong>
                <br />
                info@example.com
              </p>
            </div>

            <div className="col-md-3">
              <h4 className="mb-3 fw-bold">{t("footer.make_money_with_us")}</h4>
              {[
                t("footer.mission_vision"),
                t("footer.our_team"),
                t("footer.careers"),
                t("footer.advertising"),
              ].map((item) => (
                <p key={item} className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    {item}
                  </a>
                </p>
              ))}
            </div>

            <div className="col-md-3">
              <h4 className="mb-3 fw-bold">{t("footer.company")}</h4>
              {[
                t("footer.our_blog"),
                t("footer.plans_pricing"),
                t("footer.knowledge_base"),
                t("footer.news_events"),
              ].map((item) => (
                <p key={item} className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    {item}
                  </a>
                </p>
              ))}
            </div>

            <div className="col-md-3">
              <h4 className="mb-3 fw-bold">{t("footer.app_payment")}</h4>
              <p className="text-secondary mb-3">
                {t("footer.download_our_app_and")}
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                <a
                  href="https://www.apple.com/app-store/"
                  className="d-inline-flex align-items-center gap-2 rounded-4 text-decoration-none shadow-sm border border-dark-subtle transition"
                  aria-label="Download on the App Store"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#111827",
                    color: "#ffffff",
                    padding: "10px 16px",
                    minWidth: "180px",
                  }}
                >
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt="Apple"
                      width="18"
                      height="22"
                    />
                  </span>
                  <span className="d-flex flex-column lh-1">
                    <small className="opacity-75">{t( "footer.download_on_the_app_")}</small>
                    <strong className="fs-6">App Store</strong>
                  </span>
                </a>

                <a
                  href="https://play.google.com/store"
                  className="d-inline-flex align-items-center gap-2 rounded-4 text-decoration-none shadow-sm border border-dark-subtle transition"
                  aria-label="Get it on Google Play"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#0b0b0b",
                    color: "#ffffff",
                    padding: "10px 16px",
                    minWidth: "180px",
                  }}
                >
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark fw-bold"
                    style={{ width: "30px", height: "30px", fontSize: "0.8rem" }}
                  >
                    <svg
                      role="img"
                      aria-label="Google Play"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "block" }}
                    >
                      <defs>
                        <linearGradient id="googlePlayGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#00D7FE" />
                          <stop offset="35%" stopColor="#00D46A" />
                          <stop offset="68%" stopColor="#FFCA28" />
                          <stop offset="100%" stopColor="#F44336" />
                        </linearGradient>
                      </defs>
                      <path d="M3 2.5v19l18-9.5L3 2.5Z" fill="url(#googlePlayGradient)" />
                    </svg>
                  </span>
                  <span className="d-flex flex-column lh-1">
                    <small className="opacity-75">{t("footer.get_it_on_google_pla")}</small>
                    <strong className="fs-6">Google Play</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top bg-white">
          <div className="container py-4">
            <div className="mb-3">
              <h5 className="fw-bold mb-3">{t("footer.electronics")}</h5>
              <div className="d-flex flex-wrap gap-3">
                {[
                  t("footer.cell_phones"),
                  t("footer.headphones"),
                  t("footer.television"),
                  t( "footer.apple_watch"),
                  t("footer.samsung"),
                ].map((item) => (
                  <a key={item} href="#" className="text-secondary text-decoration-none">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="fw-bold mb-3 mt-4">{t("footer.furniture")}</h5>
              <div className="d-flex flex-wrap gap-3">
                {[
                  t("footer.sofa"),
                  t("footer.chair"),
                  t("footer.dining_table"),
                  t("footer.living_room"),
                ].map((item) => (
                  <a key={item} href="#" className="text-secondary text-decoration-none">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark text-white">
          <div className="container py-3">
            <div className="row align-items-center gy-2">
              <div className="col-md-6 text-secondary text-md-start">
                {t( "footer.copyright_2022_ecom_")}
              </div>

              <div className="col-md-6 text-md-end">
                <a href="#" className="text-white text-decoration-none me-3">
                  {t("footer.conditions_of_use")}
                </a>
                <a href="#" className="text-white text-decoration-none me-3">
                 {t("footer.privacy_notice")}
                </a>
                <a href="#" className="text-white text-decoration-none">
                  {t("footer.contact_us")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;