import React from "react";
import { Button } from "react-bootstrap";
import DataTable from "../components/dataTable";
import NewCampaignModal from "../components/newCampaignModal";
import PaymentConfirmationModal from "../components/paymentConfirmationModal";

const Campaign = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [confirmationModalShow, setConfirmationModalShow] =
    React.useState(false);
  return (
    <div className="page_container_flex">
      <div className="page_container">
        <div className="header_opening_container">
          <h2>Mulai Viralkan produkmu sekarang</h2>
          <h4>Pilih paketmu sekarang, dan tunggu productmu menjadi viral</h4>
          <Button
            className="button_orange"
            onClick={() => setModalShow(true)}
            style={{ width: "200px", marginTop: "10px" }}
          >
            Buat Campaign
          </Button>
          <Button
            className="button_blue"
            onClick={() => setConfirmationModalShow(true)}
            style={{ width: "200px", marginTop: "10px" }}
          >
            Konfirmasi Pembayaran
          </Button>
        </div>
        <DataTable title="Campaign Aktif" share="false" />
        <DataTable title="Campaign Berakhir" />

        <NewCampaignModal show={modalShow} onHide={() => setModalShow(false)} />
        <PaymentConfirmationModal
          show={confirmationModalShow}
          onHide={() => setConfirmationModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Campaign;
