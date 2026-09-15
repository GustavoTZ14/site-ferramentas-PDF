"use client";
import MenuLateral from "@/components/home/MenuLateral";
import MainContent from "@/components/home/MainContent";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <MenuLateral openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MainContent openMenu={openMenu} />
    </>
  );
}
