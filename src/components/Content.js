import React from "react";

import Square from "../assets/img/pnk.png";

const Content = () => {
  return (
    <main>
      <section className="bg-image">
        <div className="container">
          <img src={Square} alt="square" className="banner-square" />
          <div className="main-txt">
            <h1>
              Your online shop <br /> for houseplants <br /> and more!
            </h1>
            <p>
              It’s a place to learn how to become <br /> the best possible plant
              parent <br />
              and connect with other plant lovers
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="content-inner">
            <div className="text-wrapper">
              <p className="about-txt">About</p>
              <h1 className="about-header">
                Personalized green spaces just for you.
              </h1>
              <p className="about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque
                tempus leo in ullamcorper quis vestibulum ligula elementum ut.
                Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere
                vitae sed purus nisl lorem.
              </p>

              <button className="about-btn">View More</button>
            </div>
            <div className="videoContainer">
              <iframe
                className="mainVideo"
                src="https://www.youtube.com/embed/LZhnCxG5c6s?si=t0cLScQhCCDL2kgu"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"
                controls="controls"
              ></iframe>

              <img
                alt="dots bg"
                className="dotsImg image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
