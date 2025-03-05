"use client";
import React, { useState } from "react";
import InputForm from "@/components/custom/Form";
import OutputCarousel from "@/components/custom/OutputCarousel";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/custom/Navbar";

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

  const handleClear = () => {
    setMedicines([]);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        {medicines.length === 0 ? (
          <InputForm handleSumit={handleChange} />
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <OutputCarousel medicines={medicines} />
            <Button onClick={handleClear} className="w-fit">
              Clear
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
