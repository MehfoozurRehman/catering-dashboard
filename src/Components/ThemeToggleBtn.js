import React, { useState } from "react";

export default function ThemeToggleBtn() {
  const [isDark, setIsDark] = useState(false);
  function toggle_theme() {
    var checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        setIsDark(true);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        setIsDark(false);
      }
    });
  }
  return (
    <div className="side__bar__header__right__button">
      <input
        type="checkbox"
        id="switch"
        name="theme"
        className="side__bar__header__right__button__input"
        onChange={toggle_theme}
      />
      <div className="side__bar__header__right__button__content">
        {isDark ? (
          <svg id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle
              id="Ellipse_302"
              data-name="Ellipse 302"
              cx="5"
              cy="5"
              r="5"
              transform="translate(7 7)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_1"
              data-name="Line 1"
              y2="2"
              transform="translate(12 1)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              y2="2"
              transform="translate(12 21)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x2="1.42"
              y2="1.42"
              transform="translate(4.22 4.22)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              x2="1.42"
              y2="1.42"
              transform="translate(18.36 18.36)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="2"
              transform="translate(1 12)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="2"
              transform="translate(21 12)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              y1="1.42"
              x2="1.42"
              transform="translate(4.22 18.36)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_8"
              data-name="Line 8"
              y1="1.42"
              x2="1.42"
              transform="translate(18.36 4.22)"
              fill="none"
              stroke="#f9f9f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.963 19.962">
            <path
              id="moon"
              d="M21,12.79A9,9,0,1,1,11.21,3,7,7,0,0,0,21,12.79Z"
              transform="translate(-2.037 -2)"
              fill="none"
              stroke="#fb6a3b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
