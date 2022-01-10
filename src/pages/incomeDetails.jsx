import React from "react";
import { Button } from "react-bootstrap";
import CampaignActive from "../components/campaignActive";
import Earnings from "../components/earnings";
import PaymentDataTable from "../components/paymentDataTable";
import TotalClick from "../components/totalClick";
import UserLevel from "../components/userLevel";
import WithdrawModal from "../components/withdrawModal";

const IncomeDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div>
        <div className="page_container_flex">
          <div className="page_container">
            <div className="header_container">
              <div className="header_opening_container">
                <h4>Halaman ini berisi Rincian pendapatanmu ya</h4>
                <h4>terus bagikan dan dapatkan pemasukan lebih banyak</h4>
                <Button
                  className="button_orange"
                  onClick={() => setModalShow(true)}
                  style={{ width: "200px", marginTop: "10px" }}
                >
                  Tarik Saldo
                </Button>
              </div>
              <div className="head_info_container">
                <TotalClick />
                <Earnings />
                <CampaignActive />
              </div>
            </div>
            <div>
              <UserLevel />
            </div>
            <PaymentDataTable />
          </div>
        </div>
        <WithdrawModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default IncomeDetails;
