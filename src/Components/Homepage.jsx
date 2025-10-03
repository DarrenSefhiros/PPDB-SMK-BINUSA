import React from 'react'
import gambar from '../../public/smk binusa.jpg'

export const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col transition-all">
      <div className="bg-sky-400 h-20 shadow-md sticky top-0 z-50">
        <ul className="flex items-center justify-between"> 
          <h1 className="text-white font-bold mt-2">PPDB</h1>
          <li className="mt-2">
            <a href="#Beranda" className="text-white font-medium no-underline">Home</a>
          </li>
          <li className="ml-25 mt-2">
            <a href="#Jurusan" className="text-white font-medium no-underline">Jurusan</a>
          </li>
          <li className="mx-30 mt-3">
            <a href="#about" className="font-medium text-white no-underline">Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div id='Beranda' className="text-center my-15">
        <h1 className="">Selamat datang di PPDB SMK BINUSA</h1>
<div className="w-full mt-20 mx-auto rounded-lg p-10 bg-blue-200 flex gap-3 items-start">
  <img src={"smk binusa.jpg"} alt="ppdb" className="w-1/2 rounded-md" />

  <div className="w-1/2 text-left">
    <h1 className="font-bold text-2xl leading-relaxed text-blue">
      Syarat Pendaftaran:
    </h1> <br />
    <p className="font-semibold text-2xl text-white">1.Mengisi formulir pendaftaran</p>
    <p className="font-semibold text-2xl text-white">2.Fotocopy akte kelahiran 2 lembar</p>
    <p className="font-semibold text-2xl text-white">3.Membawa KK (kartu keluarga) </p>
    <p className="font-semibold text-2xl text-white">4.Agama wajib Islam </p> <br /> <br />
    <div className="mx-100 py-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded focus:outline-none focus:shadow-outline my-2 items-center">
        <a href="/Login" className="text-white focus:outline-none no-underline text-nowrap text-2xl" >Daftar Sekarang</a>
      </button>
    </div>
  </div>
</div>
          <div id='Jurusan' className="mt-10 h-30 grid grid-cols-5 gap-94">
            <h1 className="mx-165 text-3xl font-bold text-shadow-lg">Jurusan</h1>
            <div className="box bg-white shadow-lg my-30 rounded-lg h-70 w-70 -mx-90 py-3">
              <h2 className="text-2xl underline">TKJ</h2> <br />
              <p className="font-semibold">TKJ merupakan singkatan dari teknik komputer jaringan yang dimana di jurusan ini kalian akan mempelajari tentang seputar komputer</p>
            </div>

            <div className="box bg-white shadow-lg my-30 rounded-lg h-70 w-70 -mx-100 py-3">
              <h2 className="text-2xl underline">DPB</h2> <br />
              <p className="font-semibold text-center">Desain Produksi Busana (DPB) adalah jurusan yang akan mempelajari tentang tata cara menjahit pakaian,membuat pakaian,dll</p>
            </div>

            <div className="box bg-white shadow-lg my-30 rounded-lg h-70 w-70 -mx-110 py-3">
              <h2 className="text-2xl underline">AKL</h2> <br />
              <p className="font-semibold">Akuntansi dan Keuangan Lembaga (AKL) adalah jurusan yang akan mempelajari tentang hitung hitungan serta mengatur transaksi</p>
            </div>

            <div className="box bg-white shadow-lg my-30 rounded-lg h-70 w-70 -mx-115 py-3">
              <h2 className="text-2xl underline">TSM</h2> <br />
              <p className="font-semibold">Teknik dan Bisnis Sepeda Motor (TSM) adalah jurusan yang akan mempelajari tentang sepeda motor</p>
            </div>

            <div id='about' className="about py-auto mx-150 -mt-100">
              <h1 className="text-nowrap text-shadow-lg">Tentang Kami</h1>
             <p className="font-semibold text-center -ml-27 -mx-88 text-2xl">SMK Bina Nusantara Semarang adalah sekolah menengah kejuruan swasta yang didirikan pada tahun 2010. Sekolah ini terletak di Jl. Kemantren I No.5, Wonosari, Kec. Ngaliyan, Kota Semarang, Jawa Tengah. SMK Bina Nusantara memiliki akreditasi B dan fokus pada pengembangan keterampilan praktis untuk mempersiapkan lulusan agar siap mengisi pasar kerja. Sekolah ini menyediakan berbagai jurusan, termasuk Teknik Komputer dan Jaringan, Teknik Bisnis Sepeda Motor, dan Tata Busana, serta memiliki 27 guru yang profesional.</p>
            </div>
            </div>
          </div>
        </div>
  )
}

export default Homepage
