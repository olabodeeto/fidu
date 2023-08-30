import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import "./styles.scss";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

type PropT = {
  open: boolean;
  toogle: Function;
};
export default function ContactDialog({ open, toogle }: PropT) {
  const handleClickOpen = () => {
    toogle(true);
  };

  const handleClose = () => {
    toogle(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className=" w-11/2 m-auto lg:w-10/12"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          className="text-center  py-4 mt-4"
        >
          <h2 className="text-3xl lg:text-4xl text-fidu_textColor font-semibold mt-4">
            Contact Us
          </h2>
          <p className="mt-1 font-light text-lg lg:text-base w-9/12 m-auto lg:w-full">
            We are glad to hear from you. Get in touch
          </p>
        </DialogTitle>
        <DialogContent>
          <form className="w-full mt-5">
            <div className="w-full flex flex-col lg:flex-row gap-y-5 items-center gap-4">
              <input
                placeholder="Full Name"
                type="text"
                className="w-full h-14 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor"
              />
              <input
                placeholder="Email Address"
                type="email"
                className="w-full h-14 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor"
              />
            </div>
            <textarea
              placeholder="Your message here"
              className="w-full lg:mt-10 h-32 py-4 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor mt-4"
            ></textarea>
            <div className="w-full  h-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-4 mb-5 mt-12 lg:mt-8">
              <div
                className="py-4 w-full lg:w-3/12 flex justify-center items-center text-fidu_textColor font-semibold bg-gray-100 rounded-md cursor-pointer"
                onClick={handleClose}
              >
                Cancel
              </div>
              <button
                className="py-4 lg:h-12 w-full lg:w-3/12 flex justify-center items-center text-white font-semibold bg-fidu_primary rounded-md"
                onClick={handleClose}
              >
                Send
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
