"use client";

import { useFormikContext } from "formik";
import React, { useState } from "react";

import { RiEyeCloseFill, RiEyeCloseLine } from "@remixicon/react";
import { Input } from "@heroui/input";

export default function InputField({
  name,
  label,
  type,
  placeholder,
  startContent,
}) {
  const { values, handleBlur, handleChange, errors, touched } =
    useFormikContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : type;
  return (
    <div className='flex flex-col gap-1 w-full'>
      <Input
        variant='bordered'
        type={inputType}
        label={label}
        labelPlacement='outside-top'
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[name]}
        name={name}
        id={name}
        className='bg-foreground-100 text-foreground-900 p-4 rounded-md'
        startContent={startContent}
        endContent={
          type === "password" && (
            <button
              type='button'
              className='focus:outline-none text-foreground-500'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <RiEyeCloseFill size={20} />
              ) : (
                <RiEyeCloseLine size={20} />
              )}
            </button>
          )
        }
      />

      {touched[name] && errors[name] ? (
        <div className='mt-2 text-danger'>{errors[name]}</div>
      ) : null}
    </div>
  );
}
