import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidnav from "./sidnav";
import gambar from "../../public/Guest.jpg"

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/Profile");
        const lastProfile = res.data[res.data.length - 1];
        setProfile(lastProfile);
      } catch (err) {
        console.error("Gagal mengambil profil:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Memuat Profil...</div>;
  }

  if (!profile) {
    return <div className="text-center mt-10">Profil tidak ditemukan.</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidnav />
      <div className="flex-2 p-8 ml-120">
        <div className="w-1/2 items-center">
            <img src={"Guest.jpg"} alt="" className="rounded-full w-25 mx-37" />
        <h2 className="text-2xl font-bold mb-4 mx-20">Profil Pengguna</h2>
        <div className="bg-white rounded shadow p-6 w-full max-w-lg text-center">
          <p><strong>Email:</strong> {profile.Email}</p>
          <p><strong>Nama:</strong> {profile.Nama}</p>
          <p><strong>Umur:</strong> {profile.Umur}</p>
          <p><strong>Gender:</strong> {profile.Gender}</p>
          <p><strong>Sekolah:</strong> {profile.Sekolah}</p>
          <p><strong>Hobi:</strong> {profile.Hobi}</p>
          <p><strong>Jurusan:</strong> {profile.Jurusan}</p>
        </div>
      </div>
    </div>
        </div>
  );
}

export default Profile;
