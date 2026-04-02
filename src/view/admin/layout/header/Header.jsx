/* eslint-disable react/prop-types */

import { bgColor, borderColour } from "../../../../styles/colour"
import { setHW } from "../../../../styles/gstyle"
import './header.css'
import menuIcon from '../../../../assets/icons/hambergerMenu.png'
import dummyImg from '../../../../assets/dummy/dummyUser.png'

export const Header = ({ sideBar, setSideBar }) => {
  return (
    <div className="gRow gHeader Header border-bottom" style={{ backgroundColor: bgColor.fentWhite, borderColor: borderColour.color1 }}>
      <div style={{ ...setHW(60) }} className="p-3 ">
        <div className="gDflex gDjcsb gDaic">
          <div>
            <img src={menuIcon} style={{ ...setHW(20) }} className="menuIcon" onClick={() => { setSideBar(!sideBar) }} />
          </div>
          <div>
            <img src={dummyImg} style={{ ...setHW(30) }} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
