import { FaUser, FaFlag, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f3556] via-[#3d4f5a] to-[#d1b089] font-sans">
      <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#c5a76f] mb-2">Sign Up</h1>
        <p className="text-gray-600 mb-6">
          Add your details below to create a new account
        </p>

        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="username"
                placeholder="e.g. alex123"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="nationality">
              Nationality
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaFlag className="text-gray-400 mr-2" />
              <input
                type="text"
                id="nationality"
                placeholder="e.g. Moroccan"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="e.g. alex@email.com"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition sign_up_button"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Already have an account?
          <Link to="/signup_login" className="text-blue-800 font-medium hover:underline ml-1 login_link login_signin">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
