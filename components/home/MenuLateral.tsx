"use client";
import { House, Folder, FileText } from "lucide-react";
import { useState } from "react";

export default function MenuLateral() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className={`flex w-25 h-screen bg-[#25262e] p-2 shrink-0 transition-all duration-300 ${open ? 'w-64' : 'w-25'}`}>
        <article className="w-full h-full text-white">
          <div className="flex justify-center items-center w-full h-30">
            <FileText />
          </div>
          <nav className="grid justify-center gap-5 w-full text-xs">
            <div>
              <House />
            </div>
            <div>
              <Folder />
            </div>
          </nav>
          <button onClick={() => setOpen(!open)}>menu</button>
        </article>
      </section >
    </>
  )
}
