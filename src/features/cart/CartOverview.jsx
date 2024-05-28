import { Link } from "react-router-dom";
import "./CartOverview.css";

function CartOverview() {
    return (
        <footer>
                <div className="flex items-center justify-between">
                    <p className="logo23">
                        Website bán hàng trực tuyến của Coffe IT <br />
                        hỗ trợ 24/7 cùng nhiều ưu đẫi hấp dẫn <br />
                        Luôn luôn cập nhật mới nhiều sản phẩm.
                    </p>
                    <p className="suport">
                        Hỗ Trợ
                        <br />
                        <li>
                            <Link to="">Về chúng tôi</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="">Điều khoản và điều kiện</Link>
                        </li>
                        <li>
                            <Link to="">Liên hệ với chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="">Giúp đỡ</Link>
                        </li>
                    </p>
                    <p className="service">
                        Dịch Vụ Khách Hàng <br />
                        <li>
                            <Link to="">Phương thức thanh toán</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="">Hoàn tiền</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="">Giao hàng</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="">Điều khoản và bảo mật</Link>
                        </li>
                    </p>
                    <p className="profile">
                        Thông Tin Liên Hệ
                        <br />
                        <li>Tầng 6, Tòa nhà Viettel, 11 Lý Thường Kiệt</li>
                        <br />
                        <li>Nhóm 3</li>
                        <br />
                        <li>thanhnhannguyen190502@gmail.com</li>
                        <br />
                        <li>0859314195</li>
                    </p>
                </div>
            </footer>
    );
}

export default CartOverview;
