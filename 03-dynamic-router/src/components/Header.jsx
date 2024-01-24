
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-sky-950 py-3 text-white font-bold text-lg'>
            <div className='container mx-auto px-2 flex gap-5'>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/blogs">
                    Blogs
                </NavLink>
            </div>
        </div>
    );
};

export default Header;