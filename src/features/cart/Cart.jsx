// Cart.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { StorageContext } from '../../Contexts/StorageContext';
import './Cart.css';

function Cart() {
  const storage = useContext(StorageContext);
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    storage.setCartItems([]);
  };

  const handleOrder = () => {
    navigate('/order/new');
  };

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/product'>&larr; Trở về menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Giỏ Hàng Của Bạn</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {storage.cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button onClick={handleOrder} type='primary'>
          Đặt hàng ngay
        </Button>

        <Button onClick={handleDeleteAll} type='secondary'>
          Xóa giỏ hàng
        </Button>
      </div>
    </div>
  );
}

export default Cart;
