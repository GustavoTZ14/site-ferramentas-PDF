import Image from "next/image";
import dadosCard from "@/date/cards.json";
import Link from "next/link";

export default function Card() {
  return (
    <>
      {dadosCard.map(({ id, name, imagem, descricao, href }) => (
        <Link key={id} href={href}>
          <div className="grid h-50 bg-white/20 outline-1 outline-gray-300 shadow-sm p-4">
            <div className="relative w-15 h-15">
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
    </>
  )
}
