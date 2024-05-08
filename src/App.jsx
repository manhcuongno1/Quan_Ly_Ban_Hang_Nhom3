import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
import { useUser } from "./features/authentication/useUser";
import AppLayoutAdmin from "./ui/AppLayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContent />
        </QueryClientProvider>
    );
}

function AppContent() {
    const { isLoading, isAuthenticated, email } = useUser();

     // Kiểm tra xem email có phải là admin hay không
    const isAdmin = email === "admin@gmail.com";

    return (
        <>
            {isAdmin && <GlobalStyles />}
            <BrowserRouter>
                <Routes>
                    {isAdmin ? (
                        <Route element={<AppLayoutAdmin />}>
                            <Route index element={<Navigate replace to="dashboard" />} />
                            <Route path="dashboard" element={<Dashboard />} />
                        </Route>
                    ) : (
                        <Route element={<AppLayout />}>
                                <Route index element={<Navigate replace to="home" />} />
                            <Route path="home" element={<Home />} />
                                
                        </Route>
                    )
                    }
                    <Route path="login" element={<Login/>} />
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