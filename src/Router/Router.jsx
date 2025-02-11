import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../components/ProjectDetails";

const routes = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
           
            
        ]
    },
    {
        path : '/projectDetails/:id',
        element : <ProjectDetails/>
    },
   
])

export default routes
