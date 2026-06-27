import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});
const navigate = useNavigate();
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
  await API.post("/auth/register", formData);
  alert("Registration successful");
navigate("/login");
} catch (error) {
  alert(error.response.data.message);
}
};
return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form
  onSubmit={handleSubmit}
  className="bg-white shadow-lg rounded-xl p-8 w-[400px]"
>
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
  Register
</h2>
<input
  type="text"
  name="name"
  placeholder="Enter name"
  className="w-full border p-3 rounded-lg mb-4"
  onChange={handleChange}
/>
<input
  type="email"
  name="email"
  placeholder="Enter email"
  className="w-full border p-3 rounded-lg mb-4"
  onChange={handleChange}
/>
<input
  type="password"
  name="password"
  placeholder="Enter password"
  className="w-full border p-3 rounded-lg mb-4"
  onChange={handleChange}
/>
<button
  type="submit"
  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
>
  Register
</button>
</form>
</div>
);
};
export default Register;