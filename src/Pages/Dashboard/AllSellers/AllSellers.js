import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
// import React, { useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Modal from '../../Shared/Modal/Modal';


const AllSeller = () => {

    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }




    const url = 'https://quality-consoles-server.vercel.app/allseller';


    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });


    // delete seller
    const handleDeleteSeller = seller => {
        fetch(`https://quality-consoles-server.vercel.app/allseller/${seller._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Admin ${seller.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h3 className='text-3xl mb-5 text-pink-500 text-center mt-10'>All Seller</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 mb-10 ml-10 mr-10 p-7  '>
                {
                    sellers.map(seller => <div className="card w-96 bg-base-100 shadow-xl ">

                        <div className="card-body border  rounded-lg border-pink-500">
                            <h2 className="card-title">
                                {seller.name}
                                <div className="badge badge-secondary">{seller.email}</div>
                            </h2>

                            <div className="card-actions justify-end">

                                <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                <label className="btn btn-sm btn-error">Verify</label>
                            </div>
                        </div>
                    </div>)
                }

                {
                    deletingSeller && <Modal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                        successAction={handleDeleteSeller}
                        successButtonName="Delete"
                        modalData={deletingSeller}
                        closeModal={closeModal}
                    >
                    </Modal>
                }

            </div>
        </div>
    );
};

export default AllSeller;