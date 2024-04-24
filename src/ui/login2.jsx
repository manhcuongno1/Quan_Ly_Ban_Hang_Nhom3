
function login2 () {
    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title"> Đăng nhập</h1>
                <form>
                    <div>
                        <label htmlFor="first-name" className="form-label">
                            Tên người dùng
                        </label>
                        <input
                        id="firt-name"
                        className="from-control"
                        type="text"
                        name="firtName"
                        />
                    </div>
                    <div>className="mb-2"
                    <label htmlFor="password" className="from-label">
                        Mật Khẩu 
                    </label>
                    <input
                    id="password"
                    className="from-control"
                    type="password"
                    name="password"
                    />
                    </div>

                </form>

            </div>
        </div>       
    )
}
export  default login2 ;