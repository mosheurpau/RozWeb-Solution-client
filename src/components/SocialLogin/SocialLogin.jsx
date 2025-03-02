import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../pages/hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [isLoading, setIsLoading] = useState(false);

  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          img: result.user?.photoURL,
          university: 'Your University',
          address: 'Your Address',
          newEmail: ' ',
          isAdmin: 'false',
        };

        axiosPublic.post('/users', userInfo).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login with Google successfully.',
            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="my-4">
        <button
          className="btn btn-block btn-outline font-bold text-[#6582F6]"
          onClick={handleGoogleSignIn}
          disabled={isLoading}>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <>
              <FaGoogle className="text-2xl" /> Login with Google
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
