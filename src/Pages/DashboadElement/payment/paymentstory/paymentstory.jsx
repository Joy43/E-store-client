import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/AxiosSequre";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment History</h2>
      <p className="text-gray-600 mb-6">Total Payments: {payments.length}</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">#</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Price</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Transaction ID</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={payment._id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                <td className="py-3 px-4 text-gray-700">${payment.price.toFixed(2)}</td>
                <td className="py-3 px-4 text-gray-700">{payment.transactionId}</td>
                <td
                  className={`py-3 px-4 text-gray-700 ${
                    payment.status === "Completed"
                      ? "text-green-600"
                      : payment.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
