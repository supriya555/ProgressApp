import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    /*alert(previous);*/
    //if (step > 1) setStep(step - 1);
    //updating state based on current state
    if (step > 1) setStep((s) => s - 1);
    //s(variable) is current state
  }
  function handleNext() {
    /*alert(previous);*/
    if (step < 3) setStep(step + 1);
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/*`${step >= 1 ? "active" : ""}`*/}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#20778c", color: "#010e12" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#20778c", color: "#010e12" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
