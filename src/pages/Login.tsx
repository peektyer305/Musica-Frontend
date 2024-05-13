import GithubButton from "../components/GithubButton";

export default function Login(){
    return(
        <div className="text-gray-800 flex text-center flex-col
        justify-center items-center font-semibold border mt-20">
            <h2 className="text-[50px]">Login</h2>
            <GithubButton />
        </div>
    )
}