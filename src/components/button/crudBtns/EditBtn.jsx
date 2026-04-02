/* eslint-disable react/prop-types */
import { Button2 } from "../Button2"

import img1 from '../../../assets/icons/edit.png'
import { bgColor } from "../../../styles/colour"

export const EditBtn = ({ btnFunction, btnFunctionArgs }) => {
    return <span style={{ display: 'inline-block', width: 42 }} className="me-2"><Button2 title="" icon={img1} btnFunction={btnFunction} iconHeight={15} btnFunctionArgs={btnFunctionArgs} givenBgColour={bgColor.success} /></span>
}
