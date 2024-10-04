import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Swal from "sweetalert2";
import OpenMaps from "@/components/OpenMaps";

function MapsGeolocation() {
  const [location, setLocation] = useState<[number, number]>([
    106.84513, -6.21462,
  ]); // Koordinat Jakarta
  const [search, setSearch] = useState<string>("");

  // OpenCage API Key (Ganti dengan API Key Anda)
  const OPENCAGE_API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_KEY;

  // Fungsi untuk menangani pencarian lokasi
  const handleSearch = async () => {
    if (!search) {
      Swal.fire({
        icon: "warning",
        title: "Input Kosong",
        text: "Masukkan nama lokasi terlebih dahulu!",
        confirmButtonText: "OK",
      });
      return;
    }

    // Menampilkan sweetalert2 loading
    Swal.fire({
      title: "Searching...",
      text: "Please wait while we find the location.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Memanggil OpenCage Geocoding API dengan axios
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          search
        )}&key=${OPENCAGE_API_KEY}`
      );

      // Mengecek apakah hasil pencarian ditemukan
      if (response.data.results && response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry; // Mengambil latitude dan longitude
        setLocation([lng, lat]); // Mengatur lokasi baru berdasarkan hasil pencarian

        // Menutup loading dan menampilkan notifikasi sukses
        Swal.fire({
          icon: "success",
          title: "Location Found",
          text: `Coordinates: Latitude ${lat}, Longitude ${lng}`,
          confirmButtonText: "OK",
        });
      } else {
        // Menutup loading dan menampilkan notifikasi jika lokasi tidak ditemukan
        Swal.fire({
          icon: "error",
          title: "Location Not Found",
          text: "The location you searched for was not found. Please try a different location.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Geocoding error: ", error);

      // Menampilkan notifikasi error jika terjadi kesalahan
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while searching for the location. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <Head>
        <title>Feature - Maps Geolocation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Open Layers - Map Geolocation</h1>

        <div className="mb-4 flex space-x-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter location (e.g., Jakarta, Bandung)"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        <div className="w-full h-96 border-2 border-gray-300 rounded-lg">
          <OpenMaps center={location} zoom={10} />
        </div>
      </main>
    </div>
  );
}

export default MapsGeolocation;
