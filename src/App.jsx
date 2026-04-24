
import logo from './assets/logo.png';
import { useNavigate } from "react-router-dom";

function App() {
   const navigate = useNavigate();
   
  return(
    <div>
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
  
  {/* Left side: Logo */}
  <div className="flex items-center gap-2">
    <img src={logo} alt="company logo" className="h-20 w-auto object-contain" />
  </div>

  {/* Middle: Navigation */}
  <nav className="flex items-center gap-6 text-sm font-medium">
    <button className="btn-headers">Agentic Stack</button>
    <button className="btn-headers">Payments</button>
    <button className="btn-headers">Banking+</button>
    <button className="btn-headers">Payroll</button>
    <button className="btn-headers">Engage</button>
    <button className="btn-headers">Partners</button>
    <button className="btn-headers">Resources</button>
    <button className="btn-headers">Pricing</button>
  </nav>

  {/* Right side: Icons + Buttons */}
  <div className="flex items-center gap-4">
    
    <div className="w-5 h-5">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.34 122.88"> <title>headphones</title> <path d="M97.74,119.52a2,2,0,0,1-.68-.12V65.93a2,2,0,0,1,.68-.12c3.34,0,6.43,5,8.48,7l-.46-12.12c0-12.8-3.72-23.11-9.68-30.93a7.37,7.37,0,0,1-5.86-2.23l-.68-.7C80.91,18.29,69,14.44,57.24,14.66S33.76,19.19,25.69,26.91l-.66.64a7.3,7.3,0,0,1-6.49,2.05c-6,7.84-9.75,18.21-9.75,31.14L8.33,74.63c2.25-2.71,6.34-8.66,10-8.82v53.71C10.52,119.36,4.91,107.05,3,101H0V60.74A57.33,57.33,0,0,1,12.83,24.57a7.35,7.35,0,0,1,1.8-7.36l1-.95C26.36,6,41.62.3,57,0s31.25,4.9,42.87,16.46l.91.93a7.33,7.33,0,0,1,1.74,7.2,57.34,57.34,0,0,1,12.81,36.13V101h-2.21c-1.89,6.14-7.54,18.57-15.39,18.57Zm-5.55,3.36h-9a3.48,3.48,0,0,1-3.48-3.47V65.65a3.49,3.49,0,0,1,3.48-3.48h9v60.71Zm-69-60.71H33a3.5,3.5,0,0,1,3.48,3.48v53.76A3.49,3.49,0,0,1,33,122.88H23.14V62.17Z"/></svg>
    </div>

    {/* Nepal Flag Icon */}
    <div className="w-5 h-5">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="-17.582 -4.664 71.571 87.246"><use xlink:href="#a" stroke="#003893" stroke-width="5.165"/><path id="a" d="M-15 37.574h60L-15 0v80h60l-60-60z" fill="#DC143C"/><g fill="#fff"><path d="M-11.95 23.483a12.84 12.84 0 0023.9 0 11.95 11.95 0 01-23.9 0"/><g transform="translate(0 29.045) scale(5.56106)"><circle r="1"/><g id="d"><g id="c"><path id="b" d="M.195-.98L0-1.39l-.195.408" transform="rotate(11.25)"/><use xlink:href="#b" transform="rotate(22.5)"/><use xlink:href="#b" transform="rotate(45)"/></g><use xlink:href="#c" transform="rotate(67.5)"/></g> <use xlink:href="#d" transform="scale(-1 1)"/></g> <g transform="matrix(8.1434 0 0 8.1434 0 58.787)"><circle r="1"/><g id="g"><g id="f"><path id="e" d="M.259.966L0 1.576l-.259-.61"/> <use xlink:href="#e" transform="rotate(180)"/></g><use xlink:href="#f" transform="rotate(90)"/></g> <use xlink:href="#g" transform="rotate(30)"/><use xlink:href="#g" transform="rotate(60)"/></g></g></svg>
    </div>

    <button 
      className="py-2 px-4 bg-blue-600 text-white rounded-xl"
      onClick={() => navigate("/login")}
      >
      Login
    </button>

    <button 
      className="py-2 px-4 bg-blue-600 text-white rounded-xl"
      onClick={() => navigate("/register")}
      >
      Sign Up
    </button>
  </div>

</header>
    </div>
  );

}

export default App
