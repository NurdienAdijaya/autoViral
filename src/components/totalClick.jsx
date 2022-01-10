import React from "react";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";
import "../assets/styles/totalClick.css";

const TotalClick = () => {
  return (
    <Link to="/income-details">
      <div className="header_info_container">
        <h4>Jumlah Click</h4>
        <div className="header_statistic_container">
          <IoIosStats className="statistic_icon" />
          <div className="info_total_amount">
            <h5 className="total_amount text_blue">4028</h5>
            <div>Total Clicks</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TotalClick;
