import { useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="gBox h-100" >
            <div className="gRow gHeader pb-3">
                <div className="gDflex gDjcsb gDaic">
                    <div>
                        <h5 className="tw_700">Admins</h5>
                    </div>
                    <div>
                        <Button2 title="Add" btnFunction={() => { setShow(true) }} />
                    </div>
                </div>
            </div>
            <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
                <div className="gBox">
                    <div className="gRow gContent w-100" style={{ overflow: 'scroll' }} >
                        <TableCmp />
                    </div>
                </div>
            </div>
            {/* <div className="gRow gFooter pt-3">
                <h1>section 3</h1>
            </div> */}
            <DataModal show={show} setShow={setShow} />
        </div>
    )
}

export default Dashboard;