import { createContext, useEffect, useState } from "react";

// import Cookies from "js-cookie";

export const StorageContext = createContext();

function GlobalStates({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const states = {
    cartItems,
    setCartItems,
  };

  const saveCartToLocalStorage = () => {
    // Chuyển đổi mảng các mục giỏ hàng sang JSON
    const cartJSON = JSON.stringify(cartItems);
    // Lưu vào Local Storage với tên 'cart'
    localStorage.setItem("cart", cartJSON);
  };

  const loadCartFromLocalStorage = () => {
    // Lấy dữ liệu từ Local Storage
    const cartJSON = localStorage.getItem("cart");
    // Chuyển đổi từ JSON thành mảng các mục giỏ hàng
    if (cartJSON) {
      const cartData = JSON.parse(cartJSON);
      setCartItems(cartData);
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartToLocalStorage();
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
