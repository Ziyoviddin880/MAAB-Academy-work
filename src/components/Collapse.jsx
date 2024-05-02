import React from "react";

const Collapse = ({ getLanguageData, number, name, show }) => {
  return (
    <>
      <div className="accordion-item mb-3 rounded-3">
        <h2 className="accordion-header">
          <button
            className={
              "accordion-button rounded-3" + (!show ? " collapsed" : "")
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + name}
            aria-expanded={`${show}`}
            aria-controls={name}
          >
            {getLanguageData().question}
          </button>
        </h2>
        <div
          id={name}
          className={"accordion-collapse collapse" + (show ? " show" : "")}
          data-bs-parent={"#" + number}
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
