import { products } from "../data";
import { greenSaladTomato } from "../assets";

export default function CardHero() {
  const data = products; //! Kumpulan Data Yang Sudah Dibuat.

  const dataIdFind = 1; //! Target Object Yang Id nya 1.
  const myData = data.find((obj) => obj.id === dataIdFind); //! Mendapatkan Id Dari Variable dataIdFind.

  return (
    <>
      <img
        src={greenSaladTomato}
        alt="mockup"
        className="w-[220px] h-[225px] lg:w-[413px] lg:h-[415px]"
      />
      <div className="absolute lg:bottom-0 lg:-left-24 lg:right-[270px] bottom-3 -right-[58px] flex justify-between items-center rounded-xl bg-blur backdrop-filter backdrop-blur-3xl lg:py-4 lg:px-10 py-2 px-5 gap-5 shadow-xl">
        {myData && (
          <>
            <div>
              <img
                src={myData.image}
                alt=""
                className="lg:h-[53px] lg:w-[53px] h-[43px] w-[43px]"
              />
            </div>
            <div className="flex flex-col max-w-2xl">
              <h1 className="lg:text-[14px] text-[10px] font-semibold leading-[22px] font-sans">
                {myData.name}
              </h1>
              <h1 className="lg:text-[12px] text-[8px] font-normal leading-[14px] text-[#757575]">
                {myData.title}
              </h1>
              <div className="flex">
                {myData.stars.map((star, index) => (
                  <span
                    key={index}
                    className="lg:text-[16px] text-[10px]"
                    onSelect={star.selected}
                    style={{
                      color: star.selected ? "#FF8412" : "#C9C9C9",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
