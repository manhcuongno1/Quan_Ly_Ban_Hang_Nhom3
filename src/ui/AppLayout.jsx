import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { useNavigation, Outlet, useLocation } from "react-router-dom";


function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const location = useLocation()
    return (
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Outlet />
            </main>
            {!location.pathname.includes('/login') && <CartOverview />}
        </div>
    );
}

export default AppLayout;
