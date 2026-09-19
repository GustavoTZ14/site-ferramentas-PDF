
"use client";
import { useState, useRef } from "react";
import { Trash } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function Limpar() {
    setArquivo([]);

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  function excluirArquivo(index: number) {
    setArquivo((filesAtuais) =>
      filesAtuais.filter((_, i) => i !== index)
    );
  }

  return (
    <>
      <section className="p-15">
        <article className="grid justify-center items-center text-center gap-5">
          <div>
            <label htmlFor="file" className="bg-red-500 text-white p-2 cursor-pointer text-xl font-bold">
              Selecionar arquivo
            </label>
            <input type="file" id="file" multiple accept=".pdf,.docx,.doc,.xlsx,.pptx" className="hidden" onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setArquivo(files)
            }} />
          </div>
          <div className="grid gap-2 w-250">
            <div className="flex justify-between">
              <button className="flex gap-2 items-center bg-gray-500 text-white text-sm p-2 cursor-pointer" title="Limpar tudo" onClick={Limpar}>
                Limpar tudo
              </button>
            </div>
          </div>
          <div className="w-full h-100 outline-1 outline-gray-300 overflow-auto bg-white/30">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-2">Nome</th>
                  <th className="border border-gray-300 p-2">Tipo</th>
                  <th className="border border-gray-300 p-2">Tamanho</th>
                  <th className="border border-gray-300 p-2">Excluir</th>
                </tr>
              </thead>

              <tbody>
                {arquivo.map((file, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-blue-50"
                  >
                    <td className="border border-gray-300 p-2 text-start">
                      {file.name}
                    </td>

                    <td className="border border-gray-300 p-2">
                      {file.type}
                    </td>

                    <td className="border border-gray-300 p-2">
                      {file.size}
                    </td>

                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => excluirArquivo(index)}
                        className="cursor-pointer text-red-600"
                        title="excluir"
                      >
                        <Trash size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section >
    </>
  )
}
