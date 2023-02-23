import Head from "next/head";
import Link from "next/link";
import sanityClient from "../utils/client";
import Aside from "../components/Aside";
import { motion } from "framer-motion";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import {
  IndexGrid,
  IndexContainer,
  WebsitesGrid,
  IntroContent,
} from "../components/Index.styled.js";

const Home = ({ websites }) => {
  return (
    <>
      <Head>
        <title>Elsa Hovey | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <IndexGrid>
          <Aside />
          <IndexContainer>
            <section className="">
              <IntroContent>
                <p>
                  Listed below are some of my featured websites, all built using
                  Javascript code. I am always looking for opportunities to
                  further my skills, and work with other like minded people in
                  tech. If you would like to contact me can reach me{" "}
                  <Link href="/#contact">here.</Link>
                </p>
              </IntroContent>
              <h2 className="title">Featured Projects</h2>

              <WebsitesGrid>
                {websites &&
                  websites.map((website, index) => (
                    <span key={index}>
                      <Card website={website} />
                    </span>
                  ))}
              </WebsitesGrid>
            </section>

            <section id="contact" className="section-spacing">
              <h2 className="title">Contact</h2>
              <p style={{ padding: "5px 0px" }}>
                Has my portfolio piqued your interest? If so, you can reach me
                at devdesignsbyelsa@gmail.com, or simply fill out the form
                below!
              </p>
              <p>Looking forward to hearing from you!</p>
              <ContactForm />
            </section>
          </IndexContainer>
        </IndexGrid>
      </motion.div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const websites = await sanityClient.fetch(query);
  if (!websites.length) {
    return {
      props: {
        websites: [],
      },
    };
  } else {
    return {
      props: {
        websites,
      },
    };
  }
};
