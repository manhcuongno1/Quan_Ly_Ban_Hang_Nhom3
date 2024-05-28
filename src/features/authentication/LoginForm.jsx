import { useState } from "react";
import Button from "../../ui/ButtonAdmin";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import './LoginForm.css';
import { Link } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();    
 

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password }
    ,
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Địa Chỉ Email">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Mật Khẩu">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Đăng Nhập</Button>
      </FormRowVertical>
      <Link to={'/register'} className="register-login">
          <span>Bạn chưa có tài khoản? Đăng kí ngay</span>
      </Link>
      {/* <div>
          <a href='register'>
            <button className='register-button'>Bạn Chưa Có Tài Khoản ? Đăng Kí Ngay</button>
            </a>
          </div> */}
    </Form>
  );
}

export default LoginForm;
