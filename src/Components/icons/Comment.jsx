import React from "react";

export default function Comment({ Csvg, color }) {
  return (
    <div>
      <svg
        viewBox="-4.6 -5.6 27.2 27.2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-4.4"
          y="-5.4"
          width="26.80"
          height="26.80"
          rx="14.4"
          fill={Csvg}
          strokewidth="0"
        />
        <path
          d="M10.705 0.368334L7.24834 0.360001H7.24667C3.60167 0.360001 0.746674 3.21583 0.746674 6.86167C0.746674 10.2767 3.40167 12.8667 6.96751 13.0033V16.1933C6.96751 16.2833 7.00417 16.4317 7.06751 16.5292C7.18584 16.7167 7.38751 16.8183 7.59417 16.8183C7.70917 16.8183 7.82501 16.7867 7.92917 16.72C8.14917 16.58 13.3233 13.27 14.6692 12.1317C16.2542 10.79 17.2025 8.82333 17.205 6.87167V6.8575C17.2 3.21833 14.3467 0.368334 10.705 0.3675V0.368334ZM13.8608 11.1783C12.9158 11.9783 9.80917 14.0158 8.21751 15.0475V12.3917C8.21751 12.0467 7.93834 11.7667 7.59251 11.7667H7.26251C4.21251 11.7667 1.99751 9.70333 1.99751 6.86167C1.99751 3.91667 4.30417 1.61 7.24751 1.61L10.7033 1.61833H10.705C13.6483 1.61833 15.955 3.92333 15.9567 6.865C15.9542 8.45667 15.1717 10.0683 13.8617 11.1783H13.8608Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
