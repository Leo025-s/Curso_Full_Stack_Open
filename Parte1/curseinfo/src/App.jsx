const App = () => {

  // Componene del encabezado
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

  // Componete para mostrar una parte individual del curso
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} - {part.exercises} ejercicios
      </p>
    )
  }

  // Conponente para mostrar todo el conetnido del curso
  const Content = ({ parts }) => {
    return (
      <div>
        <h2>Contenido del curso:</h2>
        {parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    )
  }

  // Componente para mostrar el total de ejercicios
  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
      <div>
        <h3>Resumen:</h3>
        <p><strong>Total de ejercicios: {totalExercises}</strong></p>
        <p>Número de partes: {parts.length}</p>
      </div>
    )
  }
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App