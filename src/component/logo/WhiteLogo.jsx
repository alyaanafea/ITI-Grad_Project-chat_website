/* eslint-disable react/prop-types */

export default function WhiteLogo(props) {
  const { w = "217", h = "235" } = props;
  return (
    <svg
      // className={`md:w-36 lg:w-60` }
      width={w}
      height={h}
      viewBox="0 0 217 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_65)">
        <path
          d="M-0.0654297 16.7858H216.553L176.245 97.8887L158.158 63.935L164.938 49.2288L126.139 49.9842L126.512 199.358L108.239 235.187L90.3388 202.361V50.3572L51.9214 48.8465L58.7015 62.0512L40.2426 99.3901L-0.0654297 16.7858Z"
          fill="white"
        />
        <path
          d="M151.75 78.2679L169.082 111.839C159.033 132.206 148.993 152.582 138.944 172.949C138.823 149.439 138.693 125.921 138.572 102.411L151.75 78.2679Z"
          fill="url(#paint0_linear_25_65)"
        />
        <path
          d="M65.1094 78.2679L78.6695 103.167V175.97L46.6504 112.977L65.1094 78.2679Z"
          fill="url(#paint1_linear_25_65)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_25_65"
          x1="153.827"
          y1="78.2679"
          x2="144.207"
          y2="173.329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_25_65"
          x1="62.66"
          y1="78.2679"
          x2="62.66"
          y2="175.97"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="clip0_25_65">
          <rect width="217" height="235" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
