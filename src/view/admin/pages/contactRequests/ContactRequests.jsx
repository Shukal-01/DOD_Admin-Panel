import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import { getContactRequestList } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";

const ContactRequests = () => {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('Modal');
    const [modalType, setModalType] = useState('');
    const [selectedId, setSelectedId] = useState('');
    // ----------------------------------------------------------------
    // data 
    const dispatch = useDispatch()
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const allContactRequest = useSelector((state) => state.contactRequestReducer)
    const updateData = () => {
        // >>>>>>>>>>>>>>>>>>>>> update needed
        dispatch(getContactRequestList())
    }
    // ----------------------------------------------------------------
    useEffect(() => {
        if (allContactRequest.length === 0) {
            updateData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ==============================================================
    // ==============================================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const [name, setname] = useState('')

    const [phone, setphone] = useState('')

    const [department, setdepartment] = useState('')

    const [medicalRecord, setmedicalRecord] = useState('')

    const [date, setdate] = useState('')

    const [time, settime] = useState('')

    const [reason, setreason] = useState('')

    const [status, setstatus] = useState('')

    const [created, setcreated] = useState('')

    // ==============================================================
    // ==============================================================

    const data = {
        modalTitle,
        selectedId,
        updateData,
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        name,
        setname,
        phone,
        setphone,
        department,
        setdepartment,
        medicalRecord,
        setmedicalRecord,
        date,
        setdate,
        time,
        settime,
        reason,
        setreason,
        status,
        setstatus,
        created,
        setcreated,
        // ==========================
    }


    // ---------------------- crud ----------------------

    const handleSetValue = (givenValue, givenValueSetter, alternate) => {
        if (givenValue && givenValue !== '') {
            givenValueSetter(givenValue)
        } else {
            givenValueSetter(alternate)
        }
    }
    const handleEdit = (givenValue, type) => {
        setModalType(type);
        setShow(true);
        // >>>>>>>>>>>>>>>>>>>>> update needed
        setModalTitle(`${textCapitalize(type)} Contact Requests`);
        setSelectedId(givenValue._id)
        // --------------
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        handleSetValue(givenValue.name, setname, '')
        handleSetValue(givenValue.phone, setphone, '')
        handleSetValue(givenValue.department, setdepartment, '')
        handleSetValue(givenValue.medicalRecord, setmedicalRecord, '')
        handleSetValue(givenValue.date, setdate, '')
        handleSetValue(givenValue.time, settime, '')
        handleSetValue(givenValue.reason, setreason, '')
        handleSetValue(givenValue.status, setstatus, '')
        handleSetValue(givenValue.created, setcreated, '')

        // ==========================
    }

    const handleDelete = (givenValue) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('are you sure you want to delete!')) {
            // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
            fetch(`${baseUrl}/admin/contact_request/delete/${givenValue._id}`, {
                method: 'DELETE',
                headers: new Headers({
                    Authorization: `Bearer ${globalVariable.accessToken}`,
                }),
            })
                .then((v) => v.json())
                .then((v) => {
                    if (v.message === 'success') {
                        alert('deleted successfully')
                    } else {
                        alert(v.detail ? v.detail : 'Something Went Wrong!')
                    }
                    updateData()
                })
                .catch((error) => {
                    console.log('subadmins.jsx : handleDelete : 74');
                    console.log(error);
                    alert('something went wrong! Try again.')
                })
        }
    }

    // ---------------------- crud ----------------------

    return (
        <div className="gBox h-100" >
            <div className="gRow gHeader pb-3">
                <div className="gDflex gDjcsb gDaic">
                    <div>
                        {/* >>>>>>>>>>>>>>>>>>>>> update needed */}
                        <h5 className="tw_700">Contact Requests</h5>
                    </div>
                    <div>
                        <Button2 title="Add" btnFunction={() => { handleEdit({}, modalTypes.add) }} />
                    </div>
                </div>
            </div>
            <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
                <div className="gBox">
                    <div className="gRow gContent w-100" style={{ overflow: 'scroll' }} >
                        <TableCmp data={allContactRequest} handleEdit={handleEdit} handleDelete={handleDelete} />
                    </div>
                </div>
            </div>
            {/* <div className="gRow gFooter pt-3">
                <h1>section 3</h1>
            </div> */}
            <DataModal show={show} setShow={setShow} data={data} modalType={modalType} />
        </div>
    )
}

export default ContactRequests;