export interface User {
    username: string;
    userImage: string;
}

export interface Post {
    id: number;
    created_at: string;
    content: string;
    Image?: string;
    userId: number;
    title: string;
    url?: string;
    User: User; // 単一のUserオブジェクトを指定
}

export interface UserInfo{
 email?:string;
 id?:string;
 userImage?:string;
 userName?:string;
}