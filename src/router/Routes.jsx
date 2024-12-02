import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import AllSchedule from "../Pages/AllSchedule";
import AddSchedule from "../Pages/AddSchedule";
  
const router = createBrowserRouter([
    {
      path: "/",
        element: <MainLayout></MainLayout>,
        
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
            {
                path: '/addSchedule',
                element:<AddSchedule></AddSchedule>
          },
            {
                path: '/allSchedule',
                element:<AllSchedule></AllSchedule>
          },
      ]
    },
]);
  
export default router