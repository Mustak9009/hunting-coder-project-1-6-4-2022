import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
const WhenWindowLoad = () => { 
  const [toggle, setToggle] = useState<boolean>(); //toggle Card element
  const [buttonClick, setButtonClick] = useState<boolean>(); //click on button -> checker
  useEffect(() => {
    const data = localStorage.getItem("item"); //get item key from -> localStorage
    //Condition -> toggle card show or not
    if (data === "false") {
      setToggle(false); //set card show or not
    }else{
      setToggle(true)
    }
  }, [buttonClick, toggle]); //useEffect depends on [buttonClick,toggle] -> state
  function onClickButton() {
    //when user click on -> function run
    localStorage.setItem("item", JSON.stringify(false)); //store data in local Storage
    setButtonClick(true); //click on button -> activated -> useEffect
  }
  return (
    <>
      {/*Toggle card*/} 
      <div
        className={`${styles.HomePage__toggle} ${
          toggle ? "" : styles.Close__element_toggle_button
        }`}
      >
        <section
          aria-labelledby="HomePage__toggle_item-when-load"
          className={`${styles.HomePage__toggle_item} `}
        >
          <h1 id="HomePage__toggle_item-when-load">Welcome 😊</h1>
          <img
            src="/HomeImg/Cross.png"
            alt="Cross logo"
            onClick={() => onClickButton()}
          />
          <p>
            <span>Hello there!</span> Welcome to my blog toy project that I
            created when I was learning next js with codeWithHarry Bhai.
          </p>
          <button onClick={() => onClickButton()}>Close</button>
        </section>
      </div>
    </>
  );
};

export default WhenWindowLoad;
//Note that -> Default is problem
// more ifo -> https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/  about localStorage
          //-> https://www.youtube.com/watch?v=wodWDIdV9BY&t=576s