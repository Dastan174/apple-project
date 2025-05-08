import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../ui/errorPage/ErrorPage";
import Contact from "../components/pages/contact/Contact";
import Login from "../components/pages/login/Login";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Register from "../components/pages/register/Register";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: <ErrorPage /> },
    { link: "/about", element: <About /> },
    { link: "/contact", element: <Contact /> },
    { link: "/sign-up", element: <Register /> },
    { link: "/sign-in", element: <Login /> },
  ];
  return (
    <Routes>
      {routes.map((el, idx) => (
        <Route path={el.link} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
