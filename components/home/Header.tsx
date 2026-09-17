"use client";
import { House, Folder, FileText } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="flex w-full p-5 bg-[#28323C] text-[#D9D5D3]">
        <article className="flex justify-around items-center w-full">
          <div className="flex items-center">
            <FileText size={20} />
          </div>
          <nav className="flex items-center text-center gap-5 text-sm font-bold">
            <div>
              <ul className="flex gap-5">
                <li>Inicio</li>
                <li>Ferramentas</li>
                <li>Dividir PDF</li>
                <li>Unir PDF</li>
                <li>Excluir pagina PDF</li>
              </ul>
            </div>
          </nav>
        </article>
      </header>
    </>
  )
}
