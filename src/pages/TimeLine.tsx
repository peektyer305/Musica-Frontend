import {useEffect,useState} from "react"
import { fetchPosts } from "../functions/fetchPosts"
import { Post } from "../types/data"
import PostCard from "../components/PostCard"
export default function TimeLine()
  { 
    const[posts,setPosts] = useState<any>()  
    useEffect(  () =>{
        const renderPosts = async() =>{
        const posts = await fetchPosts() as unknown as Post[]
        setPosts(posts)
        console.log(posts)
        }
        renderPosts()
    },[])
        
        return( 
            <div className="grid gap-4 grid-cols-3">
            {posts?.map((post:Post,index:number) => (
              <div key={index}>
                <PostCard id={post.id} created_at={post.created_at} content={post.content}
                    Image={post.Image} userId={post.userId} title={post.title}
                    user={post.User}/>
              </div>
            ))}
          </div>  
    )
}