import React from "react";

const StyleJsx = () => {
  return (
    <>
    {/* Add style with the help of -> Style jsx && use global keyword for create globally style */}
      <style jsx global>
        {`
          .jsxStyle {
            background-color: red;
          }
        `}
      </style>
      <div className="jsxStyle">StyleJsx</div>
    </>
  );
};

export default StyleJsx;
