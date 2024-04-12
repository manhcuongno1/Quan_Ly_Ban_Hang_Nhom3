import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6"></p>
      <Link to="/cart">Xem thử giỏ hàng &rarr;</Link>
    </div>
  );
}

export default CartOverview;
