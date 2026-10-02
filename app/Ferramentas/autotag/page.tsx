"use client";
import { useState } from "react";
import SelectionArquives from "@/components/SelecaoArquivos";
import Arquivos from "@/components/Arquivos";
import { FileText, Trash } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

  async function Autotag() {
    const caminho = '/home/gustavotz/Repositorios/site-ferramentas-PDF/upload/watermark.pdf'

    const response = await fetch("/API/autotag", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ caminho })
    });

    const data = await response.json();

    console.log(data)
  }

  function clear() {
    setArquivo([]);
  }

  return (
    <section className="p-15 w-full min-h-screen">
      <article className="grid grid-cols-1 gap-2 p-4 w-300 m-auto">
        <SelectionArquives setArquivo={setArquivo} />
        <div className={`justify-between p-1 w-full outline-1 outline-gray-300 h-10 ${arquivo.length === 0 ? 'hidden' : 'flex'} rounded-md`}>
          <button title="coverter" onClick={Autotag} className="bg-red-700 hover:bg-red-500 text-white font-bold text-xs p-2 cursor-pointer flex items-center gap-1 rounded-md"><FileText size={15} />Converter</button>
          <button title="limpar tudo" onClick={clear} className="bg-red-700 hover:bg-red-500 text-white font-bold text-xs p-2 cursor-pointer flex items-center gap-1 rounded-md"><Trash size={15} />Limpar</button>
        </div>
        <Arquivos arquivo={arquivo} setArquivo={setArquivo} />
      </article>
    </section >
  )
}
