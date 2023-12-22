import { logo } from "../assets";
import { LuMail, LuPhone, LuInstagram, LuMenu } from "react-icons/lu";
import { products, services } from "../data";

export default function Footer() {
  const dataProduct = products;

  const targetProduct = [3, 5, 6, 7, 9];
  const filteredProduct = dataProduct.filter((obj) =>
    targetProduct.includes(obj.id)
  );

  return (
    <>
      <footer className="hidden lg:block relative mx-20 bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-5 py-12 bg-[#F9FFF6] rounded-2xl">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className=" px-4">
              <img src={logo} alt="dhea ramdani" />
              <h5 className="max-w-[333px] text-[14px] font-normal leading-[20px] my-10 text-[#757575]">
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 space-x-5 text-primary">
                <button className="hover:bg-primary hover:text-white hover:scale-105 p-3 text-xl rounded-full font-medium">
                  <LuMail />
                </button>
                <button className="hover:bg-primary hover:text-white hover:scale-105 p-3 text-xl rounded-full font-medium">
                  <LuPhone />
                </button>
                <button className="hover:bg-primary hover:text-white hover:scale-105 p-3 text-xl rounded-full font-medium">
                  <LuInstagram />
                </button>
              </div>
            </div>
            <div className=" px-4">
              <div className="flex flex-wrap items-top mb-6 space-x-24">
                <div className="px-4">
                  <span className="block text-blueGray-500 text-[18px] font-medium mb-[33px] leading-[24px] text-[#333]">
                    Categories
                  </span>
                  {filteredProduct.length > 0 ? (
                    <ul className="list-unstyled space-y-[19px]">
                      {filteredProduct.map((product) => (
                        <li key={product.id}>
                          <a className="text-blueGray-600 font-normal block pb-2 text-[14px] leading-[16px] text-[#757575]">
                            {product.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <li>tidak ada adata</li>
                  )}
                </div>
                <div className="px-4">
                  <span className="block text-blueGray-500 text-[18px] font-medium mb-[33px] leading-[24px] text-[#333]">
                    About Us
                  </span>
                  <ul className="list-unstyled space-y-[19px]">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a className="text-blueGray-600 font-normal block pb-2 text-[14px] leading-[16px] text-[#757575]">
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-w-[279px]">
                  <span className="block text-blueGray-500 text-[18px] font-medium mb-[33px] leading-[24px] text-[#333]">
                    Newsletter
                  </span>
                  <ul className="list-unstyled space-y-[19px]">
                    <li>
                      <a className="text-blueGray-600 font-normal block pb-2 text-[14px] leading-[24px] text-[#757575]">
                        Get now free 50% discount for alll products on your
                        first order
                      </a>
                    </li>
                    <li className="flex">
                      <input
                        type="search"
                        className="block w-full p-3 text-sm text-gray-900 border border-black rounded-s-lg"
                        placeholder="Your email address"
                      />
                      <button className="text-white bg-primary font-medium rounded-e-lg text-sm px-4 py-2">
                        SEND
                      </button>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-flex text-[18px] text-primary">
                        <LuMail />
                      </span>
                      <span className="inline-flex ml-2 text-[14px] font-normal leading-[24px]">
                        elemsid@gmail.com
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-flex text-[18px] text-primary">
                        <LuPhone />
                      </span>
                      <span className="inline-flex ml-2 text-[14px] font-normal leading-[24px]">
                        0888 1111 2222
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <h1 className="text-[12px] font-normal leading-[16px] text-[#757575] tracking-wider uppercase">
            © 2021 Elemes id. All rights reserved
          </h1>
        </div>
      </footer>
      <div className="block lg:hidden  w-full h-1 pt-5 bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <span className="text-[39px] text-[#757575]">
              <LuMenu />
            </span>
            <span className="text-sm text-[#757575] font-normal leading-[24px]">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <span className="text-[39px] text-[#757575]">
              <LuMenu />
            </span>
            <span className="text-sm text-[#757575] font-normal leading-[24px]">
              Promotions
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <span className="text-[39px] text-[#757575]">
              <LuMenu />
            </span>
            <span className="text-sm text-[#757575] font-normal leading-[24px]">
              Others
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
