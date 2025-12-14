import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-red-500 flex items-center justify-center">
    <div className="min-h-screen mx-auto flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0F2A44]">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Securely sign in to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="rounded text-teal-600 focus:ring-teal-500"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-teal-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0F2A44] hover:bg-[#0B1F33] text-white rounded-xl font-semibold transition duration-200 shadow-md"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-600 font-medium hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
