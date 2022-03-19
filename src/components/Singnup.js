import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref,
  update,
  child,
  get,
  set
} from "firebase/database";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const count = useRef(0); 
  function genOTP(){
    setOTP(Math.floor(100000 + Math.random() * 900000));
  }

  useEffect(() => {
    async function sendOTP(){
      if(otp !== null)
      {
        count.current = count.current + 1;
        if( count.current === 1)
        {
          let email = document.getElementById("email").value;
          let PORT = process.env.PORT || 5000;
          let result = await fetch(`http://localhost:${PORT}/sendOTP`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              otp
            }),
          }).then((res) => res.json());


          if(result.status === "ok")
          {
            props.setdata(otp);
            console.log("otp navigation");
            navigate('/otp-check');
          }
          else
            console.log("error");
        };
      }
    }
      sendOTP();
  }, [otp])

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (emailRef.current.value.search("iiitb.ac.in") === -1 && emailRef.current.value.search("gmail.com") === -1) {
      return setError("Use iiitb.ac.in");
    }

    let datab = [];
    const database = getDatabase();
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        datab = snapshot.val();
        console.log(datab);
      }
    });

    let uname = document.getElementById("username").value;
    let email = (emailRef.current.value).toLowerCase();
    console.log(email);

    let contact = document.getElementById("contact").value;
    set(ref(database, `Users/${uname}`), {
      "email" : email,
      "contact" : contact
    });

    // let data = [];
    // try {
    //   setError("");
    //   setLoading(true);
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   navigate("/");
    // } catch {
    //   setError("Failed to create an account");
    // }
    try {
      setError("");
      setLoading(true);
      genOTP();
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  /*
    async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (emailRef.current.value.search("iiitb.ac.in") === -1 && emailRef.current.value.search("gmail.com") === -1) {
      return setError("Use iiitb.ac.in or gmail.com");
    }

    try {
      setError("");
      setLoading(true);
      genOTP();
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  */

  return (
    <div
      className="container-md"
      style={{ maxWidth: "500px", position: "relative", marginTop: "100px"}}
    >
      <h1 className="mt-100 text-center"> Sign Up </h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="d-flex flex-column" style={{marginTop: "100px"}}>
        <div className="form-outline mb-4">
          <label className="form-label"> Email </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            ref={emailRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Username </label>
          <input
            type="text"
            id="username"
            className="form-control form-control-lg"
            // ref={emailRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Contact </label>
          <input
            type="text"
            id="contact"
            className="form-control form-control-lg"
            // ref={emailRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Password </label>
          <input
            type="password"
            id="pass"
            className="form-control form-control-lg"
            ref={passwordRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Confirm Password </label>
          <input
            type="password"
            id="confirmpass"
            className="form-control form-control-lg"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <p>
            Already a User ? <Link to="/login"> Login </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg btn-block"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
/*
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref,
  set,
} from "firebase/database";

export default function Signup(props){
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const count = useRef(0); 
  function genOTP(){
    setOTP(Math.floor(100000 + Math.random() * 900000));
  }

  useEffect(() => {
    async function sendOTP(){
      if(otp !== null)
      {
        count.current = count.current + 1;
        if( count.current === 1)
        {
          let email = document.getElementById("email").value;
          let PORT = process.env.PORT || 5000;
          let result = await fetch(`http://localhost:${PORT}/sendOTP`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              otp
            }),
          }).then((res) => res.json());


          if(result.status === "ok")
          {
            props.setdata(otp);
            navigate('/otp-check');
          }
          else
            console.log("error");
        };
      }
    }
      sendOTP();
  }, [otp])

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (emailRef.current.value.search("iiitb.ac.in") === -1 && emailRef.current.value.search("gmail.com") === -1) {
      return setError("Use iiitb.ac.in or gmail.com");
    }

    try {
      setError("");
      setLoading(true);
      genOTP();
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

 
  return (
    <div
      className="container-md"
      style={{ maxWidth: "500px", position: "relative", marginTop: "10%"}}
    >
      <h1 className="mt-100 text-center"> Sign Up </h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="d-flex flex-column" style={{marginTop: "80px"}}>
        <div className="form-outline mb-4">
          <label className="form-label"> Email </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            ref={emailRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Password </label>
          <input
            type="password"
            id="pass"
            className="form-control form-control-lg"
            ref={passwordRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Confirm Password </label>
          <input
            type="password"
            id="confirmpass"
            className="form-control form-control-lg"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <p>
            Already a User ? <Link to="/login"> Login </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg btn-block"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

 */