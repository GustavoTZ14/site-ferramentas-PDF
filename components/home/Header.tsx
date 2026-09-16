"use client";
import { House, Folder, FileText } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className="flex w-full p-2">
        <article className="flex justify-between items-center w-full">
          <nav className="flex items-center text-center gap-5 w-full text-xs">
            <div className="flex items-center">
              <FileText size={20} />
            </div>
            <div>
              <div>
                <span>Home</span>
              </div>
            </div>
            <div>
              <div>
                <span>Arquivos</span>
              </div>
            </div>
          </nav>
        </article>
      </section>
    </>
  )
}
