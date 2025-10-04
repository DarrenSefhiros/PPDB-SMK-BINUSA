import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className="border items-center justify-between">
      <div>
        <h1>Dashboard</h1>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nama</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <td>{item + 1}</td>
          <td>{item.Email}</td>
          <td>{item.Nama}</td>
          <td>{item.Password}</td>
        </tbody>
      </div>
    </div>
  )
}

export default Dashboard