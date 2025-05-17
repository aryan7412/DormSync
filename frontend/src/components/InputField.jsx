// src/components/InputField.jsx
import React from "react";

function InputField({ label, type, placeholder }) {
  return (
    <div className="flex flex-col mb-6">
      <label className="mb-2 text-[#39d5ff] font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#121212] text-white border border-[#2a2a2a] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#39d5ff] transition-all duration-300"
      />
    </div>
  );
}

export default InputField;
