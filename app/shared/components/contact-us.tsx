import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

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
        className="-mt-40 w-11/2 m-auto lg:w-10/12"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          className="text-center  py-4 mt-4"
        >
          <h2 className="text-2xl lg:text-4xl text-fidu_textColor font-semibold">
            Contact Us
          </h2>
          <p className="mt-1 font-light text-base w-10/12 m-auto lg:w-full">
            We are glad to hear from you. Get in touch
          </p>
        </DialogTitle>
        <DialogContent>
          <form className="w-full mt-5">
            <div className="w-full flex flex-col lg:flex-row gap-y-4 items-center gap-4">
              <input
                placeholder="Full Name"
                type="text"
                className="w-full h-12 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor"
              />
              <input
                placeholder="Email Address"
                type="email"
                className="w-full h-12 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor"
              />
            </div>
            <textarea
              placeholder="Your message here"
              className="w-full mt-2 lg:mt-10 h-32 py-4 rounded-md bg-gray-50 px-4 outline-none border border-gray-100 focus:border-fidu_primary placeholder:text-fidu_textColor"
            ></textarea>
            <div className="w-full  h-12 flex justify-center items-center gap-4 mb-5 mt-8">
              <div
                className="h-12 w-5/12 lg:w-3/12 flex justify-center items-center text-fidu_textColor font-semibold bg-gray-100 rounded-full"
                onClick={handleClose}
              >
                Cancel
              </div>
              <button
                className="h-12 w-5/12 lg:w-3/12 flex justify-center items-center text-white font-semibold bg-fidu_primary rounded-full pt-1"
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
