import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUser } from "./features/authentication/useUser";
import AppLayoutAdmin from "./ui/AppLayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";

import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";
import Drinks from "./pages/Drinks";
import Product from './ui/Product';
import Article from './article/Article';
import Origin from './origin/Origin';
import Contact from './contact/Contact';

import CreateOrder from './features/order/CreateOrder';
import Order  from './features/order/Order';
import Menu from './features/menu/Menu';
import Cart from "./features/cart/Cart";

import { DarkModeProvider } from "./Contexts/DarkModeContext";
import Settings from "./pages/Settings";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import Register from "./pages/Register";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
      <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      
            <AppContent />
            <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",//var(--color-grey-0)
              color: "var(--color-grey-700)",
            },
          }}
        />
        
      </QueryClientProvider>
      </DarkModeProvider>
    );
}

function AppContent() {
    const { isLoading, isAuthenticated, email } = useUser();

     // Kiểm tra xem email có phải là admin hay không
    const isAdmin = email === "admin@gmail.com";
   
    return (
        <>
        <BrowserRouter>
          
                <Routes>
                    {isAdmin ? (
                        <Route path ="/" element={<AppLayoutAdmin />}>
                            <Route index element={<Navigate replace to="dashboard" />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="users" element={<Users />} />
                <Route path="account" element={<Account />} />
                <Route path="bookings" element={<Bookings />} />

                

                        </Route>
                        
                    ) : (
                        <Route path ="/" element={<AppLayout />}>
                                <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="product" element={<Product />} />
                  <Route path="contact" element={<Contact />} />

                  <Route path="article" element={<Article />} />
                  <Route path="origin" element={<Origin />} />
                  <Route path="register" element={<Register />} />

                  <Route path="order/new" element={<CreateOrder />} />
                  <Route path="order/:orderId" element={<Order  />} />
           </Route>
                    )
                    }
                            <Route path="login" element={<Login />} />     
                           <Route  element={<AppLayoutAdmin />}>                          
                           <Route path="users" element={<Users />} />
                            <Route path="dashboard" element={<Dashboard />} />
                          <Route path="account" element={<Account />} />
                          <Route path="drinks" element={<Drinks />} />
              <Route path="settings" element={<Settings />} />
                <Route path="bookings" element={<Bookings />} />
              
              
                          </Route>
            
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;


// const userRole = getRole();
// const router = createBrowserRouter([
//     {
//         element:  userRole === "admin" ? <AppLayout />:<AppLayoutAdmin/> ,
//         errorElement: <Error />,
//         children: userRole === "admin" ? [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/menu",
//                 element: <Menu />,
//                 loader: menuLoader,
//             },
//             {
//                 path: "/cart",
//                 element: <Cart />,
//             },
//             {
//                 path: "/order/new",
//                 element: <CreateOrder />,
//                 action: createOrderAction,
//             },
//             {
//                 path: "/order/:orderId",
//                 element: <Order />,
//                 loader: orderLoader,
//             },
//         ]
//         :
//         [
//              {
//                 path: "/",
//                 element: <Dashboard />,          
//                 },
             
          
//         ],
//     },
//     {
//                 path: "/login",
//                 element: <Login />,          
//             },
// ]);

// function App() {
//     return <>
//         <GlobalStyles />
//         <RouterProvider router={router} />;
//     </>
// }

// export default App;