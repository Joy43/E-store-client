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
                <h2 className="text-3xl font-bold text-gray-800">All Users</h2>
                <h2 className="text-3xl font-bold text-gray-800">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto shadow-md rounded-lg bg-white">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-4">#</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="border-b border-gray-200">
                                <th className="p-4 text-center text-gray-600">{index + 1}</th>
                                <td className="p-4 text-gray-700">{user.name}</td>
                                <td className="p-4 text-gray-700">{user.email}</td>
                                <td className="p-4">
                                    {user.role === 'admin' ? (
                                        'Admin'
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-lg bg-gray-100 hover:bg-gray-200 shadow-inner rounded-full flex justify-center items-center neumorphism-btn">
                                            <FaUsers className="text-orange-500 text-2xl" />
                                        </button>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg bg-gray-100 hover:bg-gray-200 shadow-inner rounded-full flex justify-center items-center neumorphism-btn">
                                        <FaTrashAlt className="text-red-600 text-2xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
