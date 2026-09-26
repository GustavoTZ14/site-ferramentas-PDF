"use client";
import dateCard from "@/date/cards.json";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Tools() {
  const [categoria, setCategoria] = useState("todos");
  const filtradas =
    categoria === "todos"
      ? dateCard
      : dateCard.filter(item => item.categoria === categoria);

  const categorias = [...new Set(
    dateCard.map((item) => item.categoria)
  )]

  return (
    <main className="min-h-screen">
      <section className="flex justify-center items-center w-full p-15">
        <article className="text-center">
          <h1 className="text-4xl font-bold mb-5">Todas as Ferramentas para <br /><span className="text-red-500">PDF</span>, Imagens, áudios e vídeos</h1>
          <p className="text-base text-gray-500 w-200">
            Encontre todas as ferramentas que você precisa em um só lugar. Converta, edite, comprima e organize arquivos PDF, transforme e otimize imagens, converta áudios e processe vídeos de forma rápida e prática. Ferramentas online desenvolvidas para simplificar suas tarefas do dia a dia.
          </p>
        </article>
      </section>
      <section className="grid grid-cols-1 gap-5 p-15">
        <aside className="p-5">
          <div className="flex justify-center items-center">
            <ul className="flex gap-5">
              <li className="bg-gray-700/30 text-gray-500 font-bold text-sm p-2 cursor-pointer" onClick={() => setCategoria("todos")}>Todas as ferramentas</li>
              {categorias.map((item) => (
                <li className="bg-gray-700/30 text-gray-500 font-bold text-sm p-2 cursor-pointer" key={item} onClick={() => setCategoria(`${item}`)}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
        <article className="grid grid-cols-5 gap-5">
          {filtradas.map(({ id, name, imagem, descricao, href }) => (
            <Link key={id} href={href}>
              <div className="grid h-50 bg-white/20 outline-1 outline-gray-300 shadow-md p-4">
                <div className="relative w-20 h-20">
                  <Image src={imagem} alt="autotag" fill className="object-cover" />
                </div>
                <div className="w-full h-full text-base font-bold">
                  <h3>{name}</h3>
                </div>
                <div className="font-sans text-sm">
                  <p className="line-clamp-2">{descricao}</p>
                </div>
              </div>
            </Link>
          ))}
        </article>
      </section>
    </main>
  )
}
