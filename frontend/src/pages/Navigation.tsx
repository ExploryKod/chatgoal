import logo from "../logo.svg"
import '../App.css'
const Header = () => (
    <div className="sm:fixed h-full min-w-[10%] bg-blue-600">
        <div className="mt-5 pr-5 w-full">
          <a title="logo" href="/"><img className="max-w-[100px] App-logo" src={logo} alt="logo"/></a>
        </div>
        <nav className="p-5 mb-3 hidden sm:flex flex-col gap-5 text-blue-200 text-left">
        <a className="mt-5 hover:font-bold hover:text-gray-800" href="/profil">Mon profil</a>
        <a className="hover:font-bold hover:text-gray-800" href="/salons">Mes salons</a>
        <a className="hover:font-bold hover:text-gray-800" href="/ask">Ask me</a>
        </nav>
    </div>
  );
  
  export default Header;