import { useEffect, useState } from "react";
// import { Button2 } from "../../../../components/button/Button2";
import { bgColor } from "../../../../styles/colour";
import DataModal from "./DataModal";
import { TableCmp } from "./TableCmp";
import { useDispatch, useSelector } from "react-redux";
import { getWebDoctorRegistrationRequestList } from "../../../../redux/action";
import { textCapitalize } from "../../../../utils/textFuncs";
import { baseUrl } from "../../../../data/Urls";
import globalVariable from "../../../../data/globalVariable";
// import { modalTypes } from "../../../../data/static";

const DoctorWebRegistrations = () => {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('Modal');
    const [modalType, setModalType] = useState('');
    const [selectedId, setSelectedId] = useState('');
    // ----------------------------------------------------------------
    // data 
    const dispatch = useDispatch()
    // >>>>>>>>>>>>>>>>>>>>> update needed
    const allDoctorWebRegistration = useSelector((state) => state.webDoctorRegistrationReducer)
    const updateData = () => {
        // >>>>>>>>>>>>>>>>>>>>> update needed
        dispatch(getWebDoctorRegistrationRequestList())
    }
    // ----------------------------------------------------------------
    useEffect(() => {
        if (allDoctorWebRegistration.length === 0) {
            updateData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ==============================================================
    // ==============================================================
    // >>>>>>>>>>>>>>>>>>>>> update needed
    // all States ====================
    const [fullName, setfullName] = useState('')

    const [phoneNumber, setphoneNumber] = useState('')
    const [specializations, setspecializations] = useState('')
    const [status, setstatus] = useState('')
    const [created, setcreated] = useState('')

    // ------------------------------------------------------------

    const [gender, setgender] = useState('')
    const [dateOfBirth, setdateOfBirth] = useState('')
    const [profilePicture, setprofilePicture] = useState('')
    const [emailAddress, setemailAddress] = useState('')
    const [officeAddress, setofficeAddress] = useState('')
    const [consultationHours, setconsultationHours] = useState('')
    const [emergencyContactInformation, setemergencyContactInformation] = useState('')
    const [medicalLicenseNumber, setmedicalLicenseNumber] = useState('')
    const [yearsOfExperience, setyearsOfExperience] = useState('')
    const [currentWorkplace, setcurrentWorkplace] = useState('')
    const [consultationFees, setconsultationFees] = useState('')
    const [availability, setavailability] = useState('')
    const [telemedicineAvailability, settelemedicineAvailability] = useState('')
    const [medicalSchool, setmedicalSchool] = useState('')
    const [graduationYear, setgraduationYear] = useState('')
    const [postgraduateTraining, setpostgraduateTraining] = useState('')
    const [boardCertifications, setboardCertifications] = useState('')
    const [additionalCoursesAndCertifications, setadditionalCoursesAndCertifications] = useState('')
    const [previousWorkplaces, setpreviousWorkplaces] = useState('')
    const [yearsOfPracticeInEachWorkplace, setyearsOfPracticeInEachWorkplace] = useState('')
    const [positionsHeld, setpositionsHeld] = useState('')
    const [areasOfExpertise, setareasOfExpertise] = useState('')
    const [proceduresPerformed, setproceduresPerformed] = useState('')
    const [languagesSpoken, setlanguagesSpoken] = useState('')
    const [professionalMemberships, setprofessionalMemberships] = useState('')
    const [awardsAndHonorsReceived, setawardsAndHonorsReceived] = useState('')
    const [researchPapersPublished, setresearchPapersPublished] = useState('')
    const [booksOrChaptersWritten, setbooksOrChaptersWritten] = useState('')
    const [conferencePresentations, setconferencePresentations] = useState('')
    const [shortBioOrPersonalStatement, setshortBioOrPersonalStatement] = useState('')
    const [philosophyOfCare, setphilosophyOfCare] = useState('')
    const [patientReviewsAndRatings, setpatientReviewsAndRatings] = useState('')
    const [linkedInProfile, setlinkedInProfile] = useState('')
    const [professionalWebsiteOrBlog, setprofessionalWebsiteOrBlog] = useState('')
    const [socialMediaHandles, setsocialMediaHandles] = useState('')
    const [insuranceAccepted, setinsuranceAccepted] = useState('')
    // ----------------------------------------------------------------

    // ==============================================================
    // ==============================================================

    const data = {
        modalTitle,
        selectedId,
        updateData,
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        fullName,
        phoneNumber,
        status,
        created,
        setfullName,
        setphoneNumber,
        setstatus,
        setcreated,
        specializations,
        setspecializations,
        // -------------------------------------------
        gender,
        dateOfBirth,
        profilePicture,
        emailAddress,
        officeAddress,
        consultationHours,
        emergencyContactInformation,
        medicalLicenseNumber,
        yearsOfExperience,
        currentWorkplace,
        consultationFees,
        availability,
        telemedicineAvailability,
        medicalSchool,
        graduationYear,
        postgraduateTraining,
        boardCertifications,
        additionalCoursesAndCertifications,
        previousWorkplaces,
        yearsOfPracticeInEachWorkplace,
        positionsHeld,
        areasOfExpertise,
        proceduresPerformed,
        languagesSpoken,
        professionalMemberships,
        awardsAndHonorsReceived,
        researchPapersPublished,
        booksOrChaptersWritten,
        conferencePresentations,
        shortBioOrPersonalStatement,
        philosophyOfCare,
        patientReviewsAndRatings,
        linkedInProfile,
        professionalWebsiteOrBlog,
        socialMediaHandles,
        insuranceAccepted,
        // -------------------------------------------
        // ==========================
    }


    // ---------------------- crud ----------------------

    const handleSetValue = (givenValue, givenValueSetter, alternate) => {
        if (givenValue && givenValue !== '') {
            givenValueSetter(givenValue)
        } else {
            givenValueSetter(alternate)
        }
    }
    const handleEdit = (givenValue, type) => {
        setModalType(type);
        setShow(true);
        // >>>>>>>>>>>>>>>>>>>>> update needed
        setModalTitle(`${textCapitalize(type)} Sub Admin`);
        setSelectedId(givenValue._id)
        // --------------
        // ==========================
        // >>>>>>>>>>>>>>>>>>>>> update needed
        handleSetValue(givenValue.fullName, setfullName, '')
        handleSetValue(givenValue.phoneNumber, setphoneNumber, '')
        handleSetValue(givenValue.status, setstatus, '')
        handleSetValue(givenValue.created, setcreated, '')
        handleSetValue(givenValue.specializations, setspecializations, '')
        //--------------------------------------------------------
        handleSetValue(givenValue.gender, setgender, '')
        handleSetValue(givenValue.dateOfBirth, setdateOfBirth, '')
        handleSetValue(givenValue.profilePicture, setprofilePicture, '')
        handleSetValue(givenValue.emailAddress, setemailAddress, '')
        handleSetValue(givenValue.officeAddress, setofficeAddress, '')
        handleSetValue(givenValue.consultationHours, setconsultationHours, '')
        handleSetValue(givenValue.emergencyContactInformation, setemergencyContactInformation, '')
        handleSetValue(givenValue.medicalLicenseNumber, setmedicalLicenseNumber, '')
        handleSetValue(givenValue.yearsOfExperience, setyearsOfExperience, '')
        handleSetValue(givenValue.currentWorkplace, setcurrentWorkplace, '')
        handleSetValue(givenValue.consultationFees, setconsultationFees, '')
        handleSetValue(givenValue.availability, setavailability, '')
        handleSetValue(givenValue.telemedicineAvailability, settelemedicineAvailability, '')
        handleSetValue(givenValue.medicalSchool, setmedicalSchool, '')
        handleSetValue(givenValue.graduationYear, setgraduationYear, '')
        handleSetValue(givenValue.postgraduateTraining, setpostgraduateTraining, '')
        handleSetValue(givenValue.boardCertifications, setboardCertifications, '')
        handleSetValue(givenValue.additionalCoursesAndCertifications, setadditionalCoursesAndCertifications, '')
        handleSetValue(givenValue.previousWorkplaces, setpreviousWorkplaces, '')
        handleSetValue(givenValue.yearsOfPracticeInEachWorkplace, setyearsOfPracticeInEachWorkplace, '')
        handleSetValue(givenValue.positionsHeld, setpositionsHeld, '')
        handleSetValue(givenValue.areasOfExpertise, setareasOfExpertise, '')
        handleSetValue(givenValue.proceduresPerformed, setproceduresPerformed, '')
        handleSetValue(givenValue.languagesSpoken, setlanguagesSpoken, '')
        handleSetValue(givenValue.professionalMemberships, setprofessionalMemberships, '')
        handleSetValue(givenValue.awardsAndHonorsReceived, setawardsAndHonorsReceived, '')
        handleSetValue(givenValue.researchPapersPublished, setresearchPapersPublished, '')
        handleSetValue(givenValue.booksOrChaptersWritten, setbooksOrChaptersWritten, '')
        handleSetValue(givenValue.conferencePresentations, setconferencePresentations, '')
        handleSetValue(givenValue.shortBioOrPersonalStatement, setshortBioOrPersonalStatement, '')
        handleSetValue(givenValue.philosophyOfCare, setphilosophyOfCare, '')
        handleSetValue(givenValue.patientReviewsAndRatings, setpatientReviewsAndRatings, '')
        handleSetValue(givenValue.linkedInProfile, setlinkedInProfile, '')
        handleSetValue(givenValue.professionalWebsiteOrBlog, setprofessionalWebsiteOrBlog, '')
        handleSetValue(givenValue.socialMediaHandles, setsocialMediaHandles, '')
        handleSetValue(givenValue.insuranceAccepted, setinsuranceAccepted, '')



        // ==========================
    }

    const handleDelete = (givenValue) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('are you sure you want to delete!')) {
            // >>>>>>>>>>>>>>>>>>>>> update needed ( update url)
            fetch(`${baseUrl}/admin/webdoctorregistration/delete/${givenValue._id}`, {
                method: 'DELETE',
                headers: new Headers({
                    Authorization: `Bearer ${globalVariable.accessToken}`,
                }),
            })
                .then((v) => v.json())
                .then((v) => {
                    if (v.message === 'success') {
                        alert('deleted successfully')
                    } else {
                        alert(v.detail ? v.detail : 'Something Went Wrong!')
                    }
                    updateData()
                })
                .catch((error) => {
                    console.log('subadmins.jsx : handleDelete : 74');
                    console.log(error);
                    alert('something went wrong! Try again.')
                })
        }
    }



    // ---------------------- crud ----------------------

    return (
        <div className="gBox h-100" >
            <div className="gRow gHeader pb-3">
                <div className="gDflex gDjcsb gDaic">
                    <div>
                        {/* >>>>>>>>>>>>>>>>>>>>> update needed */}
                        <h5 className="tw_700">Doctor Registration Data ( Website )</h5>
                    </div>
                    <div>
                        {/* <Button2 title="Add" btnFunction={() => { handleEdit({}, modalTypes.add) }} /> */}
                    </div>
                </div>
            </div>
            <div className="gRow gContent gDcol bodyContent" style={{ backgroundColor: bgColor.white }}>
                <div className="gBox">
                    <div className="gRow gContent w-100" style={{ overflow: 'scroll' }} >
                        <TableCmp data={allDoctorWebRegistration} handleEdit={handleEdit} handleDelete={handleDelete} />
                    </div>
                </div>
            </div>
            {/* <div className="gRow gFooter pt-3">
                <h1>section 3</h1>
            </div> */}
            <DataModal show={show} setShow={setShow} data={data} modalType={modalType} />
        </div>
    )
}

export default DoctorWebRegistrations;

