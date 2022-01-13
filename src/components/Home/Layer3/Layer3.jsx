import React from "react";
import pic from "../../../images/Rectangle 244.png";
import pic1 from "../../../images/Rectangle 244 (1).png";
import pic2 from "../../../images/Rectangle 244 (2).png";
import pic3 from "../../../images/Rectangle 244 (3).png";
import pic4 from "../../../images/Rectangle 244 (4).png";
import frame from "../../../images/Layer 1.png";
import "./Layer3.css";

export default function Layer3() {
  return (
    <div className="l3all">
      <div className="text-center hnp">
        <h2>End-to-End Development Services</h2>
        <p>As a startup, we are going through the development cycle.</p>
      </div>

      <div className="row">
        <div className="card-group">

          <div className="col">
            <div className="card text-left border-0">
              <img className="l3im" src={pic} alt="Conceptualization" />
              <hr className="l3b" />
              <div className="card-body">
                <h5 className="card-title">Conceptualization</h5>
                <p className="card-text l3tex">
                  We work with you to conceptualize your ideas and requirements
                  into reality to transform your
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-left border-0">
              <img className="l3im" src={pic1} alt="Design" />
              <hr className="l3b" />
              <div className="card-body">
                <h5 className="card-title">Design</h5>
                <p className="card-text">
                  An elegant interface lies at the core of our development
                  process. Creating a user interface
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-left border-0">
              <img className="l3im" src={pic2} alt="Development" />
              <hr className="l3b" />
              <div className="card-body">
                <h5 className="card-title">Development</h5>
                <p className="card-text">
                  We develop your product with the latest technology frameworks
                  that are scalable, responsive, and{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-left border-0">
              <img className="l3im" src={pic3} alt="Q/A Testing" />
              <hr className="l3b" />
              <div className="card-body">
                <h5 className="card-title">Q/A Testing</h5>
                <p className="card-text">
                  Post product development, the developed interface goes through
                  a rigorous Q/A{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-left border-0">
              <img className="l3im" src={pic4} alt="Delivery and Servicing" />
              <div className="card-body">
                <h5 className="card-title last">Delivery and Servicing</h5>
                <p className="card-text">
                  We offer timely delivery of your interface/product as well as
                  extensive{" "}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div>
        <img className="l3f" src={frame} alt="f2" />
      </div>
    </div>
  );
}
