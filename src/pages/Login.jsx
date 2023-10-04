import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../component/Nvabar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../component/Authprovider";
import toast from "react-hot-toast";


const Login = () => {
    const {signincreate} = useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const handlelogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)

        signincreate(email,password)
        .then(()=>toast.success('you have successsfully done'))
        navigate(location?.state ?location.state:'/' )
        .catch(error=>toast.error(error.message))


    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className=" my-10 text-3xl font-bold text-center">Login Here</h1>
            <form onSubmit={handlelogin} className="rounded-md lg:max-w-2xl bg-emerald-200 p-5 mx-auto my-10" >
            <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
          </label>
        </div>
        <div className="flex justify-center ">
        <button  className="bg-pink-600 w-full p-2 px-4 rounded-md font-bold my-3">Login</button>
        </div>

        <p className="text-lg font-bold">Don't Have an Account ? <Link to='/register'>Register</Link> please</p>
        </form>
        </div>
    );
};

export default Login;