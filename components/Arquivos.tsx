"use client";
import { useState, useEffect } from "react";
import { Trash, GripHorizontal } from 'lucide-react';
import Image from "next/image";

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

  async function buttonPost() {
    const formData = new FormData();

    arquivo.forEach((item) => {
      formData.append("file", item)
    })

    await fetch('/API/uploads', {
      method: "POST",
      body: formData
    })
  }

  useEffect(() => {
    buttonPost()
  }, [arquivo])


  return (
    <>
      <div className="grid grid-cols-6 justify-center gap-2">
        {arquivo.map((file, index) => (
          <div key={index} className="grid grid-cols-1 items-center text-center transition-all duration-300 p-2 min-h-10 bg-gray-400/30 outline-1 outline-gray-300 h-60 shadow-md cursor-grabbing select-none rounded-md" draggable onDragStart={() => setDragIndex(index)} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDropCard(index)} onDragEnd={() => setDragIndex(null)}>
            <div className="flex justify-center items-start w-full h-full">
              <h1 className="truncate text-xs" title={file.name}>
                {file.name.split(".")[0]}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-30 h-30 relative">
                <Image src="/application-pdf.svg" alt="pdf" fill />
              </div>
            </div>
            <div className="flex justify-between items-end w-full h-full">
              <div title="posição" className="flex justify-center items-center text-xs text-gray-500">
                {index + 1}
              </div>
              <div title="mover">
                <GripHorizontal size={15} className="text-gray-500" />
              </div>
              <button title="excluir" onClick={() => excluirArquivo(index)} className="flex gap-1 text-xs cursor-pointer">
                <Trash size={15} className="text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
