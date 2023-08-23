import React from "react";

type PropT = {
  isChecked: boolean;
  setisChecked: Function;
};

export default function Fiducheckbox({ isChecked, setisChecked }: PropT) {
  const uncheck = () => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setisChecked(!isChecked)}
        className="cursor-pointer"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const checked = () => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setisChecked(!isChecked)}
        className="cursor-pointer"
      >
        <path
          d="M16 3C8.83187 3 3 8.83187 3 16C3 23.1681 8.83187 29 16 29C23.1681 29 29 23.1681 29 16C29 8.83187 23.1681 3 16 3ZM22.7656 11.6431L14.3656 21.6431C14.2735 21.7529 14.1588 21.8415 14.0294 21.9031C13.9 21.9647 13.7589 21.9977 13.6156 22H13.5988C13.4586 21.9999 13.32 21.9704 13.192 21.9134C13.064 21.8563 12.9494 21.773 12.8556 21.6688L9.25562 17.6688C9.1642 17.5718 9.09308 17.4575 9.04644 17.3327C8.99981 17.2078 8.9786 17.0749 8.98407 16.9417C8.98953 16.8086 9.02156 16.6778 9.07827 16.5572C9.13498 16.4366 9.21523 16.3286 9.31429 16.2394C9.41336 16.1503 9.52925 16.0818 9.65515 16.0381C9.78105 15.9944 9.91442 15.9763 10.0474 15.9848C10.1804 15.9934 10.3104 16.0284 10.4296 16.0879C10.5489 16.1474 10.655 16.2301 10.7419 16.3312L13.5725 19.4762L21.2344 10.3569C21.4062 10.1582 21.6494 10.0351 21.9113 10.0142C22.1732 9.99335 22.4327 10.0764 22.6339 10.2454C22.8351 10.4143 22.9617 10.6557 22.9863 10.9172C23.0109 11.1788 22.9317 11.4395 22.7656 11.6431Z"
          fill="#E08816"
        />
      </svg>
    );
  };

  return <div>{isChecked ? checked() : uncheck()}</div>;
}
