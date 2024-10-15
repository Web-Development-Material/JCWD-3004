import { useEffect } from "react";
import axios from "axios";

function MedicineList() {
  async function getAllMedicine() {
    try {
      const response = await axios.get("http://localhost:8000/api/medicines");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMedicine();
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="text-red-700 font-semibold">Medicine List Page</h2>
    </div>
  );
}

export default MedicineList;
