import ProductItem from '../components/ProductItem';
import './Header.css';
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDrinks } from '../services/apiDrinks';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDrinks()
      .then((res) => {
        const result = res.filter((item) => item.soldOut === false);
        setProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='my-10 px-4 text-center sm:my-16'>
      <div className='nvd-subheadline '>
        <div className='nvd-subheadline-deco-line '></div>
        <div className='nvd-subheadline-lable '>more products</div>
        <div className='nvd-subheadline-deco-line '></div>
      </div>
      <div className='more-products w-[95%] xl:w-[65%] mx-auto mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4'>
          {products.map((item, index) => (
            <ProductItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
