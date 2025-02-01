'use client'
import { useState } from "react";
import { BsChat, BsEye, BsEyeSlash } from "react-icons/bs";

type Props = {
  label: string;
  name: string;
  value: string;
  type?: string;
  uppercase?: boolean;
  capitalize?: boolean;
  error: string;
  maxLength?: number;
  labelStyle?: string;
  onChange: (e: any) => any;
  onInput?: (e: any) => any;
};

export default function Input({
  error,
  type,
  label,
  labelStyle,
  onInput,
  name,
  maxLength,
  onChange,
  uppercase,
  capitalize,
  value,
}: Props) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="">
      <p className={`font-semibold capitalize ${labelStyle} text-sm mb-1`}>
        {label}
      </p>
      <div className="h-12 relative shadow-md">
        <input
          maxLength={maxLength ? maxLength : 3000}
          name={name}
          onPaste={onInput}
          type={type === "password" ? visible ? "text": "password" : type || "text"}
          value={value}
          onChange={onChange}
          className={`h-full focus:border-blue-500 ${error && 'border-red-500'} duration-500 w-full text-sm rounded ${
            uppercase && "uppercase"
          }  ${
            capitalize && "capitalize"
          } border-2 bg-transparent outline-none px-2`}
        />
        {type === "password" && (
          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            {visible &&<BsEye onClick={() => setVisible(!visible)} className="cursor-pointer text-lg" />}
            {!visible &&<BsEyeSlash onClick={() => setVisible(!visible)} className="cursor-pointer text-lg" />}
          </div>
        )}
      </div>
      <div
        className={`text-red-500 grid ${
          error ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } duration-500 text-[13px] mt-1.5`}
      >
        <p className="overflow-hidden">{error}</p>
      </div>
    </div>
  );
}
