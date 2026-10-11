import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Login() {
   const { t, i18n } = useTranslation();
  return (
    <Container>
      <Row className="mt-4 justify-content-center">
        <Col lg={7}>
          <h3>{t("login.member_login")}
</h3>
          <p>{t("login.welcome_back")}

</p>{" "}
            <form action="" className="form row ">
             
              <Col lg={12}>
                <label htmlFor="" className="form-label">
                  {t("login.email_phone_username")}
                </label>{" "}
                <input
                  type="text"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder="Info@gmail.com"
                  id=""
                  style={{ minHeight: "60px" }}
                />
              </Col>
              <Col lg={12}>
                <label htmlFor="" className="form-label">
                  {t("login.password")}
                </label>{" "}
               
                  <input
                    type="password"
                    name=""
                    className="form-control my-3"
                    required
                    placeholder={t("login.password")}
                    id=""
                    style={{ minHeight: "60px" }}
                   
                    
                  />{" "}
                 
                
              </Col>
              <Col lg={12}>
                {" "}
                <button type="submit" className="btn btn-primary my-3 w-100">
                  {t( "login.submit")}
                </button>
              </Col>
            </form>
        </Col>{" "}
      </Row>
    </Container>
  );
}

export default Login;
