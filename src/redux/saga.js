import { put, takeEvery } from "redux-saga/effects";
import {
  ROLES,
  SET_ROLES,
  USERS,
  SET_USERS,
  CONTACT_REQUESTS,
  SET_CONTACT_REQUESTS,
  DEPARTMENTS,
  SET_DEPARTMENTS,
  DOCTORREGISTRATION,
  SET_DOCTORREGISTRATION,
  SET_WEBDOCTORREGISTRATION,
  WEBDOCTORREGISTRATION,
  SPECIALIZATIONS,
  SET_SPECIALIZATIONS,
  SERVICEPROVIDERTYPE,
  SET_SERVICEPROVIDERTYPE,
  MEDICALSERVICES,
  SET_MEDICALSERVICES,
  COUNTRY,
  STATE,
  CITY,
  SET_COUNTRY,
  SET_STATE,
  SET_CITY,
  SERVICE_PROVIDER,
  SET_SERVICE_PROVIDER,
  EVENTS,
  SET_EVENTS,
  DOCTORS,
  SET_DOCTORS,
  SERVICE_PROVIDER_SERVICE_CATEGORIES,
  SET_SERVICE_PROVIDER_SERVICE_CATEGORIES,
  SERVICE_PROVIDER_SERVICES,
  SET_SERVICE_PROVIDER_SERVICES,
} from "./constant";
import { baseUrl } from "../data/Urls";
import globalVariable from "../data/globalVariable";

function* rolesList() {
  try {
    const url = `${baseUrl}/admin/roles/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_ROLES, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* usersList() {
  try {
    const url = `${baseUrl}/admin/user/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_USERS, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* contactRequestList() {
  try {
    const url = `${baseUrl}/admin/contact_request/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_CONTACT_REQUESTS, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* doctorRegistrationRequestList() {
  try {
    const url = `${baseUrl}/admin/doctorregistration/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_DOCTORREGISTRATION, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* webDoctorRegistrationRequestList() {
  try {
    const url = `${baseUrl}/admin/webdoctorregistration/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    console.log(data);
    yield put({ type: SET_WEBDOCTORREGISTRATION, data });
  } catch (error) {
    console.log(error.message);
  }
}

function* departmentList() {
  try {
    const url = `${baseUrl}/admin/department/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_DEPARTMENTS, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* specializationList() {
  try {
    const url = `${baseUrl}/admin/specialization/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_SPECIALIZATIONS, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* serviceProviderTypeList() {
  try {
    const url = `${baseUrl}/admin/serviceprovidertype/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_SERVICEPROVIDERTYPE, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* medicalServicesList() {
  try {
    const url = `${baseUrl}/admin/medicalservices/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();

    yield put({ type: SET_MEDICALSERVICES, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* countryList() {
  try {
    const url = `${baseUrl}/admin/country/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_COUNTRY, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* stateList() {
  try {
    const url = `${baseUrl}/admin/state/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_STATE, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* cityList() {
  try {
    const url = `${baseUrl}/admin/city/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_CITY, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* serviceProviderList() {
  try {
    const url = `${baseUrl}/admin/serviceProvider/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_SERVICE_PROVIDER, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* eventsList() {
  try {
    const url = `${baseUrl}/admin/event/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_EVENTS, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* getDoctorList() {
  try {
    const url = `${baseUrl}/admin/doctor/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_DOCTORS, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* getServiceProviderServiceCategoriesList() {
  try {
    const url = `${baseUrl}/admin/serviceproviderservicecategories/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_SERVICE_PROVIDER_SERVICE_CATEGORIES, data });
  } catch (error) {
    // console.log(error.message)
  }
}
function* getServiceProviderServicesList() {
  try {
    const url = `${baseUrl}/admin/serviceproviderservice/getAll`;

    let data = yield fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${globalVariable.accessToken}`,
      }),
    });
    data = yield data.json();
    yield put({ type: SET_SERVICE_PROVIDER_SERVICES, data });
  } catch (error) {
    // console.log(error.message)
  }
}

function* SagaData() {
  yield takeEvery(ROLES, rolesList);
  yield takeEvery(USERS, usersList);
  yield takeEvery(CONTACT_REQUESTS, contactRequestList);
  yield takeEvery(DOCTORREGISTRATION, doctorRegistrationRequestList);
  yield takeEvery(DEPARTMENTS, departmentList);
  yield takeEvery(WEBDOCTORREGISTRATION, webDoctorRegistrationRequestList);
  yield takeEvery(SPECIALIZATIONS, specializationList);
  yield takeEvery(SERVICEPROVIDERTYPE, serviceProviderTypeList);
  yield takeEvery(MEDICALSERVICES, medicalServicesList);
  yield takeEvery(COUNTRY, countryList);
  yield takeEvery(STATE, stateList);
  yield takeEvery(CITY, cityList);
  yield takeEvery(SERVICE_PROVIDER, serviceProviderList);
  yield takeEvery(EVENTS, eventsList);
  yield takeEvery(DOCTORS, getDoctorList);
  yield takeEvery(
    SERVICE_PROVIDER_SERVICE_CATEGORIES,
    getServiceProviderServiceCategoriesList
  );
  yield takeEvery(SERVICE_PROVIDER_SERVICES, getServiceProviderServicesList);
}

export default SagaData;
