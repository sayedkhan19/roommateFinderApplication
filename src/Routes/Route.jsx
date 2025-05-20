import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../LayOuts/Home";
import RoomCard from "../pages/RoomCard";
import LoadRooms from "../components/LoadRooms";
import DetailsRoom from "../pages/DetailsRoom";
import ErrorPage from "../pages/ErrorPage";

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
          Component:DetailsRoom,
          loader:({params})=> fetch(`http://localhost:3000/rooms/${params.id}`),
        }
    ]
  },
]);