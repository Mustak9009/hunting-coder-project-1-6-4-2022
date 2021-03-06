import type { NextPage } from "next";
import React from "react";
import HeadTag from "next/head";
import styles from "../styles/Home.module.scss"; //Similar to .css
import Script from "next/script";
import Link from "next/link";
import WhenWindowLoad from "./WhenWindowLoad";
//set Array type -> (Note:- type ka array hote hobe tar kono mane nai)
type apiDataType = {
  id: number;
  title: string;
  paragraph: string;
  path: string;
  slug: string;
};
// import StyleJsx from './Tutorial/StyleJsx'; //Style component
//NextPage -> Home component type
const Home: NextPage = () => {
  const [apiData, setApiData] = React.useState<apiDataType[]>([]);
  //Get Data from api ..(/api/getHomePageBlogData);
  React.useEffect(() => {
    async function getBlogDataHome() {
      const response = await fetch(
        "http://localhost:3000/api/getHomePageBlogsData/"
      );
      const data = await response.json();
      setApiData(data.cardData);
    }

    getBlogDataHome();
  }, []);
  return (
    <div className={styles.container}>
      <WhenWindowLoad />
      {/* Head tag its like Html -> <head/> (it's contain all features of that) */}
      <HeadTag>
        <title>Hunting coder</title>
        <meta
          name="description"
          content="Hunting coder generated by Hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Your can  also add <script/> here -> But this is not correct approach*/}
        {/* also remain that /ScriptRun.js file present in (./public) folder */}
        {/* <script src="/ScriptRun.js"></script> */}
      </HeadTag>
      {/* Another approach to load ->External Script */}
      {/* You also have (strategy) property to define -> How to load script */}
      <Script src="/ScriptRun.js" strategy="lazyOnload"></Script>

      {/* Style component using -> jsx style method */}
      <style jsx>
        {`
          .jsxStyle {
            color: black;
          }
          .HomePageBlogs__card_img {
            margin-top: 2rem !important;
            border: 2px solid red !important;
          }
        `}
      </style>
      <main className={styles.HomePage}>
        <div className={styles.HomePage__content}>
          <div className="HomePage__img_section">
            <img
              src="HomeImg/HomeImg.png"
              alt="learning illustration"
              width={700}
              height={364}
              placeholder="blur"
            />
          </div>
          <section
            aria-labelledby="HomePage__heading-1"
            className={styles.HomePage__text_section}
          >
            <h1 id="HomePage__heading-1">Hunting coder</h1>
            <p>
              Get started withHunting coder learn <br /> something new.
            </p>
            <Link href="/about" passHref>
              <button title="About us" className={styles.HomePageButton}>
                About Us
              </button>
            </Link>
          </section>
        </div>
      </main>
      {/* -----------:Card section:------------ */}
      <div className={styles.HomePageBlogs}>
        <header className={styles.HomePageBlogs__heading_top_section_main}>
          <h1>Popular blogs</h1>
          <p>
            Take a look at our most recent blog to improve <br /> your skills.
          </p>
        </header>
        {/* Create cards as a static element because of -> Data base related (query) not currently not available */}
        <div className={styles.HomePageBlogs__body_blogs}>
         {/* Card ---> 1 */}
            <div className={styles.HomePageBlogs__body_blog}>
              <div>
                <img
                  src="/HomeImg/js.png"
                  alt="lean javascript logo"
                  width={100}
                  height={100}
                  className={styles.HomePageBlogs__card_img}
                />
              </div>
              <section
                aria-labelledby="HomePageBlog__section-heading-main"
                className={styles.HomePageBlogs__blog_texts}
              >
                <h2 id="HomePageBlog__section-heading-main">How to learn JavaScript in  2022?</h2>
                <p>We have a blog where you can learn  JavaScript.</p>
                <Link href='/blogPost/how-to-learn-javascript' passHref>
                  <button>Check out</button>
                </Link>
              </section>
            </div>
          {/* --------------------- */}
           {/* Card ---> 2 */}
           <div className={styles.HomePageBlogs__body_blog}>
              <div>
                <img
                  src="/HomeImg/python.png"
                  alt="lean javascript logo"
                  width={100}
                  height={100}
                  className={styles.HomePageBlogs__card_img}
                />
              </div>
              <section
                aria-labelledby="HomePageBlog__section-heading-main"
                className={styles.HomePageBlogs__blog_texts}
              >
                <h2 id="HomePageBlog__section-heading-main">How to learn Python in  2022?</h2>
                <p>We have a blog where you can learn  python.</p>
                <Link href='/blogPost/how-to-learn-python' passHref>
                  <button>Check out</button>
                </Link>
              </section>
            </div>
          {/* --------------------- */}
           {/* Card ---> 3 */}
           <div className={styles.HomePageBlogs__body_blog}>
              <div>
                <img
                  src='/HomeImg/nextJs.png'
                  alt="lean javascript logo"
                  width={100}
                  height={100}
                  className={styles.HomePageBlogs__card_img}
                />
              </div>
              <section
                aria-labelledby="HomePageBlog__section-heading-main"
                className={styles.HomePageBlogs__blog_texts}
              >
                <h2 id="HomePageBlog__section-heading-main">How to learn nextJs in  2022?</h2>
                <p>We have a blog where you can learn  nextJs.</p>
                <Link href='/blogPost/how-to-learn-nextJs' passHref>
                  <button>Check out</button>
                </Link>
              </section>
            </div>
          {/* --------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Home;
