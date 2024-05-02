import React from "react";

const Owner = ({ getLanguageData }) => {
  return (
    <div className="col-lg-3 mb-3">
      <div className="card rounded-4 border border-light bg-color text-white ">
        <div className="card-body">
          <h5 className="card-title fw-bold ">{getLanguageData().forWho}</h5>

          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
