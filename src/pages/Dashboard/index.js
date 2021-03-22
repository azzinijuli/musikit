import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Dashboard() {
  const location = useLocation();
  const [fullHash] = location.hash.split("&");
  const accessToken = fullHash.split("=");
  const [dataPlaylists, setDataPlaylist] = useState([]);
  const [recently, setRecently] = useState([]);

  useEffect(() => {
    fetchData("https://api.spotify.com/v1/me/playlists", setDataPlaylist);
    fetchData(
      "https://api.spotify.com/v1/me/player/recently-played",
      setRecently
    );
  }, []);

  async function fetchData(url, setter) {
    const data = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken[1]}`,
      },
    });
    const json = await data.json();
    setter(json);
    console.log("soy los datos", json);
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Dashboard;
