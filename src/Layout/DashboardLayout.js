// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthProvider';
// import useAdmin from '../Hooks/useAdmin/useAdmin';
// import Navbar from '../Pages/Shared/Navbar/Navbar';

// const DashboardLayout = () => {
//     const { user } = useContext(AuthContext);
//     const [isAdmin] = useAdmin(user?.email)
//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="drawer drawer-mobile">
//                 <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content ">
//                     {/* <!-- Page content here --> */}
//                     <Outlet></Outlet>



//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-80 bg-base-100 text-base-content">
//                         {/* <!-- Sidebar content here --> */}
//                         <Link to="/dashboard">My Orders</Link>
//                         <Link to="/dashboard/allsellers">All Seller</Link>
//                         <Link to='/dashboard/allbuyers'>All Buyers</Link>
//                         <Link to='/dashboard/addproduct'>Add A Product</Link>
//                         <Link to='/dashboard/mywishlist'>My WishList</Link>

//                         {/* {
//                             isAdmin && <>
//                                 <Link to="/dashboard/allsellers">All Seller</Link>
//                                 <Link to='/dashboard/allbuyers'>All Buyers</Link>

//                             </>
//                         } */}

//                     </ul>

//                 </div>
//             </div>
//         </div>
//     );
// };


// export default DashboardLayout;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">DASHBOARD</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li> <Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                            <li> <Link to='/dashboard/addproduct'>Add A Product</Link></li>
                            <li>  <Link to='/dashboard/mywishlist'>My WishList</Link></li>

                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {/* Content */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                    <li> <Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                    <li> <Link to='/dashboard/addproduct'>Add A Product</Link></li>
                    <li>  <Link to='/dashboard/mywishlist'>My WishList</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;