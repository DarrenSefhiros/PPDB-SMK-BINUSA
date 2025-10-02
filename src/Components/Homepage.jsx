import React from 'react'
import gambar from '../../public/smk binusa.jpg'

export const Homepage = () => {
  return (
    <div className="f">
    <div className="bg-sky-400 h-20 shadow-md z-50">
      <ul className="flex items-center justify-between"> 
        <h1 className="text-white font-bold mt-2">
          Home
      </h1>
        <li className="mt-2">
          <a href="#" className="text-white font-medium">Jurusan</a>
        </li>
        <li className="ml-25 mt-2">
          <a href="#" className="text-white font-medium">Tentang kami</a>
        </li>
        <li className="mx-30 mt-3">
          <a href="#" className="font-medium text-white">sosial media</a>
        </li>
      </ul>
      <div className="text-center my-15">
        <h1 className="">Selamat datang di PPDB SMK BINUSA</h1>
        <div className="w-50 mt-20 mx-20 grid-cols-10">
          <img src={"smk binusa.jpg"} alt="ppdb" className="rounded-md object-cover"/> <br /> <br /> <br />
          <div className="mt-10 h-30 grid grid-cols-5 gap-89">
            <h1 className="mx-140 text-3xl font-bold text-shadow-lg">Jurusan</h1>
            <div className="box bg-white shadow-lg my-30 rounded h-70 w-70 -mx-110 py-3">
              <h2 className="text-2xl underline">TKJ</h2> <br />
              <p className="font-semibold">TKJ merupakan singkatan dari teknik komputer jaringan, yang dimana di jurusan ini kalian akan mempelajari tentang komponen-komponen komputer,jaringan,atau bahkan coding</p>
            </div>
            <div className="box bg-white shadow-lg my-30 rounded h-70 w-70 -mx-110 py-3">
              <h2 className="text-2xl underline">DPB</h2> <br />
              <p className="font-semibold text-center">Desain Produksi Busana (DPB) adalah jurusan yang mempelajari cara merancang, membuat, dan memproduksi pakaian. Siswa diajarkan desain busana, membuat pola, menjahit, dan memahami tren fashion untuk siap bekerja atau berwirausaha di bidang mode.</p>
            </div>
            <div className="box bg-white shadow-lg my-30 rounded h-70 w-70 -mx-110 py-3">
              <h2 className="text-2xl underline">AKL</h2> <br />
              <p className="font-semibold">Akuntansi dan Keuangan Lembaga (AKL) adalah jurusan yang mempelajari pencatatan keuangan, pengelolaan anggaran, dan laporan keuangan. Siswa dilatih menjadi tenaga akuntansi yang siap bekerja di kantor, bank, atau membuka usaha sendiri.</p>
            </div>
            <div className="box bg-white shadow-lg my-30 rounded h-70 w-70 -mx-110 py-3">
              <h2 className="text-2xl underline">TSM</h2> <br />
              <p className="font-semibold">Teknik dan Bisnis Sepeda Motor (TSM) adalah jurusan yang mempelajari perawatan, perbaikan, dan bisnis sepeda motor. Siswa diajarkan keterampilan teknis dan kewirausahaan agar siap bekerja di bengkel atau membuka usaha sendiri.</p>
            </div>
            <div className="about -my-80 mx-125">
              <h1 className="text-nowrap text-shadow-lg">Tentang Kami</h1>
            </div>
            <div className="-my-60 text-center ml-10 -mx-120">
              <p className="font-serif">SMK Bina Nusantara Semarang adalah sekolah menengah kejuruan swasta yang didirikan pada tahun 2010. Sekolah ini berlokasi di Jl. Kemantren I No.5 Rt.02 Rw.4, Kota Semarang, dan memiliki akreditasi B dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). SMK Bina Nusantara menawarkan program pendidikan yang sesuai dengan kurikulum 2013 REV. Teknik Komputer dan Jaringan. Sekolah ini memiliki 379 siswa, di mana jumlah siswa laki-laki lebih banyak dari perempuan. SMK Bina Nusantara berkomitmen untuk meningkatkan ketrampilan wirausaha dan menyiapkan lulusan yang siap mengisi pasar kerja sesuai dengan bidang profesinya</p> <br /> <br /> <br /> <br /> <br />
              <h1 className="text-shadow-lg">Sosial media</h1>
              <div className="fixed bottom-0 left-0 w-full h-14 bg-blue-500 rounded-md">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage