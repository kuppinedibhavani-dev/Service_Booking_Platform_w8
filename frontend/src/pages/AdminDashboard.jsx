import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const { data } = await API.get("/bookings");
      setBookings(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/bookings/${id}`, { status });
      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-lg rounded-xl p-5"
            >
              <h2 className="text-2xl font-bold mb-2">
                {booking.service.title}
              </h2>

              <p>User: {booking.user.name}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Status: {booking.status}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() =>
                    updateStatus(booking._id, "confirmed")
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>

                <button
                  onClick={() =>
                    updateStatus(booking._id, "completed")
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Complete
                </button>

                <button
                  onClick={() =>
                    updateStatus(booking._id, "cancelled")
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;