import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddProduct = data => {
        console.log(data);




        const product = {
            title: data.name,
            email: data.email,
            phone: data.phone,
            location: data.location,
            location: data.location,
            resale: data.resale,
            category: data.category,
            purchase: data.purchase,
            description: data.description,
            price: data.price,
            condition: data.condition




        }
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged
                ) {

                    toast.success(`${data.name} is added a product`);
                    navigate('/dashboard/myproducts')
                }

            })





    }
    // const handleAddProduct = data => {
    //     console.log(data);
    // }
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (

        <div className='h-[800px] flex justify-center items-center mt-44'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl text-primary">Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("product_name", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"> Original Price</span></label>
                        <input type="text" {...register("original_price", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("resale_price", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition Type</span></label>
                        <input type="text" {...register("condition type", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone</span></label>
                        <input type="text" {...register("phone", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchase Time</span></label>
                        <input type="text" {...register("purchase_time", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("description", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label" value="category"> <span className="label-text">Category</span></label>
                        <select
                            {...register('category')}
                            className="select input-bordered w-full max-w-xs">
                            {/* {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.name}
                                >{category.name}</option>)
                            } */}


                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};


export default AddAProduct;