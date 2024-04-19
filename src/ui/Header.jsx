import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { formatCurrency } from '../utils/helpers';

function Header() {
  return (
    <>
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="col-6_top_left">
            <ul>
              <li>{`Miễn phí giao hàng cho đơn hàng từ ${formatCurrency(200000)}`}</li>
            </ul>
          </div>
          <div className="col-6_top_right">
            <ul>
              <li>
                <Link to={""} className="flex items-center space-x-1">
                  {/* <CgProfile /> */}
                  <span>Đăng nhập</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1 className="text-2xl font-bold">Highland</h1>
            </div>
          </div>
          <div className="col-xl-6">MENU</div>
          <div className="col-xl-3 flex justify-end items-center">
            <div className="header_cart flex items-center space-x-2">
              <div className="header_cart_price">
                <span>{formatCurrency(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#" className="flex items-center space-x-1">
                    {/* <AiOutlineShoppingCart /> */}
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
