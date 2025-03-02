import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await updateUserProfile(data.name, data.photoURL);

      console.log('User profile info updated');

      const userInfo = {
        name: data.name,
        email: data.email,
        img: data.photoURL,
        university: 'Your University', // Add university field
        address: 'Your Address', // Add address field
        newEmail: ' ',
        isAdmin: 'false',
      };

      const res = await axiosPublic.post('/users', userInfo);

      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User created successfully. Please login',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log('User signed up successfully.');
        navigate(-1); // Go back to previous route
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        position: 'top-end',
        icon: 'Failed',
        title: 'Error occurred',
        text: error.message || 'An error occurred while signing up.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="mt-24 mb-8">
      <Helmet>
        <title>RozWeb Solution | Sign Up</title>
      </Helmet>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#6582F6]">Sign up now!</h1>
            <p className="py-6 text-white">
              Welcome to our RozWeb Solution! Sign up now to create your account
              and stay updated with the latest News and TV Channel programs.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  border-2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register('photoURL', { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <Link
                    to="/reset"
                    className="label-text !text-primary link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline text-[#6582F6]"
                  type="submit"
                  value="Sign Up"
                />
              </div>

              <div>
                <p className="text-[#6582F6]">
                  <small>
                    Already have an account?{' '}
                    <Link className="text-primary" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </div>
            </form>
            <div className="mx-8 text-[#6582F6]">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
