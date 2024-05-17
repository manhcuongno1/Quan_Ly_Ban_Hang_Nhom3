import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
import { toast } from "react-toastify";

function ProductItem({ data = {} }) {
  const storage = useContext(StorageContext);

  const handleAddItem = () => {
    storage.setCartItems((prev) => {
      const newState = [...prev];
      const isExist = newState.find((item) => item.id === data.id);
      if (isExist) {
        isExist.quantity++;
      } else {
        newState.push({
          quantity: 1,
          ...data,
        });
      }
      return newState;
    });
    toast.success("Thêm sản phẩm thành công");
  };
  return (
    <div>
      <div className="nvd-product-card ">
        <div
          style={{
            backgroundImage: `url('${data.imageUrl}')`,
          }}
          className="h-[400px] sm:h-[540px]  bg-cover bg-no-repeat bg-center"
        >
          <div className="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
            <div
              onClick={handleAddItem}
              className="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hover:block group-hover:animate-fadeIn nvd-button"
            >
              Đặt ngay
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/" alt="#">
            <div className="text-xl mb-3 hover:text-coffee-400">
              {data.name || "Chanh đá xay"}
            </div>
          </a>
          <div className="">
            <span className="text-xl text-coffee-400">
              {data.unitPrice.toLocaleString("vi-VN", { currency: "VND" })} vnd
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
