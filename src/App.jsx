import logo from "./assets/logo.png";
import landingpage1 from "./assets/landingpage1.png";
import landingpage2 from "./assets/landingpage2.png";
import landingpage3 from "./assets/landingpage3.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      titleBlue: "Advanced Payment Solutions",
      titleBlack: "for India's boldest Disrupters",
      description: "100+ Payment Methods | Easy Integration | Powerful Dashboard",
      image: landingpage1,
    },
    {
      titleBlue: "Effortless Banking",
      titleBlack: "for India's boldest Disrupters",
      description: "Powerful Automation | Smart Dashboard | Integrated Access",
      image: landingpage2,
    },
    {
      titleBlue: "Easy In-Store Payments",
      titleBlack: "for India's boldest Disrupters",
      description: "Quick Payments | Seamless Integration | Top-tier UPI stack ",
      image: landingpage3,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="mx-35">
      <header className="flex items-center justify-between px-6 py-4">
        {/* Left side: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="company logo"
            className="h-15 w-auto object-contain"
          />
        </div>

        {/* Middle: Navigation */}
        <nav className="flex items-center gap-2 text-sm font-medium">
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
          <div className="w-5 h-5 mr-2">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 115.34 122.88"
            >
              {" "}
              <title>headphones</title>{" "}
              <path d="M97.74,119.52a2,2,0,0,1-.68-.12V65.93a2,2,0,0,1,.68-.12c3.34,0,6.43,5,8.48,7l-.46-12.12c0-12.8-3.72-23.11-9.68-30.93a7.37,7.37,0,0,1-5.86-2.23l-.68-.7C80.91,18.29,69,14.44,57.24,14.66S33.76,19.19,25.69,26.91l-.66.64a7.3,7.3,0,0,1-6.49,2.05c-6,7.84-9.75,18.21-9.75,31.14L8.33,74.63c2.25-2.71,6.34-8.66,10-8.82v53.71C10.52,119.36,4.91,107.05,3,101H0V60.74A57.33,57.33,0,0,1,12.83,24.57a7.35,7.35,0,0,1,1.8-7.36l1-.95C26.36,6,41.62.3,57,0s31.25,4.9,42.87,16.46l.91.93a7.33,7.33,0,0,1,1.74,7.2,57.34,57.34,0,0,1,12.81,36.13V101h-2.21c-1.89,6.14-7.54,18.57-15.39,18.57Zm-5.55,3.36h-9a3.48,3.48,0,0,1-3.48-3.47V65.65a3.49,3.49,0,0,1,3.48-3.48h9v60.71Zm-69-60.71H33a3.5,3.5,0,0,1,3.48,3.48v53.76A3.49,3.49,0,0,1,33,122.88H23.14V62.17Z" />
            </svg>
          </div>

          {/* Nepal Flag Icon */}
          <div className="w-5 h-5 ml-2">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-17.582 -4.664 71.571 87.246"
            >
              <use xlink:href="#a" stroke="#003893" stroke-width="5.165" />
              <path
                id="a"
                d="M-15 37.574h60L-15 0v80h60l-60-60z"
                fill="#DC143C"
              />
              <g fill="#fff">
                <path d="M-11.95 23.483a12.84 12.84 0 0023.9 0 11.95 11.95 0 01-23.9 0" />
                <g transform="translate(0 29.045) scale(5.56106)">
                  <circle r="1" />
                  <g id="d">
                    <g id="c">
                      <path
                        id="b"
                        d="M.195-.98L0-1.39l-.195.408"
                        transform="rotate(11.25)"
                      />
                      <use xlink:href="#b" transform="rotate(22.5)" />
                      <use xlink:href="#b" transform="rotate(45)" />
                    </g>
                    <use xlink:href="#c" transform="rotate(67.5)" />
                  </g>{" "}
                  <use xlink:href="#d" transform="scale(-1 1)" />
                </g>{" "}
                <g transform="matrix(8.1434 0 0 8.1434 0 58.787)">
                  <circle r="1" />
                  <g id="g">
                    <g id="f">
                      <path id="e" d="M.259.966L0 1.576l-.259-.61" />{" "}
                      <use xlink:href="#e" transform="rotate(180)" />
                    </g>
                    <use xlink:href="#f" transform="rotate(90)" />
                  </g>{" "}
                  <use xlink:href="#g" transform="rotate(30)" />
                  <use xlink:href="#g" transform="rotate(60)" />
                </g>
              </g>
            </svg>
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

      <div className="relative w-full overflow-hidden py-2">
        <button
          type="button"
          onClick={goToPreviousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path d="M14.7 5.3a1 1 0 0 1 0 1.4L10.41 11l4.3 4.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.41 0z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goToNextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path d="M9.3 18.7a1 1 0 0 1 0-1.4l4.29-4.3-4.3-4.3a1 1 0 0 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.41 0z" />
          </svg>
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex w-full shrink-0 px-16">
              <div className="w-1/2">
                <h1 className="text-5xl font-bold text-blue-600 mt-30 whitespace-nowrap">
                  {slide.titleBlue}
                </h1>
                <h1 className="text-5xl font-bold whitespace-nowrap">
                  {slide.titleBlack}
                </h1>
                <p>
                  {slide.description}
                </p>
                <button
                  className="inline-flex items-center px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-5"
                  onClick={() => navigate("/register")}
                >
                  <span>Sign Up Now </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="ml-1 mt-1 size-6 text-white fill-current"
                  >
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                  </svg>
                </button>
                <button className="ml-3">Know More</button>
              </div>

              <div className="w-1/2 flex justify-end">
                <img
                  src={slide.image}
                  alt="landing"
                  className="h-[600px] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default App;
