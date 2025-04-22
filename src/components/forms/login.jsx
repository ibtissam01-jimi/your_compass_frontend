import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center" // توسيط الفورم
      style={{
        background:
          "linear-gradient(180deg, #0F3556 10%, #3C587D 28%, #8C7D60 57%, #AC9E7D 76%, #747B64 100%)",
        width:"1700px",
      }}
    >
      <header className="text-4xl font-serif font-bold text-[#0A2B4A] italic mb-8">
        Your <span className="text-gold">Compass</span>
      </header>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <p className="mb-4 text-gray-600">Add your details below to get back into the app</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. abc@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-gold hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0A2B4A] text-white py-2 rounded-lg font-semibold hover:bg-[#083a6b] transition-colors"
          >
            Log in
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-gold font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
