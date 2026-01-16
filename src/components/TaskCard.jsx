function TaskCard({ task }) {
  const bgColor = task.completed ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${bgColor} text-white p-4 rounded`}>
      <h2 className="font-bold text-lg mb-2">Task</h2>

      <p>
        <strong>Title:</strong> {task.title}
      </p>

      {task.completed && (
        <p>
          <strong>Description:</strong> {task.description }
        </p>
      )}

      <p className="mt-2">
        <strong>Status:</strong>
        {task.completed ? "✅ Completed  " : "❌ Not completed "}
      </p>

      
    </div>
  );
}

export default TaskCard;
