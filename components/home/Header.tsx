"use client";
import { User, Search } from 'lucide-react';
import Link from "next/link";
import { authClient } from '@/app/lib/auth-client';
import { redirect } from 'next/navigation';

export default function Header() {
  const { data: session } = authClient.useSession();

  function secao(){
    if(!session){
      redirect('/sign-in')
    }

    return redirect('/dashboard')
  }

  return (
    <header className="flex w-full p-5">
      <article className="flex justify-around items-center w-full">
        <div className="flex items-center">
          <span className="text-red-700 font-bold text-xl">PDF<span className="text-gray-500 font-light">Tools</span></span>
        </div>
        <nav className="flex items-center text-center gap-5 text-sm font-bold">
          <div>
            <ul className="flex gap-5">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/Ferramentas">Ferramentas</Link>
              </li>
              <li>Dividir PDF</li>
              <li>Unir PDF</li>
              <li>Excluir pagina PDF</li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center gap-5">
          <div>
            <div>
              <Search size={20} />
            </div>
          </div>
          <div>
            <div onClick={secao} className='cursor-pointer'>
              <User size={20} />
            </div>
          </div>
        </div>
      </article>
    </header>
  )
}
