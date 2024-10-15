import { medicine, Medicine } from "../models/medicine";

export class MedicineService {
  // logic untuk get all medicine
  getAllMedicine(): Medicine[] {
    if (medicine.length === 0) {
      throw new Error("Medicine data not found");
    }
    return medicine;
  }

  // logic untuk create/post medicine
  createMedicine(data: Medicine): Medicine {
    const newMedicine: Medicine = {
      id: medicine.length + 1,
      name: data.name,
      description: data.description,
      price: data.price,
      type: data.type,
    };
    medicine.push(newMedicine);
    return newMedicine;
  }

  // logic untuk update medicine
  updateMedicine(id: number, data: Medicine): Medicine {
    const index = medicine.findIndex((value: Medicine) => value.id === id);
    if (index === -1) {
      throw new Error("Medicine not found");
    }

    const { id: _, ...rest } = data;
    const updatedMedicine: Medicine = {
      ...medicine[index],
      ...rest,
      id,
    };

    medicine[index] = updatedMedicine;
    return updatedMedicine;
  }

  // logic untuk delete medicine
  deleteMedicine(id: number): void {
    const index = medicine.findIndex((value: Medicine) => value.id === id);
    if (index === -1) {
      throw new Error("Medicine not found");
    }
    medicine.splice(index, 1);
  }
}
