import UserCard from "@components/UserCard";
import { setUser, setUserLoading } from "@redux/slices/userSlice";
import MockPersonService from "@services/mockPersonService";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserHeaderExample.css";

const UserHeaderExample = () => {
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    generateRandomUser();
  }, []);

  const generateRandomUser = async () => {
    dispatch(setUserLoading());
    const data = await MockPersonService.fetchRandomUser();
    dispatch(setUser(data));
  };

  const getUserDOB = () => {
    if (user.loading) {
      return "";
    }
    const dob = moment(user.userData.dob.date).format("Do MMMM YYYY");
    return dob;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    generateRandomUser();
  };

  const renderUserCard = () => {
    return (
      <UserCard
        firstName={user.userData.name.first}
        lastName={user.userData.name.last}
        photoPath={user.userData.picture.large}
        dob={getUserDOB()}
        email={user.userData.email}
      />
    );
  };

  return (
    <div className="box">
      <div className="ui grid">
        <div className="eight wide column centered">
          <div className="ui stacked segment">
            {user.loading ? "Loading..." : renderUserCard()}
            <div className="ui container center aligned">
              <button
                className="ui primary button"
                onClick={(e) => handleOnClick(e)}
              >
                Refresh User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeaderExample;
