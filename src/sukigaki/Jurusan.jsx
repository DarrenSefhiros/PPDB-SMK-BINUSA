import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Jurusan() {
    const [formData, setFormData] = useState({
        Sekolah: '',
        Hobi: '',
        Jurusan: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const jurusanData = formData;
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const identitasData = JSON.parse(localStorage.getItem("identitasData"));

    const fullProfile = {
      ...loginData,
      ...identitasData,
      ...jurusanData,
    };

    await axios.post("http://localhost:5000/Profile", fullProfile);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Profil berhasil dibuat",
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.removeItem("loginData");
    localStorage.removeItem("identitasData");
    navigate("/Dashboard");

  } catch (error) {
    console.error("Gagal membuat profil:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Terjadi kesalahan saat menyimpan profil.",
    });
  } finally {
    setLoading(false);
  }
};

  return (
<div className="flex items-center justify-center bg-sky-500 min-h-screen">
  <div className="bg-amber-50 p-8 rounded-lg shadow-md w-96 relative h-110">
    <h1 className='text-center font-bold text-2xl mb-4'>Jurusan</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Sekolah">
          Sekolah
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Sekolah"
          type="text"
          name="Sekolah"
          placeholder="Asal Sekolah anda"
          value={formData.Sekolah}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Hobi">
          Hobi
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Hobi"
          type="Hobi"
          name="Hobi"
          placeholder="Masukan Hobi anda"
          value={formData.Umur}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Jurusan">
          Jurusan
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Jurusan"
          type="Jurusan"
          name="Jurusan"
          placeholder="Masukan Jurusan anda"
          value={formData.Jurusan}
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
          <a href="/Identitas" className="text-white no-underline">Kembali</a>
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Jurusan