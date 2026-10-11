import { useTranslation } from "react-i18next";

import { Row, Col } from "react-bootstrap";

function Partner() {
  const h2Style = { color: "#425a8b", fontSize: "45px" };
  const h4Style = { color: "#425a8b", fontSize: "24px" };
  const h5Style = { color: "#8c9ec5", fontSize: "20px" };
  const pStyle = { color: "#6b83b6", fontSize: "14px" };

  const {t, i18n} =useTranslation();

  return (
    <>
      <Row className="text-start pt-5 ps-md-5 ps-1">
        <h5 className={i18n.language==='ar'?"text-end":"text-start"} style={h5Style}>
          {t("partner.our_partners")}
        </h5>
        <h2 className={i18n.language==='ar'?"text-end":"text-start"} style={h2Style}>
          {t("partner.trusted_by_18000_ven")}
        </h2>
        <div className="mt-5 d-flex flex-wrap gap-3 row-gap-5 mb-5" >
          <a href=""><img src="./src/assets/microsoft.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/sony.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/acer1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/nokia1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/asus1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/casio1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/dell1.svg" alt="" className="img-fluid"  /></a>
          <a href=""><img src="./src/assets/panasonic1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/vaio1.svg" alt=""  className="img-fluid" /></a>
          <a href=""><img src="./src/assets/sharp.svg" alt="" className="img-fluid"  /></a>
        </div>
      </Row>
      <Row className="text-start ps-5 py-5 border-top">
        <h2 className={i18n.language==='ar'?"text-end":"text-start"} style={h2Style}>{t("partner.visit_our_stores")}</h2>
        <p className={i18n.language==='ar'?"text-end":"text-start"} style={pStyle}>{t("partner.find_us_at_these_loc")}</p>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Melbourne</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Sydney</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Bangkok</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>San Francisco</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Sweden</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Seoul</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Byron Bay</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Ha Noi</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <h4 style={h4Style}>Paris</h4>
            <p style={pStyle}>
              205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Partner;
