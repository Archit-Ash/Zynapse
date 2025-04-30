import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import "../style/questions.css";

const Questionaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const wizardRef = useRef(null);
  const navigate = useNavigate();
  const goToNextStep = () => {
    wizardRef.current.nextStep();
    if (currentStep < wizardRef.current.totalSteps)
      setCurrentStep(currentStep + 1);
  };
  const goToPrevStep = () => {
    wizardRef.current.previousStep();
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const alertUser = (e) => {
    e.preventDefault();
    navigate("/questionResult", { state: { formData } });
  };

  const [formData, setFormData] = useState({
    headaches: "no",
    fatigue: "no",
    // vision: "no",
    nausea: "no",
    memoryProblem: "no",
    behaviorChange: "no",
    difficultyInSpeechOrComprehension: "no",
    dizziness: "no",
    moodSwings: "no",
    blurryVision: "no",
    hearingLoss: "no",
    movementLoss: "no",
    balanceLoss: "no",
    muscleWeakness: "no",
    swallowingissues: "no",
    seizures: "no",
    convulsions: "no",
    spacedOut: "no",
    dejaVu: "no",
    hallucinations: "no",
    repetitiveMovements: "no",
    oddSensations: "no",
    age: "",
    sex: "Male",
    familyHistory: "no",
    headInjury: "no",
    seizuresHistory: "no",
    previousBrainImaging: "no",
    pacemaker: "no",
    pregnant: "no",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const custom = {
    enterRight: "step-enter-right",
    enterLeft: "step-enter-left",
    exitRight: "step-exit-right",
    exitLeft: "step-exit-left",
    intro: "step-intro",
  };

  return (
    <div className="questionContainer">
      {" "}
      <div className="progress-container">
        {wizardRef.current ? (
          <div
            className="progress-bar"
            style={{
              width: `${(currentStep / wizardRef.current.totalSteps) * 100}%`,
            }}
          />
        ) : (
          "Loading.."
        )}
      </div>
      <p className="optionContainer">
        {wizardRef.current
          ? `${currentStep}/${wizardRef.current.totalSteps}`
          : "Loading..."}
      </p>
      <form>
        <StepWizard transitions={custom} ref={wizardRef}>
          {/* Headaches Question */}
          <div className="step">
            <label className="labelContainer">
              Do you experience headaches regularly?
            </label>
            <p>
              <input
                type="radio"
                name="headaches"
                value="yes"
                onChange={handleChange}
              />
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="headaches"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Fatigue Question */}
          <div className="step">
            <label className="labelContainer">
              Do you feel unusually fatigued during the day?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="fatigue"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="fatigue"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Vision Questions */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced blurry or double vision?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="blurryVision"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="blurryVision"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Nausea Question */}
          <div className="step">
            <label className="labelContainer">
              Have you noticed any persistent nausea or vomiting?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="nausea"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="nausea"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Memory Issues Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced any confusion or memory problems?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="memoryProblem"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="memory"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Behavior Issues Question */}
          <div className="step">
            <label className="labelContainer">
              Have you noticed any significant changes in behavior or
              personality?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="behaviorChange"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="behavior"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Speech Issues Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced difficulty speaking or understanding speech?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="difficultyInSpeechOrComprehension"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="speech"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Dizziness Question */}
          <div className="step">
            <label className="labelContainer">
              Do you experience dizziness or vertigo?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="dizziness"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="dizziness"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Mood Swings Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced unusual mood swings or irritability?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="moodSwings"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="moodSwings"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Hearing Loss Question */}
          <div className="step">
            <label className="labelContainer">
              Do you have any difficulty hearing or loss of hearing?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="hearingLoss"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="hearingLoss"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Movement Loss Question */}
          <div className="step">
            <label className="labelContainer">
              Have you lost any coordination or experienced difficulty moving?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="movementLoss"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="movementLoss"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Balance Question */}
          <div className="step">
            <label className="labelContainer">
              Are you experiencing difficulty with balance or frequent falls?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="balanceLoss"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="balance"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Muscle Weakness Question */}
          <div className="step">
            <label className="labelContainer">
              Do you notice muscle weakness or stiffness?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="muscleWeakness"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="muscleWeakness"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Swallowing Question */}
          <div className="step">
            <label className="labelContainer">
              Do you have difficulty swallowing?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="swallowingissues"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="swallowing"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Seizures Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced any seizures?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="seizures"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="seizures"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Convulsions Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced any convulsions or uncontrolled jerking
              movements?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="convulsions"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="convulsions"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Spaced Out Question */}
          <div className="step">
            <label className="labelContainer">
              Do you sometimes feel spaced out or disconnected from reality?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="spacedOut"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="spacedOut"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Deja Vu Question */}
          <div className="step">
            <label className="labelContainer">
              Do you ever experience feelings of déjà vu?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="dejaVu"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="dejaVu"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Hallucinations Question */}
          <div className="step">
            <label className="labelContainer">
              Have you experienced any hallucinations (seeing or hearing things
              that aren't there)?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="hallucinations"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="hallucinations"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Repetitive Movements Question */}
          <div className="step">
            <label className="labelContainer">
              Have you noticed any repetitive movements or tics?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="repetitiveMovements"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="repetitiveMovements"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Odd Sensations Question */}
          <div className="step">
            <label className="labelContainer">
              Do you feel any odd sensations, like tingling or numbness in your
              body?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="oddSensations"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="oddSensations"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Age Question */}
          <div className="step">
            <label className="labelContainer">What is your age?</label>
            <input
              type="range"
              name="age"
              min="0" // Minimum value for age
              max="100" // Maximum value for age
              step="1" // Steps by 1 for each value change
              onChange={handleChange}
              value={formData.age}
              required
            />
            <p>Age: {formData.age}</p>{" "}
            {/* Display the current value of the slider */}
          </div>

          {/* Sex Question */}
          <div className="step">
            <label className="labelContainer">What is your sex?</label>
            <p className="optionContainer">
              <input
                type="radio"
                name="sex"
                value="Male"
                checked={formData.sex === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="sex"
                value="Female"
                checked={formData.sex === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </p>
          </div>

          {/* Family History Question */}
          <div className="step">
            <label className="labelContainer">
              Do you have a family history of brain tumors?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="familyHistory"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="familyHistory"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Head Injury Question */}
          <div className="step">
            <label className="labelContainer">
              Have you had any recent head injuries?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="headInjury"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="headInjury"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Seizures History Question */}
          <div className="step">
            <label className="labelContainer">
              Do you have a history of seizures?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="seizuresHistory"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="seizuresHistory"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Previous Brain Imaging Question */}
          <div className="step">
            <label className="labelContainer">
              Have you had any previous brain imaging (like MRI, CT scans)?
            </label>
            <p className="optionContainer">
              <input
                type="radio"
                name="previousBrainImaging"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="previousBrainImaging"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Pacemaker Question */}
          <div className="step">
            <label className="labelContainer">Do you have a pacemaker?</label>
            <p className="optionContainer">
              <input
                type="radio"
                name="pacemaker"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="pacemaker"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>

          {/* Pregnant Question */}
          <div className="step">
            <label className="labelContainer">Are you pregnant?</label>
            <p className="optionContainer">
              <input
                type="radio"
                name="pregnant"
                value="yes"
                onChange={handleChange}
              />{" "}
              Yes
            </p>
            <p className="optionContainer">
              <input
                type="radio"
                name="pregnant"
                value="no"
                onChange={handleChange}
              />{" "}
              No
            </p>
          </div>
          <div>
            <button id="btnhomepage" onClick={alertUser}>
              {" "}
              Submit
            </button>
          </div>
        </StepWizard>
      </form>
      <div>
        <button type="button" id="btnhomepage" onClick={goToPrevStep}>
          Previous
        </button>
        <button type="button" id="btnhomepage" onClick={goToNextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Questionaire;
