import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-teal-900 text-white py-12 px-6">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Efficient Patient Management
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Streamline patient care with AI insights, video calls, and easy health
          log access.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 rounded-xl shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=304"
            alt="AI-Driven Insights"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">AI-Driven Insights</h2>
            <p className="text-sm text-gray-600">
              Receive timely alerts and recommendations for optimal patient care
              and follow-ups.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-800 rounded-xl shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576671081741-c538eafccfff?auto=format&fit=crop&w=400&h=304"
            alt="User-Friendly Dashboard"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              User-Friendly Dashboard
            </h2>
            <p
              className="text-xs md:text-base text-gray-600"
            >
              Navigate patient details effortlessly with a clean, modern
              interface designed for healthcare professionals.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 rounded-xl shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581056771221-aff3279f32c9?auto=format&fit=crop&w=400&h=304"
            alt="Seamless Communication"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Seamless Communication
            </h2>
            <p className="text-sm text-gray-600">
              Optimize care with quick actions and health logs for better
              patient engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
