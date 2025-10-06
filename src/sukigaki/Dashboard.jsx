import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidnav from "./sidnav";
import Swal from "sweetalert2";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/login");
        setData(res.data);
      } catch (err) {
        console.error("gagal mengambil data:", err);
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
      await axios.delete(`http://localhost:5000/login/${id}`);
      setData((prev) => prev.filter ((item) => item.id !== id))

              Swal.fire({
          title: "Deleted!",
          text: "Data anda telah dihapus",
          icon: "success"
        });
    } catch (err) {
      console.error("Gagal menghapus data:", err);
        Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat menghapus data.",
          icon: "error",
          confirmButtonText: "OK"
        });
    }
  };
});
  };

  return (
    <div>
      <Sidnav />
      <button>awdadad</button>
    <div className='my-45 text-center'>
      <table className="mx-118 border-separate border border-blue-500 w-170 h-auto">
      <thead className="bg-sky-200">
        <tr>
        <th className="border">Email</th>
        <th className="border">Nama</th>
        <th className="border">Password</th>
        <th className="border">Ubah</th>
        </tr>
      </thead>
      <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className="border bg-blue-200 font-semibold">{item.Email}</td>
                <td className="border bg-blue-200 font-semibold">{item.Nama}</td>
                <td className="border bg-blue-200 font-semibold">{item.Password}</td>
                <div className="border bg-blue-200">
                  <div className="">
                  <Link to={`/EditMenu/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline my-2">
                      Edit
                    </button>
                  </Link>
                  </div>
                 <button
                  className="bg-red-500 text-white px-2 py-1 rounded py-1 px-3 font-bold"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </button>
                </div>
              </tr>
            ))
          ) : (
            <tr>
              <td className="mx-800">Belum ada data</td>
            </tr>
        )}
      </tbody>
      </table>
    </div>
    </div>
  )
}

export default Dashboard