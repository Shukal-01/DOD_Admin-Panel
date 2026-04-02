/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import {
  // getMedicalServicesList,
  getServiceProviderTypeList,
} from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";
import { Link, useLocation } from "react-router-dom";

const MedicalServices = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [allMedicalServices, setAllMedicalServices] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const location = useLocation();

  // ----------------------------------------------------------------
  // data
  const dispatch = useDispatch();
  // >>>>>>>>>>>>>>>>>>>>> update needed
  // const allMedicalServices = useSelector(
  //   (state) => state.medicalServicesReducer
  // );
  const updateData = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const thisPage = page ? parseInt(page) : 1;

    const fetchAllMedicalServices = async () => {
      try {
        const url = `${baseUrl}/admin/medicalservices/getAll?page=${thisPage}`;
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        });

        const data = await response.json();
        console.log(data);

        setAllMedicalServices(data.data || []);
        setPagination({
          currentPage: data.pagination?.currentPage || thisPage,
          totalPages: data.pagination?.totalPages || 1,
        });

      } catch (error) {
        console.error('Failed to fetch departments:', error.message);
      }
    };

    fetchAllMedicalServices();
  };

  useEffect(() => {
    updateData();
  }, [location.search]);

  const allServiceProviderType = useSelector(
    (state) => state.serviceProviderTypeReducer
  );
  // const updateData = () => {
  //   // >>>>>>>>>>>>>>>>>>>>> update needed
  //   dispatch(getMedicalServicesList());
  // };
  // // ----------------------------------------------------------------
  useEffect(() => {
    // if (allMedicalServices.length === 0) {
    //   updateData();
    // }
    if (allServiceProviderType.length === 0) {
      dispatch(getServiceProviderTypeList());
    }
  }, []);

  // ==============================================================
  // ==============================================================
  // >>>>>>>>>>>>>>>>>>>>> update needed
  const [name, setname] = useState("");
  const [icon, seticon] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");

  const [serviceProvidertype, setserviceProvidertype] = useState("");
  const [doctorSystem, setdoctorSystem] = useState("0");
  const [bookingSystem, setbookingSystem] = useState("0");

  // ==============================================================
  // ==============================================================

  const data = {
    modalTitle,
    selectedId,
    updateData,
    // ==========================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    name,
    setname,
    icon,
    seticon,
    description,
    setdescription,
    status,
    setstatus,
    serviceProvidertype,
    setserviceProvidertype,
    doctorSystem,
    setdoctorSystem,
    bookingSystem,
    setbookingSystem,
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
    setModalTitle(`${textCapitalize(type)} Medical Service`);
    setSelectedId(givenValue._id);
    // --------------
    // ==========================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.icon, seticon, "");
    handleSetValue(givenValue.description, setdescription, "");
    handleSetValue(givenValue.status, setstatus, "1");
    handleSetValue(givenValue.serviceProvidertype, setserviceProvidertype, "");
    handleSetValue(givenValue.doctorSystem, setdoctorSystem, "");
    handleSetValue(givenValue.bookingSystem, setbookingSystem, "");
    // ==========================
  };

  const handleDelete = (givenValue) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("are you sure you want to delete!")) {
      // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
      fetch(`${baseUrl}/admin/medicalservices/delete/${givenValue._id}`, {
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
        <div className="gDflex gDjcsb gDaic">
          <div>
            {/* >>>>>>>>>>>>>>>>>>>>> update needed */}
            <h5 className="tw_700">Medical Services</h5>
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
            <TableCmp
              data={allMedicalServices}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
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
        allServiceProviderType={allServiceProviderType}
      />
    </div>
  );
};

export default MedicalServices;
