"use client";
import { useState } from "react";
import { Signup } from "./signup";

export default function Page(){
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ name, setName ] = useState<string>("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();

    return await Signup(email, password, name);
  }

  return(
    <>
      <section className="min-h-screen">
        <article>
          <div className="flex justify-center items-center w-200 min-h-screen outline-1 outline-gray-300 rounded-md bg-white m-auto p-4">
            <div className="w-100 outline-1 outline-gray-300 rounded-md p-4">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-1.5">
                <label htmlFor="email" className="text-gray-700 font-bold">Email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-1 outline-gray-300 rounded-md h-10 p-2 text-sm text-gray-600"/>

                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="outline-1 outline-gray-300 rounded-md h-10 p-2"/>

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-1 outline-gray-300 rounded-md h-10 p-2"/>

                <button type="submit" className="bg-red-700 text-white p-2 w-50 m-auto mt-10 rounded-md">
                  Criar conta
                </button>
              </form>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}