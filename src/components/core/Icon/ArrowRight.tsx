import { memo } from 'react'

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="#007EFF"
      viewBox="0 0 28 28"
    >
      <path
        fillRule="evenodd"
        d="M15.17 5.535a.98.98 0 00.002 1.37l4.247 4.292.098.087a.942.942 0 001.251-.09.974.974 0 00.279-.683.97.97 0 00-.281-.687L16.52 5.532l-.098-.086a.946.946 0 00-1.253.089zM4.334 13.039a.965.965 0 00-.835.96c0 .536.428.97.955.97h16.78l-6.063 6.126-.086.099a.98.98 0 00.084 1.271.945.945 0 001.349.003l7.7-7.782.085-.098a.975.975 0 00.123-.958.953.953 0 00-.881-.599H4.454l-.12.008z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default memo(ArrowRight)
