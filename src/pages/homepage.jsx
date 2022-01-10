import React from "react";
import Earnings from "../components/earnings";
import EditProfileModal from "../components/editProfileModal";
import TotalClick from "../components/totalClick";
import "../assets/styles/homepage.css";
import CampaignActive from "../components/campaignActive";
import DataTable from "../components/dataTable";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <div className="page_container_flex">
      <div className="page_container">
        <div className="header_container">
          <div className="header_opening_container">
            <h2>Hi Nurdien</h2>
            <h4>Sudah siap untuk mendapat penghasilan?</h4>
            <Link to="/offer">
              <Button
                className="button_orange"
                style={{ width: "200px", marginTop: "10px" }}
              >
                List Penawaran
              </Button>
            </Link>
          </div>
          <div className="head_info_container">
            <TotalClick />
            <Earnings />
            <CampaignActive />
          </div>
        </div>
        <DataTable title="Penawaran Terbaru" />
        <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default Homepage;
