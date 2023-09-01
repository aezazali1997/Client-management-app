import Image from "next/image";
import React from "react";

const reasons = [
  {
    id: 1,
    title: "Client Management",
    description:
      "We manage your clients for you so you can focus on growing your business.",
    image: "/manage.jpeg",
  },
  {
    id: 2,
    title: "Timely Notifications",
    description:
      "Receive timely notifications about your clients so you never miss an important update.",
    image: "/notif.jpeg",
  },
  {
    id: 3,
    title: "Efficient Tools",
    description:
      "Our platform provides all the tools you need to manage your clients effectively.",
    image: "/eff.jpeg",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-8 font-bold">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center">
          {reasons.map((reason, index) => (
            <div key={reason.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md p-8 mb-8">
                <div className="w-full md:w-1/2">
                  <Image
                    className="w-full h-48 object-cover mb-4 md:mb-0 rounded"
                    src={reason.image}
                    alt={reason.title}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
