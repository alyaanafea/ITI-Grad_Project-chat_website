
import React from "react";

const LoginInput = ({ label, name, type, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        {...register(name, { required: `${label} is required` })}
      />
   
        <p className="text-red-500">{errors[name]?.message}</p>
      
    </div>
  );
};

export default LoginInput;
