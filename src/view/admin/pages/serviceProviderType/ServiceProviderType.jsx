import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
// import { useDispatch, useSelector } from "react-redux";
// import { getServiceProviderTypeList } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";
import { Link, useLocation } from "react-router-dom";

const ServiceProviderType = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Modal");
  const [modalType, setModalType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  // ----------------------------------------------------------------
  // data
  // const dispatch = useDispatch();
  // >>>>>>>>>>>>>>>>>>>>> update needed
  // const serviceProviderType = useSelector(
  //   (state) => state.serviceProviderTypeReducer
  // );
  // const updateData = () => {
  //   // >>>>>>>>>>>>>>>>>>>>> update needed
  //   dispatch(getServiceProviderTypeList());
  // };
  // // ----------------------------------------------------------------
  // useEffect(() => {
  //   if (serviceProviderType.length === 0) {
  //     updateData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [serviceProviderType, setServiceProviderType] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const location = useLocation();

  const updateData = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const thisPage = page ? parseInt(page) : 1;

    const fetchServiceProviderType = async () => {
      try {
        const url = `${baseUrl}/admin/serviceprovidertype/getAll?page=${thisPage}`;
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${globalVariable.accessToken}`,
          }),
        });

        const data = await response.json();
        console.log(data);

        setServiceProviderType(data.data || []);
        setPagination({
          currentPage: data.pagination?.currentPage || thisPage,
          totalPages: data.pagination?.totalPages || 1,
        });

      } catch (error) {
        console.error('Failed to fetch departments:', error.message);
      }
    };

    fetchServiceProviderType();
  };

  useEffect(() => {
    updateData();
  }, [location.search]);

  // ==============================================================
  // ==============================================================
  // >>>>>>>>>>>>>>>>>>>>> update needed
  const [name, setname] = useState("");
  const [type, settype] = useState("");

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
    type,
    settype,
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
    setModalTitle(`${textCapitalize(type)} Service Provider Type`);
    setSelectedId(givenValue._id);
    // --------------
    // ==========================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    handleSetValue(givenValue.name, setname, "");
    handleSetValue(givenValue.type, settype, "individual");
    // ==========================
  };

  const handleDelete = (givenValue) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("are you sure you want to delete!")) {
      // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
      fetch(`${baseUrl}/admin/serviceprovidertype/delete/${givenValue._id}`, {
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
            <h5 className="tw_700">Service Provider Types</h5>
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
              data={serviceProviderType}
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
      />
    </div>
  );
};

export default ServiceProviderType;
