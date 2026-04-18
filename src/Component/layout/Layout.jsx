import Footer from '../Shear/Footer/Footer';
import NavBar from '../Shear/NavBar/NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;