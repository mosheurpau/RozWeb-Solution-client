import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);

        let errorMessage = 'Login failed. Please try again.';
        if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password. Please try again.';
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = 'No user found with this email.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Invalid email format.';
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = 'Too many login attempts. Please try again later.';
        }

        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorMessage,
          confirmButtonColor: '#6582F6',
        });
      });
  };

  return (
    <section className="my-10 mb-4 text-[#6582F6]">
      <Helmet>
        <title>RozWeb Solution | Login</title>
      </Helmet>

      <div className="hero">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center w-full md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-white">
              Welcome to our RozWeb Solution! Please login to access your
              account.
            </p>
          </div>
          <div className="card md:w-1/2 w-full shadow-2xl border-2">
            <form onSubmit={handleLogin} className="card-body text-[#6582F6]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/reset"
                    className="label-text-alt text-primary hover:text-white">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline text-[#6582F6]"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p>
                  <small>
                    New Here?{' '}
                    <Link className="text-primary" to="/signup">
                      Create an account
                    </Link>
                  </small>
                </p>
              </div>
            </form>
            <div className="mx-8 text-[#6582F6]">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
