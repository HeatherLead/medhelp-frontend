"use client";
import React, { useState } from "react";
import InputForm from "@/components/custom/Form";
import OutputCarousel from "@/components/custom/OutputCarousel";

export interface MedicineProps {
  _id: string;
  "Medicine Name": string;
  Composition: string;
  Uses: string;
  Side_effects: string;
  "Image URL": string;
  Manufacturer: string;
  "Excellent Review %": number;
  "Average Review %": number;
  "Poor Review %": number;
}

export default function Home() {
  const [medicines, setMedicines] = useState<MedicineProps[]>([]);

  const handleChange = (medicines: MedicineProps[]) => {
    setMedicines(medicines);
    console.log(medicines);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen p-8 pb-20 gap-16">
      {medicines.length === 0 ? (
        <InputForm handleSumit={handleChange} />
      ) : (
        <OutputCarousel medicines={medicines} />
      )}
    </div>
  );
}
