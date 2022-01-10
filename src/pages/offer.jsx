import React from "react";
import "../assets/styles/homepage.css";
import DataTable from "../components/dataTable";
import PaymentDataTable from "../components/paymentDataTable";

const Offer = () => {
  return (
    <div>
      <div className="page_container_flex">
        <div className="page_container">
          <DataTable title="Penawaran Terbaru" />
          <PaymentDataTable />
        </div>
      </div>
    </div>
  );
};

export default Offer;
