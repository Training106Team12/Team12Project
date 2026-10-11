import { useTranslation } from "react-i18next";

import { Row, Col } from "react-bootstrap";

  function Members() {
  const h2Style = { color: "#425a8b", fontSize: "45px" };
  const h5Style = { color: "#425a8b", fontSize: "20px" };
  const pStyle = { color: "#6b83b6", fontSize: "14px" };
  const {t, i18n} =useTranslation();
  return (
    <>
      <Row className="text-start pt-5 ps-md-5 ps-1">
        <h5 className={i18n.language==='ar'?"text-end":"text-start"} style={h5Style}>
          {t("members.behind_the_brands")}
         
        </h5>
        <h2 className={i18n.language==='ar'?"text-end":"text-start"} style={h2Style}>
          {t("members.the_people_who_work_")}
         
        </h2>
      </Row>
      <Row className="text-center pt-5 ps-md-5 ps-1 row-gap-3">
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft1.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Ronald Richards
          </h5>
          <p className="pt-2" style={pStyle}>
            {t("members.chief_executive_offi")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft2.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Jenny Wilson
          </h5>
          <p className="pt-2" style={pStyle}>
            {t("members.chief_financial_offi")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft3.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Cody Fisher
          </h5>
          <p className="pt-2" style={pStyle}>
            {t("members.chief_operating_offi")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft4.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Jacob Jones
          </h5>
          <p className="pt-2" style={pStyle}>
           {t("members.chief_technology_off")}
          </p>
        </Col>
         <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft5.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Leslie Alexander
          </h5>
          <p className="pt-2" style={pStyle}>
           {t("members.chief_marketing_offi")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft6.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Ralph Edwards
          </h5>
          <p className="pt-2" style={pStyle}>
           {t("members.chief_human_resource")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft7.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Eleanor Pena
          </h5>
          <p className="pt-2" style={pStyle}>
           {t("members.chief_legal_officer")}
          </p>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="">
          <img src="./src/assets/staft8.png" alt="" className="img-fluid" />
          <h5 className="pt-2" style={h5Style}>
            Theresa Webb
          </h5>
          <p className="pt-2" style={pStyle}>
          {t("members.chief_product_office")}
          </p>
        </Col>
      </Row>
    </>
  );
}
export default Members;
