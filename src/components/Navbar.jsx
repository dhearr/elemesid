import { links } from "../data";
import { style } from "../style";
import { logo } from "../assets";

export default function Navbar() {
  return (
    <>
      <div className="h-[96px] flex items-center justify-between mx-5 lg:mx-24 p-4">
        <a className="flex items-center space-x-3">
          <img
            src={logo}
            className="w-[150px] h-[36px] md:w-[207px] md:h-[50px] "
            alt="Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-6 font-medium leading-[22px] text-[14px]">
          <button
            type="button"
            className="text-[#333] font-medium rounded-lg text-sm px-4 py-2 text-center hidden md:flex"
          >
            Masuk
          </button>
          <button
            type="button"
            className="text-white bg-primary font-medium rounded-[100px] text-xs sm:text-sm px-[8px] sm:px-[18px] py-[10px] text-center"
          >
            Daftar Sekarang
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex p-4 mt-4 font-medium rounded-lg space-x-8 flex-row ">
            {links.map((link, index) => (
              <li
                key={index}
                className="relative font-medium leading-[22px] text-[14px] gap-8 cursor-default text-[#757575] "
              >
                {link.title}
                {link.notify ? (
                  <span className={style.notify}>{link.notify}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
