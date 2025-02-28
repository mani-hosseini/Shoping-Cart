import { useContext, useEffect } from "react";
import { ShopContext } from "../components/ShopContext";
import { client } from "../../lib/axios";
import { IoTrashOutline } from "react-icons/io5";
export default function Products() {
  const { shop, dispatch } = useContext(ShopContext);

  const getApi = async () => {
    try {
      const response = await client.get("/products");
      const mapData = response.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        image: item.attributes.image,
        price: item.attributes.price,
        quantity: 1,
      }));
      dispatch({ type: "ADD_SHOP", payload: mapData });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const sliceProduct = shop.slice(6, 10);

  const total = sliceProduct.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (sliceProduct.length < 1) {
    return (
      <div className="max-w-[850px] mx-auto flex items-start flex-col gap-5 p-6">
        <h2 className="text-3xl font-bold mb-4 self-start">Products</h2>
        <h1 className="text-5xl font-bold text-[#0F172A]">YOUR BAG</h1>
        <span className="text-[#64748B] text-lg">is currently empaty</span>
      </div>
    );
  }

  return (
    <div className="max-w-[850px] mx-auto flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 self-start">Products</h1>
      <div className="w-[800px] flex flex-col gap-4">
        {sliceProduct.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-md"
            />
            <div className="flex-1 ml-4 gap-2">
              <h2 className="flex items-center">{item.title}</h2>
              <div className="flex items-center">
                <p className="text-[#1E293B] text-sm">${item.price}</p>
                <button
                  className="ml-4 text-red-500 text-xl cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "REMOVE-SHOP", payload: item })
                  }
                >
                  <IoTrashOutline />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 border-[#CBD5E1] border bg-transparent text-xl cursor-pointer"
                onClick={() =>
                  dispatch({ type: "DECREASE_QUANTITY", payload: item })
                }
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE_QUANTITY", payload: item })
                }
                className="px-2 bg-[#F97316] text-white rounded-md cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center w-[800px] mt-6">
        <span className="text-xl text-[#1E293B] font-bold">Total</span>
        <h2 className="bg-[#F97316] py-0.5 px-5 text-xl text-white font-bold rounded-lg">
          ${total}
        </h2>
      </div>
      <button
        className="btn bg-[#CBCDCD] py-2 px-4 rounded-lg text-[#324E25] cursor-pointer"
        onClick={() => dispatch({ type: "CLEAR_ALL_SHOP" })}
      >
        Clear Cart
      </button>
    </div>
  );
}
