import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <Link to="/dashboard">My Orders</Link>
                        <Link to="/dashboard/allsellers">All Seller</Link>
                        <Link to='/dashboard/allbuyers'>All Buyers</Link>
                        <Link to='/dashboard/mywishlist'>My WishList</Link>
                        {/* {
                            isAdmin && <>
                                <Link to="/dashboard/allsellers">All Seller</Link>
                                <Link to='/dashboard/allbuyers'>All Buyers</Link>

                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;