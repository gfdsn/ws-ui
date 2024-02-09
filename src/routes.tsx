import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Room from "./components/Room/Room";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import AuthMiddleware from "./components/Middleware/AuthMiddleware";

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
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/room/:id',
    element: <AuthMiddleware element={<Room />} />
  }
])