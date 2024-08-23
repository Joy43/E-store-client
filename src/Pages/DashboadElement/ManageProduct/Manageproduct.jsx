import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

const Manageproduct = () => {
  const [product] = useProduct([]);
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${item._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="col-span-12 w-full max-w-7xl">
        <div className="overflow-auto lg:overflow-visible shadow-lg rounded-lg p-6 bg-gray-800">
          <table className="table-auto w-full text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-900 text-lg text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Brand</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Update</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={item._id} className="bg-gray-700 hover:bg-gray-600 transition-colors">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">
                    <div className="flex items-center">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="ml-3">
                        <div className="text-white font-medium">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3 text-right">${item.discountPrice}</td>
                  <td className="p-3 text-center">
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-neumorphic">
                        <FaEdit className="text-blue-500" />
                      </button>
                    </Link>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-neumorphic"
                    >
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manageproduct;
