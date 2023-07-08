import "./Register.scss";
import AppleIcon from "../../icons/apple 1.svg";
import GoogleIcon from "../../icons/google-icon 1.svg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
function Register({ handelUser }) {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  async function handelSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirm_password = e.target[2].value;
    let res = null;
    setLoading(true);
    try {
      if (password !== confirm_password)
        throw new Error("The password Should be same");

      res = await createUserWithEmailAndPassword(auth, email, password);
      handelUser(res);
      Navigate("/");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-contianer">
      <div className="auth-logo">Board.</div>
      <div className="auth-form-container">
        <div className="auth-form">
          <h3 className="auth-header">Register</h3>
          <p className="auth-text">Create an Account</p>
          <div className="auth-social">
            <div className="auth-social-item">
              <img src={GoogleIcon} alt="google-icon" /> Sign in with Google
            </div>
            <div className="auth-social-item">
              <img src={AppleIcon} alt="apple-icon" /> Sign in with Apple
            </div>
          </div>
          <form className="form" onSubmit={handelSubmit}>
            <div className="auth-from-input">
              <p className="label">Email Address</p>
              <input type="email" />
            </div>
            <div className="auth-from-input">
              <p className="label">Password</p>
              <input type="password" />
            </div>
            <div className="auth-from-input">
              <p className="label">Confirm Password</p>
              <input type="password" />
            </div>

            <button className="auth-button">
              {loading ? "Please wait..." : "Register"}
            </button>
          </form>
          <p className="switch-auth">
            Already have an account? <Link to="/login">Sign In!</Link>
          </p>
          {error && <p className="auth-error">{error.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
