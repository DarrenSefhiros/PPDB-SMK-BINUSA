import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidnav from "./sidnav";
import Swal from "sweetalert2";

function Jurusandata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/Jurusan");
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Serius Kamu?",
      text: "Data tidak akan bisa dikembalikan jika telah dihapus",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus data"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/Jurusan/${id}`);
          setData((prev) => prev.filter((item) => item.id !== id));
          Swal.fire("Deleted!", "Data anda telah dihapus", "success");
        } catch (err) {
          console.error("Gagal menghapus data:", err);
          Swal.fire("Error!", "Terjadi kesalahan saat menghapus data.", "error");
        }
      }
    });
  };

  return (
    <div className="flex min-h-screen">
      <Sidnav />

      <div className="flex-1 p-8 ml-60">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Login: {data.length} orang
          </h2>
          <Link to="/Jurusan1">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              + Tambah Data
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-500">
            <thead className="bg-sky-200">
              <tr>
                <th className="border px-4 py-2 text-left">Sekolah</th>
                <th className="border px-4 py-2 text-left">Hobi</th>
                <th className="border px-4 py-2 text-left">Jurusan</th>
                <th className="border px-4 py-2 text-center">Ubah</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Memuat data...
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id} className="bg-blue-100 hover:bg-blue-200">
                    <td className="border px-4 py-2">{item.Sekolah}</td>
                    <td className="border px-4 py-2">{item.Hobi}</td>
                    <td className="border px-4 py-2">{item.Jurusan}</td>
                    <td className="border px-4 py-2 text-center space-x-2">
                      <Link to={`/Editjurusan/${item.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Belum ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jurusandata;
