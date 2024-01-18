import { useEffect, useState } from "react";
import "./styles.css";

function MobileInput({ number, setNumber, setIsSent, setOtp }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your mobile number"
        color="white"
        onInput={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          if (number.toString().length === 10) {
            setIsSent((isSent) => !isSent);
            const random = Math.floor(Math.random() * 9000) + 1000;
            setOtp(random);
          } else {
            alert("Enter 10 digit number");
          }
        }}
      >
        Send OTP
      </button>
    </>
  );
}
function OTPInput({ otp, setOtpInput }) {
  const [nums, setNums] = useState("");
  function handleInput(e) {
    const n = e.target.value;
    const currInput = e.target;
    const currId = Number(currInput.id[currInput.id.length - 1]);
    if (!parseInt(n) && n != "" && n !== "0") {
      alert("Enter a valid number");
      currInput.value = "";
      return;
    }
    const nextId = currId + 1;
    const prevId = currId - 1;

    if (n) {
      setNums(nums + n);
      if (nextId <= 4) {
        const nextInput = document.getElementById("otp-" + nextId);
        nextInput.disabled = false;
        nextInput.focus();
        currInput.disabled = true;
      }
    } else {
      setNums(nums.substring(0, nums.length - 1));
      if (prevId >= 1) {
        const prevInput = document.getElementById("otp-" + prevId);
        prevInput.disabled = false;
        prevInput.focus();
        currInput.disabled = true;
      }
    }
  }

  return (
    <>
      <div id="otp-inputs">
        <input maxLength={1} onInput={handleInput} id="otp-1" />
        <input maxLength={1} onInput={handleInput} id="otp-2" disabled />
        <input maxLength={1} onInput={handleInput} id="otp-3" disabled />
        <input maxLength={1} onInput={handleInput} id="otp-4" disabled />
      </div>
      <button
        onClick={() => {
          if (otp === parseInt(nums)) {
            alert("Welcome");
          } else {
            alert("Wrong OTP");
          }
        }}
      >
        Login
      </button>
    </>
  );
}
function OTPViewer({ otp }) {
  return <div id="otp-view">Your OTP is: {otp}</div>;
}
export default function OTP() {
  const [number, setNumber] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [otp, setOtp] = useState(null);
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <div>
      <div id="otp">
        <div>Login via OTP</div>
        {!isSent ? (
          <MobileInput
            number={number}
            setNumber={setNumber}
            setIsSent={setIsSent}
            setOtp={setOtp}
          />
        ) : (
          <OTPInput otp={otp} />
        )}
      </div>
      {otp ? <OTPViewer otp={otp} /> : null}
    </div>
  );
}
