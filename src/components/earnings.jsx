import React from "react";
import { GiCash } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../assets/styles/totalClick.css";

const Earnings = () => {
  return (
    <Link to="/income-details">
      <div className="header_info_container">
        <h4>Jumlah Pendapatan</h4>
        <div className="header_statistic_container">
          <GiCash className="statistic_icon" />
          <div className="info_total_amount">
            <h5 className="total_amount text_blue">Rp 805.600</h5>
            <div>Total Pendapatan</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Earnings;
