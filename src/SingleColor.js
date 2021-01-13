import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setAlert(false);
    }, 1000);

    //// cleanUp function
    return () => {
      clearInterval(timeOut);
    };
  }, [alert]);

  const copyToClipboadrd = () => {
    setAlert(true);

    navigator.clipboard.writeText(hex);
  };

  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={copyToClipboadrd}
      >
        <p className="percent-value">{weight}%</p>
        <p>{hex}</p>
        {/* coditional rendering */}
        {alert && <p className="alert"> copied to clipboard</p>}
      </article>
    </>
  );
};

export default SingleColor;
