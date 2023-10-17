import { Inter } from "@next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Dashboard />
    </>
  );
}
