import {
  WEBDOCTORREGISTRATION,
  CONTACT_REQUESTS,
  DEPARTMENTS,
  DOCTORREGISTRATION,
  ROLES,
  USERS,
  SPECIALIZATIONS,
  SERVICEPROVIDERTYPE,
  MEDICALSERVICES,
  COUNTRY,
  STATE,
  CITY,
  SERVICE_PROVIDER,
  EVENTS,
  DOCTORS,
  SET_SELECTED_SERVICE_CATEGORY,
  SERVICE_PROVIDER_SERVICE_CATEGORIES,
  SET_SELECTED_SERVICE_CATEGORY_SERVICE,
  SERVICE_PROVIDER_SERVICES,
} from "./constant";

export function getRolesList() {
  return {
    type: ROLES,
  };
}
export function getUsersList() {
  return {
    type: USERS,
  };
}

export function getContactRequestList() {
  return {
    type: CONTACT_REQUESTS,
  };
}

export function getDepartmentList() {
  return {
    type: DEPARTMENTS,
  };
}
export function getDoctorRegistrationRequestList() {
  return {
    type: DOCTORREGISTRATION,
  };
}
export function getWebDoctorRegistrationRequestList() {
  return {
    type: WEBDOCTORREGISTRATION,
  };
}

export function getSpecializations() {
  return {
    type: SPECIALIZATIONS,
  };
}

export function getServiceProviderTypeList() {
  return {
    type: SERVICEPROVIDERTYPE,
  };
}

export function getMedicalServicesList() {
  return {
    type: MEDICALSERVICES,
  };
}
export function getCountryList() {
  return {
    type: COUNTRY,
  };
}
export function getStateList() {
  return {
    type: STATE,
  };
}
export function getCityList() {
  return {
    type: CITY,
  };
}

export function getServiceProviderList() {
  return {
    type: SERVICE_PROVIDER,
  };
}
export function getEventsList() {
  return {
    type: EVENTS,
  };
}
export function getDoctorsList() {
  return {
    type: DOCTORS,
  };
}
export function getServiceProviderServiceCategoriesList() {
  return {
    type: SERVICE_PROVIDER_SERVICE_CATEGORIES,
  };
}
export function getServiceProviderServicesList() {
  return {
    type: SERVICE_PROVIDER_SERVICES,
  };
}
export function setSelectedServiceCategory_action(data) {
  return {
    type: SET_SELECTED_SERVICE_CATEGORY,
    data,
  };
}
export function setSelectedServiceCategoryService_action(data) {
  return {
    type: SET_SELECTED_SERVICE_CATEGORY_SERVICE,
    data,
  };
}
