const StudentDetails = ({ name, age, course }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  )
}

export default StudentDetails
