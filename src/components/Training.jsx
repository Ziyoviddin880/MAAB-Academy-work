import React from "react";

const Training = ({ getLanguageData }) => {
  return (
    <div className="col-md-4 my-2  ">
      <div className="card  bg-body-secondary pb-5  border-0  ">
        <div className="card-body h-100">
          <div className="card-title text-center bg-white rounded-2 fs-4 fw-bold title-color py-4 ">
            {getLanguageData().title}
          </div>
          <div className="card-text text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            ipsam?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
