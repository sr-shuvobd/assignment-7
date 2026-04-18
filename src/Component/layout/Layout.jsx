import NavBar from '../Shear/NavBar/NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Layout;