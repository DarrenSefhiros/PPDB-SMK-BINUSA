import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Identitas1() {
    const [formData, setFormData] = useState({
        Nama: '',
        Umur: '',
        Gender: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  console.log("Data yang akan dikirim:", formData);

  try {
    const response = await axios.post("http://localhost:5000/Identitas", formData);

    console.log("Respon server:", response.data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Data anda telah disimpan",
      showConfirmButton: false,
      timer: 1500
    });

    setFormData({
      Nama: "",
      Umur: "",
      Gender: "",
    });

    navigate("/Jurusan");

  } catch (error) {
    console.error(error); // ✅ FIXED
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  } finally {
    setLoading(false);
  }
};



  return (
<div className="flex items-center justify-center bg-sky-500 min-h-screen">
  <div className="bg-amber-50 p-8 rounded-lg shadow-md w-96 relative h-110">
    <h1 className='text-center font-bold text-2xl mb-4'>Identitas</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Nama">
          Nama
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Nama"
          type="text"
          name="Nama"
          placeholder="Masukan Nama anda"
          value={formData.Nama}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Umur">
          Umur
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Umur"
          type="number"
          name="Umur"
          placeholder="Masukan Umur anda"
          value={formData.Umur}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Gender">
          Gender
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Gender"
          type="text"
          name="Gender"
          placeholder="Masukan Gender anda"
          value={formData.Gender}
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
          <a href="/Identitasdata" className="text-white no-underline">Kembali</a>
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Identitas1