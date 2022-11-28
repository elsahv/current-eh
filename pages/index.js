/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";
import { motion } from "framer-motion";
import Intro from "../components/Intro";

import {
  FaPencilAlt,
  FaRegNewspaper,
  FaToolbox,
  FaDesktop,
} from "react-icons/fa";

//! STYLES
const Wrapper = styled.div`
  // background: green;
  padding: 20px 70px 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4em;

  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 30px 0px 10px;
    grid-gap: 1em;
  }

  @media only screen and (max-width: 531px) {
    padding: 20px 0;
    margin: 30px 10px;
  }
`;

//todo SERVICES STYLES
const ServicesTitle = styled.h2`
  // background: green;
  grid-area: t;
  display: flex;
  align-items: flex-end;
  padding-left: 10px;
  font-size: 30px;
  text-decoration: underline;
`;

const Grid = styled.div`
  opacity: 0.9;
  padding: 70px 40px;
  // background: pink;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 1fr 1fr;
  grid-template-areas:
    "t t"
    "a b"
    "c d";
  grid-gap: 1em;
  ul {
    padding-left: 20px;
  }
  li {
    padding: 3px 0;
    font-size: 18px;
  }

  #sq {
    background: teal;
    padding: 20px;
    border: solid 2px black;
    font-size: 18px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 10px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "t"
      "a"
      "b"
      "c"
      "d";
  }

  @media only screen and (max-width: 834px) {
    padding: 30px 30px;
  }
`;

const Sq1 = styled.div`
  grid-area: a;
`;
const Sq2 = styled.div`
  grid-area: b;
`;
const Sq3 = styled.div`
  grid-area: c;
`;
const Sq4 = styled.div`
  grid-area: d;
`;
const GridSqTitle = styled.h2`
  display: flex;
  font-size: 25px;
`;

const Icon = styled.div`
  font-size: 30px;
  padding-left: 20px;
`;
//todo SERVICES STYLES

//todo PORTFOLIO STYLES
const PortfolioDescription = styled.div`
  // background: pink;
  margin-top: 100px;
  padding-left: 55px;
  display: flex;

  @media only screen and (max-width: 1024px) {
    padding-left: 15px;
    padding-bottom: 5px;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 30px;
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
`;

const PortfolioTagline = styled.p`
  font-size: 20px;
  padding-top: 9px;
  padding-left: 8px;
  font-weight: 700;
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
    padding-top: 7px;
  }
`;

export const Website = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  // margin: 40px auto;

  &:hover {
    opacity: 0.8;
  }
  a {
    color: #000;
  }

  @media only screen and (max-width: 834px) {
    margin-right: 25px;
  }

  @media only screen and (max-width: 600px) {
    margin-right: 15px;
  }
`;
export const TopContent = styled.div`
  background: teal;
  border-top: solid 1px black;
  border-left: solid 1px black;
  border-right: solid 1px black;
  padding: 15px 20px 15px;
`;

export const WebsiteTitle = styled.h3`
  font-size: 25px;
  color: #000;
  padding: 3px 0;

  &:hover {
    transition: 1s;
    color: aquamarine;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 22px;
  }
`;

export const WebsiteDescription = styled.span`
  font-size: 18px;
  text-align: center;
  color: #000;
`;

export const ImageScreenshot = styled.div`
  .website-screenshot {
    border: solid 2px black;
    border-radius: 5px;

    @media only screen and (max-width: 1024px) {
      height: 300px;
    }
  }
  }
`;

export const LeftSection = styled.div`
  grid-area: left;
`;
//todo END PORTFOLIO STYLES

//! END STYLES

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Elsa Hovey- Development/ Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Intro />
        {
          //todo/* SERVICES */
        }
        <Grid>
          <ServicesTitle id="services">Services</ServicesTitle>
          <Sq1 id="sq">
            <GridSqTitle>
              Web Design
              <Icon>
                <FaPencilAlt />
              </Icon>
            </GridSqTitle>

            <div>
              Create a web presence for your business. Whether you need a simple
              one pager, or a multi-page app to build your empire... I can help!
            </div>
          </Sq1>
          <Sq2 id="sq">
            <GridSqTitle>
              Web + Hosting
              <Icon>
                <FaDesktop />
              </Icon>
            </GridSqTitle>

            <div>
              I portfolio with one-on-one with clients regarding hosting and
              maintenance, leaving them to fully concentrate on their
              businesses.
            </div>
          </Sq2>
          <Sq3 id="sq">
            <GridSqTitle>
              Blogging Mgmt Integration
              <Icon>
                <FaRegNewspaper />
              </Icon>
            </GridSqTitle>

            <div>
              Need a blog? Youre at the right place! I portfolio with many
              different types of tools, including Wordpress.
            </div>
          </Sq3>
          <Sq4 id="sq">
            <GridSqTitle>
              ToolBox
              <Icon>
                <FaToolbox />
              </Icon>
            </GridSqTitle>
            <ul>
              <li> Programming Languages: Javascript, PHP</li>
              <li>
                Libraries & Frameportfolios: React, NextJS, Node,
                Styled-Components, bootstrap, SASS
              </li>
              <li>
                Tools & Databases: Wordpress, Sanity.io, Git, Mailchimp API
              </li>
            </ul>
            {/* <div>
              Each project requires different tools, always updating and
              changing. I mainly portfolio with JS frameportfolios and PHP. View
              arsenal...
            </div> */}
          </Sq4>
        </Grid>

        {
          //todo/* PORTFOLIO */
          // FILTER BY CATEGORES: WTBH, JUNGLE, ALL
        }
        <PortfolioDescription id="portfolio">
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioTagline>-Some featured websites</PortfolioTagline>
        </PortfolioDescription>
        <Wrapper>
          {posts &&
            posts.map((post, index) => (
              <span key={index}>
                <a target="_blank" href={post.projectLink} rel="noreferrer">
                  <Website>
                    <TopContent>
                      <WebsiteTitle>{post.websiteTitle}</WebsiteTitle>
                      <WebsiteDescription>
                        -{post.description}
                      </WebsiteDescription>
                    </TopContent>

                    <ImageScreenshot>
                      <img
                        width="100%"
                        height="100%"
                        className="website-screenshot"
                        src={urlFor(post.websiteImg)}
                        alt=""
                      />
                    </ImageScreenshot>
                  </Website>
                </a>
              </span>
            ))}
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};
