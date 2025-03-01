import InputForm from "@/components/custom/Form";
import OutputCarousel from "@/components/custom/OutputCarousel";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen p-8 pb-20 gap-16">
      <InputForm />
      <OutputCarousel />
    </div>
  );
}
