import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function SignUp() {
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
      <form>
        <TextField
          sx={{
            width: "100%",
            my: 4,
          }}
          id='outlined-basic'
          label='User Name'
          variant='outlined'
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
        <Button
          variant='contained'
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
