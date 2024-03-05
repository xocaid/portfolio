import Head from "next/head";
import Header from './margins/header';
import Footer from "./margins/footer";
import Landing from "./sections/landing";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";


function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div >
  );
}
export default Home;
