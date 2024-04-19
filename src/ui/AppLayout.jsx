import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { useNavigation, Outlet } from "react-router-dom";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
