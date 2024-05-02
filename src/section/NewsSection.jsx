import React from "react";

const NewsSection = ({ getLanguageData }) => {
  return (
    <div className="container my-5 py-5 bg-image rounded-4 ">
      <div className="row px-5">
        <div className="col-lg-4">
          <h2 className="">{getLanguageData().grant}</h2>
          <p className=" my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            ducimus. Repellendus deserunt dolorum nisi quam iure laborum ea ad
            laudantium? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Vel, ducimus. Repellendus deserunt dolorum nisi quam iure
            laborum ea ad laudantium?
          </p>
          <button className="btn btn-dark rounded-5">
            {getLanguageData().register}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
