import { TTextInputComp } from "@/app/types";
import React from "react";

const TextInput = ({
  string,
  placeholder,
  error,
  inputType,
  onUpdate,
}: TTextInputComp) => {
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        className="
                block
                w-full
                bg-[#F1F1F2]
                text-gray-800
                border
                border-gray-300
                rounded-md
                py-2.5
                px-3
                focus:outline-none
            "
        value={string || ""}
        onChange={(event) => onUpdate(event.target.value)}
        autoComplete="off"
      />
      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : null}
      </div>
    </>
  );
};

export default TextInput;
