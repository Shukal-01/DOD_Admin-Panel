import React from "react";
import { bgColor, textColor } from "../../styles/colour";

export const Button1 = ({
  type,
  title,
  btnFunction,
  btnFunctionArgs,
}: {
  type: "button" | "submit" | undefined;
  title: string;
  btnFunction: (val: any) => any | undefined;
  btnFunctionArgs: any;
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor.color1,
        color: textColor.white,
        borderRadius: 100,
      }}
      className="p-3 w-100"
      type={type ? type : "button"}
      onClick={() => {
        if (btnFunction) {
          btnFunction(btnFunctionArgs);
        }
      }}
    >
      {title}
    </button>
  );
};
