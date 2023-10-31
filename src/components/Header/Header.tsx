import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <svg
        className="header"
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="145"
        viewBox="0 0 390 145"
        fill="none"
      >
        <g filter="url(#filter0_d_45_720)">
          <path
            d="M390 25V98.5C390 98.5 310.44 119.5 236.6 119.5C227.76 119.5 224.12 88.5 194.48 88.5C164.84 88.5 161.72 119.5 151.84 119.5C96.1393 119.5 0 98.5 0 98.5V25L390 25Z"
            fill="#FFCAA2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_45_720"
            x="-25"
            y="0"
            width="440"
            height="144.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_45_720"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_45_720"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="header"
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="133"
        viewBox="0 0 390 133"
        fill="none"
      >
        <g filter="url(#filter0_d_45_721)">
          <path
            d="M390 13V86.5C390 86.5 310.44 107.5 236.6 107.5C227.76 107.5 224.12 76.5 194.48 76.5C164.84 76.5 161.72 107.5 151.84 107.5C96.1393 107.5 0 86.5 0 86.5V13L390 13Z"
            fill="#FFF8AA"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_45_721"
            x="-25"
            y="-12"
            width="440"
            height="144.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_45_721"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_45_721"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="header"
        xmlns="http://www.w3.org/2000/svg"
        width="390"
        height="120"
        viewBox="0 0 390 120"
        fill="none"
      >
        <g filter="url(#filter0_d_45_722)">
          <path
            d="M390 0V73.5C390 73.5 310.44 94.5 236.6 94.5C227.76 94.5 224.12 63.5 194.48 63.5C164.84 63.5 161.72 94.5 151.84 94.5C96.1393 94.5 0 73.5 0 73.5V0L390 0Z"
            fill="#A2CED5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_45_722"
            x="-25"
            y="-25"
            width="440"
            height="144.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0 0.854167 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_45_722"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_45_722"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <img
        className="logo-image"
        src="/images/myLittlePadding.webp"
        alt="My Little Padding Logo"
        width="144"
        height="132"
      />
    </HeaderStyled>
  );
};

export default Header;
