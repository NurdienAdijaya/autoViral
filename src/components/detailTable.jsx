import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import DetailModal from "./detailModal";

export default function DetailTable({ title = "title", share = "false" }) {
  const [modalShow, setModalShow] = React.useState(false);

  const columns = [
    { field: "id", headerName: "ID Produk", width: 90 },
    { field: "product", headerName: "Product", width: 350 },
    { field: "category", headerName: "Kategori", width: 130 },
    { field: "startDate", headerName: "Tanggal Mulai", width: 130 },
    {
      field: "maxClick",
      headerName: "Max Click",
      type: "number",
      width: 100,
    },
    {
      field: "click_count",
      headerName: "klik berjalan",
      type: "number",
      width: 120,
    },
    {
      field: "user_count",
      headerName: "User Shared",
      type: "number",
      width: 120,
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
          <Button
            className="button_blue"
            style={{ marginLeft: 16 }}
            onClick={() => {
              setModalShow(true);
            }}
          >
            Lihat Rincian
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
      click_count: 180,
      user_count: 6,
    },
    {
      id: 2,
      startDate: "01-01-2022",
      product: "Nurd Music",
      category: "Youtube Channel",
      maxClick: 500,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 3,
      startDate: "01-01-2022",
      product: "Zilkya Collection",
      category: "Fashion",
      maxClick: 500,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 4,
      startDate: "01-01-2022",
      product: "Google",
      category: "Youtube Channel",
      maxClick: 50000,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 5,
      startDate: "01-01-2022",
      product: "UFC 269: Dustin Poirir vs Charles Oliveira",
      category: "Olahraga",
      maxClick: 5000,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 6,
      startDate: "01-01-2022",
      product: "Melisandre",
      category: "Fashion",
      maxClick: 1000,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 7,
      startDate: "01-01-2022",
      product: "Xiaomi Note 10 Pro",
      category: "Elektronik",
      maxClick: 1000,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 8,
      startDate: "01-01-2022",
      product: "Bath and Body Works",
      category: "Kecantikan",
      maxClick: 1000,
      click_count: 180,
      user_count: 6,
    },
    {
      id: 9,
      startDate: "01-01-2022",
      product: "SuperWA",
      category: "Website",
      maxClick: 500,
      click_count: 180,
      user_count: 6,
    },
  ];
  return (
    <div style={{ height: 430, width: "100%", margin: "20px 0 60px" }}>
      <h2>{title}</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
      <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
