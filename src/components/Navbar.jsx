function Navbar() {
  return (
    <nav className="w-full h-16 bg-white border-b fixed top-0 left-60 z-10 flex items-center justify-between px-8 shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">SmartStreak</h1>

      <div className="space-x-6 text-sm font-medium text-gray-700">
        <a href="/dashboard" className="hover:text-indigo-600">📊 Dashboard</a>
        <a href="/tasks" className="hover:text-indigo-600">✅ Tasks</a>
        <a href="/profile" className="hover:text-indigo-600">👤 Profile</a>
        <a href="/" className="hover:text-red-500">🚪 Logout</a>
      </div>
    </nav>
  );
}

export default Navbar;
