import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";

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
    }
])

export default routes
