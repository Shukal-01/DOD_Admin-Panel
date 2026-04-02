import { useEffect, useState } from "react";
import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useLocation, Link } from "react-router-dom";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
import { modalTypes } from "../../../../data/static";

const DoctorAppRegistrations = () => {
    // Modal & selection states
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("Modal");
    const [modalType, setModalType] = useState("");
    const [selectedId, setSelectedId] = useState("");

    // Local state for doctor registration list and pagination
    const [allDoctorAppRegistration, setAllDoctorAppRegistration] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
    });
    const location = useLocation();

    // Fetch registrations directly with pagination support
    const updateData = () => {
        const queryParams = new URLSearchParams(location.search);
        const page = queryParams.get("page");
        const thisPage = page ? parseInt(page) : 1;

        const fetchRegistrations = async () => {
            try {
                const url = `${baseUrl}/admin/doctorregistration/getAll?page=${thisPage}`;
                const response = await fetch(url, {
                    headers: new Headers({
                        Authorization: `Bearer ${globalVariable.accessToken}`,
                    }),
                });
                const data = await response.json();
                console.log("data incoming", data)
                setAllDoctorAppRegistration(data.data || []);
                setPagination({
                    currentPage: data.pagination?.currentPage || thisPage,
                    totalPages: data.pagination?.totalPages || 1,
                });
            } catch (error) {
                console.error("Error fetching doctor registrations:", error.message);
            }
        };

        fetchRegistrations();
    };

    useEffect(() => {
        updateData();
        // Re-run data fetching when URL query (page number) changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search]);

    // Form/modal state values
    const [name, setname] = useState("");
    const [mobileNumber, setmobileNumber] = useState("");
    const [status, setstatus] = useState("");
    const [created, setcreated] = useState("");
    const [department, setdepartment] = useState("");
    const [professionalEmailAddress, setprofessionalEmailAddress] = useState("");
    const [specialization, setspecialization] = useState("");
    const [experience, setexperience] = useState("");
    const [education, seteducation] = useState("");
    const [workAddress, setworkAddress] = useState("");
    const [workPlaceName, setworkPlaceName] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [country, setcountry] = useState("");
    const [languagesSpoken, setlanguagesSpoken] = useState("");
    const [experienceDescription, setexperienceDescription] = useState("");
    const [aboutDescription, setaboutDescription] = useState("");

    // Data object for the modal
    const data = {
        modalTitle,
        selectedId,
        updateData,
        // Fields
        name,
        mobileNumber,
        status,
        created,
        setname,
        setmobileNumber,
        setstatus,
        setcreated,
        department,
        setdepartment,
        professionalEmailAddress,
        setprofessionalEmailAddress,
        specialization,
        setspecialization,
        experience,
        setexperience,
        education,
        seteducation,
        workAddress,
        setworkAddress,
        workPlaceName,
        setworkPlaceName,
        city,
        setcity,
        state,
        setstate,
        country,
        setcountry,
        languagesSpoken,
        setlanguagesSpoken,
        experienceDescription,
        setexperienceDescription,
        aboutDescription,
        setaboutDescription,
    };

    // Utility function to set value or fallback
    const handleSetValue = (givenValue, givenValueSetter, alternate) => {
        if (givenValue && givenValue !== "") {
            givenValueSetter(givenValue);
        } else {
            givenValueSetter(alternate);
        }
    };

    // Handler for editing (or adding) a doctor registration
    const handleEdit = (givenValue, type) => {
        setModalType(type);
        setShow(true);
        setModalTitle(`${textCapitalize(type)} Doctor Registration`);
        setSelectedId(givenValue._id || "");

        handleSetValue(givenValue.name, setname, "");
        handleSetValue(givenValue.mobileNumber, setmobileNumber, "");
        handleSetValue(givenValue.status, setstatus, "");
        handleSetValue(givenValue.created, setcreated, "");
        handleSetValue(givenValue.department, setdepartment, "");
        handleSetValue(
            givenValue.professionalEmailAddress,
            setprofessionalEmailAddress,
            ""
        );
        handleSetValue(givenValue.specialization, setspecialization, "");
        handleSetValue(givenValue.experience, setexperience, "");
        handleSetValue(givenValue.education, seteducation, "");
        handleSetValue(givenValue.workAddress, setworkAddress, "");
        handleSetValue(givenValue.workPlaceName, setworkPlaceName, "");
        handleSetValue(givenValue.city, setcity, "");
        handleSetValue(givenValue.state, setstate, "");
        handleSetValue(givenValue.country, setcountry, "");
        handleSetValue(givenValue.languagesSpoken, setlanguagesSpoken, "");
        handleSetValue(
            givenValue.experienceDescription,
            setexperienceDescription,
            ""
        );
        handleSetValue(givenValue.aboutDescription, setaboutDescription, "");
    };

    // Handler for deleting a doctor registration
    const handleDelete = (givenValue) => {
        if (confirm("Are you sure you want to delete?")) {
            fetch(`${baseUrl}/admin/doctorregistration/delete/${givenValue._id}`, {
                method: "DELETE",
                headers: new Headers({
                    Authorization: `Bearer ${globalVariable.accessToken}`,
                }),
            })
                .then((v) => v.json())
                .then((v) => {
                    if (v.message === "success") {
                        alert("Deleted successfully");
                    } else {
                        alert(v.detail ? v.detail : "Something Went Wrong!");
                    }
                    updateData();
                })
                .catch((error) => {
                    console.error("Error in handleDelete:", error);
                    alert("Something went wrong! Try again.");
                });
        }
    };

    return (
        <div className="gBox h-100">
            <div className="gRow gHeader pb-3">
                <div className="gDflex gDjcsb gDaic">
                    <div>
                        <h5 className="tw_700">Doctor Registration Data</h5>
                    </div>
                    <div>
                        <Button2
                            title="Add"
                            btnFunction={() => handleEdit({}, modalTypes.add)}
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
                            data={allDoctorAppRegistration}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>
            <div className="gRow gFooter pt-3">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li
                            className={`page-item ${pagination.currentPage === 1 ? "disabled" : ""
                                }`}
                        >
                            <Link
                                className="page-link"
                                to={`?page=${pagination.currentPage - 1}`}
                            >
                                Previous
                            </Link>
                        </li>
                        {(() => {
                            const pages = [];
                            const total = pagination.totalPages;
                            const current = pagination.currentPage;
                            const delta = 1;
                            const range = [];
                            for (
                                let i = Math.max(2, current - delta);
                                i <= Math.min(total - 1, current + delta);
                                i++
                            ) {
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
                                        <li
                                            key={page}
                                            className={`page-item ${page === current ? "active" : ""
                                                }`}
                                        >
                                            <Link className="page-link" to={`?page=${page}`}>
                                                {page}
                                            </Link>
                                        </li>
                                    );
                                }
                            }
                            return pages;
                        })()}
                        <li
                            className={`page-item ${pagination.currentPage === pagination.totalPages
                                    ? "disabled"
                                    : ""
                                }`}
                        >
                            <Link
                                className="page-link"
                                to={`?page=${pagination.currentPage + 1}`}
                            >
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <DataModal show={show} setShow={setShow} data={data} modalType={modalType} />
        </div>
    );
};

export default DoctorAppRegistrations;
