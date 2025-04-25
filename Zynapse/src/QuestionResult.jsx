import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const QuestionResult = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const [data, setData] = useState(null); // State to store the API response
  const [loading, setLoading] = useState(false); // State to handle loading state

  const prompt = `Please review the following symptoms and recommend if an MRI scan is necessary based on the data provided: 
  ${Object.entries(formData)
    .map(
      ([key, value]) =>
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
    )
    .join("\n")}
  **Important:** Only recommend an MRI scan if the combination of symptoms strongly suggests a need for further medical evaluation. Please ensure the advice is cautious and based on established medical criteria, and avoid creating unnecessary panic.,Reply Either with "MRI is Required ,possibility of a Brain Tumor" or "NO MRI NEEDED ,youre healthy", you can also give a small recommendation and disclaimer in next line,MAKE THE DISCLAIMER VERY CLEAR TO REMOVE ANY LIABILITY`;

  const sendToGemini = async () => {
    setLoading(true); // Start loading
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

      // Handle response and ensure it's valid
      if (responseData) {
        setData(responseData.candidates[0].content.parts[0].text); // Update state with response data
      } else {
        setData("No valid response from Gemini AI.");
      }
    } catch (error) {
      console.error("Error sending request to Gemini AI:", error);
      setData("An error occurred while fetching the response.");
    } finally {
      setLoading(false); // Stop loading after the response
    }
  };

  return (
    <div>
      <button onClick={sendToGemini}>Get MRI Recommendation</button>

      {loading ? (
        <pre>Loading...</pre> // Show loading while the request is pending
      ) : (
        <pre>{data}</pre> // Display the data when available
      )}
    </div>
  );
};

export default QuestionResult;
