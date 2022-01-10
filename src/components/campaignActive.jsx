import React from "react";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/styles/totalClick.css";

const CampaignActive = () => {
  return (
    <Link to="/income-details">
      <div className="header_info_container">
        <h4>Campaign Dijalankan</h4>
        <div className="header_statistic_container">
          <FaTasks className="statistic_icon" />
          <div className="info_total_amount">
            <h5 className="total_amount text_blue">9</h5>
            <div>Total Campaign</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignActive;
