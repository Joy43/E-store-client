import Swal from "sweetalert2";
import { FaMoneyBill, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/usecart";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[#F6F5F2] text-[#1351D8] p-8 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Cart Button */}
        <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded mb-4 md:mb-0">
          Product
          <span className="absolute bg-green-700 text-green-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
            {cart.length}
          </span>
        </button>
        {/* Total Price */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button
            type="button"
            className="bg-blue-700 py-2 px-3 rounded-md text-white"
          >
            <span className="m-2">Total Price:</span>
            <span className="bg-teal-500 font-bold text-white py-1 px-2 text-lg rounded">
              ${totalPrice}
            </span>
          </button>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="flex items-center gap-2 py-2 px-4 rounded-xl text-[#1351D8] bg-[#FCFDFF] shadow-[8px_8px_15px_#d1d9e6,_-8px_-8px_15px_#ffffff] hover:shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff] transition-all">
                <FaMoneyBill />
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 py-2 px-4 rounded-xl text-[#B0B0B0] bg-[#e0e0e0] shadow-[8px_8px_15px_#b0b0b0,_-8px_-8px_15px_#ffffff] cursor-not-allowed"
            >
              <FaTrashAlt />
              Pay
            </button>
          )}
        </div>
      </div>
      {/* Table */}
      <div className="col-span-12 w-full max-w-7xl overflow-x-auto">
        <div className="shadow-lg rounded-lg p-6 bg-gray-800">
          <table className="table-auto border-separate space-y-6 w-full bg-[#FCFDFF] rounded-2xl shadow-[8px_8px_15px_#d1d9e6,_-8px_-8px_15px_#ffffff]">
            <thead>
              <tr className="text-2xl bg-[#1351D8] text-[#FCFDFF] rounded-t-2xl">
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3 ">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b border-blue-500 bg-[#FCFDFF] text-[#1351D8] rounded-xl shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff]"
                >
                  <th className="p-4 text-center">{index + 1}</th>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-full shadow-[4px_4px_8px_#d1d9e6,_-4px_-4px_8px_#ffffff]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex items-center gap-2 py-2 px-4 rounded-xl text-[#FF4B4B] bg-[#FCFDFF] shadow-[8px_8px_15px_#d1d9e6,_-8px_-8px_15px_#ffffff] hover:shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff] transition-all"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
