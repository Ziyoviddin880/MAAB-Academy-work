import React from "react";

const Opportunity = ({ getLanguageData }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card border-0 bg-body-secondary rounded-4 pb-3  ">
        <div className="card-body">
          <h4 className="card-title text-primary ">{getLanguageData().job}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ipsum quasi sint! Labore minima est dolorum eaque quos nemo eius?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ipsum quasi sint! Labore minima est dolorum eaque quos nemo eius?
          </p>

          <div className="bg-white mr-x p-3 ">
            <div>{getLanguageData().salaryCourse}</div>
            <h6 className="text-bold">23,975,000 so'm</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
