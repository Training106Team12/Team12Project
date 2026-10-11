import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
    const { t, i18n } = useTranslation();
  
  const TextColor = { color: "#0e2f65" };
  const ptext = "205 North Michigan Avenue, Suite 810Chicago, 60601, USA";
  return (
    <Container>
      <Row className="mt-4">
        <Col lg={6}>
          <h3>{t("contactus.contact_us")}</h3>
          <p>{t( "contactus.our_team_would_love_")}</p>{" "}
          <Row>
            <form action="" className="form row ">
              <Col lg={6}>
                {" "}
                <input
                  type="text"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder={t("contactus.first_name")}
                  id=""
                />
              </Col>
              <Col lg={6}>
                {" "}
                <input
                  type="text"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder={t("contactus.last_name")}
                  id=""
                />
              </Col>
              <Col lg={12}>
                {" "}
                <input
                  type="email"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder={t("contactus.email")}
                  id=""
                />
              </Col>
              <Col lg={12}>
                {" "}
                <input
                  type="text"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder={t("contactus.phone_number")}
                  id=""
                />
              </Col>
              <Col lg={12}>
                {" "}
                <textarea
                  name=""
                  rows={5}
                  className="form-control"
                  required
                  placeholder={t( "contactus.mesaage")}
                  id=""
                ></textarea>
              </Col>
              <Col lg={12}>
                {" "}
                <button type="submit" className="btn btn-primary my-3 ">
                  {t("contactus.send_mesaage")}
                </button>
              </Col>
            </form>
          </Row>
        </Col>{" "}
        <Col lg={6}>
          <iframe
            src="https://www.google.com/maps?q=New+York+City&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="New York Map"
          ></iframe>
        </Col>{" "}
      </Row>
      <Row>
        <Col
          lg={3}
          style={{ ...TextColor }}
          className="my-5 d-flex flex-column gap-3"
        >
          {" "}
          <div>
            <h5>{t("contactus.visit_our_stores")}</h5>{" "}
            <p className="lead">{t("contactus.find_us_at_these_loc")} </p>{" "}
            <button className="btn btn-primary">{t("contactus.view_map")}</button>
          </div>{" "}
        </Col>
        <Col
          lg={3}
          style={{ ...TextColor }}
          className="my-5 d-flex flex-column gap-3"
        >
          {" "}
          <div>
            {" "}
            <h5>Melbourne</h5> <p className="lead">{ptext}</p>
          </div>{" "}
          <div>
            {" "}
            <h5>Byron Bay</h5> <p className="lead">{ptext}</p>{" "}
          </div>
          <div>
            <h5>San Francisco</h5> <p className="lead">{ptext}</p>
          </div>{" "}
        </Col>
        <Col
          lg={3}
          style={{ ...TextColor }}
          className="my-5 d-flex flex-column gap-3"
        >
          {" "}
          <div>
            {" "}
            <h5>Melbourne</h5> <p className="lead">{ptext}</p>
          </div>{" "}
          <div>
            {" "}
            <h5>Byron Bay</h5> <p className="lead">{ptext}</p>{" "}
          </div>
          <div>
            <h5>San Francisco</h5> <p className="lead">{ptext}</p>
          </div>{" "}
        </Col>
        <Col
          lg={3}
          style={{ ...TextColor }}
          className="my-5 d-flex flex-column gap-3"
        >
          {" "}
          <div>
            {" "}
            <h5>Melbourne</h5> <p className="lead">{ptext}</p>
          </div>{" "}
          <div>
            {" "}
            <h5>Byron Bay</h5> <p className="lead">{ptext}</p>{" "}
          </div>
          <div>
            <h5>San Francisco</h5> <p className="lead">{ptext}</p>
          </div>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
