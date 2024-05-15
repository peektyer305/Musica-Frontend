import { useEffect, useState } from "react";
import fetchMetadata from "../functions/fetchMetadata";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function PostCard(props:any){
  const [metadata, setMetadata] = useState<string | null>(null);
  useEffect(() => {
    if (props.url) {
      fetchMetadata(props.url)
        .then((data) => {
          setMetadata(data);
        })
        .catch((error) => {
          console.error('Error fetching metadata:', error);
          setMetadata(null);
        });
    }
  }, [props.url]);

    return (
        <div className="border rounded-lg shadow-sm overflow-hidden text-wrap">
          <div className="p-4 flex items-center">
            <img
              src={props.user.userImage}
              alt="profile"
              className="rounded-full h-8 w-8 object-cover"
            />
            <span className="ml-2 font-semibold">{props.user.username}</span>
          </div>
          <div className="flex justify-center">
             <img
             src={props.Image}
             alt="post"
             className="w-auto h-auto"
             />
          </div>
          <div className="px-4 pb-4">
            <span className="font-semibold mr-2">{props.title}</span><br/>
            <span>{props.content}</span>
            <br/>
            <span>{props.created}</span>
          </div>
          <div>
            {(props.url)?(<div>{metadata}</div>):""}
          </div>
        </div>
      );
}
