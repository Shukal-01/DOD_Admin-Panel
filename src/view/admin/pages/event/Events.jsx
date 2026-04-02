import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import {
  getCityList,
  getCountryList,
  getStateList,
} from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";
import { Link, useLocation } from "react-router-dom";

const Events = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");

  // Local state for events and pagination
  const [allEvents, setAllEvents] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const location = useLocation();
  const dispatch = useDispatch();

  // Extra data from redux (for countries, states, and cities)
  const allCountries = useSelector((state) => state.countryReducer);
  const allStates = useSelector((state) => state.stateReducer);
  const allCities = useSelector((state) => state.cityReducer);

  // Remove usage of Redux to fetch events; use a direct API call
  const updateData = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");
    const thisPage = page ? parseInt(page) : 1;

    const fetchAllEvents = async () => {
      try {
        const url = `${baseUrl}/admin/event/getAll?page=${thisPage}`;
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        });
        const data = await response.json();
        // Assuming API response returns data.data for events list
        // and data.pagination for pagination info.
        setAllEvents(data.data || []);
        setPagination({
          currentPage: data.pagination?.currentPage || thisPage,
          totalPages: data.pagination?.totalPages || 1,
        });
      } catch (error) {
        console.error("Failed to fetch events:", error.message);
      }
    };

    fetchAllEvents();
  };

  // Redux-based calls for supporting data if not already loaded
  useEffect(() => {
    updateData();
    if (allCountries.length === 0) {
      dispatch(getCountryList());
    }
    if (allStates.length === 0) {
      dispatch(getStateList());
    }
    if (allCities.length === 0) {
      dispatch(getCityList());
    }
    // Refetch events if the URL search query changes (e.g. page number)
  }, [location.search]);

  // Event Modal form state variables
  const [image, setimage] = useState("");
  const [bannerImage, setbannerImage] = useState("");
  const [name, setname] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [description, setdescription] = useState("");
  const [eventReason, seteventReason] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [address, setaddress] = useState("");
  const [googleMapUrl, setgoogleMapUrl] = useState("");
  const [status, setstatus] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  const data = {
    modalTitle,
    selectedId,
    updateData,
    image,
    bannerImage,
    name,
    shortDescription,
    description,
    eventReason,
    date,
    time,
    address,
    googleMapUrl,
    status,
    setimage,
    setbannerImage,
    setname,
    setshortDescription,
    setdescription,
    seteventReason,
    setdate,
    settime,
    setaddress,
    setgoogleMapUrl,
    setstatus,
    country,
    setcountry,
    state,
    setstate,
    city,
    setcity,
    allCountries,
    allStates,
    allCities,
  };

  const handleSetValue = (givenValue, givenValueSetter, alternate) => {
    if (givenValue && givenValue !== "") {
      givenValueSetter(givenValue);
    } else {
      givenValueSetter(alternate);
    }
  };

  const handleEdit = (givenValue, type) => {
    setModalType(type);
    setShow(true);
    setModalTitle(`${textCapitalize(type)} Event`);
    setSelectedId(givenValue._id);

    handleSetValue(givenValue.image, setimage, "");
    handleSetValue(givenValue.bannerImage, setbannerImage, "");
    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.shortDescription, setshortDescription, "");
    handleSetValue(givenValue.description, setdescription, "");
    handleSetValue(givenValue.eventReason, seteventReason, "");
    handleSetValue(givenValue.date, setdate, "");
    handleSetValue(givenValue.time, settime, "");
    handleSetValue(givenValue.address, setaddress, "");
    handleSetValue(givenValue.googleMapUrl, setgoogleMapUrl, "");
    handleSetValue(givenValue.status, setstatus, "");
    handleSetValue(givenValue.country, setcountry, "");
    handleSetValue(givenValue.state, setstate, "");
    handleSetValue(givenValue.city, setcity, "");
  };

  const handleDelete = (givenValue) => {
    if (confirm("are you sure you want to delete!")) {
      fetch(`${baseUrl}/admin/event/delete/${givenValue._id}`, {
        method: "DELETE",
        headers: new Headers({
          Authorization: `Bearer ${globalVariable.accessToken}`,
        }),
      })
        .then((v) => v.json())
        .then((v) => {
          if (v.message === "success") {
            alert("deleted successfully");
          } else {
            alert(v.detail ? v.detail : "Something Went Wrong!");
          }
          updateData();
        })
        .catch((error) => {
          console.error("Error in handleDelete:", error);
          alert("something went wrong! Try again.");
        });
    }
  };

  return (
    <div className="gBox h-100">
      <div className="gRow gHeader pb-3">
        <div className="gDflex gDjcsb gDaic">
          <div>
            <h5 className="tw_700">Events</h5>
          </div>
          <div>
            <Button2
              title="Add"
              btnFunction={() => {
                handleEdit({}, modalTypes.add);
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
        <div className="gBox">
          <div className="gRow gContent w-100" style={{ overflow: "scroll" }}>
            <TableCmp
              data={allEvents}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      
      <div className="gRow gFooter pt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* Previous Button */}
            <li className={`page-item ${pagination.currentPage === 1 ? "disabled" : ""}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage - 1}`}>
                Previous
              </Link>
            </li>
            {/* Page Numbers */}
            {(() => {
              const pages = [];
              const total = pagination.totalPages;
              const current = pagination.currentPage;
              const delta = 1;
              const range = [];
              for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
                range.push(i);
              }
              if (current - delta > 2) {
                range.unshift("...");
              }
              if (current + delta < total - 1) {
                range.push("...");
              }
              range.unshift(1);
              if (total > 1) range.push(total);
              for (let i = 0; i < range.length; i++) {
                const page = range[i];
                if (page === "...") {
                  pages.push(
                    <li key={i} className="page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  );
                } else {
                  pages.push(
                    <li key={page} className={`page-item ${page === current ? "active" : ""}`}>
                      <Link className="page-link" to={`?page=${page}`}>
                        {page}
                      </Link>
                    </li>
                  );
                }
              }
              return pages;
            })()}
            {/* Next Button */}
            <li className={`page-item ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage + 1}`}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <DataModal
        show={show}
        setShow={setShow}
        data={data}
        modalType={modalType}
      />
    </div>
  );
};

export default Events;
