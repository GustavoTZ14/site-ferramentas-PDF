"use client";
import { useState } from "react";
import SelectionArquives from "@/components/SelecaoArquivos";
import Arquivos from "@/components/Arquivos";

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

  async function Autotag() {
    const caminho = "../../upload/combineFileWithPageRangeInput1.pdf";
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

  return (
    <section className="p-15 w-full min-h-screen">
      <article className="grid grid-cols-1 gap-2 p-2 w-300 m-auto">
        <SelectionArquives setArquivo={setArquivo} />
        <div>
          <button onClick={Autotag} className="bg-gray-500 text-white p-3 cursor-pointer">Converter</button>
        </div>
        <Arquivos arquivo={arquivo} setArquivo={setArquivo} />
      </article>
    </section >
  )
}
