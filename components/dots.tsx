import React from "react";

export default function Dots() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern
          id="dotted-pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="black"></circle>
        </pattern>
        <mask id="dots-mask">
          <rect width="100%" height="100%" fill="white"></rect>
          <rect width="100%" height="100%" fill="url(#dotted-pattern)"></rect>
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="hsl(var(--background))"
        mask="url(#dots-mask)"
      ></rect>
    </svg>
  );
}
