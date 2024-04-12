import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const logout = () => {
        logOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (

        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-3xl ">DReAnuF</h2>
            </div>
            <div className="flex items-center justify-between gap-16">
                <ul className="flex items-center justify-between gap-10">
                    <Link to='/'>
                        <li className="group flex  cursor-pointer flex-col">
                            Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link to='about'>
                        <li className="group flex  cursor-pointer flex-col">
                            About <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                    <Link to='flower'>
                        <li className="group flex  cursor-pointer flex-col">
                            Flower <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                    {!user &&
                    
                    <Link to='register'>
                        <li className="group flex  cursor-pointer flex-col">
                            Register <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>}
                    {user &&
                    
                    <Link to='booking'>
                        <li className="group flex  cursor-pointer flex-col">
                            Booking <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>}

                    <li className="group flex  cursor-pointer flex-col">
                        Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
                <div className="flex items-center justify-between gap-5 hidden md:block">
                    {
                        user ?
                            <button onClick={logout} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">LogOut</button>
                            : <Link to='login'>
                                <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
                            </Link>
                    }

                </div>
               
            </div>
        </nav>

    );
};

export default Navbar;
