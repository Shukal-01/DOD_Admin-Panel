/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { fetchMethods, modalTypes } from "../../../../data/static";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { useRef } from "react";
import { bgColor } from "../../../../styles/colour";

function DataModal({ show, setShow, data, modalType, allServiceProviderType }) {
  const imgRef1 = useRef();

  const handleClose = () => setShow(false);

  const handleSave = (e) => {
    e.preventDefault();
    let form_data = new FormData();

    // ============================================
    // ============================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const addUrl = `${baseUrl}/admin/medicalservices/add`;
    const editUrl = `${baseUrl}/admin/medicalservices/update/${data.selectedId}`;
    form_data.append("icon", imgRef1.current.files[0]);
    form_data.append("name", data.name);
    form_data.append("description", data.description);
    form_data.append("status", data.status);
    form_data.append("serviceProvidertype", data.serviceProvidertype);
    form_data.append("doctorSystem", data.doctorSystem);
    form_data.append("bookingSystem", data.bookingSystem);
    // ============================================
    // ============================================

    let url;
    let method;

    if (modalType === modalTypes.add) {
      url = addUrl;
      method = fetchMethods.post;
    } else {
      url = editUrl;
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
        if (v.message === "success") {
          if (modalType === modalTypes.add) {
            alert("Created successfully!");
          } else if (modalType === modalTypes.edit) {
            alert("Updated successfully!");
          }
          handleClose();
          data.updateData();
        } else {
          alert(v.detail ? v.detail : "Something Went Wrong!");
        }
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err.message);
        console.log("subadmin / datamodal : 60");
        console.log("====================================");
        alert("Something Went Wrong!");
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
          <Form onSubmit={handleSave}>
            {/* =============================================================== */}
            {/* // >>>>>>>>>>>>>>>>>>>>> update needed */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Icon</Form.Label>

              <Form.Control ref={imgRef1} type="file" name="icon" />
              <img
                className="form-img py-2"
                style={{ background: bgColor.imgTintColour }}
                height={150}
                src={data.icon}
                alt=""
                name="name"
              />
            </Form.Group>
            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => {
                  data.setname(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>

              <Form.Control
                as={"textarea"}
                type="text"
                name="description"
                value={data.description}
                onChange={(e) => {
                  data.setdescription(e.target.value);
                }}
                placeholder="Enter Description"
              />
            </Form.Group>

            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Type</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}

              <Form.Select
                required
                value={data.serviceProvidertype}
                onChange={(e) => {
                  data.setserviceProvidertype(e.target.value);
                }}
                name="serviceProvidertype"
              >
                <option value="">Select</option>
                {allServiceProviderType &&
                  allServiceProviderType.length > 0 &&
                  allServiceProviderType.map((value, index) => (
                    <option key={index} value={value.type}>
                      {value.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Can Doctor Work Here</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
              <Form.Select
                required
                value={data.doctorSystem}
                onChange={(e) => {
                  data.setdoctorSystem(e.target.value);
                }}
                name="doctorSystem"
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Booking System</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
              <Form.Select
                required
                value={data.bookingSystem}
                onChange={(e) => {
                  data.setbookingSystem(e.target.value);
                }}
                name="bookingSystem"
              >
                <option value="">Select</option>
                <option value="1">Active</option>
                <option value="0">InActive</option>
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Status</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
              <Form.Select
                required
                value={data.status}
                onChange={(e) => {
                  data.setstatus(e.target.value);
                }}
                name="status"
              >
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
              {(modalType === modalTypes.edit ||
                modalType === modalTypes.add) && (
                <Button type="submit" variant="primary">
                  Save
                </Button>
              )}
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
