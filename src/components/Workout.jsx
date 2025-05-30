import Segment from "./Segment";

const Workout = ({ workout }) => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-black shadow-2xl rounded-3xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{workout.name}</h1>
        <p className="text-gray-600 mt-2 text-gray-700 dark:text-gray-400">{workout.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-200 mt-1">
          Duration: {workout.duration.value} {workout.duration.unit} • Discipline: {workout.discipline}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workout.segments.map((segment, index) => (
          <Segment key={index} segment={segment} />
        ))}
      </div>
    </div>
  );
};

export default Workout;
