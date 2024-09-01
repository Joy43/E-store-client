import React, { useContext, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import useProduct from './../../Hooks/useProduct';
import useAxiosSecure from './../../Hooks/AxiosSequre';
import { AuthContext } from "../../Providers/Authproviders";
import useCart from "../../Hooks/usecart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCart = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useProduct(search); // Use setProducts to update the products
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [refetch] = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  const handleAddToCart = (product) => {
    if (user?.email) {
      const cartItem = {
        productId: product._id,
        email: user.email,
        name: product.name,
        image: product.image,
        price: product.discountPrice
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${product.name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const ratingChanged = (newRating, product) => {
    const updatedProducts = products.map(p => 
      p._id === product._id ? { ...p, rating: newRating } : p
    );
    setProducts(updatedProducts);

    // Optionally, send the new rating to the server
    axiosSecure.put(`/products/${product._id}/rating`, { rating: newRating })
      .then(response => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Rating updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      {/* Search Bar */}
      <section className="w-full h-max">
        <div className="w-full h-[520px] shadow-lg rounded-lg overflow-hidden bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center animate-fadeIn"
          style={{ backgroundImage: "url('https://i.ibb.co/HBcL0LT/dell-Gi3i-UJ1-Fwx-I-unsplash.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-6 rounded-md text-center animate-slideInUp">
            <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold tracking-wider">
              Discover Your Product
            </h1>
          </div>
          <div className="w-full mx-auto mt-8">
            <form onSubmit={handleSearch}>
              <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-4">
                <input
                  type="text"
                  name="search"
                  className="border border-transparent w-full p-3 rounded-md text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-70 text-gray-800 animate-fadeIn"
                  placeholder="Name or title search ..."
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-lg text-white rounded-md font-semibold hover:bg-gradient-to-l transition-all duration-300 flex items-center gap-2 hover:animate-bounceOnHover active:scale-95 transition-transform"
                >
                  <FiSearch size={24} />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/*-------------- Product Cards --------------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10">
        {products.map((product) => (
          <div key={product._id} className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md shadow-green-300">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="object-cover"
                src={product.image}
                alt={product.name}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {product.offPercentage}% OFF
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">${product.discountPrice}</span>
                  <span className="text-sm text-slate-900 line-through">${product.regularPrice}</span>
                </p>
                <div className="flex items-center">
                  <ReactStars
                    count={5}
                    onChange={(newRating) => ratingChanged(newRating, product)}
                    size={24}
                    activeColor="#ffd700"
                    value={product.rating} // Set the current rating value
                  />
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
