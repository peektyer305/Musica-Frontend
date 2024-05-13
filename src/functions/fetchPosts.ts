import { supabase } from "../App";

export async function fetchPosts() {
    const {data,error}  = await supabase
      .from('Posts')
      .select(`
        id,
        created_at,
        content,
        Image,
        userId,
        title,
        User:User (
          username,
          userImage
        )
      `) 
      if (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
      }
      const formattedData = data.map(post => ({
        ...post,
       ...post.User}))
      return formattedData;
    }