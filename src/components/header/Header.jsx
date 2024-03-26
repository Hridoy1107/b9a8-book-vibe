import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li ><NavLink to="/" className=" btn w-[92px] h-[48px]"><span className=" text-lg text-[#23BE0A]">Home</span></NavLink></li>
        <li><NavLink to="/lbs" className=" btn w-[148px] h-[48px]"><span className=" text-lg ">Listed Books</span></NavLink></li>
        <li><NavLink to="/ptr" className=" btn w-[160px] h-[48px]"><span className=" text-lg ">Pages to Read</span></NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 w-[1170px]">
                <div className="navbar-start">
                    <h1 className="text-3xl h-[48px] font-bold">Book Vibe</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn w-[118px] h-[48px] mr-4 bg-[#23BE0A] text-[#FFFFFF]">Sign In</a>
                    <a className="btn w-[118px] h-[48px] bg-[#59C6D2] text-[#FFFFFF]">Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default Header;