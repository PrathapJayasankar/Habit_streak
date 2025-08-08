function StreakCard({ title, daysStreak, completed }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition hover:scale-105 duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-orange-500 text-sm mb-4">🔥 {daysStreak} day streak</p>
      {completed ? (
        <button className="bg-green-500 text-white px-4 py-1 rounded">Completed</button>
      ) : (
        <button className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600">
          Mark as Done
        </button>
      )}
    </div>
  );
}

export default StreakCard;
