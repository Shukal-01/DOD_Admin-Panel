/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"
import "./sidebar.css";
import { useEffect, useState } from "react";
import { bgColor, borderColour } from "../../../../styles/colour";
import logo from "../../../../assets/core/dod_logo.png";
import { setHW } from "../../../../styles/gstyle";
import { sideBarData } from "./_sidebarData";
import { SidebarCmp1 } from "./components/SidebarCmp1";
import { SidebarCmp2 } from "./components/SidebarCmp2";

export const Sidebar = ({ sideBar, setSideBar }) => {
  const [isMouseOver, setIsmouseOver] = useState(false);
  const [isUpdatable, setIsupdatable] = useState(false);
  useEffect(() => {
    setIsupdatable(false);
  }, [sideBar]);

  const hideSidebar = () => {
    setSideBar(false);
  };

  const updateMouseOverState = (value) => {
    setIsupdatable(true);
    setIsmouseOver(value);
  };

  return (
    <div
      onMouseEnter={() => {
        updateMouseOverState(true);
      }}
      onMouseLeave={() => {
        updateMouseOverState(false);
      }}
      className={`${sideBar ? "show_sidebar" : "hide_sideBar"} ${
        isUpdatable && (isMouseOver ? "sidebar_mousein" : "")
      } sidebar gHeader gBox sidebar_main_body`}
      style={{
        backgroundColor: bgColor.white,
        borderColor: borderColour.color1,
      }}
    >
      <div
        className={sideBar && "sidebar_close_on_mobile"}
        onClick={hideSidebar}
      ></div>
      <div
        style={{ ...setHW(60), ...{ backgroundColor: bgColor.fentWhite } }}
        className="sidebar_close_on_mobile_above_side gDflex gDjcc gDaic gHeader"
      >
        <img src={logo} style={{ ...setHW(50) }} alt="" />
      </div>
      <div className="sidebar_close_on_mobile_above_side gContent ">
        <div className="overflow_scroll_y h-100">
          <div>
            {sideBarData.map((value, index) => {
              return value.dropDown ? (
                <SidebarCmp2
                  key={index}
                  value={value}
                  setSideBar={setSideBar}
                />
              ) : (
                <SidebarCmp1
                  key={index}
                  value={value}
                  setSideBar={setSideBar}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
