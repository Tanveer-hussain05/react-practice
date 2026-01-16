// import StudentCard from "./components/StudentCard";
import { useState } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Learn React",
      description: "React basics and components",
      completed: true,
    },
    {
      title: "Learn React",
      description: "",
      completed: false,
    },
  ]);
  const falseTask = () =>
    setTasks((tasks) => [
      ...tasks,
      { title: "title", description: "", completed: false },
    ]);
  const trueTask = () =>
    setTasks((tasks) => [
      ...tasks,
      { title: "title", description: "description", completed: true },
    ]);

  // const [count, setCount] =   useState(0);

  // const increment = () => {
  //   if (count < 10) {
  //     setCount(count + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const student = {
  //   name: "Tanveer",
  //   age: 22,
  //   course: "Frontend Development",
  //   marks: {
  //     html: 85,
  //     css: 80,
  //     javascript: 75
  //   }
  // }

  return (
    <div className=" flex justify-center p-10 ">
      <div className="h-auto bg-gray-900 p-6">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Task Card
        </h1>
        <div className="flex justify-between">
          <div className="p-2">
            <button
              onClick={falseTask}
              className=" border rounded-sm  w-40 h-10 cursor-pointer bg-white"
            >
              Incompleted Task
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={trueTask}
              className=" border rounded-sm w-40 h-10 cursor-pointer bg-white"
            >
             Completed Task
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-4">
          {tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
      {/* <StudentCard 
        name={student.name}
        age={student.age} 
        course={student.course}
        marks={student.marks}
      />
      <div className="p-4 flex justify-center">
        <div>
          <div
            onClick={increment}
            className="w-fit text-6xl bg-amber-700 border rounded-sm cursor-pointer"
          >
            +
          </div>

          <div className="text-3xl text-center my-2">{count}</div>

          <div
            onClick={decrement}
            className="w-fit text-6xl bg-blue-600 border rounded-sm cursor-pointer"
          >
            -
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
