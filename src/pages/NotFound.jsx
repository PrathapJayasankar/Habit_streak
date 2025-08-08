import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page not found</p>
      <Link to="/" className="text-indigo-600 hover:underline">Go to Login</Link>
    </div>
  );
}

export default NotFound;
