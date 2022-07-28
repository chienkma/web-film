import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function SignUp() {
  const SignInSchema = yup.object().shape({
    userName: yup.string().required("Please enter your user name."),
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
    <Box
      sx={{
        width: 400,
        height: 400,
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "32px" }}>Sign Up</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{
            width: "100%",
            my: 4,
          }}
          id='outlined-basic'
          label='User Name'
          variant='outlined'
          {...register("userName")}
        />
        {errors.userName && <p>{errors.userName.message}</p>}
        <TextField
          sx={{
            width: "100%",
          }}
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button
          variant='contained'
          type='submit'
          sx={{
            mt: "30px",
            width: "100%",
            backgroundColor: "blue!important",
          }}
        >
          Success
        </Button>
      </form>
    </Box>
  );
}

export default SignUp;
