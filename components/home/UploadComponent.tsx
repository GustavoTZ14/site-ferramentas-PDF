"use client";
import { useState } from "react";
import { Trash, GripVertical, Upload } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

  function excluirArquivo(index: number) {
    setArquivo((filesAtuais) =>
      filesAtuais.filter((_, i) => i !== index)
    );
  }

  return (
    <section className="p-15 w-full">
      <article className="grid grid-cols-1 gap-2 p-2 w-300 m-auto">
        <div className="p-2 h-50 flex flex-col justify-center items-center">
          <label htmlFor="file" className="cursor-pointer bg-red-500 text-white p-3 font-bold">
            Selecionar Arquivos
          </label>
          <input type="file" id="file" accept="application/pdf" className="hidden" multiple onChange={(e) => {
            const files = Array.from(e.target.files ?? []);
            const pdfs = files.filter((file) => file.type === "application/pdf")
            setArquivo((atuais) => [...pdfs, ...atuais])
          }} />
        </div>
        <div className="grid grid-cols-5 gap-2 p-2">
          {arquivo.map((file, index) => (
            <div key={index} className="grid grid-cols-1 items-center text-center p-2 min-h-10 bg-gray-400/30 outline-1 outline-gray-300 h-60 shadow-md">
              <div className="flex justify-center items-start w-full h-full">
                <h1 className="truncate text-xs" title={file.name}>
                  {file.name.split(".")[0]}
                </h1>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <span className="uppercase text-xl font-bold text-red-500">
                  {file.type.split("/")[1]}
                </span>
              </div>
              <div className="flex justify-end items-end w-full h-full">
                <button onClick={() => excluirArquivo(index)} className="cursor-pointer">
                  <Trash size={15} className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section >
  )
}
