import React from "react";

export default function Logo({ showText = false }: { showText?: boolean }) {
  return (
    <div className="flex items-center flex-row gap-3">
      <svg
        width="30"
        height="30"
        viewBox="0 0 164 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M164 151C164 158.179 158.18 164 151 164H82.2528C82.1686 164 82.0843 164 82 164C81.9157 164 81.8314 164 81.7472 164H13C5.82032 164 0 158.179 0 151V112.437L13.746 100.533L57.4867 138.412L34.9782 85.107L84.52 55.2124L26.8682 60.147L19.5752 28.8266C34.6157 11.1864 57.0015 0 82 0C127.168 0 163.806 36.5189 163.999 81.6412C163.999 81.6414 163.999 81.6415 164 81.6415C164 81.6415 164 81.6417 164 81.6419V82V151ZM89.2986 135.096C86.7387 141.655 92.1196 147.35 99.1604 147.35H134.35C141.53 147.35 147.35 141.53 147.35 134.35V81.7149C147.35 81.7147 147.35 81.7146 147.35 81.7146C147.35 81.7146 147.35 81.7145 147.35 81.7145C147.35 81.7144 147.35 81.7143 147.35 81.7143C147.196 45.7536 117.997 16.6493 82.0002 16.6493C67.139 16.6493 53.4365 21.6099 42.458 29.9656C52.147 24.3485 63.8298 21.0209 77.4216 22.4771C124.041 27.4721 119.046 66.7024 113.219 86.2658C111.055 93.5297 106.003 102.704 100.867 112.028C96.4935 119.97 92.0593 128.022 89.2986 135.096Z"
          fill="url(#paint0_linear_102_303)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_102_303"
            x1="36.4971"
            y1="8.0578"
            x2="100.012"
            y2="158.312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-white font-medium text-xl">BugsBeacon</span>
      )}
    </div>
  );
}
