"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserPool,
} from "amazon-cognito-identity-js";

const USER_POOL_ID = "YOUR_USER_POOL_ID";
const CLIENT_ID = "YOUR_APP_CLIENT_ID";

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        console.log("Authentication Successful!", session);
      },
      onFailure: (err) => {
        console.error("Authentication failed", err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log("Password change required");
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex flex-1 flex-col justify-center items-center bg-gray-100 w-full">
        <h1 className="text-2xl mb-4">Welcome back!</h1>
        <form onSubmit={handleSubmit} className="w-4/5 sm:w-2/5">
          <div className="mb-4">
            <label>Email:</label>
            <input
              className="p-2 mt-2 w-full border rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label>Password:</label>
            <input
              className="p-2 mt-2 w-full border rounded"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 top-8 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded w-32"
            >
              Submit
            </button>
            <hr />
          </div>
          <div className="tex-center flex justify-center mt-5">
            <Link
              href="/auth/signup"
              className="text-black-500 hover:underline"
            >
              Don`t have an account? Sign up
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

export default SignIn;
