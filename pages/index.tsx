import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from './margins/header';
import Footer from "./margins/footer";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        <Header />
      </div>
      <main className={`${styles.main} ${inter.className}`}>

      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
