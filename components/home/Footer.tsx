export default function Footer() {
  return (
    <>
      <footer className="flex justify-around p-2">
        <div>
          <p className="font-light text-sm text-gray-700">Copyright (c) 2026 PDFTools. All Rights Reserved.</p>
        </div>
        <div>
          <ul className="flex gap-5 font-bold text-sm">
            <li>Inicio</li>
            <li>Contato</li>
            <li>Sobre</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
      </footer>
    </>
  )
}
