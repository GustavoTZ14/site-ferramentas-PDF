"use client";
import { House, Folder, FileText } from "lucide-react";

export default function MenuLateral({ openMenu, setOpenMenu }: { openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <section className={`flex w-20 h-screen p-2 shrink-0 transition-all duration-300 ${openMenu ? 'bg-white text-black' : 'bg-[#25262e] text-white'}`}>
        <article className="flex flex-col justify-between items-center w-full h-full">
          <nav className="flex flex-col justify-center text-center gap-5 w-full text-xs">
            <div className="flex justify-center items-center w-full h-20">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex justify-center items-center">
                <House size={20} />
              </div>
              <div>
                <span>Home</span>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Folder size={20} />
              </div>
              <div>
                <span>Arquivos</span>
              </div>
            </div>
          </nav>
          <div>
            <button onClick={() => setOpenMenu((open) => !open)}>menu</button>
          </div>
        </article>
      </section >
    </>
  )
}
