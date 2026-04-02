import { useEffect, useState } from "react";
import { Button2 } from "../../../../../components/button/Button2";
import { bgColor } from "../../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList, getStateList } from "../../../../../redux/action";
import { textCapitalize } from "../../../../../utils/textFuncs";
import { baseUrl } from "../../../../../data/Urls";
import globalVariable from "../../../../../data/globalVariable";
import { modalTypes } from "../../../../../data/static";

const State = () => {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('Modal');
    const [modalType, setModalType] = useState('');
    const [selectedId, setSelectedId] = useState('');
    // ----------------------------------------------------------------
    // data 
    const dispatch = useDispatch()
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const allState = useSelector((state) => state.stateReducer)
    // <<<<<<<<<<<<<<<<<<<<< extra
    const allCountries = useSelector((state) => state.countryReducer);
    const updateData = () => {
        // >>>>>>>>>>>>>>>>>>>>> update needed
        dispatch(getStateList())
    }
    // ----------------------------------------------------------------
    useEffect(() => {
        if (allState.length === 0) {
            updateData()
        }
        if (allCountries.length === 0) {
            dispatch(getCountryList())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ==============================================================
    // ==============================================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const [name, setname] = useState('')
    const [code, setcode] = useState('')
    const [countryCode, setcountryCode] = useState('')
    const [status, setstatus] = useState('')

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
        code,
        setcode,
        status,
        setstatus,
        countryCode,
        setcountryCode,
        // ==========================
        // <<<<<<<<<<<<<<<<<<<<<< extra 
        allCountries,
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
        setModalTitle(`${textCapitalize(type)} State`);
        setSelectedId(givenValue._id)
        // --------------
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        handleSetValue(givenValue.name, setname, '')
        handleSetValue(givenValue.code, setcode, '')
        handleSetValue(givenValue.status, setstatus, '1')
        handleSetValue(givenValue.countryCode, setcountryCode, allCountries[0] ? allCountries[0]._id : '')
        // ==========================
    }

    const handleDelete = (givenValue) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('are you sure you want to delete!')) {
            // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
            fetch(`${baseUrl}/admin/state/delete/${givenValue._id}`, {
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
                        <h5 className="tw_700">States</h5>
                    </div>
                    <div>
                        <Button2 title="Add" btnFunction={() => { handleEdit({}, modalTypes.add) }} />
                    </div>
                </div>
            </div>
            <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
                <div className="gBox">
                    <div className="gRow gContent w-100" style={{ overflow: 'scroll' }} >
                        <TableCmp data={allState} handleEdit={handleEdit} handleDelete={handleDelete} allCountries={allCountries} />
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

export default State;