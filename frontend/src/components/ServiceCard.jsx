import { useNavigate } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
  src={service.image || "https://via.placeholder.com/400"}
  alt={service.title}
  className="w-full h-48 object-cover"
/>
<div className="p-4">
    <h2 className="text-xl font-bold mb-2">
  {service.title}
</h2>
<p className="text-gray-600 mb-3">
  {service.description}
</p>
<p className="text-blue-600 font-bold mb-4">
  ₹{service.price}
</p>
<button
  onClick={() => navigate(`/booking/${service._id}`)}
  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
>
  Book Now
</button>
</div>
</div>
);
};
export default ServiceCard;