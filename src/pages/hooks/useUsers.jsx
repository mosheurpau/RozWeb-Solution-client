import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const useUsers = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          `https://rozweb-solution-server.onrender.com/user/${user.email}`
        );
        setUserInfo(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setLoading(false);
      }
    };

    getUserInfo();
  }, [user]);
  return [userInfo, loading];
};

export default useUsers;
