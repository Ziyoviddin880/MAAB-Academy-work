import React from "react";
import Owner from "../components/button/Owner";

const OwnerSection = ({ getLanguageData }) => {
  return (
    <div className="container ">
      <div className="row rounded-4   bg-primary py-5">
        <div className="col text-center fs-1 text-white fw-bold py-4  ">
          {getLanguageData().who}
        </div>
        <div className="col-12 px-5 ">
          <div className="row my-4">
            <div className="col"></div>
            <Owner getLanguageData={getLanguageData} />
            <Owner getLanguageData={getLanguageData} />
            <Owner getLanguageData={getLanguageData} />
            <div className="col"></div>
          </div>
          <div className="row my-4">
            <div className="col"></div>
            <Owner getLanguageData={getLanguageData} />
            <Owner getLanguageData={getLanguageData} />
            <Owner getLanguageData={getLanguageData} />
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
