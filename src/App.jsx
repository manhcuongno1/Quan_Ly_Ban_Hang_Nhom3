import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import CreateOrder, {
    action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Login from "./login/login";
import Register from "./register/Register";
import Product from "./ui/Product";
import Contact from "./contact/Contact"

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/order/new",
                element: <CreateOrder />,
                action: createOrderAction,
            },
            {
                path: "/order/:orderId",
                element: <Order />,
                loader: orderLoader,
            },
            
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;