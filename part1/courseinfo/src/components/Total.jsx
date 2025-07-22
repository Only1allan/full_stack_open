const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <p>Total number of exercises {totalExercises}</p>
    </div>
  )
}

export default Total