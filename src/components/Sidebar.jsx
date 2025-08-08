import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 bg-white shadow-lg h-screen fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-indigo-600">SmartStreak</h1>
        </div>

        <ul className="mt-6 space-y-4 px-6 text-gray-700 font-medium">
          <li>
            <Link to="/dashboard" className="hover:text-indigo-500">📊 Dashboard</Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-indigo-500">✅ Tasks</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-indigo-500">👤 Profile</Link>
          </li>
        </ul>
      </div>

      <div className="p-6 border-t">
        <Link to="/" className="text-red-500 hover:text-red-600 font-medium">🚪 Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
