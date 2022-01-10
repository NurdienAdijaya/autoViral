import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export default function DetailModal(props) {
  const title = props.title;

  const columns = [
    { field: "id", headerName: "ID Produk", width: 90 },
    { field: "user_name", headerName: "Nama User", width: 250 },
    { field: "start_sharing", headerName: "Mulai Membagikan", width: 150 },
    {
      field: "click_earned",
      headerName: "Klik didapatkan",
      type: "number",
      width: 150,
    },
    {
      field: "action",
      headerName: "Aksi",
      description:
        "Klik `Lihat Rincian` untuk melihat penjelasan produk secara rinci",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <strong>
          <Button className="button_blue" style={{ marginLeft: 16 }}>
            Dispute
          </Button>
        </strong>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      start_sharing: "01-01-2022",
      user_name: "Lekker Story",
      category: "Makanan",
      click_earned: 3000,
    },
    {
      id: 2,
      start_sharing: "01-01-2022",
      user_name: "Nurd Music",
      category: "Youtube Channel",
      click_earned: 500,
    },
    {
      id: 3,
      start_sharing: "01-01-2022",
      user_name: "Zilkya Collection",
      category: "Fashion",
      click_earned: 500,
    },
    {
      id: 4,
      start_sharing: "01-01-2022",
      user_name: "Google",
      category: "Youtube Channel",
      click_earned: 50000,
    },
    {
      id: 5,
      start_sharing: "01-01-2022",
      user_name: "UFC 269: Dustin Poirir vs Charles Oliveira",
      category: "Olahraga",
      click_earned: 5000,
    },
    {
      id: 6,
      start_sharing: "01-01-2022",
      user_name: "Melisandre",
      category: "Fashion",
      click_earned: 1000,
    },
    {
      id: 7,
      start_sharing: "01-01-2022",
      user_name: "Xiaomi Note 10 Pro",
      category: "Elektronik",
      click_earned: 1000,
    },
    {
      id: 8,
      start_sharing: "01-01-2022",
      user_name: "Bath and Body Works",
      category: "Kecantikan",
      click_earned: 1000,
    },
    {
      id: 9,
      start_sharing: "01-01-2022",
      user_name: "SuperWA",
      category: "Website",
      click_earned: 500,
    },
  ];
  return (
    <Modal
      // backdrop="static"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modalContainer">
        <h4>Detail </h4>
        <div
          style={{
            height: 430,
            width: "100%",
            margin: "20px auto 60px",
            maxWidth: "900px",
          }}
        >
          <h2>{title}</h2>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
        <Link to="/profile">
          <Button className="button_orange">Isi Biodata</Button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}
