import React, { useState } from "react";
import "../assets/styles/userLevel.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default function UserLevel() {
  const [progress] = useState(100);
  return (
    <div className="user_level_container">
      <div className="user_level_title_container">
        <h4>
          Dapatkan Bonus Rp 500.000 hanya dengan mencapai total 1000 klik
          pertama
        </h4>
      </div>
      <ProgressBar percent={progress}>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              ></div>
              {/* <div className={"test"}>Dispatched</div> */}
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              ></div>
              <div className={"test"}>
                1000
                <br />
                Clicks
              </div>
            </>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}
