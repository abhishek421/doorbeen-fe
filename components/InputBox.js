import React from "react";

export default function InputBox({ name, placeholder, type, value, onChange, props}) {
  return (
    <div className="my-4">
      <label className="block uppercase mb-2 tracking-wide text-charcoal-darker text-xs font-bold">
        {placeholder}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md shadow-lg p-4 border-0 focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
