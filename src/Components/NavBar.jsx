import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ menu, btn }) => {
  const [show, setshow] = useState(false);
  return (
    <nav
      className="  backdrop-brightness-150
      h-[80px] flex items-center justify-between md:p-[5px_40px] p-[5px_20px]  fixed w-screen backdrop-blur z-20"
    >
      <img
        src="/public/Images/logo-2-.png"
        alt=""
        className="md:h-full h-[80%] "
      />
      <ul className="lg:flex gap-14 hidden">
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              className="flex gap-2 items-center text-secondary cursor-pointer
               hover:text-primary transition-all"
            >
              <Link to={item.path} className="font-bold lg:text-3xl ">
                {item.link}
              </Link>
              <i className={`text-xl ${item.iconClass}`}></i>
            </li>
          );
        })}
      </ul>
      <button
        className="md:w-[220px] h-[50px] w-[120px] text-[12px] md:text-[18px] bg-primary rounded text-secondary font-bold 
      hover:bg-opacity-0 hover:border hover:border-secondary transition-all hidden lg:block"
      >
        {btn}
      </button>
      <button onClick={() => setshow(!show)}>
        <i
          className={
            show
              ? "fa-regular fa-circle-xmark lg:hidden text-2xl md:text-3xl text-primary"
              : "fa-solid fa-bars-staggered lg:hidden text-2xl md:text-3xl text-primary"
          }
        ></i>
      </button>
      <ul
        className={
          show
            ? "mobile-nav absolute w-full bg-[#fff]  top-[80px] right-0  flex flex-col items-center gap-14 py-[20px] scale-y-1 transition-all z-20 origin-top"
            : "mobile-nav absolute w-full  bg-[#fff]  top-[80px] right-0  flex flex-col items-center gap-14 py-[20px] scale-y-0 transition-all z-20 origin-top"
        }
      >
        {menu.map((item, i) => {
          return (
            <li
              key={i}
              className="flex gap-2 items-center text-secondary cursor-pointer
               hover:text-primary transition-all"
            >
              <Link to={item.path} className="font-bold text-2xl ">
                {item.link}
              </Link>
              <i className={item.iconClass}></i>
            </li>
          );
        })}
        <button
          className="md:w-[200px] h-[40px] w-[120px] text-[12px] md:text-[18px] bg-primary rounded text-secondary font-bold 
      hover:bg-opacity-0 hover:border hover:border-secondary transition-all"
        >
          {btn}
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
