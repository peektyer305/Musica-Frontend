import { signInWithGithub } from "../functions/auth"

export default function GithubButton(){
    return (
      <div>
        <button onClick = {() =>{
         signInWithGithub()
        }}>Githubアカウントでログイン</button>
      </div>
       )
}