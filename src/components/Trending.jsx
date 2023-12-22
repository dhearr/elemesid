import { products } from "../data";

export default function Trending() {
  const dataProduct = products;

  const targetProduct = [2, 3, 4, 5, 6, 7, 8, 9];
  const filteredProduct = dataProduct.filter((obj) =>
    targetProduct.includes(obj.id)
  );

  return (
    <>
      <div className="max-w-lg lg:max-w-[425px] mx-5 lg:mx-24">
        <h1 className="text-[28px] lg:text-[38px] font-medium leading-[50px] text-[#333]">
          Browser Our Trending
        </h1>
        <p className="text-[24px] lg:text-[30px] font-medium lg:leading-[50px] leading-[30px] text-primary">
          Receipt
        </p>
      </div>

      <div className="mx-5 lg:mx-24 mt-10">
        {filteredProduct.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {filteredProduct.map((product) => (
              <div key={product.id}>
                <div
                  className="max-w-sm p-6 rounded-2xl shadow-card hover:bg-hero-pattern hover:bg-cover hover:scale-105"
                  style={{ backgroundColor: product.color }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[96px] w-[96px]"
                  />
                  <h5 className="mt-3 text-[22px] font-medium leading-[50px] tracking-tight text-[#333]">
                    {product.name}
                  </h5>
                  <p className="mb-3 text-[16px] font-medium text-primary">
                    {product.title}
                  </p>
                  <div>
                    {product.stars.map((star, i) => (
                      <span
                        key={i}
                        onSelect={star.selected}
                        style={{ color: star.selected ? "#FF8412" : "#C9C9C9" }}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>tidak ada data di temukan</h1>
          </div>
        )}
        <div className="hidden lg:flex justify-center items-center mt-12">
          <button
            type="button"
            className="text-white bg-primary leading-[22px] font-medium rounded-[100px] text-sm px-[18px] py-[10px] text-center"
          >
            ALL Receipt
          </button>
        </div>
      </div>
    </>
  );
}
