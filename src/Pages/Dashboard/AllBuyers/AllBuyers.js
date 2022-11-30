import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Modal from '../../Shared/Modal/Modal';


const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const { user } = useContext(AuthContext);
    // console.log(user);

    const url = 'https://quality-consoles-server.vercel.app/allbuyers';


    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    // delete Buyer
    const handleDeleteBuyer = Buyer => {
        fetch(`https://quality-consoles-server.vercel.app/allbuyers/${Buyer._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Admin ${Buyer.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5 text-pink-500 text-center mt-10'>All Buyers</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 mb-10 ml-10 mr-10 p-7  '>
                {
                    users.map(user => <div className="card w-96 bg-base-100 shadow-xl ">

                        <div className="card-body border  rounded-lg border-pink-500">
                            <h2 className="card-title">
                                {user.name}
                                <div className="badge badge-secondary">{user.email}</div>
                            </h2>

                            <div className="card-actions justify-end">
                                <label onClick={() => setDeletingBuyer(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                <label className="btn btn-sm btn-error">Verify</label>
                            </div>
                        </div>
                    </div>)
                }

            </div>

            {
                deletingBuyer && <Modal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.name}. It cannot be undone.`}
                    successAction={handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}
                >
                </Modal>
            }


        </div >
    );
};

export default AllBuyers;