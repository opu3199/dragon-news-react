import { Link, NavLink } from "react-router-dom";
import user from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Authprovider";
import toast from "react-hot-toast";


const Navbar = () => {
  const {user,logout}=useContext(AuthContext )
  // console.log(user)

  const handlesignout=()=>{
    logout()
    .then(()=>toast.success('Log OUT done'))
    .catch(()=>toast.error('error.message'))
  }
    const nablink=<div className="flex gap-8">
   <li><NavLink to='/'>Home</NavLink></li> 
   <li><NavLink to='/about'>about</NavLink></li> 
   <li><NavLink to='/carier'>Carier</NavLink></li> 
   <li><NavLink to='/login'>Login</NavLink></li> 

    </div>

   
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {nablink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {nablink}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
      </label>
      {
        user? <button onClick={ handlesignout}>Logout</button>: <Link to="/login">
        <a className="btn">Login</a>
        </Link>

      }
   
   
  </div>
</div>
    );
};

export default Navbar;