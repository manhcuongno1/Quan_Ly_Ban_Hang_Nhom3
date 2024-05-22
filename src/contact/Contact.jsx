import React, { useState } from 'react';
import './Contact.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý việc gửi thông tin liên hệ
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-page'>
      <div className='contact-from-container'>
        <h1 className='contact'>Liên Hệ Về Dịch Vụ Chúng Tôi</h1>
        <a href='/'>
        <button type='sumbit1' className='sumbit-btn1'>
            Trang Chủ
          </button>
          </a>
          <h2 className='contact1'>👉</h2>
          <h3 className='contact2'>Liên Hệ Về Dịch Vụ Chúng tôi</h3>      
        
      </div>
      <div className="container-contact">
            <form action="/action_page.php">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Họ và tên</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Tên của bạn" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Số điện thoại </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Số điện thoại của bạn" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Địa Chỉ</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Địa Chỉ" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="country">Tỉnh/Thành Phố</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="Vung Tau">Vũng Tàu</option>
                            <option value="Bac Lieu">Bạc Liêu</option>
                            <option value="Bac Giang">Bắc Giang</option>
                            <option value="Bac Kan">Bắc Kạn</option>
                            <option value="Bac Ninh">Bắc Ninh</option>
                            <option value="Ben Tre">Bến Tre</option>
                            <option value="Binh Duong">Bình Dương</option>
                            <option value="Binh Dinh">Bình Định</option>
                            <option value="Binh Phuoc">Bình Phước</option>
                            <option value="Binh Thuan">Bình Thuận</option>
                            <option value="Ca Mau">Cà Mau</option>
                            <option value="Cao Bang">Cao Bằng</option>
                            <option value="Can Tho">Cần Thơ</option>
                            <option value="Da Nang">Đà Nẵng</option>
                            <option value="Dak Lak">Đắk Lắk</option>
                            <option value="Dak Nong">Đắk Nông</option>
                            <option value="Dien Bien">Điện Biên</option>
                            <option value="Dong Nai">Đồng Nai</option>
                            <option value="Dong Thap">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Ha Giang">Hà Giang</option>
                            <option value="Ha Nam">Hà Nam</option>
                            <option value="Ha Noi">Hà Nội</option>
                            <option value="Ha Tinh">Hà Tĩnh</option>
                            <option value="Hai Duong">Hải Dương</option>
                            <option value="Hai Phong">Hải Phòng</option>
                            <option value="Hau Giang">Hậu Giang</option>
                            <option value="Hoa Binh">Hòa Bình</option>
                            <option value="Hung Yen">Hưng Yên</option>
                            <option value="Khanh Hoa">Khánh Hòa</option>
                            <option value="Kien Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Chau">Lai Châu</option>
                            <option value="Lang Son">Lạng Sơn</option>
                            <option value="Lao Cai">Lào Cai</option>
                            <option value="Lam Dong">Lâm Đồng</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Dinh">Nam Định</option>
                            <option value="Nghe An">Nghệ An</option>
                            <option value="Ninh Binh">Ninh Bình</option>
                            <option value="Ninh Thuan">Ninh Thuận</option>
                            <option value="Phu Tho">Phú Thọ</option>
                            <option value="Phu Yen">Phú Yên</option>
                            <option value="Quang Binh">Quảng Bình</option>
                            <option value="Quang Nam">Quảng Nam</option>
                            <option value="Quang Ngai">Quảng Ngãi</option>
                            <option value="Quang Ninh">Quảng Ninh</option>
                            <option value="Quang Tri">Quảng Trị</option>
                            <option value="Soc Trang">Sóc Trăng</option>
                            <option value="Son La">Sơn La</option>
                            <option value="Tay Ninh">Tây Ninh</option>
                            <option value="Thai Binh">Thái Bình</option>
                            <option value="Thai Nguyen">Thái Nguyên</option>
                            <option value="Thanh Hoa">Thanh Hóa</option>
                            <option value="Thua Thien Hue">Thừa Thiên Huế</option>
                            <option value="Tien Giang">Tiền Giang</option>
                            <option value="TP Ho Chi Minh">TP Hồ Chí Minh</option>
                            <option value="Tra Vinh">Trà Vinh</option>
                            <option value="Tuyen Quang">Tuyên Quang</option>
                            <option value="Vinh Long">Vĩnh Long</option>
                            <option value="Vinh Phuc">Vĩnh Phúc</option>
                            <option value="Yen Bai">Yên Bái</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="subject">Góp ý</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Viết gì đó..." style={{ height: '200px' }}></textarea>
                    </div>
                </div>
                <div className="row">
                <a href="https://example.com">
                  
                    <input type="submit" value="Gửi Ngay" />
                    </a>
                </div>
            </form>
        </div>
      
    </div>
  );
}

export default ContactPage;
