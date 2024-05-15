import { useEffect, useState } from "react";
import fetchMetadata from "../functions/fetchMetadata";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function PostCard(props:any){
  const [metadata, setMetadata] = useState();
  useEffect(() => {
    if (props.url) {
      fetchMetadata(props.url)
        .then((data) => {
          const formattedData = JSON.parse(data).data;
          setMetadata(formattedData);
          console.log(metadata)
        })
        .catch((error) => {
          console.error('Error fetching metadata:', error);
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
          <Splide className="flex justify-center">
              <SplideSlide>
                <img src={props.Image} alt="Image 1" className="w-auto h-auto"/>
              </SplideSlide>
              {props.url&&(<SplideSlide className="flex justify-center items-center">
              <img src={metadata?.image} alt="Image 2" className="w-auto h-auto"/>
              </SplideSlide>)}
            </Splide>
          <div className="px-4 pb-4">
            <span className="font-semibold mr-2">{props.title}</span><br/>
            <span>{props.content}</span>
            <br/>
            <span>{props.created}</span>
          </div>
          <div>
            {(props.url)?"":""}
          </div>
        </div>
      );
}
