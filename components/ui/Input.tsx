import React from "react";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      className={`px-3 py-2 rounded bg-slate-700 text-white ${props.className || ""}`}
    />
  );
}
