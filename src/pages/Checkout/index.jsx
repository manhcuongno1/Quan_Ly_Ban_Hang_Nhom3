import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { StorageContext } from "../../Contexts/StorageContext";

const cx = classNames.bind(styles);

const OrderForm = () => {

  const storage = useContext(StorageContext)
  const total = storage.cartItems.reduce( (accumulator, item) =>{
    return accumulator + item.quantity*item.unitPrice
  }, 0 )
  

  return (
    
    <div className={cx("order-container")}>
      <div className={cx("order-form")}>
        <div className={cx("form-group")}>
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="address">Địa chỉ</label>

      
          <input
            placeholder="số nhà, tên đường ..."
            type="text"
            name="address"
            id="address"
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="note">Ghi chú (tùy chọn)</label>
          <textarea
            name="note"
            id="note"
          ></textarea>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="payment">Thanh toán</label>
          <select
            name="payment"
            id="payment"
          >
            <option value="COD">COD - Thanh toán khi giao hàng</option>
            <option value="bank">Chuyển khoản qua ngân hàng</option>
          </select>
        </div>
        <a href='done'>
        <button
          type="submit"
          className={cx("button-submit")}
        >
          Đặt hàng
        </button>
        </a>
      </div>
      <div className={cx("order-detail")}>
        <h3>Order Details:</h3>
        <div>
          {storage.cartItems.map((item, index) => (
            <div key={index} className={cx("order-item")}>
              <div className={cx("image-container")}>
                <img src={item.image} alt="" />
              </div>
              <div className={cx("info-container")}>
                <p className={cx("name-product")}>{item.name}</p>
                <p>
                  Giá:{" "}
                  {`${item.unitPrice.toLocaleString("vi-VN", { currency: "VND" })} VNĐ`}
                </p>
                <p>Số lượng: {item.quantity}</p>
              </div>
          
            </div>
          ))}
        </div>
        <div className={cx("cal-box")}>
          <div
            style={{
              justifyContent: "space-between",
            }}
            className="row"
          >
            <div>Tạm tính</div>
            <div>
              {total.toLocaleString('vi-VN', {currency: "VND"})} đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
