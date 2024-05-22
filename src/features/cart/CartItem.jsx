import { useContext } from 'react';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { StorageContext } from '../../Contexts/StorageContext';
import './CartItem.css';
import CountNumber from '../../components/CountNumber';

function CartItem({ item = {} }) {
  

  const { id, name, quantity, unitPrice } = item;
  const storage = useContext(StorageContext);

  const handleDeleteItem = () => {
    storage.setCartItems((prev) => {
      const newState = [...prev];
      const result = newState.filter((item) => item.id !== id);
      return result;
    });
  };
  

  const handleChangeQuantity  = (number) => {
    //setQuantity 
    storage.setCartItems(prev => {
      const newState = [...prev]
      const product = newState.find(item => item.id === id)
      product.quantity = number
      return newState
    })

  }

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <CountNumber onChange={handleChangeQuantity} value={quantity} />
        <p className='text-sm font-bold'>{formatCurrency(quantity * unitPrice)}</p>
        <Button onClick={handleDeleteItem} type='small'>
          Xóa
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
