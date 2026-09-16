import Image from "next/image";
import dadosCard from "../Card.json";

export default function Card() {
  return (
    <>
      {dadosCard.map(({ id, name, imagem }) => (
        <div key={id} className="grid justify-center items-center w-full h-80 rounded-xl outline-1 outline-gray-300 shadow-md">
          <div className="relative w-30 h-30">
            <Image src={imagem} alt="autotag" fill className="object-cover" />
          </div>
          <div className="w-full h-full text-center text-sm">
            <h3>{name}</h3>
          </div>
        </div>
      ))}
    </>
  )
}
