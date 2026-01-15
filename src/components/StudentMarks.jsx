const StudentMarks = ({ marks }) => {
  return (
    <div>
      <h3>Marks</h3>
      <p>HTML: {marks.html}</p>
      <p>CSS: {marks.css}</p>
      <p>JavaScript: {marks.javascript}</p>
    </div>
  )
}

export default StudentMarks
