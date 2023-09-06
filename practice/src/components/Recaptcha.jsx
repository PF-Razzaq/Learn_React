import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  const [verified, setVerified] = useState(false);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };
  return (
    <div>
      <form action="">
        <h1 className="text-center">Recaptcha</h1>
        <div className="m-3 col-md-4 col-6 mx-auto">
          <label htmlFor="email" className="form-label ml-0">
            Email Address
          </label>
          <input type="email" htmlFor="email" className="form-control" />

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />

          <button className="btn btn-primary m-2 ms-0" disabled={!verified}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recaptcha;
