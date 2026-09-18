
"use client";
import { useState, useRef } from "react";

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function Limpar() {
    setArquivo([]);

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <>
      <section className="p-15">
        <article className="grid justify-center items-center text-center gap-5">
          <div className="grid grid-cols-2 outline-1 outline-gray-500 p-2 gap-2">
            <output className="grid grid-cols-2 col-span-2 text-start outline-1 outline-gray-500 p-2 h-40 overflow-auto">
              {arquivo.map(({ name, size }) => (
                <div key={name}>
                  <h1>{name}</h1>
                  <span>{(size / 1024 / 1024).toFixed(2)} MB</span>
                </div>
              ))}
            </output>
            <input type="file" multiple accept=".pdf,.docx,.doc,.xlsx,.pptx" className="flex col-span-1 p-2 outline-1 outline-gray-500 h-10" onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setArquivo(files)
            }} />
            <button className="col-span-1 outline-1 outline-gray-500 p-2" onClick={Limpar}>Limpar</button>
          </div>
        </article>
      </section >
    </>
  )
}
