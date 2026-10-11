import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";

function Info() {
  const h3Style = { color: "#425a8b", fontSize: "32px" };
  const pStyle = { color: "#6b83b6", fontSize: "14px" };
  const h4Style = { color: "#425a8b", fontSize: "24px" };
  const textStyle = { color: "#425a8b", fontSize: "14px" };

  const {t, i18n} =useTranslation();



  return (
    <Row className="ps-5 py-5" style={{backgroundColor:"#f0f3f8"}}>
      <Col md={3}>
        <div className="text-md-start text-center mb-3">
          <h3 className="pt-3" style={h3Style}>{t("info.wed_love_to_here_fro")}</h3>
          <p className={i18n.language==='ar'?"text-end":"text-start"} style={pStyle}>{t("info.chat_with_our_friend")}</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3">
          <img src="./src/assets/chat.svg" alt="" />
          <h4 style={h4Style}>{t( "info.chat_to_sales")}</h4>
          <p className="mb-0" style={pStyle}>
            {t("info.speak_to_our_team")}
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
            sales@ecom.com
          </a>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3">
          <img src="./src/assets/call.svg" alt="" />
          <h4 style={h4Style}>{t("info.call_us")}</h4>
          <p className="mb-0" style={pStyle}>
            {t("info.monfri_from_8am_to_5")}
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
           {t( "info.15550000000")}
          </a>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3  mx-auto">
          <img src="./src/assets/map.svg" alt="" />
          <h4 style={h4Style}>{t("info.visit_us")}</h4>
          <p className="mb-0" style={pStyle}>
            {t("info.visit_our_office")}
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
            205 North Michigan Avenue,<br></br> Suite 810  <br></br>Chicago, 60601, USA
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Info;
