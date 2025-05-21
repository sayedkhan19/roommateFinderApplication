import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../LayOuts/Home";
import RoomCard from "../pages/RoomCard";
import LoadRooms from "../components/LoadRooms";
import DetailsRoom from "../pages/DetailsRoom";
import ErrorPage from "../pages/ErrorPage";
import Auth from "../pages2/Auth";
import LoginAuth from "../pages2/LoginAuth";
import RegisterAuth from "../pages2/RegisterAuth";
import PrivateRoutes from "../ptovider/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home,
            
        },
        {
            path: "room",
            Component: RoomCard,
        },
        {
          path:"loadroom",
          Component:LoadRooms,
          
        },
        {
          path:"detailsroom/:id",
          element:<PrivateRoutes>
            <DetailsRoom></DetailsRoom>
          </PrivateRoutes>,
          loader:({params})=> fetch(`http://localhost:3000/rooms/${params.id}`),
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
        }
    ]
  },
  {
    path:"/auth",
    Component:Auth,
    children:[
      {
        path:"/auth/login",
        Component:LoginAuth,
      },
      {
        path:"/auth/register",
        Component:RegisterAuth,
      }
    ]
  },
]);