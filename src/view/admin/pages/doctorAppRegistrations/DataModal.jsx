/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { baseUrl } from '../../../../data/Urls';
import globalVariable from '../../../../data/globalVariable';

function DataModal({ show, setShow, data }) {

    const handleClose = () => setShow(false);

    const approveRequest = (newStatus) => {
        const url = `${baseUrl}/admin/doctorregistration/update/${data.selectedId}`
        const bodyData = new FormData()
        bodyData.append('status', newStatus)

        fetch(url, {
            method: 'PUT',
            body: bodyData,
            headers: new Headers({
                Authorization: `Bearer ${globalVariable.accessToken}`,
            }),
        })
            .then((v) => v.json())
            .then((response) => {
                if (response.message === 'success') {
                    alert('Updated successfully!')
                    handleClose();
                    data.updateData();
                } else {
                    alert('something went wrong')
                }
            })
            .catch((err) => {
                alert('something went wrong 2')
                console.log('====================================')
                console.log(err.message)
                console.log('====================================')
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
                    <Form  >
                        {/* =============================================================== */}
                        {/* // >>>>>>>>>>>>>>>>>>>>> update needed */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" value={data.name} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>mobileNumber</Form.Label>
                            <Form.Control type="number" value={data.mobileNumber} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>status</Form.Label>
                            <Form.Control type="text" value={data.status} onChange={() => { }} placeholder="" />
                        </Form.Group> */}

                        {/* ------------------ */}


                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>department</Form.Label>
                            <Form.Control type="text" value={data.department} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>professionalEmailAddress</Form.Label>
                            <Form.Control type="text" value={data.professionalEmailAddress} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>specialization</Form.Label>
                            <Form.Control type="text" value={data.specialization} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>experience</Form.Label>
                            <Form.Control type="text" value={data.experience} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>education</Form.Label>
                            <Form.Control type="text" value={data.education} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>workAddress</Form.Label>
                            <Form.Control type="text" value={data.workAddress} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>workPlaceName</Form.Label>
                            <Form.Control type="text" value={data.workPlaceName} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>city</Form.Label>
                            <Form.Control type="text" value={data.city} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>state</Form.Label>
                            <Form.Control type="text" value={data.state} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>country</Form.Label>
                            <Form.Control type="text" value={data.country} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>languagesSpoken</Form.Label>
                            <Form.Control type="text" value={data.languagesSpoken} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>experienceDescription</Form.Label>
                            <Form.Control as={'textarea'} type="text" value={data.experienceDescription} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}


                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>aboutDescription</Form.Label>
                            <Form.Control as={'textarea'} type="text" value={data.aboutDescription} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}




                        {/* =============================================================== */}


                        {/* -------------- */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type='button' variant="danger" onClick={() => { approveRequest('reject') }}>
                                Reject
                            </Button>
                            <Button type='button' variant="primary" onClick={() => { approveRequest('verified') }}>
                                Approve
                            </Button>
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