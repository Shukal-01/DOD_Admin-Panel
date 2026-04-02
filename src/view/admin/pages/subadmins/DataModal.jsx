/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { fetchMethods, modalTypes } from '../../../../data/static';
import { baseUrl } from '../../../../data/Urls';
import globalVariable from '../../../../data/globalVariable';
import { useRef, useState } from 'react';

const RenderCheckBox = ({ allRoles, dataArr, handleCheckBoxChange, handleCheckBoxChange2 }) => {
    const [update, setUpdate] = useState(false)

    return (
        <div>
            {allRoles.map((value, index) => {
                return (
                    <div key={index}>

                        <Form.Group className="mb-1" controlId="formBasicCheckbox">
                            <Form.Check label={value} type="checkbox" onChange={() => {
                                handleCheckBoxChange(value)
                                setUpdate(!update)
                            }} checked={dataArr[0][value] ? true : false} />
                        </Form.Group>
                        {dataArr[0][value] && (
                            // <RenderCheckBoxData
                            //   processData={['view', 'add', 'update', 'delete']}
                            //   currentItem={value}
                            //   currentItemArray={dataArr[0][value]}
                            //   handleCheckBoxChange2={handleCheckBoxChange2}
                            // />
                            <div className="pb-3 px-3">
                                {['view', 'add', 'update', 'delete'].map((value1, index1) => {
                                    return (
                                        <Form.Group key={index1} className="mb-1" controlId="formBasicCheckbox"   >
                                            <Form.Check label={value1} type="checkbox" checked={dataArr[0][value].includes(value1) ? true : false}
                                                onChange={() => {
                                                    handleCheckBoxChange2(value, value1)
                                                    // setupdateRenderCheckBoxData(!updateRenderCheckBoxData)
                                                    setUpdate(!update)
                                                }} />
                                        </Form.Group>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}


function DataModal({ show, setShow, data, modalType, handleCheckBoxChange, handleCheckBoxChange2 }) {
    let imageRef1 = useRef()

    const handleClose = () => setShow(false);

    const handleSave = (e) => {
        e.preventDefault();
        let form_data = new FormData()


        // ============================================
        // ============================================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        const addUrl = `${baseUrl}/admin/user/add`;
        const editUrl = `${baseUrl}/admin/user/update/${data.selectedId}`
        form_data.append('name', data.name)
        form_data.append('image', imageRef1.current.files[0])
        form_data.append('email', data.email)
        form_data.append('password', data.password)
        form_data.append('employeeId', data.employeeId)
        form_data.append('mobileNumber', data.mobileNumber)
        form_data.append('designation', data.designation)
        form_data.append('role', JSON.stringify(data.role))
        form_data.append('userId', JSON.parse(sessionStorage.getItem('admin_access_details'))._id)

        // ============================================
        // ============================================

        let url;
        let method;

        if (modalType === modalTypes.add) {
            url = addUrl
            method = fetchMethods.post;
        } else {
            url = editUrl
            method = fetchMethods.put;
        }

        fetch(url, {
            method: method,
            body: form_data,
            headers: new Headers({
                Authorization: `Bearer ${globalVariable.accessToken}`,
            }),
        })
            .then((v) => v.json())
            .then((v) => {
                if (v.message === 'success') {
                    if (modalType === modalTypes.add) {
                        alert('Created successfully!')
                    } else if (modalType === modalTypes.edit) {
                        alert('Updated successfully!')
                    }
                    handleClose();
                    data.updateData();
                } else {
                    alert(v.detail ? v.detail : 'Something Went Wrong!')
                }
            })
            .catch((err) => {
                console.log('====================================')
                console.log(err.message)
                console.log('subadmin / datamodal : 60');
                console.log('====================================')
                alert('Something Went Wrong!')
            })

    }




    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* ======================= */}
                    <Form onSubmit={handleSave}>
                        {/* =============================================================== */}
                        {/* // >>>>>>>>>>>>>>>>>>>>> update needed */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={data.name} onChange={(e) => { data.setname(e.target.value) }} placeholder="Enter Name" />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>image</Form.Label>

                            <Form.Control ref={imageRef1} type="file" placeholder="Enter Name" name='image' />
                            <img className="form-img py-2" height={150} src={data.image} alt="" name="name" />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>

                            <Form.Control type="text" value={data.email} onChange={(e) => { data.setemail(e.target.value) }} placeholder="Enter Name" name='email' />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>password</Form.Label>

                            <Form.Control type="text" value={data.password} onChange={(e) => { data.setpassword(e.target.value) }} placeholder="Enter Name" name='password' />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>employeeId</Form.Label>

                            <Form.Control type="text" value={data.employeeId} onChange={(e) => { data.setemployeeId(e.target.value) }} placeholder="Enter Name" name='employeeId' />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>mobileNumber</Form.Label>

                            <Form.Control type="text" value={data.mobileNumber} onChange={(e) => { data.setmobileNumber(e.target.value) }} placeholder="Enter Name" name='mobileNumber' />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>designation</Form.Label>

                            <Form.Control type="text" value={data.designation} onChange={(e) => { data.setdesignation(e.target.value) }} placeholder="Enter Name" name='designation' />
                        </Form.Group>
                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>designation</Form.Label>
                            {data.role &&
                                <RenderCheckBox
                                    allRoles={JSON.parse(sessionStorage.getItem('AllRolesList'))}
                                    dataArr={data.role}
                                    handleCheckBoxChange={handleCheckBoxChange}
                                    handleCheckBoxChange2={handleCheckBoxChange2}
                                />
                            }
                        </Form.Group>
                        {/* ------------------ */}

                        {/* =============================================================== */}


                        {/* -------------- */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {(modalType === modalTypes.edit || modalType === modalTypes.add) &&
                                <Button type='submit' variant="primary" onClick={handleClose}>
                                    Save
                                </Button>
                            }
                        </Modal.Footer>

                        {/* -------------- */}
                    </Form>
                    {/* ======================= */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DataModal;