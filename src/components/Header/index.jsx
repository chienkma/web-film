import { AccountCircle, Bookmark, Search } from "@mui/icons-material";
import { ButtonBase, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import SignUp from "../../features/Auth/SignUp";
function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex justify-around items-center bg-[#1b2d3c] h-[65px] text-white'>
      <div>
        <img
          className='w-[100px] h-[30px]'
          src='https://rubee.com.vn/admin/webroot/upload/image/images/logo-mgm.jpg'
        />
      </div>
      <div className='bg-[#273e52] px-[40px] py-[10px] rounded-[20px]'>
        <Search />
        <input
          className='bg-[#273e52] outline-none px-3'
          type='text'
          placeholder='Tim kiem'
        />
      </div>
      <button className='bg-gradient-to-r from-cyan-900 to-blue-700 rounded-[20px] px-[15px] py-[6px]'>
        <Bookmark />
        <span className='px-4'>Phim yeu thich</span>
      </button>
      <button
        onClick={handleClickOpen}
        className='bg-gradient-to-r from-cyan-900 to-blue-700 rounded-[20px] px-[15px] py-[6px]'
      >
        <AccountCircle />
        <span className='px-4'>Dang nhap</span>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <SignUp />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Header;
