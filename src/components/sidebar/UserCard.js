import React from 'react';
import PropTypes from 'prop-types';
import { useLogout } from '../../Auth0Provider';
import styles from './UserCard.css';

const UserCard = ({ userName, userImage }) => {
  console.log(userName);
  console.log(userImage);
  const logout = useLogout();
  const handleLogOut = () => {
    logout({
      returnTo: 'http://localhost:7890/stories'
    });
  };

  return (
    <section className={styles.UserCard}>
      <img src={userImage} alt={userName} />
      <h3>{userName}</h3>
      <button onClick={handleLogOut}>Logout</button>
    </section>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string
};

export default UserCard;