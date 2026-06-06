import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
     <li><NavLink to='/'>Home</NavLink></li>
     {/* <li><NavLink to='/pagestoread'>Pages to Read</NavLink></li>
     <li><NavLink to='/academic'>Academic</NavLink></li>
     <li><NavLink to='/professional'>Professional</NavLink></li> */}
     <li><NavLink to='/wishlist'>WishList</NavLink></li>

  

      
    
    </>
    return (
       <div className="navbar bg-white px-20 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#23BE0A] mr-4">Sign In</a>
    <a className="btn bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
    );
};

export default Header;