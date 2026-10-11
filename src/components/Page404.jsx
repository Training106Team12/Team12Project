import { useTranslation } from "react-i18next";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Page404() {
  const { t, i18n } = useTranslation();
  const h3Style = { color: "#425a8b", fontSize: "32px" };
  const textStyle = { color: "#425a8b", fontSize: "16px" };
  const btnColor2 = { backgroundColor: "#425a8b" };
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div className="pt-5 mt-5">
        <img src="./src/assets/img/404.jpeg" alt="Error404" />
        <h3 style={h3Style}>{t("page404.404_page_not_found")}</h3>
        <p style={textStyle}>{t("page404.looks_like_page_does")}</p>
        <a
          href=""
          className="btn rounded-1 fw-bold px-4"
          
          onMouseEnter={()=>setIsActive(true)}
          onMouseLeave={()=>setIsActive(false)}
          style = {{backgroundColor:(isActive)?"#fff":"#425a8b",
            color:(isActive)?"#425a8b":"#fff",
            borderColor:(isActive)?"#425a8b":"none"
          }}
        >
        {t("page404.back_to_homepage")}
        </a>
      </div>
    </Container>
  );
}
export default Page404;
