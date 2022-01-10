import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShareModal from "./shareModal";

export default function DataTable({ title = "title", share = "false" }) {
  const [modalShow, setModalShow] = React.useState(false);

  const [shareID, setShareID] = React.useState();
  const handleOpenInbox = (quotation_id) => {
    setShareID(quotation_id);
    setModalShow(true);
  };
  const columns = [
    { field: "id", headerName: "ID Produk", width: 90 },
    { field: "product", headerName: "Product", width: 350 },
    { field: "category", headerName: "Kategori", width: 130 },
    { field: "startDate", headerName: "Tanggal Mulai", width: 130 },
    {
      field: "maxClick",
      headerName: "Max Click",
      type: "number",
      width: 90,
    },
    {
      field: "description",
      headerName: "Deskripsi",
      description:
        "Klik `Lihat Rincian` untuk melihat penjelasan produk secara rinci",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <strong>
          <Link to={`/detail/${params.getValue(params.id, "id")}`}>
            <Button className="button_blue" style={{ marginLeft: 16 }}>
              Lihat Rincian
            </Button>
          </Link>
        </strong>
      ),
    },
    {
      field: "share",
      headerName: "Bagikan",
      description: "Klik `share` untuk membagikan content ke media sosial anda",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <strong>
          <Button
            className="button_orange"
            style={{ marginLeft: 16 }}
            onClick={() => handleOpenInbox(params.getValue(params.id, "id"))}
          >
            Share
          </Button>
        </strong>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      startDate: "01-01-2022",
      product: "Lekker Story",
      category: "Makanan",
      maxClick: 3000,
    },
    {
      id: 2,
      startDate: "01-01-2022",
      product: "Nurd Music",
      category: "Youtube Channel",
      maxClick: 500,
    },
    {
      id: 3,
      startDate: "01-01-2022",
      product: "Zilkya Collection",
      category: "Fashion",
      maxClick: 500,
    },
    {
      id: 4,
      startDate: "01-01-2022",
      product: "Google",
      category: "Youtube Channel",
      maxClick: 50000,
    },
    {
      id: 5,
      startDate: "01-01-2022",
      product: "UFC 269: Dustin Poirir vs Charles Oliveira",
      category: "Olahraga",
      maxClick: 5000,
    },
    {
      id: 6,
      startDate: "01-01-2022",
      product: "Melisandre",
      category: "Fashion",
      maxClick: 1000,
    },
    {
      id: 7,
      startDate: "01-01-2022",
      product: "Xiaomi Note 10 Pro",
      category: "Elektronik",
      maxClick: 1000,
    },
    {
      id: 8,
      startDate: "01-01-2022",
      product: "Bath and Body Works",
      category: "Kecantikan",
      maxClick: 1000,
    },
    {
      id: 9,
      startDate: "01-01-2022",
      product: "SuperWA",
      category: "Website",
      maxClick: 500,
    },
  ];
  return (
    <>
      <div style={{ height: 430, width: "100%", margin: "20px 0 60px" }}>
        <h2>{title}</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
      <ShareModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        shareID={shareID}
      />
    </>
  );
}
