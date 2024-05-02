import React from "react";
import { useState } from "react";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import FormSection from "../../section/FormSection";
import NewsSection from "../../section/NewsSection";
import OpportunitySection from "../../section/OpportunitySection";
import OwnerSection from "../../section/OwnerSection";
import QuestionsSection from "../../section/QuestionsSection";
import SalarySection from "../../section/SalarySection";
import TrainingSection from "../../section/TrainingSection";
import VideoSection from "../../section/VideoSection";
import { uzb } from "../../language/Uzb";
import { eng } from "../../language/Eng";
import { rus } from "../../language/Rus";

const HomePage = () => {
  const [lang, setLang] = useState("eng");
  const selectLang = (language) => {
    setLang(language);
  };

  const getLanguageData = () => {
    switch (lang) {
      case "eng":
        return eng;
      case "rus":
        return rus;
      case "uzb":
        return uzb;
      default:
        return eng;
    }
  };
  return (
    <>
      <Navbar
        getLanguageData={getLanguageData}
        lang={lang}
        selectLang={selectLang}
      />{" "}
      {/* End */}
      <VideoSection /> {/* End */}
      <TrainingSection getLanguageData={getLanguageData} /> {/* End */}
      <OwnerSection getLanguageData={getLanguageData} /> {/* End */}
      <SalarySection getLanguageData={getLanguageData} /> {/* End */}
      <NewsSection getLanguageData={getLanguageData} /> {/* End */}
      <OpportunitySection getLanguageData={getLanguageData} /> {/* End */}
      <QuestionsSection getLanguageData={getLanguageData} /> {/* End */}
      <FormSection getLanguageData={getLanguageData} /> {/* End */}
      <Footer getLanguageData={getLanguageData} />
    </>
  );
};

export default HomePage;
