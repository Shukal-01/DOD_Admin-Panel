import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";

const Subadmins = () => {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('Modal');
    const [modalType, setModalType] = useState('');
    const [selectedId, setSelectedId] = useState('');
    // ----------------------------------------------------------------
    // data 
    const dispatch = useDispatch()
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const allUser = useSelector((state) => state.userReducer)
    const updateData = () => {
        // >>>>>>>>>>>>>>>>>>>>> update needed
        dispatch(getUsersList())
    }
    // ----------------------------------------------------------------
    useEffect(() => {
        if (allUser.length === 0) {
            // >>>>>>>>>>>>>>>>>>>>> update needed
            dispatch(getUsersList())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ==============================================================
    // ==============================================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const [name, setname] = useState('')
    const [image, setimage] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [employeeId, setemployeeId] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [designation, setdesignation] = useState('')
    const [role, setrole] = useState([])


    // ==================== role related methods =================
    const handleCheckBoxChange = (item) => {
        let prevRole = role
        if (role[0][item]) {
            delete prevRole[0][item]
        } else {
            prevRole[0][item] = []
        }
        setrole(prevRole)

    }
    const handleCheckBoxChange2 = (item, value) => {
        let prevRole = role
        if (role[0][item]) {
            if (role[0][item].includes(value)) {
                prevRole[0][item] = prevRole[0][item].filter((value1) => {
                    return value1 !== value
                })
            } else {
                prevRole[0][item].push(value)
            }
            setrole(prevRole)
        }

    }
    // ==================== role related methods =================
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
        image,
        setimage,
        email,
        setemail,
        password,
        setpassword,
        employeeId,
        setemployeeId,
        mobileNumber,
        setmobileNumber,
        designation,
        setdesignation,
        role,
        setrole,
        // ==========================
    }


    // ---------------------- crud ----------------------

    const handleSetValue = (givenValue, givenValueSetter, alternate) => {
        if (givenValue && givenValue !== '') {
            givenValueSetter(givenValue)
            console.log(givenValue);
        } else {
            givenValueSetter(alternate)
            console.log(alternate);
        }
    }
    const handleEdit = (givenValue, type) => {
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        handleSetValue(givenValue.name, setname, '')
        handleSetValue(givenValue.image, setimage, '')
        handleSetValue(givenValue.email, setemail, '')
        handleSetValue(undefined, setpassword, '')
        handleSetValue(givenValue.employeeId, setemployeeId, '')
        handleSetValue(givenValue.mobileNumber, setmobileNumber, '')
        handleSetValue(givenValue.designation, setdesignation, '')
        handleSetValue(givenValue.role, setrole, [{}])

        // ==========================
        // --------------
        setModalType(type);
        setShow(true);
        // >>>>>>>>>>>>>>>>>>>>> update needed
        setModalTitle(`${textCapitalize(type)} Sub Admin`);
        setSelectedId(givenValue._id)

    }

    const handleDelete = (givenValue) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('are you sure you want to delete!')) {
            // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
            fetch(`${baseUrl}/admin/user/delete/${givenValue._id}`, {
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
                        <h5 className="tw_700">Admins</h5>
                    </div>
                    <div>
                        <Button2 title="Add" btnFunction={() => { handleEdit({}, modalTypes.add) }} />
                    </div>
                </div>
            </div>
            <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
                <div className="gBox">
                    <div className="gRow gContent w-100" style={{ overflow: 'scroll' }} >
                        <TableCmp data={allUser} handleEdit={handleEdit} handleDelete={handleDelete} />
                    </div>
                </div>
            </div>
            {/* <div className="gRow gFooter pt-3">
                <h1>section 3</h1>
            </div> */}
            <DataModal show={show} setShow={setShow} data={data} modalType={modalType} handleCheckBoxChange={handleCheckBoxChange} handleCheckBoxChange2={handleCheckBoxChange2} />
        </div>
    )
}

export default Subadmins;