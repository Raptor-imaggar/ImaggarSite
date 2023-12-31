import React from 'react';
import landingContent from '../../../data/landingPage';
import "./Landing.css";

const Landing = () => {
  const { title, spanText, paragraph, buttonText, imageUrl, imageAlt, demoLink } = landingContent;

  return (
    <div className="row-fluid">
     <div className="col">
        <div className="image-col">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div> 
      <div className="col">
        <div className="text-col ">
          <h1>{title} <span>{spanText}</span></h1>
          <p>{paragraph}</p>
          <div className="buttons-row">
            <a className="button section-link" href={demoLink}>
              {buttonText}
            </a>
          </div>
         
          <div className="second-row">
  {landingContent.technologies.map((tech, index) => (
    <div key={index} className="card">
      <h2>{tech.techTitle}</h2>
      <p>{tech.techDescription}</p>
    </div>
  ))}
</div>


        </div>
      </div>
     
    </div>
  );
};

export default Landing;
