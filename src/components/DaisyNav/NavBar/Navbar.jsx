import { useState } from "react";
import LInk from "../Link/LInk";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        
      ];
    return (
        <nav className="bg-slate-500 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <FaXmark className="text-2xl" /> : 
                    <HiMenuAlt1 className="text-2xl" />
                }
            
            </div>
            <ul className={`md:flex absolute md:static font-semibold text-black  duration-1000 rounded-2xl p-4 bg-slate-500 ${open ? 'top-12' : '-top-60'}`}>
            {
                routes.map(route => <LInk key={route.id} route={route}></LInk>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;