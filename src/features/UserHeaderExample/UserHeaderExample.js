import "./UserHeaderExample.css";

import { setUser, setUserLoading } from "@redux/slices/userSlice";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FhirClientContext } from "@services/fhir/FhirClientContext";
import MockPersonService from "@services/mockPersonService";
import UserCard from "@components/UserCard";
import moment from "moment";

// Create component instead of making components in components!
const PatientName = ({ name = [] }) => {
  let entry =
    name.find((nameRecord) => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h1>No Name</h1>;
  }
  return <h1>Patient: {entry.given.join(" ") + " " + entry.family}</h1>;
};

const UserHeaderExample = () => {
  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Fhir client
  const context = useContext(FhirClientContext);
  const fhir = context.client;
  const [patient, setPatient] = useState({});

  /**
   * Component on init effects.
   *
   * Ensure empty array param is passed to indicate this should only happen on init.
   *
   * Especially db type calls - otherwise we'll be making calls forever!
   */
  useEffect(() => {
    generateRandomUser();
    getPatientFromFhir();
  }, []);

  const getPatientFromFhir = async () => {
    fhir.patient
      .read()
      .then((patient) => {
        setPatient(patient);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`);
      });
  };

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

  const renderPatientInfo = () => {
    return (
      <div>
        <PatientName name={patient.name} />
      </div>
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
            <div>{patient ? renderPatientInfo() : "Loading Patient..."}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeaderExample;
