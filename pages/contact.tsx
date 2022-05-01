import React from "react";
import { NextPage } from "next";
import style from "../styles/contact.module.scss";
import useForm,{formDataType,Data} from './hooks/useForm.hook';
//use react dangerouslySetInnerHTML
function createMarkup() {
  return { __html: "Contact page" };
}
//Set data type(formDataType) and initial objects
const initialState: formDataType = {
  name: "",
  email: "",
  phone: "",
  textarea: "",
};

const Contact:NextPage= () => {
  //Use our custom hook to handle form Data.
  const [setValue, onChange, onSubmit]= useForm(sendDataToDataBase,initialState);
  /*  A submit function that will execute upon form submission 
    (send data to database or api or etc..)*/
  async function sendDataToDataBase(){
    //Set data to api -> using post method https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("https://nextjs-tutorial-project-1-codewithharry.netlify.app/api/HandelPost", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Thank you for joining us");
        setValue({ name: "", email: "", phone: "", textarea: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className={style.contact}>
      {/* Render markup using -> dangerouslySetInnerHTML */}
      <h1 dangerouslySetInnerHTML={createMarkup()}></h1>
      <form onSubmit={onSubmit}>
        <div className={style.contact_item}>
          <label htmlFor="name">Enter your Name</label>
          <input
            type="text"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            placeholder="Name"
            onChange={onChange}
            value={Data.name}
            required
          />
        </div>
        <div className={style.contact_item}>
          <label htmlFor="email">Enter your Email address</label>
          <input
            type="email"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Email"
            onChange={onChange}
            value={Data.email}
            required
          />
        </div>
        <div className={style.contact_item}>
          <label htmlFor="phone">Enter your Phone number</label>
          <input
            type="tel"
            id="phone"
            aria-describedby="emailHelp"
            name="phone"
            placeholder="phone"
            onChange={onChange}
            value={Data.phone}
            required
          />
        </div>
        <div className={style.form_floating}>
          <label htmlFor="floatingTextarea2">Elaborate concern</label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="textarea"
            onChange={onChange}
            value={Data.textarea}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
