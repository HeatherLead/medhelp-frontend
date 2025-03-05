"use client";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { MedicineProps } from "@/app/page";
interface FormProps {
  handleSumit: (medicine: MedicineProps[]) => void;
}

const formSchema = z
  .object({
    medicine_name: z.string().optional(),
    medicine_composition: z.string().optional(),
    medicine_use: z.string().optional(),
  })
  .refine(
    (data) =>
      data.medicine_name?.trim() ||
      data.medicine_composition?.trim() ||
      data.medicine_use?.trim(),
    {
      message: "At least one field must be filled.",
      path: ["medicine_name"],
    }
  );
const InputForm = ({ handleSumit }: FormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medicine_name: "",
      medicine_composition: "",
      medicine_use: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await axios.post("/api/recommend", values);
    handleSumit(response.data);
    form.reset();
  }

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[50%] h-auto border-2 border-black rounded-lg p-5 bg-white">
      <h1 className="text-center py-2 text-xl">Enter Medicine Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="medicine_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Medicine</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the name of medicine" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="medicine_composition"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Its Composition</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter its chemical composition"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="medicine_use"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Use / Purpose of Medicine</FormLabel>
                <FormControl>
                  <Input placeholder="Enter its use / purpose " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
