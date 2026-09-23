
"use client";
import { useState } from "react";
import { Trash, GripVertical } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

  function excluirArquivo(index: number) {
    setArquivo((filesAtuais) =>
      filesAtuais.filter((_, i) => i !== index)
    );
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);

    setArquivo((atuais) => [...atuais, ...files])
  }

  function moverArquivo(indexOrigem: number, indexDestino: number) {
    setArquivo((atuais) => {
      const novos = [...atuais];

      const [arquivoMovido] = novos.splice(indexOrigem, 1);

      novos.splice(indexDestino, 0, arquivoMovido);

      return novos;
    });
  }

  return (
    <>
      <section className="p-15">
        <article className="grid justify-center items-center gap-2">
          <div className="flex justify-center items-center w-full h-100 outline-2 outline-gray-300 outline-dashed p-2" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <label htmlFor="file" className="bg-red-500 text-white p-3 cursor-pointer text-sm font-bold text-center flex items-center h-10">
              Selecionar arquivo
            </label>
            <input type="file" id="file" multiple accept=".pdf,.docx,.doc,.xlsx,.pptx" className="hidden" onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setArquivo(files)
            }} />
          </div>
          <div className="block outline-1 outline-gray-300 w-150 h-100 overflow-auto p-2">
            {arquivo.map((item, index) => (
              <div key={index} className="flex h-10 justify-between p-2 outline-1 outline-gray-300 mb-2"
                onDragStart={(e) => {
                  e.dataTransfer.setData("index", index.toString());
                }}

                onDragOver={(e) => {
                  e.preventDefault();
                }}

                onDrop={(e) => {
                  const indexOrigem = Number(
                    e.dataTransfer.getData("index")
                  );
                  moverArquivo(indexOrigem, index);
                }}
              >
                <div className="flex gap-2 items-center w-full">
                  <div draggable>
                    <GripVertical size={15} className="cursor-pointer" />
                  </div>
                  <div>
                    {item.name}
                  </div>
                </div>
                <div>
                  <button onClick={() => excluirArquivo(index)} className="cursor-pointer">
                    <Trash size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section >
    </>
  )
}
