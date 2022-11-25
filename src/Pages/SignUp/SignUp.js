import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)
    const handleSignUp = data => {
        console.log(data);
        createUser(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-orange-400 text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="text-red-600 " role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-600 " role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })} />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                    </div>
                    <select className='w-80 p-3 mt-3' {...register("category", { required: true })}>
                        <option value="">Select</option>
                        <option value="A">User</option>
                        <option value="B">Seller</option>
                    </select>


                    <input className='btn bg-orange-400 w-full mt-5 text-white' type="submit" />
                </form>
                <p>Already have an account <Link className='text-orange-400' to='/login'>Please login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button className='btn bg-orange-400 text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;





