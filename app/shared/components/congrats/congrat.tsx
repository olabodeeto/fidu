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
import { toast } from "react-toastify";
import Image from "next/image";

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
export default function CongratDialog({ open, toogle }: PropT) {
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
            Congratulations!
          </h2>
          <p className="mt-1 font-light text-lg lg:text-base w-9/12 m-auto lg:w-7/12">
            Thank you for joining the Fidu waitlist! We are excited to have you
            on this journey. Now check your email, we got something for you
          </p>
        </DialogTitle>
        <DialogContent>
          <div className="flex justify-center items-center">
            <Image
              src="./images/congrats.svg"
              alt=""
              width={250}
              height={350}
            />
          </div>

          <div className="w-full  h-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-4 mb-5 mt-12 lg:mt-14">
            <button
              className="py-4 lg:h-12 w-full lg:w-3/12 flex justify-center items-center text-white font-semibold bg-fidu_primary rounded-md"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
