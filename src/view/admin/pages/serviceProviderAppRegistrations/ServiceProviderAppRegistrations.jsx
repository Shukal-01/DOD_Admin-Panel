import { useEffect, useState } from "react";
// import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useSelector } from "react-redux";
// import {
//   getCityList,
//   getCountryList,
//   getMedicalServicesList,
//   getServiceProviderList,
//   getStateList,
// } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
// import { modalTypes } from "../../../../data/static";

const ServiceProviderAppRegistrations = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  // ----------------------------------------------------------------
  // data
  // const dispatch = useDispatch();
  // // >>>>>>>>>>>>>>>>>>>>> update needed
  // const allDoctorAppRegistration = useSelector(
  //   (state) => state.serviceProviderReducer
  // );

  // <<<<<<<<<<<<<<<<<<<<< extra data
  const allCountries = useSelector((state) => state.countryReducer);
  const allStates = useSelector((state) => state.stateReducer);
  const allCities = useSelector((state) => state.cityReducer);

  const allMedicalServices = useSelector(
    (state) => state.medicalServicesReducer
  );

  const [allServiceProviders, setAllServiceProviders] = useState([]);

  const fetchServiceProviders = async () => {
    try {
      const url = `${baseUrl}/admin/serviceProvider/getPendingRequests`;
      const response = await fetch(url, {
        headers: new Headers({
          Authorization: `Bearer ${globalVariable.accessToken}`,
        }),
      });

      const data = await response.json();
      setAllServiceProviders(data || []);
    } catch (error) {
      console.error("Failed to fetch service providers:", error.message);
    }
  };

  useEffect(() => {
    fetchServiceProviders();
  }, []);


  const updateData = () => {
    // >>>>>>>>>>>>>>>>>>>>> update needed
    // dispatch(getServiceProviderList());
    fetchServiceProviders();
  };
  // // ----------------------------------------------------------------
  // useEffect(() => {
  //   if (allDoctorAppRegistration.length === 0) {
  //     updateData();
  //   }
  //   if (allCountries.length === 0) {
  //     dispatch(getCountryList());
  //   }
  //   if (allStates.length === 0) {
  //     dispatch(getStateList());
  //   }
  //   if (allCities.length === 0) {
  //     dispatch(getCityList());
  //   }
  //   if (allMedicalServices.length === 0) {
  //     dispatch(getMedicalServicesList());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // ==============================================================
  // ==============================================================
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
  const [workAddress, setworkAddress] = useState("");
  const [workStartTiming, setworkStartTiming] = useState("");
  const [workEndTiming, setworkEndTiming] = useState("");
  const [category, setcategory] = useState("");
  const [isVerified, setisVerified] = useState("");
  const [targetText, settargetText] = useState("");
  const [yearsOfExperience, setyearsOfExperience] = useState("");

  // ==============================================================
  // ==============================================================

  const data = {
    modalTitle,
    selectedId,
    updateData,
    fetchServiceProviders,
    // ==========================
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
    workAddress,
    workStartTiming,
    workEndTiming,
    category,

    // -------------------------------- extra
    isVerified,
    targetText,
    yearsOfExperience,
    setisVerified,
    settargetText,
    setyearsOfExperience,
    // -------------------------------- extra
    allCountries,
    allStates,
    allCities,
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

    handleSetValue(givenValue.workAddress, setworkAddress, "");
    handleSetValue(givenValue.workStartTiming, setworkStartTiming, "");
    handleSetValue(givenValue.workEndTiming, setworkEndTiming, "");
    handleSetValue(givenValue.category, setcategory, "");

    handleSetValue(givenValue.isVerified, setisVerified, "");
    handleSetValue(givenValue.targetText, settargetText, "");
    handleSetValue(givenValue.yearsOfExperience, setyearsOfExperience, "");

    // ==========================
  };

  const handleDelete = (givenValue) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("are you sure you want to delete!")) {
      // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
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
          // updateData();
          fetchServiceProviders();
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
        <div className="gDflex gDjcsb gDaic">
          <div>
            {/* >>>>>>>>>>>>>>>>>>>>> update needed */}
            <h5 className="tw_700">Servie Provider Registration Data</h5>
          </div>
          <div>
            {/* <Button2 title="Add" btnFunction={() => { handleEdit({}, modalTypes.add) }} /> */}
          </div>
        </div>
      </div>
      <div
        className="gRow gContent gDcol bodyContent"
        style={{ backgroundColor: bgColor.white }}
      >
        <div className="gBox">
          <div className="gRow gContent w-100" style={{ overflow: "scroll" }}>
            <TableCmp
              data={allServiceProviders}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
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

export default ServiceProviderAppRegistrations;
