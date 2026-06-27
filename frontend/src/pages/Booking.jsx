import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

const Booking = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);

  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    address: ""
  });

 useEffect(() => {
  const fetchService = async () => {
    try {
      const { data } = await API.get(`/services/${id}`);
      setService(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchService();
}, [id]);

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async () => {
    try {
      const { data } = await API.post("/payment/create-order", {
        amount: service.price
      });

      const options = {
        key: "rzp_test_T6ayDvdZzNmKXH",
        amount: data.amount,
        currency: data.currency,
        name: "ServiceHub",
        order_id: data.id,

        handler: async function (response) {
          await API.post("/payment/verify", response);

          await API.post("/bookings", {
            service: service._id,
            ...bookingData
          });

          alert("Booking confirmed!");
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      console.log(error);
    }
  };

  if (!service) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[500px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />

        <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
        <p className="text-gray-600 mb-2">{service.description}</p>
        <p className="text-blue-600 font-bold mb-4">₹{service.price}</p>

        <input
          type="date"
          name="date"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Enter address"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Pay & Book
        </button>
      </div>
    </div>
  );
};

export default Booking;