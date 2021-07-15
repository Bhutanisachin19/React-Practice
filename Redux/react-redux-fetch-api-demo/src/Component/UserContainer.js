import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../redux";

const UserConatiner = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.laoding ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConatiner);
