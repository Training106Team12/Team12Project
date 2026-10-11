import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Register() {
   const { t, i18n } = useTranslation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <Row className="mt-4 justify-content-center">
        <Col lg={7}>
          <h3>{t("register.create_an_account")}</h3>
          <p>{t("register.access_to_all_featur")}</p>{" "}
            <form action="" className="form row ">
              <Col lg={6}>
                {" "}
                <input
                  type="text"
                  name=""
                  className="form-control my-3"
                  required
                  placeholder={t("register.first_name")}
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
                  placeholder={t("register.last_name")}
                  id=""
                />
              </Col>
              <Col lg={12}>
                <label htmlFor="" className="form-label">
                  {t( "register.email_phone_username")}
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
                  {t("register.password")}
                </label>{" "}
                <div
                  className="input-group w-100"
                  style={{ minHeight: "60px" }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name=""
                    className="form-control my-3"
                    required
                    placeholder={t("register.password")}
                    id=""
                    style={{ minHeight: "60px" }}
                    onChange={(passwordis) =>
                      setPassword(passwordis.target.value)
                    }
                  />{" "}
                  <button
                    className="btn btn-primary my-3"
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                </div>
                {password ? (
                  password.length >= 8 ? (
                    <div className="w-100 d-flex my-1 border border-2 border-success justify-content-center align-items-center rounded-2  ">
                      {" "}
                      <p className="text-success my-2 justify-content-center align-items-center   ">{t("register.password_is_strong")}</p>
                    </div>
                  ) : (
                    <div className="w-100 d-flex my-1 border border-2 border-danger justify-content-center align-items-center rounded-2  ">
                      {" "}
                      <p className="text-danger my-2 justify-content-center align-items-center " >{t("register.password_is_weak")}</p>
                    </div>
                  )
                ) : (
                  ""
                )}
              </Col>
              <Col lg={12}>
                {" "}
                <button type="submit" className="btn btn-primary my-3 w-100">
                  {t("register.submit")}
                </button>
              </Col>
            </form>
        </Col>{" "}
      </Row>
    </Container>
  );
}

export default Register;
