import React from "react";
import Salaery from "../components/Salaery";

const SalarySection = ({ getLanguageData }) => {
  return (
    <div className="container py-5 bg-body-secondary my-5 rounded-4">
      <div className="row my-2 px-5  ">
        <div className="col text-center text-primary fs-3 fw-bold ">
          {getLanguageData().worker}
        </div>
        <div className="row my-4">
          <Salaery getLanguageData={getLanguageData} />
          <Salaery getLanguageData={getLanguageData} />
          <Salaery getLanguageData={getLanguageData} />
        </div>
      </div>
    </div>
  );
};

export default SalarySection;
