import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO, ExampleCorp",
      quote: "This is an excellent product, I can't live without it!",
      image: "./Chalvonna-Smith-150x150.jpeg",
    },
    {
      id: 2,
      name: "John Smith",
      role: "CTO, AnotherExample",
      quote: "Super useful and easy to use, highly recommended.",
      image: "/Kristi-Coleman-150x150.jpeg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "CMO, YetAnotherExample",
      quote: "Five stars, this is exactly what I was looking for.",
      image: "Monica-A.-Clem-Ph.D.-150x150.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-8 font-bold">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Image
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="italic mb-4">`{testimonial.quote}`</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
