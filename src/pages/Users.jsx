import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
    
      <Heading as="h1">Thêm 1 tài khoản admin mới</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;