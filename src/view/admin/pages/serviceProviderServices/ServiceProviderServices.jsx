import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useSelector } from "react-redux";
// import {
//   getMedicalServicesList,
//   getServiceProviderServiceCategoriesList,
//   setSelectedServiceCategory_action,
// } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";
import { Link } from "react-router-dom";
import { getThisKeyFromThatKeyFromArray } from "../../../../utils/ObjFunctions";

const ServiceProviderServicesPage = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");

  // const dispatch = useDispatch();

  const [fetchedServiceProviders, setFetchedServiceProviders] = useState([]);

  const fetchServiceProviderServices = async () => {
    try {
      const url = `${baseUrl}/admin/serviceproviderservice/getAll`;
      const response = await fetch(url, {
        headers: new Headers({
          Authorization: `Bearer ${globalVariable.accessToken}`,
        }),
      });

      const data = await response.json();
      console.log(data);
      setFetchedServiceProviders(data || []);
    } catch (error) {
      console.error("Failed to fetch service providers:", error.message);
    }
  };

  useEffect(() => {
    fetchServiceProviderServices();
  }, []);

  const allMedicalServices = useSelector(
    (state) => state.medicalServicesReducer
  );
  const selectedServiceCategory = useSelector(
    (state) => state.selectedServiceCategoryReducer
  );

  // const getFirstMedicalService = () => {
  //   if (selectedServiceCategory) {
  //     return selectedServiceCategory;
  //   } else if (allMedicalServices.length > 0) {
  //     return allMedicalServices[0]._id;
  //   } else {
  //     return "";
  //   }
  // };

  const selectedServiceCategoryService = useSelector(
    (state) => state.selectedServiceCategoryServiceReducer
  );

  const serviceProviderServiceCategories = useSelector(
    (state) => state.serviceProviderServiceCategoryReducer
  );

  // useEffect(() => {
  //   if (serviceProviderServiceCategories.length === 0) {
  //     dispatch(getServiceProviderServiceCategoriesList());
  //   }
  //   if (allMedicalServices.length === 0) {
  //     dispatch(getMedicalServicesList());
  //   } else {
  //     if (!selectedServiceCategory) {
  //       const givenCategoryId = getFirstMedicalService();
  //       dispatch(setSelectedServiceCategory_action(givenCategoryId));
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allMedicalServices, selectedServiceCategory]);

  const [name, setname] = useState("");
  const [icon, seticon] = useState("");
  const [description, setdescription] = useState("");
  const [serviceProviderServiceCategory, setserviceProviderServiceCategory] =
    useState("");
  const [status, setstatus] = useState("1");

  const data = {
    modalTitle,
    selectedId,
    fetchedServiceProviders,
    name,
    setname,
    icon,
    seticon,
    description,
    setdescription,
    serviceProviderServiceCategory,
    setserviceProviderServiceCategory,
    status,
    setstatus,
    updateData: fetchServiceProviderServices, // ADD THIS LINE 🔥
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
    setModalTitle(`${textCapitalize(type)} Medical Services`);
    setSelectedId(givenValue._id);

    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.icon, seticon, "");
    handleSetValue(givenValue.description, setdescription, "");
    handleSetValue(
      givenValue.serviceProviderServiceCategory,
      setserviceProviderServiceCategory,
      selectedServiceCategoryService
    );
    handleSetValue(givenValue.status, setstatus, "1");
  };

  const handleDelete = (givenValue) => {
    if (confirm("are you sure you want to delete!")) {
      fetch(
        `${baseUrl}/admin/serviceproviderservice/delete/${givenValue._id}`,
        {
          method: "DELETE",
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        }
      )
        .then((v) => v.json())
        .then((v) => {
          if (v.message === "success") {
            alert("deleted successfully");
          } else {
            alert(v.detail ? v.detail : "Something Went Wrong!");
          }
          fetchServiceProviderServices();
        })
        .catch((error) => {
          console.log("handleDelete error:", error);
          alert("something went wrong! Try again.");
        });
    }
  };

  return (
    <div className="gBox h-100">
      <div className="gRow gHeader pb-3">
        <div className="gDflex gDjcsb gDaic">
          <div>
            <h5 className="tw_700">
              <Link
                to={"/admin/all-services-categories"}
                className="tw_700 h5"
                style={{ fontWeight: "700" }}
              >
                All Service Categories for {" "}
                {getThisKeyFromThatKeyFromArray(
                  "_id",
                  selectedServiceCategory,
                  "name",
                  allMedicalServices
                )}
              </Link>{" "}
              / {" "}
              {getThisKeyFromThatKeyFromArray(
                "_id",
                selectedServiceCategoryService,
                "name",
                serviceProviderServiceCategories
              )}
            </h5>
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
      <div
        className="gRow gContent gDcol bodyContent"
        style={{ backgroundColor: bgColor.white }}
      >
        <div className="gBox">
          <div className="gRow gContent w-100" style={{ overflow: "scroll" }}>
            {fetchedServiceProviders?.length > 0 ? (
              <TableCmp
                data={
                  selectedServiceCategoryService
                    ? fetchedServiceProviders.filter(
                      (v) =>
                        v.serviceProviderServiceCategory ===
                        selectedServiceCategoryService
                    )
                    : fetchedServiceProviders // agar selectedServiceCategoryService empty ho toh sab dikhado
                }
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
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

export default ServiceProviderServicesPage;
