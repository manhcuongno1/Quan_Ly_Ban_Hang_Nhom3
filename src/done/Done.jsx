import './Done.css';
import React, { useState } from 'react';
function Done () {
    return(
        <div className='done-container'>
            <div className='done-container-123'>
                <h1 className='done-1'>Chúc Mừng bạn đã đặt hàng thành công ️🎉️🎉</h1>
                <h2 className='done-2'>ㅤ</h2>
                <h3 className='done-3'>giao hàng nhanh và đúng địa chỉ như dự kiến của bạn</h3>
                <h4 className='done-4'>Mọi thắc mắc xin quý khách hàng liên hệ.</h4>
                <h5 className='done-5'>Coffe IT rất hân hạnh được phục vụ bạn !</h5>
                </div>
                <div className='done-container-456'>
                    <h1 className='done-web-1'>Vui lòng đợi chúng tôi xác nhận đơn hàng trước khi các bạn nhận hàng. Chúng tôi cam kết sẽ </h1>
                    </div>
                    <div>
          <a href='/contact'>
            <button className='done-button'><ins>Tại Đây</ins></button>
          </a>
        </div>
        <div>
            <a href='/'>
            <button className='done-button-1'>🏠Trở về trang chủ</button>
            </a>
        </div>
        <div>
            <a href='product'>
            <button className='done-button-2'>Tiếp tục mua sắm😍</button>
            </a>
        </div>
                               
        </div>
    )
}
export default Done;