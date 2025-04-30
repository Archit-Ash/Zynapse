import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style/questionresult.css";

const QuestionResult = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const prompt = `You are a medical assistant AI designed to provide **general recommendations** based on user-submitted symptom data. Carefully analyze the provided inputs, including severity and user age, to determine whether an MRI might be advisable.

  Inputs:
  ${Object.entries(formData)
    .map(
      ([key, value]) =>
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
    )
    .join("\n")}


  Rules:
  1. Evaluate **not just the count of "yes" symptoms**, but also their **medical severity**. Symptoms like seizures, loss of consciousness, or persistent vomiting may carry more weight than mild symptoms like fatigue.
  2. Consider the patient's **age** – younger or older individuals may require more caution even with fewer symptoms.
  3. NEVER mention a count of symptoms in your reply.
  4. Provide **one of the following exact diagnosis lines**, based on overall risk:
     - "MRI is Required ,Please Consult a doctor"
     - "CANNOT SAY DEFINITIVELY ,consult a doctor for further evaluation"
     - "NO MRI NEEDED ,you’re healthy"
  
  5. After the diagnosis line (above), add:
     - A short one-line general recommendation (e.g., "Stay alert to any new symptoms and maintain a healthy routine.")
     - A very CLEAR DISCLAIMER about not being a replacement for a doctor.
  6. The first line of your response should be your one line diagnosis
  **Important**: You are not a doctor. Do NOT make direct medical decisions. Be conservative in your suggestions and always guide users to consult professionals.
  `;

  const sendToGemini = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log("Gemini API Response:", responseData);

      if (responseData?.candidates?.[0]?.content?.parts?.[0]?.text) {
        setData(responseData.candidates[0].content.parts[0].text);
      } else {
        setData("No valid response from Gemini AI.");
      }
    } catch (error) {
      console.error("Error sending request to Gemini AI:", error);
      setData("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    sendToGemini();
  }, []);

  const formatText = (text) => {
    const lines = text.split("\n");

    return {
      diagnosis: lines[0]?.trim(),
      recommendation: lines[1]?.trim(),
      disclaimer: lines[2]?.trim(),
    };
  };

  return (
    <div className="resultContainer">
      {loading ? (
        <pre>Loading...</pre>
      ) : data ? (
        <div className="resultConainer">
          <div id="diagnosis">{formatText(data).diagnosis}</div>
          <div id="recommendation">{formatText(data).recommendation}</div>
          <div id="disclaimer">{formatText(data).disclaimer}</div>
        </div>
      ) : (
        <button onClick={sendToGemini}>Refresh</button>
      )}
    </div>
  );
};

export default QuestionResult;
