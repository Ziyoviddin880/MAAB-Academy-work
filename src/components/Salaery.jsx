import React from "react";

const Salaery = ({ getLanguageData }) => {
  return (
    <div className="col-lg-4 mb-3">
      <div className="card border-2 rounded-4 py-3 text-center  ">
        <div className="card-body">
          <h5 className="card-title title-color fw-bold ">2 000 000+</h5>
          <p className="card-text">{getLanguageData().salary}</p>
        </div>
      </div>
    </div>
  );
};

export default Salaery;
