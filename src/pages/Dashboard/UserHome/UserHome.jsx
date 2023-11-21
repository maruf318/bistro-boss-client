import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  // console.log("test", user);
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;
