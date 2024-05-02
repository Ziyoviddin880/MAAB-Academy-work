import React from "react";

const Navbar = ({ lang, selectLang, getLanguageData }) => {
  return (
    <div className="container">
      <div className="row py-2 ">
        <div className="col-xl-9 col-lg-8 col-md-7"></div>
        <div className="col-xl-3 col-lg-4 col-md-5  d-flex justify-content-between align-items-center  ">
          <div className="social-icons">
            <a className="text-black-50 icon-link-hover" href="">
              <i className="fa-brands fa-telegram mx-2 fs-5"></i>
            </a>
            <a className="text-black-50 icon-link-hover" href="">
              <i className="fa-brands fa-instagram mx-2 fs-5"></i>
            </a>
            <a className="text-black-50 icon-link-hover" href="">
              <i className="fa-brands fa-linkedin mx-2 fs-5"></i>
            </a>
            <a className="text-black-50 icon-link-hover" href="">
              <i className="fa-brands fa-facebook mx-2 fs-5"></i>
            </a>
          </div>
          <div className="language">
            <select
              className="form-select border-0 "
              aria-label="Default select example"
              value={lang}
              onChange={(e) => {
                console.log(e.target.value);
                selectLang(e.target.value);
              }}
            >
              <option value="uzb">Uzbek</option>
              <option value="rus">Rus</option>
              <option value="eng">Eng</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-xl-3 col-lg-3 col-md-3">
          <div className="fs-3 ">Logotip</div>
        </div>
        <div className="col-xl-5 col-lg-4 col-md-2"></div>
        <div className="col-xl-4 col-lg-5 col-md-7 d-flex align-items-center justify-content-between ">
          <div className="tel-number fs-5 title-color ">+998 97 783 90 45</div>
          <div className="button  ">
            <button className="btn bg-secondary text-white  rounded-pill ">
              {getLanguageData().btn}
              <i className="fa-solid fa-phone m-2 "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
