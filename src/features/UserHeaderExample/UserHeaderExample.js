import UserCard from "@components/UserCard";
import MockPersonService from "@services/mockPersonService";
import moment from "moment";
import { useEffect, useState } from "react";
import "./UserHeaderExample.css";

const UserHeaderExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    generateRandomUser();
  }, []);

  const generateRandomUser = async () => {
    const data = await MockPersonService.fetchRandomUser();
    setUser(data);
  };

  const getUserDOB = () => {
    if (!user) {
      return "";
    }
    const dob = moment(user.dob.date).format("Do MMMM YYYY");
    return dob;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    generateRandomUser();
  };

  const renderUserCard = () => {
    console.log(user);
    return (
      <UserCard
        firstName={user.name.first}
        lastName={user.name.last}
        photoPath={user.picture.large}
        dob={getUserDOB()}
        email={user.email}
      />
    );
  };

  return (
    <div className="box">
      <div className="ui grid">
        <div className="eight wide column centered">
          <div className="ui stacked segment">
            {user ? renderUserCard() : "Loading..."}
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
