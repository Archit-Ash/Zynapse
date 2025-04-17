import React from "react";
import "../style/Homepage.css";
import { Link } from "react-router-dom";

import uiuia from "../assets/brainimg.png";
const InfoBoard = () => {
  return (
    <div id="infocontainer">
      <div id="infoBoard">
        <div>
          <p id="infotext">Welcome To Zynapse</p>
          <p id="infosubtext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            expedita, blanditiis illum fugiat commodi exercitationem aut libero
            laboriosam. Iusto quos soluta qui delectus ullam inventore
            necessitatibus voluptates, sunt vitae quis?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusantium repellendus non
            quaerat ea libero. Debitis, maxime dolorem nisi fugiat in quas, est
            quo voluptates quis ab nostrum velit laboriosam hic?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deserunt est aliquam
            sapiente possimus reprehenderit atque consectetur veritatis. Quia
            debitis, reprehenderit totam placeat ab nihil eos nesciunt excepturi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi
            eum hic adipisci impedit, soluta, magni iste omnis aperiam numquam
            perspiciatis repellat expedita. Veritatis earum voluptatem eos
            repellendus, atque quasi? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nostrum consequuntur quas aliquid, vitae debitis
            necessitatibus fugit, officia fuga doloremque tempora enim minus
            eveniet provident aut est asperiores,
          </p>

          <div id="btncontainer">
            <Link to="/upload">
              <button id="btnhomepage">CHECK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="infoboardimg">
        <img id="imginfo" src={uiuia} />
      </div>
    </div>
  );
};

export default InfoBoard;
