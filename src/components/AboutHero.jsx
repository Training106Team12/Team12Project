import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function AboutHero() {
  const {t, i18n} =useTranslation();
  const h2Style = {
    color: t("term.425a8b"),
    fontSize: t("vendorsingle.45px")
  };
  const h4Style = {
    color: t("term.425a8b"),
    fontSize: t("partner.24px")
  };
  const h5Style = {
    color: t("partner.8c9ec5"),
    fontSize: t("term.20px")
  };
  const pStyle = {
    color: t("partner.6b83b6"),
    fontSize: t("term.14px")
  };
  const textStyle = {
    color: t("partner.6b83b6"),
    fontSize: t("page404.16px")
  };
  return <>
      <Row className={t("partner.textstart_pt5_psmd5_")}>
        <h5 className={i18n.language==='ar'?"text-end":"text-start"} style={h5Style}>{t("topnav.about_us")}</h5>
        <h2 className={i18n.language==='ar'?"text-end":"text-start"}  style={h2Style}>{t("abouthero.global_leading_onlin")}</h2>
      </Row>
      <Row className={t("abouthero.textstart_psmd5_ps1_")}>
        <Col md={6}>
          <div style={pStyle} className={t("hero7.w100")}>
            <p>{t("abouthero.ecom_expands_global_")}</p>
            <p>{t("abouthero.nunc_vel_risus_commo")}</p>
            <p>{t("abouthero.tempus_iaculis_urna_")}</p>
          </div>

          <ul className={t("abouthero.listunstyled_dflex_f")} style={pStyle}>
            <li className="">
              <img className={t("abouthero.me2")} src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/about/checked.svg" alt="" />{t("abouthero.we_provide_qualified")}</li>
            <li className="">
              <img className={t("abouthero.me2")} src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/about/checked.svg" alt="" />{t("abouthero.modern_tools_technol")}</li>
            <li className={t("abouthero.me2")}>
              <img className={t("abouthero.me2")} src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/about/checked.svg" alt="" />{t("abouthero.neat_cleaning_top_se")}</li>
            <li className="">
              <img className={t("abouthero.me2")} src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/about/checked.svg" alt="" />{t("abouthero.we_develop_digital_f")}</li>
          </ul>
        </Col>
        <Col md={6}>
          <div className={t("hero6.textcenter")}>
            <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/about/img.png" alt="" className={t("term.imgfluid")} style={{
            width: t("abouthero.364px"),
            height: t("abouthero.230px")
          }} />
          </div>
        </Col>
      </Row>
      <Row className={i18n.language==='ar'?"text-end my-auto":"text-start my-auto"} style={{
      backgroundColor: t("info.f0f3f8")
    }}>
        <Col md={3} className="">
          <div className={t("abouthero.psmd5_ps2_pe2_pt5")}>
            <h4 className={t("abouthero.fwbold")} style={h4Style}>{t("abouthero.12_years")}</h4>
            <p style={textStyle}>{t("abouthero.weve_more_than_12_ye")}</p>
          </div>
        </Col>
        <Col md={3} className="">
          <div className={t("abouthero.px3_pt5")}>
            <h4 className={t("abouthero.fwbold")} style={h4Style}>{t("abouthero.2000_employee")}</h4>
            <p style={textStyle}>{t("abouthero.weve_more_than_2000_")}</p>
          </div>
        </Col>
        <Col md={3} className="">
          <div className={t("abouthero.px3_pt5")}>
            <h4 className={t("abouthero.fwbold")} style={h4Style}>{t("abouthero.68_branches")}</h4>
            <p style={textStyle}>{t("abouthero.we_have_68_branches_")}</p>
          </div>
        </Col>
        <Col md={3} className="">
          <div className={t("abouthero.px3_pt5")}>
            <h4 className={t("abouthero.fwbold")} style={h4Style}>{t("abouthero.15_countries")}</h4>
            <p style={textStyle}>{t("abouthero.we_are_present_in_15")}</p>
          </div>
        </Col>
      </Row>
    </>;
}
export default AboutHero;