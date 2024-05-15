import axios from "axios";

export default async function fetchMetadata(url:string){
    try{
        const response = await axios.get(`http://localhost:3001/api/metadata?url=${encodeURIComponent(url)}`);
        return JSON.stringify(response);
    } catch(error){
        return url;
    } 
}