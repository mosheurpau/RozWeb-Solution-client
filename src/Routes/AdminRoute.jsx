import useUsers from "../pages/hooks/useUsers";

const AdminRoute = ({ children }) => {
  const [userInfo] = useUsers();

  if (userInfo.isAdmin === "true") {
    return children;
  }
};

export default AdminRoute;
