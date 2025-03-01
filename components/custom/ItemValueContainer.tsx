import { Label } from "../ui/label";
import { Input } from "../ui/input";
import React from "react";

const ItemValueContainer = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="w-full flex items-center py-2  gap-2">
      <Label className=" w-1/3 text-xl">{label}</Label>
      <Input className=" w-2/3" value={value} readOnly />
    </div>
  );
};

export default ItemValueContainer;
