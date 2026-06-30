import Head from "next/head";
import Header from './margins/header';
import Footer from "./margins/footer";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import { Container } from "react-bootstrap";
import WorkExperience from "./sections/work_exp";
import Socials from "./sections/socials";


function Home() {
  return (
    <>
      <Head>
        <title>Xochitl&apos;s Portfolio</title>
      </Head>
      <Header />
      <Container>
        <div className="bg-portfolio-yinmn-blue">
          <Intro />
          <Socials />
          <WorkExperience />
          <Projects />
          <Contact />
        </div>

      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
