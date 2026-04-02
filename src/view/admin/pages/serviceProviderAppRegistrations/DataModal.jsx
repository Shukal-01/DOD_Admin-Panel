/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { getThisKeyFromThatKeyFromArray } from "../../../../utils/ObjFunctions";

function DataModal({ show, setShow, data }) {
  const handleClose = () => setShow(false);
  // allCountries
  // allStates
  // allCities
  // allServiceProviderType
  // allMedicalServices

  const approveRequest = (newStatus) => {
    const url = `${baseUrl}/admin/serviceProvider/update/${data.selectedId}`;
    const bodyData = new FormData();
    bodyData.append("status", newStatus);

    fetch(url, {
      method: "PUT",
      body: bodyData,
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    })
      .then((v) => v.json())
      .then((response) => {
        if (response.message === "success") {
          alert("Updated successfully!");
          handleClose();
          data.updateData();
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        alert("something went wrong 2");
        console.log("====================================");
        console.log(err.message);
        console.log("====================================");
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ======================= */}
          <Form>
            {/* =============================================================== */}
            {/* // >>>>>>>>>>>>>>>>>>>>> update needed */}

            {/* ------------------ */}
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>category</Form.Label>
              <Form.Control
                type="text"
                value={(data.category
                  ? data.category.map((value) =>
                      getThisKeyFromThatKeyFromArray(
                        "_id",
                        value,
                        "name",
                        data.allMedicalServices
                      )
                    )
                  : []
                ).join(" , ")}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group> */}
            <h6>{JSON.stringify(data.category)}</h6>
            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profile Picture</Form.Label>
              <div>
                <img
                  className="form-img py-2"
                  height={150}
                  src={data.image}
                  alt=""
                  name="name"
                />
                {!data.image && <div className="text-danger">not Given</div>}
              </div>
            </Form.Group>
            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                value={data.name}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                value={data.email}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>mobileNumber</Form.Label>
              <Form.Control
                type="text"
                value={data.mobileNumber}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>workStartTiming</Form.Label>
              <Form.Control
                type="text"
                value={data.workStartTiming}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>workEndTiming</Form.Label>
              <Form.Control
                type="text"
                value={data.workEndTiming}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>country</Form.Label>
              <Form.Control
                type="text"
                value={getThisKeyFromThatKeyFromArray(
                  "_id",
                  data.country,
                  "name",
                  data.allCountries
                )}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>state</Form.Label>
              <Form.Control
                type="text"
                value={getThisKeyFromThatKeyFromArray(
                  "_id",
                  data.state,
                  "name",
                  data.allStates
                )}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>city</Form.Label>
              <Form.Control
                type="text"
                value={getThisKeyFromThatKeyFromArray(
                  "_id",
                  data.city,
                  "name",
                  data.allCities
                )}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>pincode</Form.Label>
              <Form.Control
                type="text"
                value={data.pincode}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>completeAddress</Form.Label>
              <Form.Control
                type="text"
                value={data.completeAddress}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>workAddress</Form.Label>
              <Form.Control
                type="text"
                value={data.workAddress}
                onChange={() => {}}
                placeholder=""
              />
            </Form.Group>

            {/* ------------------ */}

            {/* =============================================================== */}

            {/* -------------- */}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                type="button"
                variant="danger"
                onClick={() => {
                  approveRequest("rejected");
                }}
              >
                Reject
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={() => {
                  approveRequest("verified");
                }}
              >
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
