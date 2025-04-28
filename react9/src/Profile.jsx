import React, { useContext } from "react";
import { UserContext } from "./userContext/UserContext";

function Profile() {
  const { userName } = useContext(UserContext);
  console.log(userName);

  return (
    <div>
      <h1>Name</h1>
      <h2>{userName}</h2>
    </div>
  );
}

export default Profile;
