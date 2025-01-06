import React from "react";
const Hero = () => {
  return (
    <div className= " flex   justify-center bg-white min-h-screen  p-8">
      {/* Header Section */}

      <div>
        <div className="flex  justify-evenly">
          <h1 className="text-4xl text-start font-bold mb-4 ">
            Empowering Patient
            <br /> Care Through <br />
            Innovation
          </h1>

          <p className=" text-xs text-start text-gray-600 mt-8">
            At Lyffy, we streamline healthcare management with a modern <br />
            dashboard that helps doctors deliver timely patient care with
            AI-driven <br />
            insights and seamless communication tools.
            <div className="grid grid-cols-2 gap-8 text-center max-w-md mx-auto mb-12">
              <div className="mt-10 text-start flex gap-3 justify-between">
                <div>
                  {" "}
                  <h2 className="text-3xl font-bold text-green-600">150+</h2>
                  <p className="text-gray-600">Healthcare Leaders</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-green-600">15</h2>
                  <p className="text-gray-600">Trusted by Professionals</p>
                </div>
              </div>
            </div>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/flagged/photo-1566868091579-8e02646d0218?auto=format&fit=crop&w=1224&h=424" // Replace with your image URL
            alt="Healthcare"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
