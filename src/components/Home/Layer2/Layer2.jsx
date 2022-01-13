import React from "react";
import pic from "../../../images/Rectangle 243.png";
import pic1 from "../../../images/Rectangle 243 (1).png";
import pic2 from "../../../images/Rectangle 243 (2).png";
import pic3 from "../../../images/Rectangle 243 (3).png";
import pic4 from "../../../images/Rectangle 243 (4).png";
import pic5 from "../../../images/Rectangle 243 (5).png";
import "./Layer2.css";

export default function Layer2() {
  return (
    <div className="L2all">
      <div className="L2a">
        <h2 className="L2h2">Industries We have Worked with</h2>
        <p className="L2p">
          Integrate with all the marketing & social apps you use everyday.
        </p>
      </div>

      <div className="whole">
        <div className="l2b11 row">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic} alt="Finance" />
              <h5 className="l2hale">Finance</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic1} alt="Manu" />
              <h5 className="l2hale">Manufacturing</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic2} alt="Fashion" />
              <h5 className="l2hale">Fashion</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
        </div>

        <div className="l2b12 row">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic3} alt="Logistics" />
              <h5 className="l2hale">Logistics</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic4} alt="Fm" />
              <h5 className="l2hale">Film Production</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="l2b1">
              <img className="l2imge" src={pic5} alt="Retail" />
              <h5 className="l2hale">Retail</h5>
              <p className="l2pale">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod sed do eiusmod sed do eiusmod sed do eiusmod
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
