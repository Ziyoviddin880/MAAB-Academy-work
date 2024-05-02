import React from "react";
import Opportunity from "../components/Opportunity";

const OpportunitySection = ({ getLanguageData }) => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-12 text-center text-primary fs-3 fw-bold ">
          {getLanguageData().opportunity}
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            veritatis eaque id, obcaecati natus consequuntur expedita hic
            excepturi dolorem est ea officiis inventore quaerat nostrum aut.
            Eius deleniti laboriosam voluptatibus!
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row my-4   px-5 ">
          <Opportunity getLanguageData={getLanguageData} />
          <Opportunity getLanguageData={getLanguageData} />
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
