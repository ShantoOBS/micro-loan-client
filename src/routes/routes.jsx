import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home/Home";
import AllLoans from "../page/AllLoans/AllLoans";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../page/Dashboard/Dashboard";
import ApplyLoan from "../page/ApplyLoan/ApplyLoan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "all-loans", element: <AllLoans></AllLoans> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "apply-loan", element: <ApplyLoan></ApplyLoan> },
    ],
  },
]);