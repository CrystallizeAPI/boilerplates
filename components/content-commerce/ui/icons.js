export const IconUser = ({ fill = "#000", size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke={fill} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle stroke={fill} cx="12" cy="7" r="4"></circle>
  </svg>
);
export const IconCart = ({ fill = "#000", size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle stroke={fill} cx="9" cy="21" r="1"></circle>
    <circle stroke={fill} cx="20" cy="21" r="1"></circle>
    <path
      stroke={fill}
      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    ></path>
  </svg>
);
export const IconSearch = ({ fill = "#000", size = "24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle stroke={fill} cx="11" cy="11" r="8"></circle>
    <line stroke={fill} x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
