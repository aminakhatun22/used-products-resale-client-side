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
        <div>
            <h2 className='text-3xl mb-5 text-center mt-10 mb-10 text-orange-500'>My Product</h2>
            {
                products.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.photo} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            <h2> Seller Name: {product.title}</h2>
                            <h2>Location: {product.location}</h2>
                        </h2>
                        <p>{product.description}</p>
                        <div>
                            <div className="card-actions justify-start">
                                <h2 className="badge badge-outline text-white">Condition: {product.condition}</h2>
                                <div className="badge badge-outline">Purchase: {product.purchase}</div>
                            </div>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline">Original Price: {product.price}</div>
                                <div className="badge badge-outline">Resale Price: {product.resale}</div>
                            </div>
                        </div>
                        <div>
                            <h2> Category: {product.category}</h2>

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
    );
};

export default MyProducts;

