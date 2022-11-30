import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import Modal from '../../../Shared/Modal/Modal';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingproduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }



    // fetch product

    const url = `https://quality-consoles-server.vercel.app/products?email=${user?.email}`;


    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    // delete product api
    const handleDeleteproduct = product => {
        fetch(`https://quality-consoles-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`product ${product.title} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-10 text-white '>
            <h2 className='text-3xl mb-5 text-center mt-10 mb-10 text-orange-500'>My Product</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    products.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">

                        <div className="card-body rounded bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            <h2 className="card-title">
                                <h2> Seller Name: {product.title}</h2>
                                <h2>Location: {product.location}</h2>
                            </h2>
                            <p>Description: {product.description}</p>
                            <p>Phone: {product.phone}</p>
                            <div className=' text-white'>
                                <div className="card-actions justify-start">
                                    <h2 className=" mr-6">Condition: {product.condition}</h2>
                                    <div className=" "><h2>Purchase: {product.purchase}</h2></div>
                                </div>
                                <div>
                                    <p></p>
                                </div>
                                <div className="card-actions justify-start mt-6 mb-2">
                                    <div className="badge badge-primary mr-6">Original Price: {product.price}</div>
                                    <div className="badge badge-primary">Resale Price: {product.resale}</div>
                                </div>
                            </div>
                            <div >
                                <h2 className='mb-3'> Category: {product.category}</h2>

                                <div>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    <label className="btn ml-6 btn-sm btn-error">Unsold</label>
                                </div>

                            </div>
                        </div>
                    </div>)
                }

                {
                    deletingproduct &&
                    <Modal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingproduct.name}. It cannot be undone.`}
                        successAction={handleDeleteproduct}
                        successButtonName="Delete"
                        modalData={deletingproduct}
                        closeModal={closeModal}
                    >
                    </Modal>
                }
            </div>

        </div>

    );
};

export default MyProducts;

