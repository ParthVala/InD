import React from "react";
import Airbnb from "../../../images/Airbnb Logo.png";
import Hubspot from "../../../images/Hubspot Logo.png";
import Google from "../../../images/Google Logo.png";
import Microsoft from "../../../images/Microsoft Logo.png";
import Walmart from "../../../images/Walmart Logo.png";
import FedEx from "../../../images/FedEx Logo.png";
import "./Layer4.css";

export default function Layer4() {
  return (
    <div>
      <div>
        <hr className="l4b" />
      </div>

      <div className="text-center l4w">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500 clients</p>
      </div>

      
        <div className="l4allimg row">
          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={Airbnb} alt="Airbnb" />
          </div>

          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={Hubspot} alt="Hubspot" />
          </div>

          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={Google} alt="Google" />
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={Microsoft} alt="Microsoft" />
          </div>
          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={Walmart} alt="Walmart" />
          </div>

          <div className="col-xl-2 col-md-6 col-sm-12">
            <img className="l4im" src={FedEx} alt="FedEx" />
          </div>
        </div>

      <div>
        <hr className="l4b2" />
      </div>
    </div>
  );
}
