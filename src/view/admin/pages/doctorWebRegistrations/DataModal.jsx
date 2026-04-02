/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { baseUrl } from '../../../../data/Urls';
import globalVariable from '../../../../data/globalVariable';

function DataModal({ show, setShow, data }) {

    const handleClose = () => setShow(false);



    const approveRequest = (newStatus) => {
        const url = `${baseUrl}/admin/webdoctorregistration/update/${data.selectedId}`
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
                    if (response.message === 'success') {
                        alert('Updated successfully!')
                        handleClose();
                        data.updateData();
                    } else {
                        alert('something went wrong')
                    }
                } else {
                    alert('something went wrong')
                }
            })
            .catch((err) => {
                alert('something went wrong')
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
                            <Form.Label>profilePicture</Form.Label>
                            <div>
                                <img className="form-img py-2" height={150} src={data.profilePicture} alt="" name="name" />
                                {!data.profilePicture && <div className='text-danger'>not Given</div>}
                            </div>
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" value={data.fullName} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>mobileNumber</Form.Label>
                            <Form.Control type="text" value={data.phoneNumber} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>specializations</Form.Label>
                            <Form.Control type="text" value={data.specializations} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ----------------------------------------------------------------- */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>gender</Form.Label>
                            <Form.Control type="text" value={data.gender} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>dateOfBirth</Form.Label>
                            <Form.Control type="text" value={data.dateOfBirth} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}

                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>emailAddress</Form.Label>
                            <Form.Control type="text" value={data.emailAddress} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>officeAddress</Form.Label>
                            <Form.Control type="text" value={data.officeAddress} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>consultationHours</Form.Label>
                            <Form.Control type="text" value={data.consultationHours} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>emergencyContactInformation</Form.Label>
                            <Form.Control type="text" value={data.emergencyContactInformation} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>medicalLicenseNumber</Form.Label>
                            <Form.Control type="text" value={data.medicalLicenseNumber} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>yearsOfExperience</Form.Label>
                            <Form.Control type="text" value={data.yearsOfExperience} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>currentWorkplace</Form.Label>
                            <Form.Control type="text" value={data.currentWorkplace} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>consultationFees</Form.Label>
                            <Form.Control type="text" value={data.consultationFees} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>availability</Form.Label>
                            <Form.Control type="text" value={data.availability} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>telemedicineAvailability</Form.Label>
                            <Form.Control type="text" value={data.telemedicineAvailability} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>medicalSchool</Form.Label>
                            <Form.Control type="text" value={data.medicalSchool} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>graduationYear</Form.Label>
                            <Form.Control type="text" value={data.graduationYear} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>postgraduateTraining</Form.Label>
                            <Form.Control type="text" value={data.postgraduateTraining} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>boardCertifications</Form.Label>
                            <Form.Control type="text" value={data.boardCertifications} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>additionalCoursesAndCertifications</Form.Label>
                            <Form.Control type="text" value={data.additionalCoursesAndCertifications} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>previousWorkplaces</Form.Label>
                            <Form.Control type="text" value={data.previousWorkplaces} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>yearsOfPracticeInEachWorkplace</Form.Label>
                            <Form.Control type="text" value={data.yearsOfPracticeInEachWorkplace} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>positionsHeld</Form.Label>
                            <Form.Control type="text" value={data.positionsHeld} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>areasOfExpertise</Form.Label>
                            <Form.Control type="text" value={data.areasOfExpertise} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>proceduresPerformed</Form.Label>
                            <Form.Control type="text" value={data.proceduresPerformed} onChange={() => { }} placeholder="" />
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
                            <Form.Label>professionalMemberships</Form.Label>
                            <Form.Control type="text" value={data.professionalMemberships} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>awardsAndHonorsReceived</Form.Label>
                            <Form.Control type="text" value={data.awardsAndHonorsReceived} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>researchPapersPublished</Form.Label>
                            <Form.Control type="text" value={data.researchPapersPublished} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>booksOrChaptersWritten</Form.Label>
                            <Form.Control type="text" value={data.booksOrChaptersWritten} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>conferencePresentations</Form.Label>
                            <Form.Control type="text" value={data.conferencePresentations} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>shortBioOrPersonalStatement</Form.Label>
                            <Form.Control type="text" value={data.shortBioOrPersonalStatement} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>philosophyOfCare</Form.Label>
                            <Form.Control type="text" value={data.philosophyOfCare} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>patientReviewsAndRatings</Form.Label>
                            <Form.Control type="text" value={data.patientReviewsAndRatings} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>linkedInProfile</Form.Label>
                            <Form.Control type="text" value={data.linkedInProfile} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>professionalWebsiteOrBlog</Form.Label>
                            <Form.Control type="text" value={data.professionalWebsiteOrBlog} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>socialMediaHandles</Form.Label>
                            <Form.Control type="text" value={data.socialMediaHandles} onChange={() => { }} placeholder="" />
                        </Form.Group>

                        {/* ------------------ */}
                        {/* ------------------ */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>insuranceAccepted</Form.Label>
                            <Form.Control type="text" value={data.insuranceAccepted} onChange={() => { }} placeholder="" />
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