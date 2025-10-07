import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Editmenu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Email: "",
    Nama: "",
    Password: "",
  });

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/login/${id}`);
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setFormData(data);
      // alert("Berhasil mengambil data!"); 
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Gagal mengambil data",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]); 



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    harga: Number(formData.harga),
  };

  console.log("Mengirim data:", dataToSend);

  try {
    await axios.put(`http://localhost:5000/login/${id}`, dataToSend);
    Swal.fire({
  title: "Data berhasil diubah",
  icon: "success",
  draggable: true
});
    navigate("/Dashboard");
  } catch (err) {
    console.error("Gagal mengupdate data:", err.response?.data || err.message);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Gagal mengambil data",
  footer: '<a href="#">Why do I have this issue?</a>'
});
  }
};


  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  return (
<div className="flex items-center justify-center bg-sky-500 min-h-screen">
  <div className="bg-amber-50 p-8 rounded-lg shadow-md w-96 relative h-90">
    <h1 className='text-center font-bold text-2xl mb-4'>Edit</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="text"
          name="Email"
          placeholder="Masukan email anda"
          value={formData.Email || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Password"
          type="text"
          name="Password"
          placeholder="Masukan Password anda"
          value={formData.Password || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-sky-600 hover:bg-sky-800 rounded focus:outline-none py-2 px-4 text-white font-bold"
          type="submit"
        >
          Simpan
        </button>
      </div>
      <div className="flex justify-center mx-65 -my-10">
        <button
          className="bg-gray-500 hover:bg-gray-800 rounded focus:outline-none py-2 px-4 text-white font-bold px-100"
        >
          <a href="/Dashboard" className="text-white no-underline">Kembali</a>
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Editmenu