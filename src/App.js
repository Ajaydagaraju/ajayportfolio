import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Card";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Skills />
       <LightColor>
        <Projects />
      </LightColor>
      <Work />
      <LightColor>
        <Footer />
      </LightColor> 
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
