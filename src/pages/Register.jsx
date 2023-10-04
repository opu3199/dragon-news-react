import { Link } from "react-router-dom";
import Navbar from "../component/Nvabar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../component/Authprovider";
import toast from "react-hot-toast";


const Register = () => {
    const {creteRegsiter} = useContext(AuthContext)
    const handleregister=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.image.value
        console.log(name,photo,email,password)

        creteRegsiter(email,password)
        .then(()=>toast.success('you have successsfully done'))
        .catch(error=>toast.error(error.message))


    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold text-center my-10">Register Please!!!</h1>

            <form onSubmit={handleregister} className="rounded-md lg:max-w-2xl bg-yellow-100 p-5 mx-auto my-10" >
            <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-bold">Full Name</span>
          </label>
          <input type="text" placeholder="full name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-bold">Photo</span>
          </label>
          <input type="image url" placeholder="image url" name="image" className="input input-bordered" required />
        </div>
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

        <p className="text-lg font-bold">Complete Register ? <Link to='/login'>Login</Link> please</p>
        </form>
        </div>
    );
};

export default Register;