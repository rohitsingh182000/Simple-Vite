import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC<LoginProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/product");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-center font-bold text-4xl">Login</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@flowbite.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <input
              id="rememberMe"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <label
              htmlFor="rememberMe"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
