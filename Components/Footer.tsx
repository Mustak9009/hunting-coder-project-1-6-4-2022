import React from "react";

const Footer = () => {
  return (
    <>
    {/* Footer page style */}
      <style jsx>
        {`
          .Footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: rgb(7, 88, 181);
            color: white;
            text-align: center;
          }
        `}
      </style>
      <footer className="Footer">
        <p>Contact with me: jjttssi592@gmail.com</p>
    
      </footer>
    </>
  );
};

export default Footer;
