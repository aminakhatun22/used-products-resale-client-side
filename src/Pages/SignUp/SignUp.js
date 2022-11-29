import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, handleGoogleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [googleRegisterError, setGoogleRegisterError] = useState('');


    const navigate = useNavigate();
    const onSubmit = data => {
        const newData = { ...data, role: 'seller' }
    };
    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;

                saveUser(user?.displayName, user.email, 'user')
            })
            .catch(error => {

                setGoogleRegisterError(error.message)
            });
    }

    const handleSignUp = data => {

        setSignUpError('')
        createUser(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);

                navigate('/');
            })
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
                    <select className='w-80 p-3 mt-3' {...register("role", { required: "User" })}>

                        {/* <option value="user">Bed</option>
                        <option value="user">User</option> */}
                        <option value="user">User</option>
                        <option value="seller" onSubmit={onSubmit}>Seller</option>
                    </select>



                    <input className='btn bg-orange-400 w-full mt-5 text-white' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account <Link className='text-orange-400' to='/login'>Please login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className='btn bg-orange-400 text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;





