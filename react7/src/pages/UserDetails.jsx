import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UserDetail = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading || !user) {
    return (
      <>
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <h2>{user?.email}</h2>
      {/* <img src={user?.image} alt={user?.firstName} /> 
        
        */}

      <button
        className="bg-secondary"
        onClick={() => {
          navigate("/users");
        }}
      >
        Back to user list
      </button>
    </div>
  );
};

export default UserDetail;
