import React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="81"
    height="70"
    fill="none"
    viewBox="0 0 81 70"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M58 42c0 15.464-12.536 28-28 28-12.161 0-22.511-7.752-26.378-18.585A9.981 9.981 0 007 52c1.81 0 3.51-.481 4.975-1.323C15.205 57.377 22.063 62 30 62c11.045 0 20-8.954 20-20s-8.955-20-20-20c-7.937 0-14.794 4.623-18.025 11.323A9.954 9.954 0 007 32a9.981 9.981 0 00-3.378.585C7.49 21.753 17.84 14 30 14c15.464 0 28 12.536 28 28z"
      clipRule="evenodd"
    />
    <circle cx="6" cy="42" r="6" fill="#fff" />
    <circle cx="53" cy="28" r="28" fill="url(#paint0_linear)" />
    <path
      fill="#fff"
      d="M30.13 29.546v17.45c-.024 1.963-.845 2.983-2.386 2.983-1.516 0-2.361-1.007-2.436-2.934h-6.91c-.025 5.867 4.002 8.303 8.899 8.303 5.643 0 9.62-3.38 9.645-8.352v-17.45H30.13z"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="53"
        x2="53"
        y1="0"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.5" />
        <stop offset="1" stopColor="#191919" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
export { Logo };
