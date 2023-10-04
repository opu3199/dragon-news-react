
import { AiFillGoogleCircle,AiFillGithub,AiFillTwitterCircle,AiFillInstagram,AiFillFacebook } from "react-icons/ai";
import image from '../assets/qZone1.png'
import image2 from '../assets/qZone2.png'
import image3 from '../assets/qZone3.png'

const RightNavbar = () => {
    return (
        <div className="mx-auto space-y-5">
            <h1 className="text-3xl font-bold">login With</h1>
            <div>
            <button  className="text-2xl bg-green-300 flex justify-center shadow-md   w-full "><AiFillGoogleCircle></AiFillGoogleCircle></button>
            <br />
            <button className="text-2xl bg-teal-200 flex justify-center shadow-md  w-full"><AiFillGithub></AiFillGithub></button>
            </div>

            <div className="border-2 my-5 p-5 space-y-5">
                <h1 className="text-3xl  font-bold">Find us On</h1>
                <button className="border-2 w-full text-2xl flex gap-10 items-center p-2 rounded-md "><AiFillFacebook></AiFillFacebook> <span>Facebook</span></button>
                <button className="border-2 w-full text-2xl flex gap-10 items-center p-2 rounded-md "><AiFillInstagram></AiFillInstagram> <span>Instagram</span></button>
                <button className="border-2 w-full text-2xl flex gap-10 items-center p-2 rounded-md "><AiFillTwitterCircle></AiFillTwitterCircle> <span>Twitter</span></button>
            </div>

            <div className="p-2  bg-slate-200">
                <h1 className="text-2xl font-bold">Q-Zone</h1>
                <img src={image} alt="" />
                <img src={image2} alt="" />
                <img src={image} alt="" />

            </div>
        </div>
    );
};

export default RightNavbar;