import { useTranslation } from "react-i18next";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Career() {
  const { t, i18n } = useTranslation();
  const h2Style = { color: "#425a8b", fontSize: "45px" };
  const h5Style = { color: "#425a8b", fontSize: "20px", fontWeigh: "bold" };
  const pStyle = { color: "#425a8b", fontSize: "14px" };

  return (
    <Container>
      <div className="px-5 mt-5">
        <h2 style={h2Style}>{t("career.work_with_us")}</h2>
        <img src="./src/assets/team-2.jpg" alt="" className="img-fluid" />
        <p className="text-start py-3" style={pStyle}>
         {t("career.we_recognize_that_po")}
        </p>
      </div>
      <div className="text-start px-5">
        <h5 style={h5Style}>{t("career.programs_and_interns")}</h5>
        <p style={pStyle}>
          {t("career.but_i_must_explain_t")}
        </p>
        <p style={pStyle}>
          {t("career.to_take_a_trivial_ex")}
        </p>
      </div>
      <div className="text-start px-5">
        <h5 style={h5Style}>{t("career.current_openings")}</h5>
        <p style={pStyle}>
          {t("career.these_cases_are_perf")}
        </p>
        <p style={pStyle}>
          {t( "career.but_i_must_explain_t")}
        </p>
        <p style={pStyle}>
          {t("career.to_take_a_trivial_ex")}
        </p>
      </div>
      <div className="text-start px-5 pb-5">
        <h5 style={h5Style}>{t("career.behind_the_mission")}</h5>
        <p style={pStyle}>
          {t("career.these_cases_are_perf")}
        </p>
        <p style={pStyle}>
         {t("career.but_i_must_explain_t")}
        </p>
        <p style={pStyle}>
          {t( "career.to_take_a_trivial_ex")}
        </p>
      </div>
    </Container>
  );
}
export default Career;
