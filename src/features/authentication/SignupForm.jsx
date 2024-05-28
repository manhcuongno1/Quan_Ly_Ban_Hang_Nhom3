import { useForm } from "react-hook-form";
import ButtonAdmin from "../../ui/ButtonAdmin";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

 
  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
          // Quay lại tab hiện tại mà không thay đổi đường dẫn
          
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Họ và Tên" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Nhập địa chỉ email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Mật khẩu (Yêu cầu 8 ký tự) "
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Mật khẩu tối thiểu ít nhất 8 ký tự",
            },
          })}
        />
      </FormRow>

      <FormRow label="Nhập lại mật khẩu" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <ButtonAdmin
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Hủy
        </ButtonAdmin>
        <ButtonAdmin disabled={isLoading}>Tạo Tài Khoản Mới</ButtonAdmin>
      </FormRow>
    </Form>
  );
}

export default SignupForm;