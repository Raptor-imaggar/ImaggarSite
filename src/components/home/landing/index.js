import React from 'react';
import "./Landing.css";

const Landing = () => {
  return (
    <div className="row-fluid">
      <div className="col">
        <div className="text-col">
          <h1>Build Lasting Customer Relationships Using <span>Generative AI</span></h1>
          <p>Power up <i>support</i> by unifying cross-channel customer conversations, enable <i>marketing</i> to engage in personalized interactions, and ignite <i>sales</i> for higher conversions.</p>
          <div className="buttons-row">
            <a className="button section-link" href="https://www.haptik.ai/request-demo">
              Get A Demo
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="image-col">
          <img src="https://www.haptik.ai/hs-fs/hubfs/Homepage_main-5-10-23.webp?width=4608&height=3771&name=Homepage_main-5-10-23.webp" alt="Homepage_main-5-10-23" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
