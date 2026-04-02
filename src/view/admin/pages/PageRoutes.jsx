/* eslint-disable react/prop-types */
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Loader2 } from "../../../components/loader/Loader2";
import { bgColor } from "../../../styles/colour";
import ContactRequests from "./contactRequests/ContactRequests";
import DoctorAppRegistrations from "./doctorAppRegistrations/DoctorAppRegistrations";
import DoctorWebRegistrations from "./doctorWebRegistrations/DoctorWebRegistrations";
import ServiceProviderAppRegistrations from "./serviceProviderAppRegistrations/ServiceProviderAppRegistrations";
import Events from "./event/Events";
import ServiceProvider from "./serviceProviders/ServiceProvider";
import AllDoctorsPage from "./doctors/AllDoctorsPage";
import ServiceProviderServicesCategoriesPage from "./serviceProviderServicesCategories/ServiceProviderServicesCategories";
import ServiceProviderServicesPage from "./serviceProviderServices/ServiceProviderServices";

// ------------------------------------
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Subadmins = lazy(() => import("./subadmins/Subadmins"));
const Departments = lazy(() => import("./departments/Departments"));
const Specializations = lazy(() => import("./specializations/Specializations"));
const ServiceProviderType = lazy(() =>
  import("./serviceProviderType/ServiceProviderType")
);
const MedicalServices = lazy(() => import("./medicalServices/MedicalServices"));
const Country = lazy(() => import("./location/country/Country"));
const State = lazy(() => import("./location/state/State"));
const City = lazy(() => import("./location/city/City"));
// ------------------------------------
const Page2 = lazy(() => import("./page2/Page2"));

const HandleNavigation = ({ path, element }) => {
  const { page } = useParams();

  return <>{page === path && element}</>;
};

export const PageRoutes = () => {
  return (
    <div
      className="p-4 gRow gContent PageRoutes "
      style={{ backgroundColor: bgColor.bodyWhite }}
    >
      <div className="gDflex gDcol h-100">
        <Suspense fallback={<Loader2 />} className="ok">
          {/* -------------------------------- */}
          <HandleNavigation path={"dashboard"} element={<Dashboard />} />
          <HandleNavigation path={"subadmin"} element={<Subadmins />} />
          <HandleNavigation path={"departments"} element={<Departments />} />
          <HandleNavigation
            path={"specializations"}
            element={<Specializations />}
          />
          <HandleNavigation
            path={"serviceprovidertype"}
            element={<ServiceProviderType />}
          />
          <HandleNavigation
            path={"medicalservices"}
            element={<MedicalServices />}
          />
          <HandleNavigation path={"countries"} element={<Country />} />
          <HandleNavigation path={"states"} element={<State />} />
          <HandleNavigation path={"city"} element={<City />} />
          <HandleNavigation
            path={"contactrequests"}
            element={<ContactRequests />}
          />
          <HandleNavigation
            path={"doctorappregistrations"}
            element={<DoctorAppRegistrations />}
          />
          <HandleNavigation
            path={"doctorwebregistrations"}
            element={<DoctorWebRegistrations />}
          />
          <HandleNavigation
            path={"serviceproviderregistrations"}
            element={<ServiceProviderAppRegistrations />}
          />
          <HandleNavigation path={"events"} element={<Events />} />
          <HandleNavigation
            path={"serviceproviders"}
            element={<ServiceProvider />}
          />
          <HandleNavigation path={"allDoctors"} element={<AllDoctorsPage />} />
          <HandleNavigation
            path={"all-services-categories"}
            element={<ServiceProviderServicesCategoriesPage />}
          />
          <HandleNavigation
            path={"medical-services-categories-service"}
            element={<ServiceProviderServicesPage />}
          />
          {/* -------------------------------- */}
          <HandleNavigation path={"page2"} element={<Page2 />} />
        </Suspense>
      </div>
    </div>
  );
};
