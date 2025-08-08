import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StreakCard from "../components/StreakCard";

function Dashboard() {
  const tasks = [
    { title: "Morning Run", daysStreak: 7, completed: false },
    { title: "Reading Habit", daysStreak: 14, completed: true },
    { title: "Coding Practice", daysStreak: 3, completed: false },
  ];

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 min-h-screen pl-60">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-20 px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">🎯 Your Streak Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task, index) => (
              <StreakCard key={index} {...task} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
