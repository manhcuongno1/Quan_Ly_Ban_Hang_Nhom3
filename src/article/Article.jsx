import React, { useState } from 'react';
import './Article.css';
import styled from 'styled-components';

function ProductIntroduction() {
  const StyledImage = styled.img`
  background-position: 70% 30%;
  position: relative;
  width: 500px;
  padding: 20px;
  overflow: hidden;
  cursor: zoom-in;
  transform: translateY(-137px) translateX(620px);
`;
  return (
    <div className='article-page'>
      <div className='article-form-container'>
        <div>
          <StyledImage src='./imgs/favicon/anhquancf.jpg' />
        </div>
        <div className='origin-form-container'>
          <h1 className='title-origin'> Nguồn gốc </h1>
          <h2 className='title-origin2'>CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH</h2>
          <h3 className='title-origin3'>
            Coffe IT được thành lập từ những chàng trai sinh viên có đam mê lập trình,bắt nguồn từ
            đam
          </h3>
          <h4 className='title-origin4'>
            mê và sự tìm tìm tòi thích học hỏi cũng như khám về lập trình. Mục tiêu của chúng mình
            là
          </h4>
          <h5 className='title-origin5'>
            tìm kiếm những người có cùng đam mê và chí hướng để có thể xây dựng một môi trường
          </h5>
          <h6 className='title-origin6'>
            học tập cũng như giải trí lành mạnh cho những bạn thích lập trình
          </h6>
        </div>
        <div className='element'></div>
        <div>
          <a href='origin'>
            <button className='origin-button'>Xem Thêm Chi Tiết</button>
          </a>
        </div>
        <div>
          <StyledImage src='./imgs/favicon/phucvu.jpg' className='first-image' />
        </div>
        <div className='service-form-container'>
          <h1 className='title-service'> Dịch Vụ </h1>
          <h2 className='title-service2'>Ở đây đảm bảo sự hài lòng của mọi người</h2>
          <h3 className='title-service3'>
            Coffe IT luôn đảm bảo sự riêng tư và thoái mái tuyệt đối cho khách hàng. Ở đây tất cả
            mọi
          </h3>
          <h4 className='title-service4'>
            người sẽ được phục vụ một cách tận tình bằng tất cả sự tâm huyết của nhân viên chúng
          </h4>
          <h5 className='title-service5'>
            tôi . Nếu có gì cần góp ý đừng ngần ngại liên hện với chúng tôi nha 😘
          </h5>
          <div>
            <a href='/contact'>
              <button className='service-button'>Xem Thêm Chi Tiết</button>
            </a>
          </div>
        </div>
        <div className='element1'></div>
        <div>
          <StyledImage src='./imgs/favicon/123.png' className='second-image' />
        </div>
        <div className='consultation-form-container'>
          <h1 className='title-consultation'> Tư vấn hỗ trợ lập trình</h1>
          <h2 className='title-consultation2'>
            {' '}
            Ở đây chúng minh trao đổi chia sẻ thêm về kĩ năng lập trình{' '}
          </h2>
          <h3 className='title-consultation3'>
            Coffe IT nơi mà các bạn được nói lên những suy nghĩ của mình .Chúng tôi
          </h3>
          <h4 className='title-consultation4'>
            luôn sẵn sàng hỗ trợ và giúp đỡ nhiệt tình đối với khách hàng.Coffe IT hoạt
          </h4>
          <h5 className='title-consultation5'>
            động với mong muốn tạo ra một không gian thư giãn cho lập trình viên và
          </h5>
          <h6 className='title-consultation6'>
            thu hẹp khoảng cách giữa nhà trường và doanh nghiệp, tạo cơ hội việc làm
          </h6>
          <h6 className='title-consultation7'>
            cho các bạn trẻ đã, đang và sẽ theo học ngành CNTT.
          </h6>
          <div>
          <a href='consultation'>
            <button className='consultation-button'>Xem Thêm Chi Tiết</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIntroduction;
