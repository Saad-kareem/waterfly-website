import React from "react";

const Scroll = () => {
  const TopScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="Scroll">
        <button onClick={TopScroll}>
          <i className="fa-solid fa-arrow-up-long"></i>
        </button>
      </div>
    </>
  );
};

export default Scroll;
