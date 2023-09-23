import React from "react";
import ReactDOM from "react-dom/client"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./features/appStore";
import Header from "./Component/Header";
import Body from "./Component/Body";
import RestruantDetailsPage from "./Component/RestruantDetailsPage";
import Cart from "./Component/Cart";


const App = () => {
    return (
        <Provider store={appStore}>
            <div className="relative pt-[80px] min-h-[100%] flex flex-col min-w-[1240px]">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restruants/:name/:id",
                element: <RestruantDetailsPage />,
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)