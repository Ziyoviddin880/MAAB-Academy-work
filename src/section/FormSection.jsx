import React from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import { ToastContainer, toast } from "react-toastify";

const FormSection = ({ getLanguageData }) => {
  return (
    <div className="container my-5">
      <div className="row py-5 px-3 rounded-4 bg-body-secondary ">
        <div className="col-lg-5 p-4">
          <h3>{getLanguageData().regCourse}</h3>
          <p>{getLanguageData().info}</p>
        </div>
        <div className="col-lg-7 rounded-3 bg-white p-3">
          <h6>Kursga yozilish</h6>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Success");
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <Label name="Ismingiz" />
                <Input placeholder="Abbos" />
              </div>
              <div className="col-md-6">
                <Label name="Telefon raqamingiz" />
                <Input placeholder="+998" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Label name="Ingli tili darajangiz" />
                <Select option={["beginner", "elementary", "intermediate"]} />
              </div>
              <div className="col-md-6">
                <Label name="Mantiqiy bilim darajangiz  " />
                <Select option={["past", "o'rta", "yuqori"]} />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-8 d-flex  ">
                <input
                  className="form-check-input me-1 "
                  type="checkbox"
                  required
                  value=""
                />
                <label className="form-check-label mx-2 ">
                  Lorem ipsum sit, amet adipisicing elit. Perferendis debitis{" "}
                  <a href="#" className="text-primary">
                    inventore
                  </a>{" "}
                  tempore dignissimos mollitia! Obcaecati.
                </label>
              </div>
              <div className="col-md-4 text-end ">
                <button className="bg-primary  text-white border-0 rounded-3 p-2">
                  Arizani jo'natish
                  <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormSection;
