import React from "react";
import { NextPage } from "next";

import Style from '../styles/About.module.scss';
const About: NextPage = () => {
  return (
    <div className={Style.About}>
      <div className="About__img-illustrator">
        <img
          src="/illustratorAbout.png"
          alt="blue man illustrator"
          width={350}
          height={346}
        />
      </div>
      <section className={Style.About__text_area}>
        <h1>about us</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button>Learn more</button>
      </section>
    </div>
  );
};
export default About;
