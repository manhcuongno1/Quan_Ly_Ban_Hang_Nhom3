import "./Header.css";
import { Link } from "react-router-dom";

function Product(){
    return(
        <div className="my-10 px-4 text-center sm:my-16" >
              <div class="nvd-subheadline ">
            <div class="nvd-subheadline-deco-line "></div>
            <div class="nvd-subheadline-lable ">featured mugs</div>
            <div class="nvd-subheadline-deco-line "></div>
          </div>
            <div class="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
              <div class="nvd-product-card ">
                <div class="h-[400px] sm:h-[540px] bg-[url('./imgs/favicon/Chanh_Da_Xay.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">

                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center mt-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Chanh đá xay</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$80.000 vnd</span>
                  </div>
                </div>
              </div>

              <div class="nvd-product-card ">
                <div class="h-[400px] sm:h-[540px] bg-[url('./imgs/favicon/Tra_Oi_Hong.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      <div class="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400"> On sale.</div>
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center mt-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Trà ổi hồng</div>
                  </a>
                  <div class="">
                    <span class="text-xl text-coffee-400">$50.000 vnd</span>
                    <span class="ml-2 text-gray-400 line-through">$70.000 vnd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nvd-subheadline ">
            <div class="nvd-subheadline-deco-line "></div>
            <div class="nvd-subheadline-lable ">more products</div>
<div class="nvd-subheadline-deco-line "></div>
          </div>
          <div class="more-products w-[95%] xl:w-[65%] mx-auto mb-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/FREEZE_CHOCO.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">

                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Socola đá xay</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$80.000 vnd</span>
                  </div>
                </div>
              </div>

              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/FREEZE-TRA-XANH.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      <div class="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400"> On sale.</div>
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Matcha trà xanh</div>
                  </a>
                  <div class="">
                    <span class="text-xl text-coffee-400">$45.000 vnd</span>
                    <span class="ml-2 text-gray-400 line-through">$65.000 vnd</span>
                  </div>
                </div>
              </div>
              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/PHIN_SUA_DA.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
</div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Coffee sữa</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$80.000 vnd</span>
                  </div>
                </div>
              </div>
              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/PNG-0000001808-png-do-uong-highland-coffee.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400"> coffee caramel</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$80.000 vnd</span>
                  </div>
                </div>
              </div>
              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/TRA-SEN-VANG.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
                    </div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Trà sen vàng</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$99.000 vnd</span>
                  </div>
                </div>
              </div>
              <div class="nvd-product-card ">
                <div class="h-[380px] bg-[url('./imgs/favicon/trai-vai.png')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="#">
                    <div class="w-full h-full hover:bg-gray-900 hover:opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group:">
                      <div class="absolute bg-slate-100 text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 group-hsover:block group-hover:animate-fadeIn nvd-button">Đặt ngay</div>
</div>
                  </a>
                </div>
                <div class="text-center my-8">
                  <a href="#" alt="#">
                    <div class="text-xl mb-3 hover:text-coffee-400">Trà vãi khúc bạch</div>
                  </a>
                  <div class="">
                    <span class=" text-gray-500">$75.000 vnd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Product;