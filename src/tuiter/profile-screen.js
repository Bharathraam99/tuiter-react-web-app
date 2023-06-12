import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../tuiter/services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = async () => {
    alert("Saved !");
    await dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    async function fetchData() {
      const { payload } = await dispatch(profileThunk());
      console.log(payload);
      setProfile(payload);
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div className="mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="form-control"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <br></br>
      <button
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/tuiter/login");
        }}
        className="btn btn-danger me-2"
      >
        Logout
      </button>
      <button onClick={save} className="btn btn-primary">
        Save
      </button>
    </div>
  );
}

export default ProfileScreen;
