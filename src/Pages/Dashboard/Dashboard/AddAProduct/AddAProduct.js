import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: categories, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesname')
            const data = await res.json();
            return data;
        }
    })
    const handleAddProduct = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-orange-400 text-center'>Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Name is required" })} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-600 " role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product</span> </label>

                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                    </div>
                    <select className='w-80 p-3 mt-3' {...register("role", { required: true })}>

                        {
                            categories.map(category => <option value={category.name}
                                key={category.id}
                            >{category.name}</option>)
                        }


                        <option value="user">User</option>
                    </select>



                    <input className='btn bg-orange-400 w-full mt-5 text-white' value="Add Product" type="Add Product" />

                </form>

            </div>
        </div>
    );
};

export default AddAProduct;