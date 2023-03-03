import Head from "next/head";
import Link from "next/link";
import Aside from "../components/Aside";
import { motion } from "framer-motion";
import WebsiteGrid from "../components/WebsiteGrid";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

export const IndexGrid = styled.div`
  display: grid;
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const IndexContainer = styled.div`
  background: #fff;
  // opacity: 0.9;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;
  @media only screen and (max-width: 1024px) {
  padding: 20px 10px 0px 20px;
  }
  }

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-bottom: none;
    padding: 50px 0 0 7px;
  }
  a {
    color: #000;
  }
`;

const Home = () => {
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
              <WebsiteGrid />
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
