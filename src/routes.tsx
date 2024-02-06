import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Room from "./components/Room/Room";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/room/:id',
    element: <Room />
  }
])