import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignIn() {
  const SignInSchema = yup.object().shape({
    userName: yup.string().required("Please enter your user name."),

    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter an valid email address."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least six characters."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit = (data) => {
    console.log("Information:", data);
  };

  return (
    <div>
      <h3 className='text-blue-500'>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>User Name</label>
          <input {...register("userName")} />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <input type='submit' value='Register' />
      </form>
    </div>
  );
}

export default SignIn;
