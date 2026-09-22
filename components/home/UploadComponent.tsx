
"use client";
import { useState } from "react";
import { Trash } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

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
            <label htmlFor="file" className="bg-red-500 text-white p-4 cursor-pointer text-base font-bold">
              Selecionar arquivo
            </label>
            <input type="file" id="file" multiple accept=".pdf,.docx,.doc,.xlsx,.pptx" className="hidden" onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              setArquivo(files)
            }} />
          </div>
          {arquivo.length > 0 && (
            <div className="w-full h-100 overflow-auto bg-white/30">
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
          )}
        </article>
      </section >
    </>
  )
}
