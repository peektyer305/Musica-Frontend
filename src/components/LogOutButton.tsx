import { supabase } from "../App";

export default function LogOutButton(){
    const logOut = async() =>{
        const {
            data:{user}
        } = await supabase.auth.getUser()
        if(!user){
            alert("既にログアウトしています")
        }
        const {error} = await supabase.auth.signOut();
        if(error){
            alert(error.message)
            return;
        }
        console.log("ログアウト完了")

    }
    return(
        <button onClick={() =>{
            logOut()
        }}>ログアウトする</button>
    )
}