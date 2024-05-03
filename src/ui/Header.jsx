import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { formatCurrency } from '../utils/helpers';
import "./Header.css";

function Header() {
  return (
    <>
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="col-6_top_left">
            <ul>
            </ul>
          </div>
          <div className="col-6_top_right">
            <ul>
              <li>
                <Link to={"/login"} className="flex items-center space-x-1">
                  {/* <CgProfile /> */}
                  <span>Đăng nhập</span>
                </Link>
              </li><li>
                <Link to={"/register"} className="flex items-center space-x-1">
                  {/* <CgProfile /> */}
                  <span>Đăng kí</span>
                  <div className="container">

                  </div>
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
              <h1 className="basis-2/6 text-center text-xl font-semibold cursor-pointer">Coffe IT</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="flex space-x-20">
              <li>
                <Link to="/" className="nvd-top-menu-item bg:nvd-top-menu-item-active">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/orders" className="nvd-top-menu-item">
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/product" className="nvd-top-menu-item">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/customers" className="nvd-top-menu-item">
                  Bài viết
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nvd-top-menu-item">
                  Liên hệ
                </Link>
              </li>
              <li class="nvd-top-menu-item">
                <a href="#" class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="nvd-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <Link to="/Cart" >
                  Giỏ hàng
                </Link>
                  <span class="nvd-badge-circle bg-orange-500 text-white"
                    >1</span>
                </a>
              </li>
              {/* Thêm các chức năng khác ở đây */}
            </ul>
          </div>
          <div className="col-xl-3 flex justify-end items-center">
            <div className="header_cart flex items-center space-x-2">
              <div className="header_cart_price">

              </div>
              <ul>
                <li>
                  <Link to="#" className="flex items-center space-x-1">
                    {/* <AiOutlineShoppingCart /> */}
                    <span></span>
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
