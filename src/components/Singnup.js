import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (emailRef.current.value.search("iiitb.ac.in") === -1) {
      return setError("Use iiitb.ac.in email");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="container-md" style={{ maxWidth: "500px" }}>
      <h1 className="mt-100 text-center"> Sign Up </h1>{" "}
      {error && (
        <div className="alert alert-danger" role="alert">
          {" "}
          {error}{" "}
        </div>
      )}{" "}
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="form-outline mb-4">
          <label className="form-label"> Email </label>{" "}
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            ref={emailRef}
            required
          />
        </div>{" "}
        <div className="form-outline mb-4">
          <label className="form-label"> Password </label>{" "}
          <input
            type="password"
            id="pass"
            className="form-control form-control-lg"
            ref={passwordRef}
            required
          />
        </div>{" "}
        <div className="form-outline mb-4">
          <label className="form-label"> Confirm Password </label>{" "}
          <input
            type="password"
            id="confirmpass"
            className="form-control form-control-lg"
            ref={passwordConfirmRef}
            required
          />
        </div>{" "}
        <div className="d-flex justify-content-around align-items-center mb-4">
          <p>
            Already a User ? <Link to="/login"> Login </Link>{" "}
          </p>{" "}
        </div>{" "}
        <div className="d-flex justify-content-around align-items-center mb-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg btn-block"
          >
            Sign up{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
