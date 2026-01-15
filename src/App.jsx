import StudentCard from "./components/StudentCard";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const student = {
    name: "Tanveer",
    age: 22,
    course: "Frontend Development",
    marks: {
      html: 85,
      css: 80,
      javascript: 75
    }
  }

  return (
    <div>
      <StudentCard 
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
      </div>
    </div>
  );
}

export default App;
