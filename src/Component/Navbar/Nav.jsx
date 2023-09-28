
import { Link, Outlet } from 'react-router-dom';

const Nav = () =>{
       return (
         <div>
           <nav className="bg-blue-500 p-4">
             <div className="container mx-auto">
               <div className="flex justify-between items-center">
                 <Link to="/" className="text-white font-bold text-xl">
                   Amazon
                 </Link>
                 <div className="flex space-x-4">
                   <Link to="/home" className="text-white hover:underline">
                     Home
                   </Link>
                   <Link to="/product" className="text-white hover:underline">
                     Product
                   </Link>
                   <Link to="/desh" className="text-white hover:underline">
                     Deshboard
                   </Link>
                 </div>
               </div>
             </div>
           </nav>

           <div className='min-h-screen'>
             <Outlet></Outlet>
           </div>

         
         </div>
       );
};

export default Nav;