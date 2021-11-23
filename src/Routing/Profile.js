import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

function Profile() {
  const params = useParams();
  const hist = useHistory();
  const loc = useLocation();
  console.log(params);
  console.log(hist);
  console.log(loc);
  return (
    <div>
      <h2>This is the Profile page of {params.userName}</h2>
    </div>
  );
}

export default Profile;
