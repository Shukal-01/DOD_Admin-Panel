/* eslint-disable react/prop-types */
import { textColor } from "../../../../../styles/colour";
import { SidebarCmp1 } from "./SidebarCmp1";
import { useState } from "react";

import dropdownImg from "../../../../../assets/icons/svgs/dropdown.svg";

export const SidebarCmp2 = ({ value, setSideBar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={() => {
          handleClick();
        }}
        className={`${
          isOpen ? "selected_sidebar_dropdown" : ""
        } gCPointer p-3 py-2`}
      >
        <div
          className="gDflex gDaic mainSidebar gDjcsb"
          style={{ minWidth: 175 }}
        >
          <div>
            <span style={{ width: 25, textAlign: "center" }}>
              <img src={value.icon} height={19} />
            </span>
            <span
              className="tw_500 ps-3"
              style={{ ...{ color: textColor.sideBarTextColor } }}
            >
              {value.name}
            </span>
          </div>
          <span style={{ width: 25, textAlign: "center" }}>
            <img
              className={`sidebar_dropdown_direction ${
                isOpen ? "rotate_50" : ""
              }`}
              src={dropdownImg}
              height={13}
            />
          </span>
        </div>
      </div>
      <div
        className={
          isOpen ? "sidebar_dropdown_shown pt-2" : "sidebar_dropdown_hidden"
        }
      >
        {value.dropDown.map((value2, index2) => {
          return (
            <SidebarCmp1 key={index2} value={value2} setSideBar={setSideBar} />
          );
        })}
      </div>
    </div>
  );
};
