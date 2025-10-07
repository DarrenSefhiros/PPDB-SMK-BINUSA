import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Dashboard from './sukigaki/Dashboard';
import Register from './Components/Register';
import Editmenu from './sukigaki/Editmenu';
import Tambahdata from './sukigaki/tambahdata';
import Identitas from './sukigaki/Identitas';
import Jurusan from './sukigaki/Jurusan';
import Identitasdata from './sukigaki/Identitasdata';
import Jurusandata from './sukigaki/Jurusandata';
import Identitas1 from './sukigaki/Identitas1';
import Jurusan1 from './sukigaki/Jurusan1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Tambahdata" element={<Tambahdata />} />
        <Route path="/Identitas" element={<Identitas />} />
        <Route path="/Identitas1" element={<Identitas1 />} />
        <Route path="/Identitasdata" element={<Identitasdata />} />
        <Route path="/Jurusan" element={<Jurusan />} />
        <Route path="/Jurusan1" element={<Jurusan1 />} />
        <Route path="/Jurusandata" element={<Jurusandata />} />
        <Route path="/edit/:id" element={<Editmenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
