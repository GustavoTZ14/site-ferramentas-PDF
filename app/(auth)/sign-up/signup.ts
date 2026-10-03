import { redirect } from "next/navigation";
import { authClient } from "../../lib/auth-client";

export async function Signup(email: string, password: string, name: string){
  try{
    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
    },{
      onRequest: (ctx) =>{
        console.log(ctx)
      },
      onSuccess: () =>{
        redirect('/sign-in')
      }
    });

    if(error){
      console.error(JSON.stringify(error, null, 2));
      return;
    }
  }
  catch(error){
    console.error(JSON.stringify(error, null, 2))
  }
}