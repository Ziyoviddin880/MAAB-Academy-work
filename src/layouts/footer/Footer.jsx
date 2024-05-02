import React from "react";

const Footer = ({ getLanguageData }) => {
  return (
    <footer className="p-5">
      <div className="container footer-box rounded-4">
        <div className="row p-4">
          <div className="col-lg-3 col-md-6 my-2 text-white">
            <h2>Logotip</h2>
            <p>+998 97 783 90 45</p>
            <div className="social-icons">
              <a className="text-white-50 icon-link-hover" href="">
                <i className="fa-brands fa-telegram mx-2 fs-5"></i>
              </a>
              <a className="text-white-50 icon-link-hover" href="">
                <i className="fa-brands fa-instagram mx-2 fs-5"></i>
              </a>
              <a className="text-white-50 icon-link-hover" href="">
                <i className="fa-brands fa-linkedin mx-2 fs-5"></i>
              </a>
              <a className="text-white-50 icon-link-hover" href="">
                <i className="fa-brands fa-facebook mx-2 fs-5"></i>
              </a>
              <a className="text-white-50 icon-link-hover" href="">
                <i className="fa-brands fa-youtube mx-2 fs-5"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2">
            <h6 className="text-white">{getLanguageData().nameCourse}</h6>
            <div>
              <a className="text-white-50 text-decoration-none mt-2 " href="#">
                {getLanguageData().job}
              </a>
            </div>
            <div>
              <a className="text-white-50 text-decoration-none mt-2  " href="#">
                Data enginer
              </a>
            </div>
            <div>
              <a className="text-white-50 text-decoration-none mt-2 " href="#">
                Data enginer
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  my-2">
            <h6 className="text-white">MENYULAR</h6>
            <div>
              <a className="text-white-50 text-decoration-none mt-2 " href="#">
                Grantlar
              </a>
            </div>
            <div>
              <a className="text-white-50 text-decoration-none mt-2  " href="#">
                Sertifikatlarimiz
              </a>
            </div>
            <div>
              <a className="text-white-50 text-decoration-none mt-2 " href="#">
                Ustozlar
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  my-2">
            <h6 className="text-white">BIZ BILAN BO'G'LANING</h6>

            <div className="text-white-50  mt-2 ">
              <i className="fa-solid fa-location-dot"></i> Uzbekistan,Tashkent,
              Mirabad District
            </div>
            <div className="text-white-50  mt-2 ">
              <i className="fa-regular fa-envelope"></i> info@maab.uz
            </div>
            <div className="text-white-50  mt-2 ">
              <i className="fa-solid fa-phone"></i> +998 97 783 90 45
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
