import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SignIn() {
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            Swal.fire('Login success!', 'Welcome to my Website', 'success');
            navigate(from, { replace: true });
        } catch (error) {
            Swal.fire('Login failed', 'Email or password is incorrect', 'error');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-8 m-6 shadow-lg rounded-lg dark:bg-zinc-900">
            <div className="flex flex-col lg:gap-8 sm:flex-row justify-between">
                {/* -------------Left side form ---------------------------*/}
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="space-y-4 mb-6">
                            <input 
                                className="w-full h-12 rounded-lg border px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" 
                                placeholder="Email" 
                                type="email" 
                                name="email" 
                                required 
                            />
                            <input 
                                className="w-full h-12 rounded-lg border px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" 
                                placeholder="Password" 
                                type="password" 
                                name="password" 
                                required 
                            />
                        </div>
                        <div className="flex items-center mb-6">
                            <input 
                                type="checkbox" 
                                id="keep_signed_in" 
                                className="accent-blue-600"
                            />
                            <label 
                                htmlFor="keep_signed_in" 
                                className="ml-2 text-sm text-zinc-700 dark:text-zinc-300"
                            >
                                Keep me signed in
                            </label>
                        </div>
                        <button 
                            className="w-full h-12 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-zinc-600 dark:text-zinc-400">
                        Forgot your password? 
                        <Link to="#" className="text-blue-600 hover:underline ml-1">Reset it</Link>
                    </p>
                </div>
                {/*------------------ Right side content ---------------*/}
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
                    <p className="text-lg text-center text-zinc-700 dark:text-zinc-300 mb-4">
                        Don't have an account? 
                    </p>
                    <Link to="/signup" className="w-full">
                        <button 
                            className="w-full h-12 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors mb-4"
                        >
                            Create Account
                        </button>
                    </Link>
                    <p className="text-sm text-center text-zinc-600 dark:text-zinc-400 my-2">OR</p>
                    <button 
                        className="w-full h-12 bg-blue-800 text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors mb-4"
                    >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        Sign in with Facebook
                    </button>
                    <button 
                        className="w-full h-12 bg-red-600 text-white rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"/>
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
