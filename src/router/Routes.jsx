import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import AllSchedule from "../Pages/AllSchedule";
import AddSchedule from "../Pages/AddSchedule";
import UpdateSchedule from "../Pages/UpdateSchedule";
  
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
                element:<AllSchedule></AllSchedule>,
                loader:()=>fetch('https://gym-schedule-server-delta.vercel.app/schedule')
          },
            {
                path: '/schedule/:id',
                element:<UpdateSchedule></UpdateSchedule>,
                loader:({params})=>fetch(`https://gym-schedule-server-delta.vercel.app/schedule/${params.id}`)
          },
      ]
    },
]);
  
export default router