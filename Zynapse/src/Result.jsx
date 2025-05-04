import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/result.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;
  const formData = location.state?.formData;

  const result = "No Tumor";

  const confidence = 90.76;
  var returnResult = null;
  if (!image) {
    return <p>No image provided.</p>;
  }
  switch (result) {
    case "No Tumor":
      returnResult = (
        <>
          <div className="resultTitle green">✅ No Tumor Detected</div>
          <div className="confidence">Confidence Rate: {confidence}%</div>
          <p>
            Your scan shows no signs of a tumor. This is excellent news!
            However, it's important to continue with regular health checkups and
            maintain a healthy lifestyle.
          </p>
          <p>
            If you're experiencing symptoms, it might be worth discussing with
            your healthcare provider to rule out other causes.
          </p>
          <p>
            <strong>Next Steps:</strong> Keep up with annual checkups and stay
            proactive about your brain health!
          </p>
        </>
      );

      break;

    case "meningioma":
      returnResult = (
        <>
          <div className="resultTitle red">⚠️ Meningioma Detected</div>
          <div className="confidence">Confidence Rate: {confidence}%</div>
          <p>
            Meningiomas are tumors that arise from the meninges, the layers of
            tissue covering the brain and spinal cord. Most meningiomas are
            benign (non-cancerous), but they can cause symptoms depending on
            their size and location.
          </p>
          <p>
            <strong>Next Steps:</strong> While meningiomas are often benign,
            it's essential to consult a specialist who can evaluate your
            condition and recommend appropriate treatment options, which could
            include monitoring, surgery, or radiation therapy.
          </p>
          <p>
            Regular follow-up imaging may also be advised to track the tumor's
            growth over time.
          </p>
        </>
      );

      break;

    case "glioma":
      returnResult = (
        <>
          <div className="resultTitle red">⚠️ Glioma Detected</div>
          <div className="confidence">Confidence Rate: {confidence}%</div>
          <p>
            Gliomas are a type of tumor that arises from glial cells in the
            brain or spinal cord. Gliomas can range from benign to malignant,
            and their severity is often classified based on their grade.
            Treatment varies depending on the tumor's type, size, and location.
          </p>
          <p>
            <strong>Next Steps:</strong> It's crucial to follow up with a
            neurologist or oncologist for a more detailed assessment and a
            personalized treatment plan. Treatment may involve surgery,
            chemotherapy, radiation therapy, or a combination of these
            approaches.
          </p>
          <p>
            Close monitoring through follow-up imaging is often required to
            track the tumor's progression and response to treatment.
          </p>
        </>
      );

      break;

    case "pituitary tumor":
      returnResult = (
        <>
          <div className="resultTitle red">⚠️ Pituitary Tumor Detected</div>
          <div className="confidence">Confidence Rate: {confidence}%</div>
          <p>
            The pituitary gland, often called the "master gland," is located at
            the base of the brain and controls various hormonal functions in the
            body. A pituitary tumor, also known as a pituitary adenoma, is
            usually benign (non-cancerous) but can cause hormonal imbalances
            that may lead to symptoms like headaches, vision problems, and
            hormonal disturbances.
          </p>
          <p>
            <strong>Next Steps:</strong> Treatment options depend on the type of
            tumor and symptoms. For some, monitoring the tumor through regular
            imaging is sufficient. In other cases, treatment options may include
            medication to control hormone production, radiation therapy, or even
            surgery to remove the tumor.
          </p>
          <p>
            Consulting with an endocrinologist or neurosurgeon is critical to
            determining the best course of action based on the tumor's size,
            type, and the hormonal effects it may be causing.
          </p>
          <p>
            Regular follow-up and monitoring are recommended, as pituitary
            tumors can impact many bodily functions due to their proximity to
            important hormonal pathways.
          </p>
        </>
      );

      break;

    default:
      returnResult = (
        <>
          <div className="resultTitle">Loading...</div>
          <div className="confidence">Analyzing your scan...</div>
          <p>
            We're still processing your results. Please be patient while we
            finalize the analysis of your scan.
          </p>
        </>
      );

      break;
  }
  const imageUrl = URL.createObjectURL(image);

  return (
    <>
      <div className="flexResultContainer">
        <img id="uploadedImage" src={imageUrl} />
        <div>{returnResult}</div>
      </div>
    </>
  );
};

export default Result;
