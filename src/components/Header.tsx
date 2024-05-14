import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { supabase } from "../App";
import { UserInfo } from "../types/data";
export default function Header(){   
const[isLogin,setIsLogin] = useState(false);
const[isUser,setIsUser] = useState<UserInfo>({
});
useEffect(() =>{
    const fetchUser = async() =>{
    let {data,error}= await supabase.auth.getUser();
    if(error)console.error(error.message);
    if(data.user){   
        setIsLogin(true)
        const {id} = data.user;
        return id;
    }else{
        setIsLogin(false)
        return undefined;
    }
    }
    const getUser = async() =>{  
        const id = await fetchUser();
        if(id){ 
        const {data,error}  = await supabase
        .from("profiles")
        .select()
        .eq("id",id)
        if(error){console.error(error.message)}
        else{
         
            setIsUser(Object.assign({}, data[0]))
        }
    }}
       
    getUser()
    console.log(isLogin)
    console.log(isUser)

},[])
    return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Musica</h1>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                  <Link to='/TimeLine' className="text-gray-800 hover:text-blue-500 transition duration-300">TimeLine</Link>
              </li>
              <li>
                  <Link to='/auth/login' className="text-gray-800 hover:text-blue-500 transition duration-300">Login</Link>
              </li>
              <li>
                  <Link to="/auth/signup"className="text-gray-800 hover:text-blue-500 transition duration-300">SignUp</Link>
              </li>
              <button className="text-2xl w-12 h-12">
                {
                    (isLogin) ?
                        <img alt="user" src = {isUser.userImage}/>: <VscAccount/>
              }</button>
            </ul>
          </nav>
        </div>
      </header>
    );
  };