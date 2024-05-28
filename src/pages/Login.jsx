import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../ui/Header";

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 120rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
    background-color: var(--color-grey-50);
`;

function Login() {
  return <LoginLayout>
      <GlobalStyles />
      <Header />
      <Logo />
      <Heading as="h4">Đăng nhập tài khoản</Heading>
      <LoginForm  />
    </LoginLayout>
}

export default Login;
