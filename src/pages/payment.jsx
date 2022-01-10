import React from "react";
import { Button } from "react-bootstrap";
import CampaignActive from "../components/campaignActive";
import Earnings from "../components/earnings";
import PaymentDataTable from "../components/paymentDataTable";
import TotalClick from "../components/totalClick";

const Payment = () => {
  return (
    <div>
      <div className="page_container_flex">
        <div className="page_container">
          <div className="header_container">
            <div className="header_opening_container">
              <h4>Halaman ini berisi Rincian pendapatanmu ya</h4>
              <h4>terus bagikan dan dapatkan pemasukan lebih banyak</h4>
              <Button
                className="button_orange"
                style={{ width: "200px", marginTop: "10px" }}
              >
                List Penawaran
              </Button>
            </div>
            <div className="head_info_container">
              <TotalClick />
              <Earnings />
              <CampaignActive />
            </div>
          </div>
          <PaymentDataTable />
        </div>
      </div>
    </div>
  );
};

export default Payment;
