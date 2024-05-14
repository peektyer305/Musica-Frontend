export default function PostCard(props:any){
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
        </div>
      );
}
