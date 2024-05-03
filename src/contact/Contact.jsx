import React, { useState } from 'react';
import "./Contact.css";

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
    <div className="contact-page">
        <div className="contact-from-container">

      <h1 className="contact">
      Cảm ơn bạn đã luôn tin tưởng Coffe IT</h1>
      <h2 className="contact-2">
      Xin vui lòng chia sẻ những thắc mắc để chúng tôi có thể giải quyết một cách tận tâm nhất😍😍</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label1 htmlFor="name-contact">Họ và Tên:</label1>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label2 htmlFor="number-contact">Số điện thoại:</label2>
          <input
            type="text"
            id="number"
            name="number"        
          />
        </div>
        <div>
          <label3 htmlFor="message-contact">Lời nhắn:</label3>
          <textarea
            id="message"
            type="text"
            name="message"
          />
        </div>
        <button type="submit-contact">Gửi Ngay</button>
      </form>
      </div>
    </div>
  );
}

export default ContactPage;