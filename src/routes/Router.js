import { lazy } from "react";
import Login from "../InvoiceMangementComponent/LoginRegister/Login.jsx";
import Error from "../InvoiceMangementComponent/ErrorPage/Error.jsx";
import ProtectedRoute from "../InvoiceMangementComponent/LoginRegister/ProtectedRoute.jsx";
import { Navigate } from "react-router-dom";
import { element } from "prop-types";
import LoginRegisterLayOut from "../InvoiceMangementComponent/LoginRegister/LoginRegisterLayOut.jsx";
import Home from "../InvoiceMangementComponent/Home/Home.jsx";
import VendorForm from "../InvoiceMangementComponent/ClientVendor/VendorForm.jsx";
import SecondInvoice from "../InvoiceMangementComponent/InvoiceTemplates/SecondInvoiceTemplate/SecondInvoice.jsx";
import InvoiceList from "../InvoiceMangementComponent/Invoice/InvoiceListComponent/InvoiceList.jsx";
import CreateInvoice from "../InvoiceMangementComponent/Invoice/CreateInvoiceCompoenent/CreateInvoice.jsx";
import VendorList from "../InvoiceMangementComponent/ClientVendor/VendorList.jsx";
import ForgotPassword from "../InvoiceMangementComponent/LoginRegister/ForgotPassword.jsx";
import Product from "../InvoiceMangementComponent/Product/Product.jsx";
import ProductTable from "../InvoiceMangementComponent/Product/ProductTable.jsx";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/login",
    element: <LoginRegisterLayOut />,
  },
  {
    path: "/register",
    element: <LoginRegisterLayOut />,
  },
  {
    path: "/fogotPassword",
    element: <LoginRegisterLayOut />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Navigate to="starter" replace /> },
      { path: "invoice/template", element: <SecondInvoice /> },
      {path:"invoices",element:<InvoiceList/>},
      {path:"invoice/createInvoice",element:<CreateInvoice/>},
      { path: "venders/vendorForm", element: <VendorForm /> },
      { path: "starter", element: <Starter /> },
      { path: "venders", element: <VendorList /> },
      {path:"productlist",element:<ProductTable/>},
      {path:"productlist/product",element:<Product/>},
      { path: "productlist/product/:id", element: <Product /> },




      { path: "about", element: <About /> },
      { path: "alerts", element: <Alerts /> },
      { path: "badges", element: <Badges /> },
      { path: "buttons", element: <Buttons /> },
      { path: "cards", element: <Cards /> },
      { path: "grid", element: <Grid /> },
      { path: "table", element: <Tables /> },
      { path: "forms", element: <Forms /> },
      { path: "breadcrumbs", element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
