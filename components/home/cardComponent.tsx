import Image from "next/image";
import dadosCard from "@/components/date/cards.json";

export default function Card() {
  return (
    <>
      {dadosCard.map(({ id, name, imagem, descricao }) => (
        <div key={id} className="grid w-full h-50 outline-1 outline-gray-300 shadow-xl bg-[#f4f4f4] p-4">
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
      ))}
    </>
  )
}
