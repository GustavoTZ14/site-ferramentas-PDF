"use client";
import { Upload } from 'lucide-react';
import type { Dispatch, SetStateAction } from "react";

type Props = {
  setArquivo: Dispatch<SetStateAction<File[]>>;
};

export default function SelectionArquives({ setArquivo }: Props) {

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);
    const pdfs = files.filter((file) => file.type === "application/pdf")

    setArquivo((arquivoAtual) => [
      ...arquivoAtual,
      ...pdfs
    ])
  }

  return (
    <>
      <div className="p-2 bg-white w-full h-50 grid gap-5 justify-center items-center outline-2 outline-gray-300 outline-dashed rounded-md" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Upload size={20} />
          <span className="font-light text-base text-gray-500">
            Arraste seus arquivos aqui
          </span>
        </div>
        <label htmlFor="file" className="cursor-pointer bg-red-700 text-white pl-4 pr-4 pt-2 pb-2 font-bold text-md rounded-md">
          Selecionar Arquivos
        </label>
        <input type="file" id="file" accept="application/pdf" className="hidden" multiple onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          const pdfs = files.filter((file) => file.type === "application/pdf")
          setArquivo((atuais) => [...pdfs, ...atuais])
        }} />
      </div>
    </>
  )
}
