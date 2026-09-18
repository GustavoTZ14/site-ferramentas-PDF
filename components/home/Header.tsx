import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex w-full p-5">
        <article className="flex justify-around items-center w-full">
          <div className="flex items-center">
            <span className="text-red-500 font-bold text-xl">PDF<span className="text-gray-500 font-light">Tools</span></span>
          </div>
          <nav className="flex items-center text-center gap-5 text-sm font-bold">
            <div>
              <ul className="flex gap-5">
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/Ferramentas">Ferramentas</a>
                </li>
                <li>Dividir PDF</li>
                <li>Unir PDF</li>
                <li>Excluir pagina PDF</li>
              </ul>
            </div>
          </nav>
        </article>
      </header>
    </>
  )
}
