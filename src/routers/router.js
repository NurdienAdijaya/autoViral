import { Route, Routes } from "react-router";
import Header from "../components/header";
import Campaign from "../pages/campaign";
import DetailCampaign from "../pages/detailCampaign";
import Homepage from "../pages/homepage";
import IncomeDetails from "../pages/incomeDetails";
import Login from "../pages/login";
import Offer from "../pages/offer";
import Payment from "../pages/payment";
import Profile from "../pages/profile";

const Routers = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? <Header /> : ""}
      <Routes>
        <Route path="/" element={token ? <Homepage /> : <Login />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/income-details" element={<IncomeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment-data" element={<Payment />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/detail/:id" element={<DetailCampaign />} />
      </Routes>
    </>
  );
};

export default Routers;
