import React from "react";
import "./style/knowmore.css";

import healthyImg from "./assets/healthy.jpeg";
import pituitaryImg from "./assets/pitiutary.jpg";
import gliomaImg from "./assets/glioma.jpeg";
import meningiomaImg from "./assets/meningioma.jpg";

const brainData = [
  {
    title: "Healthy Brain",
    text: `A healthy brain exhibits normal anatomical structures with no pathological lesions. MRI scans demonstrate well-defined gray and white matter differentiation, intact ventricular systems, and absence of abnormal mass effect or edema. The cerebrospinal fluid spaces appear normal, and no signs of inflammation or ischemia are present.`,
    img: healthyImg,
  },
  {
    title: "Pituitary Tumor",
    text: `Pituitary tumors, predominantly adenomas, are typically benign neoplasms arising from the anterior pituitary gland. They may cause hormonal imbalances such as hyperprolactinemia or acromegaly depending on secretory activity. MRI typically reveals a well-circumscribed, sellar or suprasellar mass with iso- to hypointense signal on T1-weighted images and variable contrast enhancement. Macroadenomas can compress the optic chiasm, leading to visual field defects.`,
    img: pituitaryImg,
  },
  {
    title: "Glioma",
    text: `Gliomas are primary central nervous system tumors originating from glial cells (astrocytes, oligodendrocytes). They encompass a wide spectrum from low-grade diffuse gliomas to highly aggressive glioblastomas. MRI features include irregular margins, infiltrative growth patterns, heterogeneous contrast enhancement, necrosis, and surrounding vasogenic edema. Advanced MRI techniques like diffusion tensor imaging and spectroscopy can aid in tumor grading and treatment planning.`,
    img: gliomaImg,
  },
  {
    title: "Meningioma",
    text: `Meningiomas are extra-axial tumors arising from the arachnoid cap cells of the meninges. Most are benign, slow-growing, and well-demarcated masses that exert a mass effect on adjacent brain tissue. On MRI, meningiomas usually appear isointense to gray matter on T1 and T2 sequences, with homogeneous contrast enhancement and a characteristic dural tail sign. They may cause localized edema and neurological deficits depending on location and size.`,
    img: meningiomaImg,
  },
];

const KnowMore = () => {
  return (
    <>
      {brainData.map((item, index) => (
        <div className="infocontainer" key={index}>
          <div className="infoBoard">
            <div>
              <p className="infotext">{item.title}</p>
              <p className="infosubtext">{item.text}</p>
            </div>
          </div>
          <div className="infoboardimg">
            <img className="imginfo" src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowMore;
