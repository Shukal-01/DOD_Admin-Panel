import { combineReducers } from "redux";
import { roleReducer } from "./allReducers/roleReducer";
import { userReducer } from "./allReducers/userReducer";
import { contactRequestReducer } from "./allReducers/contactRequestReducer";
import { departmentReducer } from "./allReducers/departmentReducer";
import { doctorRegistrationReducer } from "./allReducers/doctorRegistrationReducer";
import { webDoctorRegistrationReducer } from "./allReducers/webDoctorRegistrationReducer";
import { specializationReducer } from "./allReducers/specializationReducer";
import { serviceProviderTypeReducer } from "./allReducers/serviceProviderTypeReducer";
import { medicalServicesReducer } from "./allReducers/medicalServicesReducer";
import { countryReducer } from "./allReducers/location/countryReducer";
import { stateReducer } from "./allReducers/location/stateReducer";
import { cityReducer } from "./allReducers/location/cityReducer";
import { serviceProviderReducer } from "./allReducers/serviceProviderReducer";
import { eventReducer } from "./allReducers/eventReducer";
import { doctorReducer } from "./allReducers/doctorReducer";
import { selectedServiceCategoryReducer } from "./allReducers/selectedServiceCategoryReducer";
import { serviceProviderServiceCategoryReducer } from "./allReducers/serviceProviderServiceCategoryReducer";
import { selectedServiceCategoryServiceReducer } from "./allReducers/selectedServiceCategoryServiceReducer";
import { serviceProviderServicesReducer } from "./allReducers/serviceProviderServicesReducer";

export default combineReducers({
  roleReducer,
  userReducer,
  contactRequestReducer,
  departmentReducer,
  doctorRegistrationReducer,
  webDoctorRegistrationReducer,
  specializationReducer,
  serviceProviderTypeReducer,
  medicalServicesReducer,
  countryReducer,
  stateReducer,
  cityReducer,
  serviceProviderReducer,
  eventReducer,
  doctorReducer,
  selectedServiceCategoryReducer,
  serviceProviderServiceCategoryReducer,
  selectedServiceCategoryServiceReducer,
  serviceProviderServicesReducer,
});
