import "./Login.scss";
import AppleIcon from "../../icons/apple 1.svg";
import GoogleIcon from "../../icons/google-icon 1.svg";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

function Login({ handelUser }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  async function handelSubmit(e) {
    setLoading(true);

    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
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
          <h3 className="auth-header">sign In</h3>
          <p className="auth-text">Sign In to your Account</p>
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

            <div className="password-reset">
              <p>
                <a href="google.com">Forgot password?</a>
              </p>
            </div>
            <button className="auth-button">
              {loading ? "Please Wait..." : "Sign In"}
            </button>
          </form>
          <p className="switch-auth">
            Don't have an account? <Link to="/register">Register Now!</Link>
          </p>
          {error && <p className="auth-error">{error.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
