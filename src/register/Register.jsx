import React from "react";
  
import "./register.css";
;

 export  default function Register () {
    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title"> Đăng Kí</h1>
                <form>
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                    <div className="mb-2">
                    <label htmlFor="confirmpassword" className="from-label">
                        Nhập Lại Mật Khẩu :
                    </label>
                    <input
                    id="confirm-password"
                    className="from-control"
                    type="password"
                    name="confirmpassword"
                    
                    />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="number" className="form-label">
                            Số điện thoại:
                        </label>
                        <input
                        id="number"
                        className="from-control"
                        type="text"
                        name="number"
                        
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                        id="email"
                        className="from-control"
                        type="text"
                        name="email"
                        
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address" className="form-label">
                            Địa Chỉ:
                        </label>
                        <input
                        id="address"
                        className="from-control"
                        type="text"
                        name="address"
                        
                        />
                    </div>
                    <button type="sumbit" className="sumbit-btn">
                        Đăng Kí
                    </button>

                </form>

            </div>

        </div>
    )
    

}