import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useLocation} from "react-router-dom";


function AppLayout() {
  const location = useLocation();


  return (
    <div className="layout">
      <Header />   
        <main >
          <Outlet />
      </main>
      {!location.pathname.includes('/login') && <CartOverview />}
      
    </div>
  );
}

export default AppLayout;