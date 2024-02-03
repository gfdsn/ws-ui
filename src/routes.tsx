import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Room from "./components/Room/Room";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/room/:id',
    element: <Room />
  }
])