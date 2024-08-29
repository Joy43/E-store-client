import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex justify-evenly mb-8">
               
                <button
            type="button"
            className="bg-blue-700 py-2 px-3 rounded-md text-white"
          >
            <span className="m-2">Total Users:</span>
            <span className="bg-teal-500 font-bold text-white py-1 px-2 text-lg rounded">
              {users?.length}
            </span>
          </button>
            </div>
            {/* -----------table--------------------------- */}
            <div className="col-span-12 w-full max-w-7xl">
        <div className="overflow-auto lg:overflow-visible shadow-lg rounded-lg p-6 bg-gray-800">
          <table className="table-auto w-full text-gray-100 border-separate space-y-6 text-sm">
            <thead className="bg-gray-900 text-lg text-white">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Delete</th>
               
              </tr>
            </thead>
            <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="border-b border-blue-800 bg-sky-700 hover:bg-gray-600 rounded-xl shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff]">
                                <th className="p-4 text-center text-gray-100">{index + 1}</th>
                                <td className="p-4 text-gray-100">{user.name}</td>
                                <td className="p-4 text-gray-100">{user.email}</td>
                                <td className="p-4">
                                    {user.role === 'admin' ? (
                                        'Admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="flex items-center gap-2 py-2 px-4 rounded-xl text-[#FF4B4B] bg-[#FCFDFF] shadow-[8px_8px_15px_#d1d9e6,_-8px_-8px_15px_#ffffff] hover:shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff] transition-all">
                                            <FaUsers className="text-blue-800 text-2xl" />
                                        </button>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="flex items-center gap-2 py-2 px-4 rounded-xl text-[#FF4B4B] bg-[#FCFDFF] shadow-[8px_8px_15px_#d1d9e6,_-8px_-8px_15px_#ffffff] hover:shadow-[inset_8px_8px_15px_#d1d9e6,_inset_-8px_-8px_15px_#ffffff] transition-all">
                                        <FaTrashAlt className="text-red-600 text-xl" />
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

export default AllUsers;
