import { supabase } from "../App";
export async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if(data.url){
        console.log(data)
      }
      if(error){
          console.error("OAuth error",error.message)
      }
  }
  