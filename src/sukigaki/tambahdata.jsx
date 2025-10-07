import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Tambahdata() {
    const [formData, setFormData] = useState({
        Email: '',
        Nama: '',
        Password: '',
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
          const response = await axios.post("http://localhost:5000/login", formData);

          console.log("Respon server:", response.data);
          Swal.fire({
  position: "center",
  icon: "success",
  title: "data anda telah di simpan",
  showConfirmButton: false,
  timer: 1500
           });

          setFormData({
            Email: "",
            Nama: "",
            Password: "",
          })


          navigate("/Dashboard");
        } catch (error) {
          console.error(err);
          Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        } finally {
          setLoading(false);
        }
    };



  return (
<div className="flex items-center justify-center bg-sky-500 min-h-screen">
  <div className="bg-amber-50 p-8 rounded-lg shadow-md w-96 relative h-110">
    <h1 className='text-center font-bold text-2xl mb-4'>Login</h1>
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
          value={formData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mx-2" htmlFor="Nama">
          Nama
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Nama"
          type="text"
          name="Nama"
          placeholder="Masukan nama anda"
          value={formData.Nama}
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
          type="password"
          name="Password"
          placeholder="Masukan password anda"
          value={formData.Password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-sky-600 hover:bg-sky-800 rounded focus:outline-none py-2 px-4 text-white font-bold"
          type="submit"
        >
          Login
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

export default Tambahdata