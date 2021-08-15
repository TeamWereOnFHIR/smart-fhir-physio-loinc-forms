/**
 * Displays a user information card with some information.
 * @param {string} firstName - The first name of this person.
 * @param {string} lastName - The last name of this person.
 * @param {string} photoPath - The path to this person's photo.
 * @param {string} dob - Person's date of birth.
 * @param {string} email - Email address of this person.
 * @returns JSX for User Card.
 */
const UserCard = ({ firstName, lastName, photoPath, dob, email }) => {
  return (
    <div className="ui centered card">
      <div className="image">
        <img src={photoPath} />
      </div>
      <div className="content">
        <span className="header">
          {firstName} {lastName}
        </span>
        <div className="meta">
          <span>(This is a randomly generated person)</span>
          <br />
          <span className="date">DOB: {dob}</span>
        </div>
        <div className="description">
          Contact {firstName} at {email}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
