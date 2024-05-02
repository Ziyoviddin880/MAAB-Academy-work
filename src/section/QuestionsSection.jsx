import React from "react";
import Collapse from "../components/Collapse";

const QuestionsSection = ({ getLanguageData }) => {
  return (
    <div className="bg-body-secondary py-5 ">
      <div className="container">
        <div className="row">
          <div className="col text-center ">
            <h2>{getLanguageData().lotQuestion}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col text-center ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              dolorem officia maiores animi numquam. Ducimus dolorum dolores
              earum laboriosam soluta.
            </p>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="accordion" id="one">
          <div className="row">
            <div className="col-lg-6">
              {/* <div className="accordion" id="one"> */}
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"first"}
                show={true}
              />
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"second"}
                show={false}
              />
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"third"}
                show={false}
              />
              {/* </div> */}
            </div>
            <div className="col-lg-6">
              {/* <div className="accordion" id="one"> */}
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"fourth"}
                show={false}
              />
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"fiveth"}
                show={false}
              />
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"sixth"}
                show={false}
              />
              <Collapse
                getLanguageData={getLanguageData}
                number={"one"}
                name={"seventh"}
                show={false}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
