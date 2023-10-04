import logo from '.././assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center mb-5 space-y-3">
           <img className="mx-auto" src={logo} alt="" />
           <p className='text-xl font-bold'>Journalism Without Fear or Favour</p>
           <p className='text-xl font-bold'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;