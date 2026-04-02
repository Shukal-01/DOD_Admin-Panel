import React from "react";
import { bgColor, textColor } from "../../styles/colour";

export const Button2 = ({
  icon,
  type,
  title,
  btnFunction,
  btnFunctionArgs,
  givenBgColour,
  iconHeight,
}: {
  icon: string;
  type: "button" | "submit" | undefined;
  title: string;
  btnFunction: (val: any) => any;
  btnFunctionArgs: any;
  givenBgColour: string | undefined;
  iconHeight: number | undefined;
}) => {
  return (
    <button
      style={{
        backgroundColor: givenBgColour ? givenBgColour : bgColor.btnColor,
        color: textColor.white,
        borderRadius: 10,
        border: "none",
      }}
      className="p-2 px-3 w-100"
      type={type ? type : "button"}
      onClick={() => {
        btnFunction(btnFunctionArgs);
      }}
    >
      {icon && <img src={icon} height={iconHeight ? iconHeight : 20} />}
      {title}
    </button>
  );
};
