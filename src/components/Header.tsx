import { Link } from "react-router-dom";

export default function Header(){
    return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Musica</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                  <Link to='/TimeLine' className="text-gray-800 hover:text-blue-500 transition duration-300">TimeLine</Link>
              </li>
              <li>
                  <Link to='/auth/login' className="text-gray-800 hover:text-blue-500 transition duration-300">Login</Link>
              </li>
              <li>
                  <Link to="/auth/signup"className="text-gray-800 hover:text-blue-500 transition duration-300">SignUp</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };