import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/api";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const { data } = await API.get("/services");
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Book Trusted Home Services Easily
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Fast, secure, and reliable service booking platform for all your
          home needs. From plumbing to AC repair, we’ve got you covered.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore Services
        </button>
      </div>

      {/* Services Section */}
      <div className="px-8 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No services available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;