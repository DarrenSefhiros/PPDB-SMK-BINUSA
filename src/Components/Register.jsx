import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Register() {
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
    const response = await axios.get('http://localhost:5000/login', {
      params: { Email: formData.Email } // Kita bisa filter query
    });

    const users = response.data;
    
    // Cari user yang cocok Email dan Password
    const user = users.find(
      u => u.Email === formData.Email && u.Password === formData.Password
    );

    if (user) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login berhasil!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/Dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email atau password salah!",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Gagal mengambil data dari server!",
    });
  }

  setLoading(false);
};


  return (
    <div className="flex items-center justify-center bg-sky-500 min-h-screen">
        <div className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className='text-center font-bold'>Login</h1>
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
                    placeholder="masukan email anda"
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
                    placeholder="masukan Nama anda"
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
                    placeholder="masukan Password anda"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-sky-600 hover:bg-sky-800 rounded focus:outline-none py-2 px-3 text-white font-bold"
                 type="submit"
                 >
                    Daftar
                </button>
            <div>
                <button className="bg-gray-500 hover:bg-gray-800 rounded focus:outline-none py-2 px-3">
                <a href="/login" className="no-underline text-white font-bold text-center">Kembali </a>
                </button>
            </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register