import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ menu, btn }) => {
  const [scroll, setscroll] = useState(false);
  const [show, setshow] = useState(false);
  //   const showMobilNav = ()=>{
  //     if(show === false){
  //         setshow(true)
  //     }else{
  //         setshow(false)
  //     }
  //   }
  console.log(show);
  const changeBG = () => {
    if (window.scrollY >= 80) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  window.addEventListener("scroll", changeBG);
  return (
    <div className="relative">
      <nav
        className={
          scroll
            ? "h-[80px] flex items-center justify-between md:p-[5px_40px] p-[5px_20px] border-b border-primary fixed w-screen "
            : "h-[80px] flex items-center justify-between md:p-[5px_40px] p-[5px_20px] border-b border-primary fixed w-screen backdrop-blur"
        }
      >
        <img
          src="/public/Images/logo-2-.png"
          alt=""
          className="md:h-full h-[80%] "
        />
        <ul className="lg:flex gap-9 hidden">
          {menu.map((item, i) => {
            return (
              <li
                key={i}
                className="flex gap-2 items-center text-secondary cursor-pointer
               hover:text-primary transition-all"
              >
                <Link to={item.path} className="font-bold text-xl ">
                  {item.link}
                </Link>
                <i className={item.iconClass}></i>
              </li>
            );
          })}
        </ul>
        <button
          className="md:w-[200px] h-[40px] w-[120px] text-[12px] md:text-[18px] bg-primary rounded text-secondary font-bold 
      hover:bg-opacity-0 hover:border hover:border-secondary transition-all"
        >
          {btn}
        </button>
        <button onClick={() => setshow(!show)}>
          <i
            className={
              show
                ? "fa-regular fa-circle-xmark lg:hidden text-xl text-primary"
                : "fa-solid fa-bars-staggered lg:hidden text-xl text-primary"
            }
          ></i>
        </button>
      </nav>
      <ul
        className={
          show
            ? "mobile-nav absolute w-[40%] bg-[#fff] border-l border-primary top-[80px] right-0 h-screen flex flex-col items-center gap-10 py-[20px] scale-x-1 transition-all"
            : "mobile-nav absolute w-[40%] bg-[#fff] border-l border-primary top-[80px] right-0 h-screen flex flex-col items-center gap-10 py-[20px] scale-x-0 transition-all"
        }
      >
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              className="flex gap-2 items-center text-secondary cursor-pointer
               hover:text-primary transition-all"
            >
              <Link to={item.path} className="font-bold text-sm md:text-xl ">
                {item.link}
              </Link>
              <i className={item.iconClass}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
