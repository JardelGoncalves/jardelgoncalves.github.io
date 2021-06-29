import { memo } from 'react'

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        stroke="#007EFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5.686 12.325h14M12.685 5.325l7 7-7 7"
      ></path>
    </svg>
  )
}

export default memo(ArrowRight)
