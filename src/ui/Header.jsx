import { Link } from 'react-router-dom';
import './Header.css';
import { useContext, useState } from 'react';
import { StorageContext } from '../Contexts/StorageContext';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const storage = useContext(StorageContext);

  const handleShowDropdown = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto flex justify-between items-center gap-x-4'>
        <div className='col-xl-3'>
          <div className='header_logo'>
            <h1 className='basis-2/6 text-center text-xl font-semibold cursor-pointer'>
              Coffee IT
            </h1>
          </div>
        </div>

        <div className='col-xl-6 flex-1'>
          <ul className='flex justify-between items-center'>
            <li1>
              <Link to='/' className='nvd-top-menu-item bg:nvd-top-menu-item-active'>
                Trang chủ
              </Link>
            </li1>
            <li3>
              <Link to='/product' className='nvd-top-menu-item'>
                Sản phẩm
              </Link>
            </li3>
            <li4>
              <Link to='/article' className='nvd-top-menu-item'>
                Giới thiệu về chúng tôi
              </Link>
            </li4>
            <li5>
              <Link to='/contact' className='nvd-top-menu-item'>
                Liên hệ
              </Link>
            </li5>
            <li6 class='nvd-top-menu-item'>
              <a1 href='#' class='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='nvd-icon'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>

                <Link to='/Cart'>Giỏ hàng</Link>
                <span class='nvd-badge-circle bg-orange-500 text-white'>
                  {storage.cartItems.length}
                </span>
              </a1>
            </li6>

            <li7 className='account-item' onClick={handleShowDropdown}>
              Tài khoản <i className='fa-solid fa-caret-down'></i>
              {isActive && (
                <div className='account-dropdown'>
                  <Link to={'/login'} className='flex items-center space-x-1'>
                    <span>Đăng nhập</span>
                  </Link>
                  <Link to={'/register'} className='flex items-center space-x-1'>
                    <span>Đăng kí</span>
                  </Link>
                </div>
              )}
            </li7>
          </ul>
        </div>
      </div>
      <div className='col-xl-3 flex justify-end items-center'>
        <div className='header_cart flex items-center space-x-2'>
          <div className='header_cart_price'></div>
          <ul>
            <li>
              <Link to='#' className='flex items-center space-x-1'>
                {/* <AiOutlineShoppingCart /> */}
                <span></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
