// CustomInput.js
import React from "react";
import Required from "./required";

function RegisterInput({ label, name, register, errors, validationRules , type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="w-full">
        {label} <Required error={errors[name]} />
      </label>
      <input
        {...register(name, validationRules)}
        id={name}
        type={type}
        className={
          errors[name]
            ? "outline-red-600 input input-bordered bg-transparent h-10 w-full"
            : "input input-bordered bg-transparent h-10 w-full"
        }
      />
    
        <span className="text-red-600 h-7 pb-1 font-medium pt-1 text-sm">{errors[name]?.message}</span>
    
    </div>
  );
}

export default RegisterInput;
