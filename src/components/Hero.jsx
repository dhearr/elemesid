import CardHero from "./CardHero";

export default function Hero() {
  return (
    <>
      <div className="grid max-w-screen-xl px-4 mx-5 lg:mx-24 lg:gap-8 xl:gap-0 py-28 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-sm lg:max-w-[425px] font-medium mb-8 text-[38px] lg:text-[64px] text-primary leading-[54px] lg:leading-[64px]">
            Good Food Us Good Mood
          </h1>
          <div className="block lg:hidden relative lg:mt-0 lg:col-span-4 w-[245px]  bg-[#c4c4c4]/20 rounded-full p-3 my-12">
            <CardHero />
          </div>
          <p className="max-w-[425px] mb-8 font-normal text-[#757575]">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex justify-start self-stretch gap-4">
            <button
              type="button"
              className="text-white bg-primary leading-[22px] font-medium rounded-[100px] text-sm px-[18px] py-[10px] text-center shadow-button"
            >
              Daftar Sekarang
            </button>
            <button
              type="button"
              className="text-[#333] bg-[#f2f2f2] leading-[22px] font-medium rounded-[100px] text-sm px-[18px] py-[10px] text-center"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative lg:mt-0 lg:col-span-4 w-[480px]  bg-[#c4c4c4]/20 rounded-full p-10">
          <CardHero />
        </div>
      </div>
    </>
  );
}
