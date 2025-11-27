// src/assets/icons/ArrowDown.jsx

export default function ArrowDown({
  width = 7,
  height = 3.2,
  stroke = "#73737C",
  strokeWidth = 1.5,
  rotate = 0,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 3.2"
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
    >
      <path
        d="M0.5 0.5 L3.5 2.7 L6.5 0.5"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
