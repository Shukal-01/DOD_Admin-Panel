import { useEffect, useState } from "react";
// import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {
//   getCityList,
//   getCountryList,
//   // getDoctorsList,
//   getMedicalServicesList,
//   getServiceProviderTypeList,
//   getStateList,
// } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { Button2 } from "../../../../components/button/Button2";
import { Link, useLocation } from "react-router-dom";
// import { modalTypes } from "../../../../data/static";

const AllDoctorsPage = () => {
  // ==================================
  const [selectedStatus, setSelectedStatus] = useState("verified");

  // ==================================
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  // ----------------------------------------------------------------
  // data
  // const dispatch = useDispatch();
  // >>>>>>>>>>>>>>>>>>>>> update needed

  // <<<<<<<<<<<<<<<<<<<<< extra data
  const allCountries = useSelector((state) => state.countryReducer);
  const allStates = useSelector((state) => state.stateReducer);
  const allCities = useSelector((state) => state.cityReducer);
  const allServiceProviderType = useSelector(
    (state) => state.serviceProviderTypeReducer
  );
  const allMedicalServices = useSelector(
    (state) => state.medicalServicesReducer
  );

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const location = useLocation();
  const [allDoctor, setAllDoctor] = useState([]);

  const updateData = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const thisPage = page ? parseInt(page) : 1;

    const fetchAllDoctors = async () => {
      try {
        console.log("fjjsdoijfoisdj first step")
        const url = `${baseUrl}/admin/doctor/getAll?page=${thisPage}`;
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        });

        const data = await response.json();
        console.log(data, "FetchAllDoctors");
        console.log("API data", data.data.map(d => d.status));

        setAllDoctor(data.data || []);
        setPagination({
          currentPage: data.pagination?.currentPage || thisPage,
          totalPages: data.pagination?.totalPages || 1,
        });

      } catch (error) {
        console.error('Failed to fetch departments:', error.message);
      }
    };

    fetchAllDoctors();
  };

  useEffect(() => {
    updateData();
  }, [location.search]);
  // ----------------------------------------------------------------
  // useEffect(() => {
  //   updateData()
  //   if (allCountries.length === 0) {
  //     dispatch(getCountryList());
  //   }
  //   if (allStates.length === 0) {
  //     dispatch(getStateList());
  //   }
  //   if (allCities.length === 0) {
  //     dispatch(getCityList());
  //   }
  //   if (allServiceProviderType.length === 0) {
  //     dispatch(getServiceProviderTypeList());
  //   }
  //   if (allMedicalServices.length === 0) {
  //     dispatch(getMedicalServicesList());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // ==============================================================
  // ==============================================================
  // >>>>>>>>>>>>>>>>>>>>> updated
  const [workingOrganizationsIsUpdated, setworkingOrganizationsIsUpdated] =
    useState("");
  const [workingOrganizations, setworkingOrganizations] = useState([]);
  // >>>>>>>>>>>>>>>>>>>>> update needed
  // all States ====================
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [completeAddress, setcompleteAddress] = useState("");
  const [organizationOrIndivisual, setorganizationOrIndivisual] = useState("");
  const [workAddress, setworkAddress] = useState("");
  const [workStartTiming, setworkStartTiming] = useState("");
  const [workEndTiming, setworkEndTiming] = useState("");
  const [category, setcategory] = useState("");
  const [status, setStatus] = useState("");

  // ==============================================================
  // ==============================================================

  const data = {
    selectedStatus,
    // ==========================
    modalTitle,
    selectedId,
    updateData,
    // ==========================
    // >>>>>>>>>>>>>>>>>>>>> updated
    workingOrganizationsIsUpdated,
    workingOrganizations,
    // >>>>>>>>>>>>>>>>>>>>> update needed
    name,
    image,
    email,
    mobileNumber,
    country,
    state,
    city,
    pincode,
    completeAddress,
    organizationOrIndivisual,
    workAddress,
    workStartTiming,
    workEndTiming,
    category,
    status,
    setStatus,

    // -------------------------------- extra
    allCountries,
    allStates,
    allCities,
    allServiceProviderType,
    allMedicalServices,

    // ==========================
  };

  // ---------------------- crud ----------------------

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
    // >>>>>>>>>>>>>>>>>>>>> update needed
    setModalTitle(`${textCapitalize(type)} Sub Admin`);
    setSelectedId(givenValue._id);
    // --------------
    // ==========================
    // >>>>>>>>>>>>>>>>>>>>> updated
    handleSetValue(
      givenValue.workingOrganizationsIsUpdated,
      setworkingOrganizationsIsUpdated,
      false
    );
    handleSetValue(
      givenValue.workingOrganizations,
      setworkingOrganizations,
      []
    );

    // >>>>>>>>>>>>>>>>>>>>> update needed
    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.image, setimage, "");
    handleSetValue(givenValue.email, setemail, "");
    handleSetValue(givenValue.mobileNumber, setmobileNumber, "");
    handleSetValue(givenValue.country, setcountry, "");
    handleSetValue(givenValue.state, setstate, "");
    handleSetValue(givenValue.city, setcity, "");
    handleSetValue(givenValue.pincode, setpincode, "");
    handleSetValue(givenValue.completeAddress, setcompleteAddress, "");
    handleSetValue(
      givenValue.organizationOrIndivisual,
      setorganizationOrIndivisual,
      ""
    );
    handleSetValue(givenValue.workAddress, setworkAddress, "");
    handleSetValue(givenValue.workStartTiming, setworkStartTiming, "");
    handleSetValue(givenValue.workEndTiming, setworkEndTiming, "");
    handleSetValue(givenValue.category, setcategory, "");
    handleSetValue(givenValue.status, setStatus, "");

    // ==========================
  };

  const handleDelete = (givenValue) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("are you sure you want to delete!")) {
      // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
      fetch(`${baseUrl}/admin/doctor/delete/${givenValue._id}`, {
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
          console.log("subadmins.jsx : handleDelete : 74");
          console.log(error);
          alert("something went wrong! Try again.");
        });
    }
  };

  // ---------------------- crud ----------------------

  return (
    <div className="gBox h-100">
      <div className="gRow gHeader pb-3">
        <div className="gDflex gDjcsb gDaic flex-wrap">
          <div>
            {/* >>>>>>>>>>>>>>>>>>>>> update needed */}
            <h5 className="tw_700">All Doctors</h5>
          </div>
          <div
            className="gDflex gDjcsb gDaic flex-wrap"
            style={{ gap: 10, justifyContent: "flex-end" }}
          >
            <span className="ms-2">
              <Button2
                title="Verified"
                btnFunction={() => {
                  setSelectedStatus("verified");
                }}
              />
            </span>
            <span className="ms-2">
              <Button2
                title="Blocked"
                btnFunction={() => {
                  setSelectedStatus("blocked");
                }}
              />
            </span>
            <span className="ms-2">
              <Button2
                title="Organization Updated"
                btnFunction={() => {
                  setSelectedStatus("organizationUpdated");
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div
        className="gRow gContent gDcol bodyContent"
        style={{ backgroundColor: bgColor.white }}
      >
        <div className="gBox">
          <div className="gRow gContent w-100" style={{ overflow: "scroll" }}>
            {allDoctor.length === 0 ? (
              <div className="text-center py-4">No data available</div>
            ) : (
              <TableCmp
                data={allDoctor.filter((gvalue) => {
                  if (selectedStatus === "organizationUpdated") {
                    return gvalue.workingOrganizationsIsUpdated === "pending";
                  } else if (selectedStatus !== "verified") {
                    return gvalue.status === selectedStatus;
                  } else {
                    return gvalue.status && gvalue.status !== ""
                      ? gvalue.status === selectedStatus
                      : true;
                  }
                })}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
      <div className="gRow gFooter pt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* Previous */}
            <li className={`page-item ${pagination.currentPage === 1 ? 'disabled' : ''}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage - 1}`}>Previous</Link>
            </li>

            {/* Page Numbers with Dots */}
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
                    <li key={page} className={`page-item ${page === current ? 'active' : ''}`}>
                      <Link className="page-link" to={`?page=${page}`}>{page}</Link>
                    </li>
                  );
                }
              }

              return pages;
            })()}

            {/* Next */}
            <li className={`page-item ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage + 1}`}>Next</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="gRow gFooter pt-3">
                <h1>section 3</h1>
            </div> */}
      <DataModal
        show={show}
        setShow={setShow}
        data={data}
        modalType={modalType}
      />
    </div>
  );
};

export default AllDoctorsPage;
