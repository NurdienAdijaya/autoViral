import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const columns = [
  { field: "id", headerName: "ID Produk", width: 90 },
  { field: "product", headerName: "Product", width: 350 },
  { field: "category", headerName: "Kategori", width: 130 },
  {
    field: "clicks",
    headerName: "Klik diperoleh",
    type: "number",
    width: 120,
  },
  {
    field: "earnings",
    headerName: "Pendapatan",
    description: "Jumlah pendapatan pada setiap campaign",
    width: 160,
    renderCell: (params) =>
      `Rp ${params.getValue(params.id, "earnings") || "0"}`,
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
        <Link to={`/detail/${params.getValue(params.id, "id")}`}>
          <Button className="button_orange" style={{ marginLeft: 16 }}>
            Share
          </Button>
        </Link>
      </strong>
    ),
  },
];

const rows = [
  {
    id: 1,
    product: "Lekker Story",
    category: "Makanan",
    clicks: 1036,
    earnings: 207200,
  },
  {
    id: 2,
    product: "Nurd Music",
    category: "Youtube Channel",
    clicks: 219,
    earnings: 43800,
  },
  {
    id: 3,
    product: "Zilkya Collection",
    category: "Fashion",
    clicks: 411,
    earnings: 82200,
  },
  {
    id: 4,
    product: "Google",
    category: "Youtube Channel",
    clicks: 1534,
    earnings: 306800,
  },
  {
    id: 5,
    product: "UFC 269: Dustin Poirir vs Charles Oliveira",
    category: "Olahraga",
    clicks: 653,
    earnings: 130600,
  },
  {
    id: 6,
    product: "Melisandre",
    category: "Fashion",
    clicks: 23,
    earnings: 4600,
  },
  {
    id: 7,
    product: "Xiaomi Note 10 Pro",
    category: "Elektronik",
    clicks: 130,
    earnings: 26000,
  },
  {
    id: 8,
    product: "Bath and Body Works",
    category: "Kecantikan",
    clicks: 14,
    earnings: 2800,
  },
  { id: 9, product: "SuperWA", category: "Website", clicks: 8, earnings: 1600 },
];

export default function PaymentDataTable() {
  return (
    <div style={{ height: 430, width: "100%", margin: "20px 0" }}>
      <h2>Rincian Pendapatan</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
