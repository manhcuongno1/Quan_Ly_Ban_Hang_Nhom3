
// import './Home.css';
import { Link } from 'react-router-dom';
import './Home1.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Home() {
  return(
    <div>
      <div className='slider-image'>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div><img src="./imgs/favicon/anh1.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src="./imgs/favicon/anh2.jpg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src="./imgs/favicon/anh3.jpeg" alt="" /></div></SwiperSlide>
      </Swiper>
      </div>

      <div className='about'>
        <div className='about-content'>
          <h1 className='about-head'>Về Coffee IT</h1>
          <h2 className='about-sub'>Coffee IT nơi chia sẻ kiến thức học tập về lập trình</h2>
          <h3 className='about-desc'>Coffee IT nơi tất cả mọi người có đam mê lập trình có thể ngồi lại thưởng thức 1 ly cà phê hoặc trà sữa , chia sẻ cũng những câu chuyện cá nhân ...</h3>
          <a href='/article'>
            <button className='button-primary'>Xem Thêm Chi Tiết</button>
          </a>
        </div>

        <div className='about-image'>
          <img src='./imgs/favicon/homepage.jpg' className='home-web-anh'/>
        </div>
      </div>

      <div className='home-product'>
        <div className='product-card'>
          <h1 className='product-card-title'>Cà Phê</h1>
          <div>
              <img src ='./imgs/favicon/homepagecf.png' className='product-card-image'/>
          </div>
        </div>

        <div className='product-card'>
          <h2 className='product-card-title'>Trà Sữa</h2>
          <div>
              <img src ='./imgs/favicon/homepagetrasua.png' className='product-card-image'/>
          </div>
        </div>

        <div className='product-card'>
          <h3 className='product-card-title'>Bánh Ngọt</h3>
          <div>
              <img src ='./imgs/favicon/homepagebanh.png' className='product-card-image'/>
          </div>
        </div>
      </div>

      <div className='about about2'>
        <div className='about-image'>
          <img src ='./imgs/favicon/homepagestore.png' className='home-web-anh4'/>
        </div>

        <div className='about2'>
          <h1 className='about-head'>Cửa Hàng</h1>
          <h3 className='about-desc'>Xuất phát từ niềm đam mê lập trình , chúng mình mong</h3>
          <h4 className='about-desc'>muốn tạo nên một môi trường dành cho các bạn</h4>
          <h5 className='about-desc'>có niềm đam mê giống mình .Coffee IT chúng mình</h5>
          <h6 className='about-desc'>cũng mong muốn mở ra một môi trường thân thiện</h6>
          <h6 className='about-desc'>nhằm kết nối và ghi lại những khoảnh khắc tươi vui trong lúc thưởng thức .</h6>
          <a href='/article'>
            <button className='button-primary'>Xem Thêm</button>
          </a>

        </div>
      </div>

      <div className='news'>
        <div className='news-items'>
          <div className='news-items-img'>
            <img src ='./imgs/favicon/tintuc.png' />
          </div>
          <h1 className='news-tags'>Tin Tức & Sự Kiện</h1>
          <div className='news-bottom'>
            <div className='news-content'>
              <h1 className='home-tintucsukien-1'>Socola Đá Xay Oreo chính thức chào hè 2024</h1>
              <h2 className='home-tintucsukien-2'>By Coffee IT  7/5/2024</h2>
              <h4 className='home-tintucsukien-4'>Socola đá xay Oreo được mở bán nhằm cháo đón một mùa hè năng động 2024 ...</h4>
            </div>
            <div>
              <Link className='news-button' to={'/'}>
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className='news-items'>
          <div className='news-items-img'>
            <img src ='./imgs/favicon/tintuc1.png'/>
          </div>
          <h1 className='news-tags'>Tin Tức & Sự Kiện</h1>
          <div className='news-bottom'>
            <div className='news-content'>
              <h1 className='home-tintucsukien-1'>Bánh Caramel thượng hàng cùng nhau nhâm nhi</h1>
              <h2 className='home-tintucsukien-2'>By Coffee IT  13/5/2024</h2>
              <h4 className='home-tintucsukien-4'>Cùng nhau nhâm nhi miếng bánh cramel và thưởng thức cà phê để tận hưởng ...</h4>
            </div>
            <div>
              <Link className='news-button' to={'/'}>
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className='news-items'>
          <div className='news-items-img'>
            <img src ='./imgs/favicon/tintuc2.png' />
          </div>
          <h1 className='news-tags'>Tin Tức & Sự Kiện</h1>
          <div className="news-bottom">
            <div className='news-content'>
              <h1 className='home-tintucsukien-1'>Tri Ân Khách hàng cực khủng</h1>
              <h2 className='home-tintucsukien-2'>By Coffee IT  23/5/2024</h2>
              <h4 className='home-tintucsukien-4'>Để nhằm tri ân khách hàng Coffee IT chúng tôi sẽ giảm giá 50% toàn bộ sản phẩm nhanh chân đến quán của chúng tôi các bạn sẽ ...</h4>
            </div>

            <div>
              <Link className='news-button' to={'/'}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Home;
