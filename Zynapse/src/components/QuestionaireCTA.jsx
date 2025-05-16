import React from "react";
import "../style/Homepage.css";
import { Link } from "react-router-dom";
import clock from "../assets/wall-clock.png";
import AI from "../assets/generative.png";
import note from "../assets/note.png";

const QuestionaireCTA = () => {
  return (
    <div id="quesConatiner">
      <div id="flexQuesContainer">
        <div>
          <img id="notes" src={note} />
        </div>
        <div id="rightQUesContainer">
          <p id="quesTitle">Not Sure If a MRI scan is Needed?</p>
          <p id="infosubtext">
            Not every headache or dizzy spell means something serious — but some
            symptoms should never be ignored. Our quick and confidential
            questionnaire is designed to help you assess whether your symptoms
            might warrant an MRI brain scan. By answering just a few questions,
            you’ll gain personalized insight into your brain health and whether
            further evaluation is recommended. It takes less than two minutes
            and could make all the difference. Take control of your well-being —
            start the check now.
            <ul>
              <li>
                <img id="iconinfo" src={clock} /> 5 minutes
              </li>

              <li>
                <img id="iconinfo" src={AI} />
                Powered By Google's Gemini AI
              </li>
            </ul>
          </p>
          <div id="btncontainer">
            <Link to="/question">
              <button id="btnhomepage">Take Questionnaire!</button>
            </Link>
            <Link to="/knowmore">
              <button id="btnhomepage">Kow More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionaireCTA;
