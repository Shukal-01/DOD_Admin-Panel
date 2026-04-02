import React from "react";
import { textColor } from "../../styles/colour";

export const Input1 = ({
  icon,
  type,
  givenState,
  givenStateSetter,
  placeholder,
}: {
  icon: string | undefined;
  type: "number" | "text" | "file" | "email" | "password";
  givenState: string | number;
  givenStateSetter: (val: string | number) => void;
  placeholder: string | undefined;
}) => {
  return (
    <div
      style={{ border: "1px solid grey" }}
      className="gDflex p-3 py-3 my-4 rounded"
    >
      <img src={icon} alt="" style={{ width: 20, height: 20 }} />
      <div className=" w-100 ms-3">
        <input
          className="w-100"
          style={{ color: textColor.color1, border: "none", outline: "none" }}
          placeholder={placeholder}
          type={type}
          value={givenState}
          onChange={(e) => {
            givenStateSetter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
