import React from "react";
import Training from "../components/Training";

const TrainingSection = ({ getLanguageData }) => {
  return (
    <div className="container py-4">
      <div className="row">
        <Training getLanguageData={getLanguageData} />
        <Training getLanguageData={getLanguageData} />
        <Training getLanguageData={getLanguageData} />
      </div>
    </div>
  );
};

export default TrainingSection;
