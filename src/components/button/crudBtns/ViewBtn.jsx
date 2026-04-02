/* eslint-disable react/prop-types */
import { Button2 } from "../Button2"

import img1 from '../../../assets/icons/view.png'
import { bgColor } from "../../../styles/colour"

export const ViewBtn = ({ btnFunction, btnFunctionArgs }) => {
    return <span style={{ display: 'inline-block', width: 42 }} className="me-2"><Button2 title="" icon={img1} btnFunction={btnFunction} iconHeight={10} btnFunctionArgs={btnFunctionArgs} givenBgColour={bgColor.primary} /></span>
}
