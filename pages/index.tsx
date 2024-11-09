import Head from "next/head";
import localFont from "next/font/local";
import homeStyles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kim Aeri</title>
        <section className={homeStyles.headingMd}>
          <p>[Aeri Introduction]</p>
          <p>(This is a website)</p>
        </section>
        <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
          <h2 className={homeStyles.headingLg}>Blog</h2>
          <ul className={homeStyles.list}></ul>
        </section>
      </Head>
    </div>
  );
}
