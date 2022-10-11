/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  padding: 50px 0 30px 125px;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  font-size: 30px;
  text-align: left;
  // text-decoration: underline;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 30px;
    margin-right: 20px;
  }
`;

export const Grid = styled.div`
  // background: orange;
  padding: 0 120px;
  margin-bottom: 45px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Website = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 1s;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: teal;
  border-top: solid 2px black;
  border-left: solid 2px black;
  border-right: solid 2px black;
  padding-top: 15px;
  // padding-left: 20px;
  text-align: center;
`;

export const WebsiteTitle = styled.h3`
  font-size: 27px;
  padding: 5px 0;

  &:hover {
    transition: 1s;
    color: aquamarine;
  }

  @media only screen and (max-width: 531px) {
    font-size: 18px;
  }
`;

export const WebsiteDescription = styled.span`
  padding-left: 5px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const ImageScreenshot = styled.div`
  .website-screenshot {
    border: solid 2px black;
    @media only screen and (max-width: 834px) {
      height: 250px;
    }
  }

  }
`;

export const LeftSection = styled.div`
  grid-area: left;
`;

const featuredWebsites = ({ posts }) => {
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
        {/* CTA- Like my websites? Contact me to find out more */}
        <Title id="featuredWebsites">- Featured Websites</Title>
        <Wrapper>
          <Grid>
            {posts &&
              posts.map((post, index) => (
                <span key={index}>
                  <a target="_blank" href={post.projectLink} rel="noreferrer">
                    <Website>
                      <Content>
                        <WebsiteTitle>{post.websiteTitle}</WebsiteTitle>
                        <WebsiteDescription>
                          -{post.description}-
                        </WebsiteDescription>
                      </Content>
                      <ImageScreenshot>
                        <img
                          width="100%"
                          height="350px"
                          className="website-screenshot"
                          src={urlFor(post.websiteImg)}
                          alt=""
                        />
                      </ImageScreenshot>
                    </Website>
                  </a>
                </span>
              ))}
          </Grid>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default featuredWebsites;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"]';
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
