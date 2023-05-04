import React, { useState,  useContext } from "react";
import UserAPI from "../API/UserAPI";
import { AuthContext } from "../Context/AuthContext";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
	  try {
		  const response = await UserAPI.postLogin({ email, password });
		  console.log(response);
		  if (!response) return alert("Email or password wrong!");
		  if (!response.isAdmin && !response.isConsultant) return alert("You are not Authorized!")
        dispatch({ type: "LOGIN_SUCCESS", payload: response });
        navigate("/")

    } catch (error) {
      console.log(error);
    }

    // if (findUser.password !== password) {
    // 	setErrorPassword(true);
    // 	return;
    // } else {
    // 	setErrorPassword(false);

    // 	localStorage.setItem('id_user', findUser._id);

    // 	localStorage.setItem('name_user', findUser.fullname);

    // 	const action = addSession(localStorage.getItem('id_user'));
    // 	dispatch(action);

    // 	setCheckPush(true);
    // }
  };

  return (
    <div className=""> 
      <div className="page-breadcrumb">
        <div className="row">
          <div className="login">
            <div className="heading">
              <h2>Sign in</h2>
              <form action="#">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group input-group-lg">
                  <span className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="button" className="float" onClick={handleSubmit}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
