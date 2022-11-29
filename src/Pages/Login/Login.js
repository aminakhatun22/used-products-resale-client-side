
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const { handleGoogleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        setLoginError('');
        console.log(data);
        signIn(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            });

    }






    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-orange-400 text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <label className="label"><span className="label-text">Forget Password</span> </label>
                    </div>



                    <input className='btn bg-orange-400 w-full mt-5 text-white' type="submit" />
                </form>
                <div>
                    {
                        loginError && <p className='text-red-500'>{loginError}</p>
                    }
                </div>
                <p>New to furnob <Link className='text-orange-400' to='/signup'>Create new account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn bg-orange-400 text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Login;