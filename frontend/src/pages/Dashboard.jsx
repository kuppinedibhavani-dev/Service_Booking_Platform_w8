import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await API.get("/bookings/my-bookings");
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        {/* Total Bookings Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 w-60">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-3xl font-bold text-blue-600">
            {bookings.length}
          </p>
        </div>

        {/* Booking Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-lg rounded-xl p-5"
            >
              <h2 className="text-2xl font-bold mb-2">
                {booking.service.title}
              </h2>

              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Address: {booking.address}</p>

              <p
  className={`mt-3 font-bold ${
    booking.status === "confirmed"
      ? "text-green-600"
      : booking.status === "cancelled"
      ? "text-red-600"
      : booking.status === "completed"
      ? "text-blue-600"
      : "text-yellow-600"
  }`}
>
  {booking.status}
</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;