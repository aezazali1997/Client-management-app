import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faArrowUp,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
const ThreeStepProcess = () => {
  return (
    <div className="py-12 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Our 3 step Process
      </h1>
      <h2 className="text-xl sm:text-1xl md:text-2xl font-semibold mb-12">
        You focus on business leaving all the client management to us
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-around relative">
        <div className="absolute w-full sm:w-auto left-0 sm:left-1/4 md:left-1/3 lg:left-2/5 xl:left-7/12  md:border-t-2 sm:border-0 md:border-dotted  border-blue-400 top-1/2 transform -translate-y-1/2"></div>

        {[
          {
            step: "Signup",
            description: "Signup to our platform for free",
            icon: <FontAwesomeIcon icon={faUserPlus} width={32} height={32} />,
          },
          {
            step: "Upload your client list",
            description: "Very easily uploading UI for clients",
            icon: <FontAwesomeIcon icon={faArrowUp} width={32} height={32} />,
          },
          {
            step: "Get notified automatically",
            description: "Get Notification related to Clients",
            icon: <FontAwesomeIcon icon={faBell} width={32} height={32} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-4 sm:mt-0 relative z-10"
          >
            <div className="bg-blue-400 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="mt-4 font-mono text-xl sm:text-2xl">{index + 1}</p>
            <p className="text-base sm:text-xl">{item.step}</p>
            <p className="text-base sm:text-xl mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <hr className="my-12" />
    </div>
  );
};

export default ThreeStepProcess;
