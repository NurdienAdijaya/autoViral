import * as React from "react";
import { useParams } from "react-router";
import "../assets/styles/profile.css";
import DetailTable from "../components/detailTable";

const DetailCampaign = () => {
  const { id } = useParams();
  return (
    <div className="page_container_flex">
      <div className="page_container">
        <div className="detail_title">
          <h1>Detail Campaign {id}</h1>
        </div>
        <DetailTable title={`${id} detail`} />
        <div></div>
      </div>
    </div>
  );
};

export default DetailCampaign;
