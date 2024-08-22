import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/Axiospublic";
import useAuth from "../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState("");

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(data.name, imageURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: imageURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleImageUpload = (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setImageURL(data.data.url))
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium">Profile Picture</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="file-input file-input-bordered file-input-primary w-full mt-1"
              />
              {errors.photoURL && (
                <span className="text-red-500 text-sm">Photo URL is required</span>
              )}
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.type === "required" && "Password is required"}
                  {errors.password.type === "minLength" && "Password must be at least 6 characters"}
                  {errors.password.type === "maxLength" && "Password must be less than 20 characters"}
                  {errors.password.type === "pattern" && "Password must include uppercase, lowercase, number, and special character"}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">Login now</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
