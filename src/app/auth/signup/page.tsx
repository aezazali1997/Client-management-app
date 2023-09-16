"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "YOUR_USER_POOL_ID",
  ClientId: "YOUR_APP_CLIENT_ID",
};
const userPool = new CognitoUserPool(poolData);

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const attributeList = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({ Name: "given_name", Value: firstName }),
      new CognitoUserAttribute({ Name: "family_name", Value: lastName }),
      // Add other custom attributes if your user pool has them
    ];

    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      const cognitoUser = result!.user;
      console.log("user name is " + cognitoUser.getUsername());
    });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex flex-1 flex-col justify-center items-center bg-gray-100 sm:w-2/5">
        <h1 className="text-2xl mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="w-4/5 sm:w-2/5">
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="p-2 w-full border rounded"
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="p-2 w-full bg-green-500 text-white rounded"
            >
              Submit
            </button>
          </div>
          <div className="text-center flex justify-center mt-5">
            <Link
              href="/auth/signin"
              className="text-black-500 hover:underline"
            >
              Already have an Account? Sign In
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden flex-1 bg-gray-300 sm:w-3/5 sm:flex items-center justify-center">
        <Image
          src="/auth-image.jpg"
          alt="Some description"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-1 bg-gray-300 sm:hidden"></div>
    </div>
  );
};

export default SignUp;
