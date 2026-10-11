import { useTranslation } from "react-i18next";
import AboutHero from "../components/AboutHero.jsx";
import Members from "../components/Members.jsx";
import { Container } from "react-bootstrap";
import Partner from "../components/Partner.jsx";
import Info from "../components/Info.jsx";
function About() {
  return <>
      <Container>
        <AboutHero />
        <Members />
        <Partner />
      </Container>
      <Container>
        <Info />
      </Container>
      
    </>;
}
export default About;