import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  // State to manage user input for each question
  const [inputs, setInputs] = useState({
    text1: "",
    text2: "",
    select1: "",
    select2: "",
    radio: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Calculate progress percentage based on filled inputs
  const calculateProgress = () => {
    const filledInputsCount = Object.values(inputs).filter(Boolean).length;
    const totalInputsCount = Object.keys(inputs).length;
    return (filledInputsCount / totalInputsCount) * 100;
  };

  // Logic to slide to the next screen when the last input is filled
  const handleNextScreen = () => {
    // Implement logic to slide to the next screen
  };

  return (
    <>
      <div className="progressbar">
        <div className="progressbar-container">
          {/* Progress bar */}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <h2>Driving License Renewal</h2>
          <div className="row progressbar-input">
            <div>
              {/* Input for text1 */}
              <input
                type="text"
                name="text1"
                value={inputs.text1}
                onChange={handleInputChange}
                className="form-control mb-3 inputdata"
                minLength={3}
                placeholder="Your Name"
              />

              {/* Input for text2 */}
              <input
                type="email"
                name="text2"
                value={inputs.text2}
                onChange={handleInputChange}
                className="form-control mb-3 inputdata"
                minLength={3}
                placeholder="Your Email"
              />

              {/* Select box 1 */}

              <select
                name="select1"
                value={inputs.select1}
                onChange={handleInputChange}
                className="form-control mb-3 select-box"
              >
                <option value="">Choose Issue</option>
                <option value="option1">Sales</option>
                <option value="option2"> Document Pickup</option>
              </select>

              {/* Select box 2 */}
              <select
                name="select2"
                value={inputs.select2}
                onChange={handleInputChange}
                className="form-control mb-3 select-box"
              >
                <option value="">Choose Issue</option>
                <option value="option1">Document Dispatch</option>
                <option value="option2">Document Return</option>
              </select>

              {/* Radio buttons */}
              <div className="mb-3">
                <input
                  type="radio"
                  name="radio"
                  value="option1"
                  checked={inputs.radio === "option1"}
                  onChange={handleInputChange}
                  className="form-check-input me-2 radiobtn"
                />
                <label className="form-check-label me-3">Option 1</label>
                <input
                  type="radio"
                  name="radio"
                  value="option2"
                  checked={inputs.radio === "option2"}
                  onChange={handleInputChange}
                  className="form-check-input me-2 radiobtn"
                />
                <label className="form-check-label">Option 2</label>
              </div>

              {/* Conditional rendering to show next screen */}
              {calculateProgress() === 100 && (
                <button
                  onClick={handleNextScreen}
                  className="btn btn-primary nextBtn"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
