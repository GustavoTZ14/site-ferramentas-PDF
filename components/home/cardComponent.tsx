import Image from "next/image";
import dadosCard from "../Card.json";

export default function Card() {
  return (
    <>
      {dadosCard.map(({ id, name, imagem }) => (
        <div key={id} className="grid justify-center items-center w-full h-80 bg-[#25262e] rounded-xl shadow-xl/30">
          <div className="relative w-50 h-50">
            <Image src={imagem} alt="autotag" fill className="object-cover" />
          </div>
          <div className="w-full h-full text-center text-white text-sm">
            <h3>{name}</h3>
          </div>
        </div>
      ))}
    </>
  )
}
