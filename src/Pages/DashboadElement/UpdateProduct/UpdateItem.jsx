import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/Axiospublic";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, itemproduct, regularPrice, discountPrice, offPercentage, rating, image, _id } = useLoaderData();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      category,
      regularPrice,
      discountPrice,
      offPercentage,
      rating,
    },
  });

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const productItem = {
        name: data.name,
        category: data.category,
        regularPrice: parseFloat(data.regularPrice),
        discountPrice: parseFloat(data.discountPrice),
        offPercentage: parseFloat(data.offPercentage),
        rating: parseFloat(data.rating),
        itemproduct: data.itemproduct,
        image: res.data.data.display_url,
      };

      const productRes = await axiosSecure.patch(`/product/${_id}`, productItem);

      if (productRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated successfully.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Image upload failed.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name*</label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("name", { required: true })}
            className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Category and Prices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category*</label>
            <select
              {...register("category", { required: true })}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="shoes">Shoes</option>
              <option value="iPhone">iPhone</option>
              <option value="smartphones">Smartphones</option>
              <option value="Tablet">Tablet</option>
              <option value="laptops">Laptops</option>
              <option value="home-decoration">Home Decoration</option>
              <option value="medical">Medical</option>
            </select>
          </div>

          {/* Regular Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Regular Price*</label>
            <input
              type="number"
              placeholder="Enter regular price"
              {...register("regularPrice", { required: true })}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Discount Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Discount Price*</label>
            <input
              type="number"
              placeholder="Enter discount price"
              {...register("discountPrice", { required: true })}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Off Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Off Percentage*</label>
            <input
              type="number"
              placeholder="Enter off percentage"
              {...register("offPercentage", { required: true })}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating*</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="Enter rating (e.g., 4.0)"
            {...register("rating", { required: true })}
            className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Product Details */}
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">Product Details</label>
          <textarea
            defaultValue={itemproduct}
            {...register("itemproduct")}
            className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-24"
            placeholder="Enter product details"
          ></textarea>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image*</label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition duration-150"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
