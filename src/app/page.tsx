import { ThemeSwitcher } from "@/components/custom/ThemeSwitcher";
// import Image from "next/image";

export default function Home() {
  return (
    // p-8 pb-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)]
    <div className="relative font-[family-name:var(--font-geist-sans)]">
      Hii
      <ThemeSwitcher />
    </div>
  );
}
