import StudentDetails from "./StudentDetails"
import StudentMarks from "./StudentMarks"

const StudentCard = ({ name, age, course, marks }) => {
  return (
    <div className="bg-amber-50 p-10 ">
      <StudentDetails 
        name={name}
        age={age}
        course={course}
      />

      <StudentMarks marks={marks} />
    </div>
  )
}

export default StudentCard
