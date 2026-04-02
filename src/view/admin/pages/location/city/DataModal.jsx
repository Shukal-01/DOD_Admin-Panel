/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { fetchMethods, modalTypes } from '../../../../../data/static';
import { baseUrl } from '../../../../../data/Urls';
import globalVariable from '../../../../../data/globalVariable';
function DataModal({ show, setShow, data, modalType }) {

    const handleClose = () => setShow(false);

    const handleSave = (e) => {
        e.preventDefault();
        let form_data = new FormData()


        // ============================================
        // ============================================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        const addUrl = `${baseUrl}/admin/city/add`;
        const editUrl = `${baseUrl}/admin/city/update/${data.selectedId}`
        form_data.append('name', data.name)
        form_data.append('code', data.code)
        form_data.append('countryCode', data.countryCode)
        form_data.append('stateCode', data.stateCode)
        form_data.append('status', data.status)
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
                            <Form.Control type="text" name="name" value={data.name} onChange={(e) => { data.setname(e.target.value) }} placeholder="Enter Name" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" name="code" value={data.code} onChange={(e) => { data.setcode(e.target.value) }} placeholder="Enter Code for country" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Country</Form.Label>

                            {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
                            <Form.Select required value={data.countryCode}
                                onChange={(e) => {
                                    data.setcountryCode(e.target.value)
                                    data.setstateCode('')
                                }} name='countryCode'>
                                {data.allCountries[0] && data.allCountries.map((value, index) => {
                                    return <option key={index} value={value._id}>{value.name}</option>
                                })
                                }
                            </Form.Select>
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>State</Form.Label>

                            {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
                            {data.countryCode && <Form.Select required value={data.stateCode}
                                onChange={(e) => {
                                    data.setstateCode(e.target.value)
                                }} name='stateCode'>
                                <option value='' >Select State</option>
                                {data.allStates[0] && data.allStates.filter(value => value.countryCode === data.countryCode).map((value, index) => {
                                    return <option key={index} value={value._id}>{value.name}</option>
                                })
                                }
                            </Form.Select>}
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>

                            {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
                            <Form.Select value={data.status}
                                onChange={(e) => {
                                    data.setstatus(e.target.value)
                                }} name='status'>
                                <option value="1">Active</option>
                                <option value="0">InActive</option>
                            </Form.Select>
                        </Form.Group>

                        {/* ------------------ */}
                        {/* =============================================================== */}


                        {/* -------------- */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {(modalType === modalTypes.edit || modalType === modalTypes.add) &&
                                <Button type='submit' variant="primary"  >
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