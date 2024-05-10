import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';

const fakeCart = [
  {
    coffeId: 12,
    name: 'Cà phê đen',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 15000,
  },
  {
    coffeId: 6,
    name: 'Trà đào',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 23000,
  },
  {
    coffeId: 11,
    name: 'Cà phê sữa',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 20000,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Trở về menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Giỏ Hàng Của Bạn</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Đặt hàng ngay
        </Button>

        <Button type="secondary">Xóa giỏ hàng</Button>
      </div>
    </div>
  );
}

export default Cart;