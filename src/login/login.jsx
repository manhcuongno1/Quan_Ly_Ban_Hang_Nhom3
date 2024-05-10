import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { formatCurrency } from '../utils/helpers';  
import "./login.css";

 export  default function Login () {
    return (
        <div className="login-page">
            <div className="login-form-container">
                <h1 className="title"> Đăng nhập</h1>
                <form>
                    <div>
                        <label htmlFor="first-name" className="form-label">
                            Tên người dùng :
                        </label>
                        <input
                        id="firt-name"
                        className="from-control"
                        type="text"
                        name="firtName"
                        />
                    </div>
                    <div>
                    <label htmlFor="password" className="from-label">
                        Mật Khẩu :
                    </label>
                    <input
                    id="password"
                    className="from-control"
                    type="password"
                    name="password"
                    />
                    </div>
                    <button type="sumbit" className="sumbit-btn">
                        Đăng Nhập
                    </button>

                </form>

            </div>

        </div>
    )
    

}