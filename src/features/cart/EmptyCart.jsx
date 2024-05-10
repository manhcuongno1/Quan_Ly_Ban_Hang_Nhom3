import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Trở về menu</Link>

      <p>Your cart is still empty. Start adding some coffee :)</p>
    </div>
  );
}

export default EmptyCart;
