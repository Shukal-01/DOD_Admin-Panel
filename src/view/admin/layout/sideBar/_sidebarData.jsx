import dashboardImg from "../../../../assets/icons/dashboard.png";
import adminImg from "../../../../assets/icons/admins.png";
import departments from "../../../../assets/icons/departments.png";
import specializations from "../../../../assets/icons/starFent.png";
import serviceprovidertype from "../../../../assets/icons/medicalServices.png";
import medicalservices from "../../../../assets/icons/medicalServices.png";
import countries from "../../../../assets/icons/country.png";
import states from "../../../../assets/icons/doubleRightTag.png";
import city from "../../../../assets/icons/doubleRightTag.png";
import contactrequests from "../../../../assets/icons/webPanel.png";
import WebPanel from "../../../../assets/icons/webPanel.png";
import appPanel from "../../../../assets/icons/phonePanel.png";

export const sideBarData = [
  {
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: dashboardImg,
  },
  {
    name: "Admin",
    to: "/admin/subadmin",
    icon: adminImg,
  },
  {
    name: "Departments",
    to: "/admin/departments",
    icon: departments,
  },
  {
    name: "Specializations",
    to: "/admin/specializations",
    icon: specializations,
  },
  {
    name: "Service Provider Type",
    to: "/admin/serviceprovidertype",
    icon: serviceprovidertype,
  },
  {
    name: "Medical Services",
    to: "/admin/medicalservices",
    icon: medicalservices,
  },
  {
    name: "Provider Service Categories",
    to: "/admin/all-services-categories",
    icon: adminImg,
  },
  // ------ location ------
  {
    name: "Countries",
    to: "/admin/countries",
    icon: countries,
  },
  {
    name: "States",
    to: "/admin/states",
    icon: states,
  },
  {
    name: "City",
    to: "/admin/city",
    icon: city,
  },
  // ------ location ------
  {
    name: "Contact Requests",
    to: "/admin/contactrequests",
    icon: contactrequests,
  },
  {
    name: "Doctor Web Registrations",
    to: "/admin/doctorwebregistrations",
    icon: WebPanel,
  },
  {
    name: "Doctor App Registrations",
    to: "/admin/doctorappregistrations",
    icon: appPanel,
  },
  {
    name: "Active Doctors",
    to: "/admin/allDoctors",
    icon: adminImg,
  },

  // {
  //   name: "Provider Service ",
  //   to: "/admin/medical-services-categories-service",
  //   icon: adminImg,
  // },
  {
    name: "Service Provider Registration",
    to: "/admin/serviceproviderregistrations",
    icon: appPanel,
  },
  {
    name: "Active Providers",
    to: "/admin/serviceproviders",
    icon: adminImg,
  },
  {
    name: "Events",
    to: "/admin/events",
    icon: WebPanel,
  },
  // {
  //   name: "All",
  //   icon: WebPanel,
  //   dropDown: [
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //   ],
  // },
  // {
  //   name: "All",
  //   icon: WebPanel,
  //   dropDown: [
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //   ],
  // },
  // {
  //   name: "All",
  //   icon: WebPanel,
  //   dropDown: [
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //     {
  //       name: "Events",
  //       to: "/admin/events",
  //       icon: appPanel,
  //     },
  //   ],
  // },
  // {
  //     name: 'Page2',
  //     to: '/admin/page2',
  //     icon: dashboardImg,
  // }
  // ---------------------------------------
];
