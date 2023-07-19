import React from 'react'
import { useNavigate } from 'react-router-dom';

export const OTP = (props) => {
  let navigate = useNavigate();

    const handleOTP = () => {
        let otp = document.getElementById("pass").value;
        console.log("CLIENT: "+ otp);
        console.log("Server: "+ props.data);

        if(otp === props.data){
          navigate("/",true);
        }
        else{
          alert("Incorrect OTP");
        }
    }
    return (
        <>
        <label className="form-label"> OTP </label>
          <input
            style={{marginTop: "100px"}}
            type="password"
            id="pass"
            className="form-control form-control-lg"
            // ref={passwordRef}/
            required
          />
          <button
            type="submit"
            onClick={handleOTP}
            // disabled={loading}
            className="btn btn-primary btn-lg btn-block"
          >
            Submit
          </button>
          </>
  )
}

