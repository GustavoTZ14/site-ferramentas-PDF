import { auth } from "@/app/lib/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page(){
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session){
    redirect('/sign-in')
  }

  return(
    <>
      <h1>Area do usuario</h1>
    </>
  )
}