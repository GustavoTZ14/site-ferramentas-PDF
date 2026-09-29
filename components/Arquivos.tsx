"use client";
import { useState } from "react";
import { Trash } from 'lucide-react';

interface Props {
  arquivo: File[];
  setArquivo: React.Dispatch<React.SetStateAction<File[]>>
}

export default function Arquivos({ arquivo, setArquivo }: Props) {

  const [dragIndex, setDragIndex] = useState<number | null>(null);

  function handleDropCard(dropIndex: number) {
    if (dragIndex === null || dragIndex === dropIndex) return;

    setArquivo((atuais) => {
      const novos = [...atuais];

      const [arquivoMovido] = novos.splice(dragIndex, 1);
      novos.splice(dropIndex, 0, arquivoMovido);

      return novos;
    });

    setDragIndex(null);
  }

  function excluirArquivo(index: number) {
    setArquivo((filesAtuais) =>
      filesAtuais.filter((_, i) => i !== index)
    );
  }

  async function uploadButton() {

    const formData = new FormData();

    arquivo.forEach((item) => {
      formData.append("file", item)
    })

    await fetch('/API/uploads', {
      method: "POST",
      body: formData
    })
  }

  setTimeout(uploadButton, 3000);

  return (
    <>
      <div className="grid grid-cols-5 gap-2 p-2">
        {arquivo.map((file, index) => (
          <div key={index} className="grid grid-cols-1 items-center text-center transition-all duration-300 p-2 min-h-10 bg-gray-400/30 outline-1 outline-gray-300 h-60 shadow-md cursor-grabbing select-none" draggable onDragStart={() => setDragIndex(index)} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDropCard(index)} onDragEnd={() => setDragIndex(null)}>
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
    </>
  )
}
