/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { fetchMethods, modalTypes } from "../../../../data/static";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { useRef } from "react";
import { bgColor } from "../../../../styles/colour";

function DataModal({ show, setShow, data, modalType }) {
  const imageRef1 = useRef();
  const imageRef2 = useRef();

  const handleClose = () => setShow(false);

  const handleSave = (e) => {
    e.preventDefault();
    let form_data = new FormData();

    // ============================================
    // ============================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const addUrl = `${baseUrl}/admin/event/add`;
    const editUrl = `${baseUrl}/admin/event/update/${data.selectedId}`;
    form_data.append("name", data.name);
    form_data.append("image", imageRef1.current.files[0]);
    form_data.append("bannerImage", imageRef2.current.files[0]);
    form_data.append("shortDescription", data.shortDescription);
    form_data.append("description", data.description);
    form_data.append("eventReason", data.eventReason);
    form_data.append("date", data.date);
    form_data.append("time", data.time);
    form_data.append("country", data.country);
    form_data.append("state", data.state);
    form_data.append("city", data.city);
    form_data.append("address", data.address);
    form_data.append("googleMapUrl", data.googleMapUrl);
    form_data.append("status", data.status);
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
        console.log("event / datamodal : 60");
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
              <Form.Label>Event Name</Form.Label>
              <Form.Control
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
              <Form.Label>Event Image</Form.Label>

              <Form.Control
                ref={imageRef1}
                type="file"
                placeholder="Enter Name"
                name="image"
              />
              <div>
                <img
                  style={{ background: bgColor.imgTintColour }}
                  className="form-img py-2"
                  height={150}
                  src={data.image}
                  alt=""
                  name="name"
                />
              </div>
            </Form.Group>
            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>BannerImage ( optional )</Form.Label>

              <Form.Control
                ref={imageRef2}
                type="file"
                placeholder="Enter Name"
                name="bannerImage"
              />
              <div>
                <img
                  style={{ background: bgColor.imgTintColour }}
                  className="form-img py-2"
                  height={150}
                  src={data.bannerImage}
                  alt=""
                  name="name"
                />
              </div>
            </Form.Group>
            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event category</Form.Label>
              <Form.Control
                type="text"
                name="eventReason"
                value={data.eventReason}
                onChange={(e) => {
                  data.seteventReason(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>
            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Short Description ( in 1 line )</Form.Label>
              <Form.Control
                type="text"
                name="shortDescription"
                value={data.shortDescription}
                onChange={(e) => {
                  data.setshortDescription(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Detailed Description</Form.Label>
              <Form.Control
                as={"textarea"}
                type="text"
                name="description"
                value={data.description}
                onChange={(e) => {
                  data.setdescription(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={data.date}
                onChange={(e) => {
                  data.setdate(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={data.time}
                onChange={(e) => {
                  data.settime(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Country</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}

              <Form.Select
                required
                value={data.country}
                onChange={(e) => {
                  data.setcountry(e.target.value);
                }}
                name="country"
              >
                <option value="">Select Country</option>
                {data.allCountries &&
                  data.allCountries.map((v, i) => {
                    return (
                      <option value={v._id} key={i}>
                        {v.name}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}

              <Form.Select
                required
                value={data.state}
                onChange={(e) => {
                  data.setstate(e.target.value);
                }}
                name="state"
              >
                <option value="">Select State</option>
                {data.allStates &&
                  data.allStates
                    .filter((v) => v.countryCode === data.country)
                    .map((v, i) => {
                      return (
                        <option value={v._id} key={i}>
                          {v.name}
                        </option>
                      );
                    })}
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}

              <Form.Select
                required
                value={data.city}
                onChange={(e) => {
                  data.setcity(e.target.value);
                }}
                name="city"
              >
                <option value="">Select City</option>
                {data.allCities &&
                  data.allCities
                    .filter((v) => v.stateCode === data.state)
                    .map((v, i) => {
                      return (
                        <option value={v._id} key={i}>
                          {v.name}
                        </option>
                      );
                    })}
              </Form.Select>
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={data.address}
                onChange={(e) => {
                  data.setaddress(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}
            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Google Map Url</Form.Label>
              <Form.Control
                type="url"
                name="googleMapUrl"
                value={data.googleMapUrl}
                onChange={(e) => {
                  data.setgoogleMapUrl(e.target.value);
                }}
                placeholder="Enter Name"
              />
            </Form.Group>

            {/* ------------------ */}

            {/* ------------------ */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Status</Form.Label>

              {/* <Form.Control type="text" name="" value={data.status} onChange={(e) => { data.setstatus(e.target.value) }} placeholder="Enter Status" /> */}
              <Form.Select
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
