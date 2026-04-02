import { useEffect, useState } from "react";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {
//   getCityList,
//   getCountryList,
//   getMedicalServicesList,
//   getServiceProviderTypeList,
//   getStateList,
// } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { Button2 } from "../../../../components/button/Button2";
import { Link, useLocation } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";

const ServiceProvider = () => {
  const [selectedStatus, setSelectedStatus] = useState("verified");
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  
  // Local state for service providers & pagination
  const [allServiceProviders, setAllServiceProviders] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const location = useLocation();
  // const dispatch = useDispatch();

  // Extra data from redux (these can remain if shared across multiple components)
  const allCountries = useSelector((state) => state.countryReducer);
  const allStates = useSelector((state) => state.stateReducer);
  const allCities = useSelector((state) => state.cityReducer);
  const allServiceProviderType = useSelector((state) => state.serviceProviderTypeReducer);
  const allMedicalServices = useSelector((state) => state.medicalServicesReducer);

  // Define local states for form/modal fields (example below; include as needed)
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
  const [isVerified, setisVerified] = useState("");
  const [targetText, settargetText] = useState("");
  const [yearsOfExperience, setyearsOfExperience] = useState("");
  const [status, setStatus] = useState("");

  // Update data by calling the API directly with pagination support
  const updateData = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");
    const thisPage = page ? parseInt(page) : 1;

    const fetchAllServiceProviders = async () => {
      try {
        const url = `${baseUrl}/admin/serviceProvider/getAll?page=${thisPage}`;
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        });

        const data = await response.json();
        setAllServiceProviders(data.data || []);
        setPagination({
          currentPage: data.pagination?.currentPage || thisPage,
          totalPages: data.pagination?.totalPages || 1,
        });
      } catch (error) {
        console.error("Failed to fetch service providers:", error.message);
      }
    };

    fetchAllServiceProviders();
  };

  useEffect(() => {
    updateData();
    // if (allCountries.length === 0) {
    //   dispatch(getCountryList());
    // }
    // if (allStates.length === 0) {
    //   dispatch(getStateList());
    // }
    // if (allCities.length === 0) {
    //   dispatch(getCityList());
    // }
    // if (allServiceProviderType.length === 0) {
    //   dispatch(getServiceProviderTypeList());
    // }
    // if (allMedicalServices.length === 0) {
    //   dispatch(getMedicalServicesList());
    // }
    // Refetch data when the URL’s query parameters change.
  }, [location.search]);

  // Common function to handle setting values in the modal form
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
    setModalTitle(`${textCapitalize(type)} Sub Admin`);
    setSelectedId(givenValue._id);

    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.image, setimage, "");
    handleSetValue(givenValue.email, setemail, "");
    handleSetValue(givenValue.mobileNumber, setmobileNumber, "");
    handleSetValue(givenValue.country, setcountry, "");
    handleSetValue(givenValue.state, setstate, "");
    handleSetValue(givenValue.city, setcity, "");
    handleSetValue(givenValue.pincode, setpincode, "");
    handleSetValue(givenValue.completeAddress, setcompleteAddress, "");
    handleSetValue(givenValue.organizationOrIndivisual, setorganizationOrIndivisual, "");
    handleSetValue(givenValue.workAddress, setworkAddress, "");
    handleSetValue(givenValue.workStartTiming, setworkStartTiming, "");
    handleSetValue(givenValue.workEndTiming, setworkEndTiming, "");
    handleSetValue(givenValue.category, setcategory, "");
    handleSetValue(givenValue.isVerified, setisVerified, "0");
    handleSetValue(givenValue.targetText, settargetText, "");
    handleSetValue(givenValue.yearsOfExperience, setyearsOfExperience, "");
    handleSetValue(givenValue.status, setStatus, "");
  };

  const handleDelete = (givenValue) => {
    if (confirm("are you sure you want to delete!")) {
      fetch(`${baseUrl}/admin/serviceProvider/delete/${givenValue._id}`, {
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
          console.error("Error in handleDelete", error);
          alert("something went wrong! Try again.");
        });
    }
  };

  return (
    <div className="gBox h-100">
      <div className="gRow gHeader pb-3">
        <div className="gDflex gDjcsb gDaic">
          <div>
            <h5 className="tw_700">All Service Providers</h5>
          </div>
          <div className="gDflex gDjcsb gDaic">
            <span className="ms-2">
              <Button2 title="Verified" btnFunction={() => setSelectedStatus("verified")} />
            </span>
            <span className="ms-2">
              <Button2 title="Blocked" btnFunction={() => setSelectedStatus("blocked")} />
            </span>
            <span className="ms-2">
              <Button2 title="Rejected" btnFunction={() => setSelectedStatus("rejected")} />
            </span>
          </div>
        </div>
      </div>
      <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
        <div className="gBox">
          <div className="gRow gContent w-100" style={{ overflow: "scroll" }}>
            <TableCmp
              data={allServiceProviders.filter((provider) => provider.status === selectedStatus)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <div className="gRow gFooter pt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${pagination.currentPage === 1 ? "disabled" : ""}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage - 1}`}>
                Previous
              </Link>
            </li>
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
            <li className={`page-item ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}`}>
              <Link className="page-link" to={`?page=${pagination.currentPage + 1}`}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <DataModal show={show} setShow={setShow} data={{
        selectedStatus,
        modalTitle,
        selectedId,
        updateData,
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
        allCountries,
        allStates,
        allCities,
        allServiceProviderType,
        allMedicalServices,
        isVerified,
        setisVerified,
        targetText,
        settargetText,
        yearsOfExperience,
        setyearsOfExperience,
      }} modalType={modalType} />
    </div>
  );
};

export default ServiceProvider;
