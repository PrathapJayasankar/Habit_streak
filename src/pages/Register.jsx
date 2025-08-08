import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Create Account</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>

          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">Sign Up</button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-pink-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
