import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LoginRegister from "../Layouts/LoginRegister";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regisger/Register";
import Home from "../Pages/Home/Home/Home";
import Events from "../Pages/Events/Events";
import AdminLayout from "../Layouts/AdminLayout";
import VolunteerList from "../Pages/Admin/VolunteerList/VolunteerList";
import AddEvent from "../Pages/Admin/AddEvent/AddEvent";
import EventDetails from "../Pages/Events/EventDetails/EventDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "event-details/:id",
        element: <EventDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/event/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginRegister />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginRegister />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/volunteer-list" />,
      },
      {
        path: "/admin/volunteer-list",
        element: <VolunteerList />,
      },
      {
        path: "/admin/add-event",
        element: <AddEvent />,
      },
    ],
  },
]);
