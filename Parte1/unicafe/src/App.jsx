import { useState } from 'react'
// Componentes boton
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}
    style={{
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0'
    }}
  >{text}</button>
}
// Componente de Estadísticas para mostrar
const Statistic = ({ name, value }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 16px',
        margin: '8px 0',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '500'
      }}>
      {name}: {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  // Cálculo de las estadisticas 
  const total = good + neutral + bad
  const avarage = total > 0 ? (good - bad) / total : 0
  const positive = total > 0 ? (good / total) * 100 : 0

  // Si no hay feedback, mostrar mensaje 
  if (total === 0) {
    return (
      <p>Estadísticas no disponibles</p>
    )
  }

  // De los contrario mostrar las estádisticas 
  return (
    <div>

      <div>
        <Statistic name="Bueno" value={good} />
        <Statistic name='Neutral' value={neutral} />
        <Statistic name='Malo' value={bad} />

      </div>

      <div
        style={{
          margin: '15px 0',
          borderTop: '5px solid #e9ecef',
          paddingTop: '5px'
        }}>

        <Statistic name='Total: ' value={total} />
        <Statistic name='Promedio: ' value={avarage.toFixed(2)} />
        <Statistic name='Positivo: ' value={positive.toFixed(1) + "%"} />

      </div>

    </div>
  )
}


const App = () => {
  // Estados para contar cada tipo de Feedback
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Funciones para cada tipo de botón
  const handleGood = () => {
    setGood(good + 1)
  }

  // Función Neutral
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> Unicafe Feedback </h1>
      <Button text='Bueno' onClick={handleGood}></Button>
      <Button text='Neutral' onClick={handleNeutral}></Button>
      <Button text='Malo' onClick={handleBad}></Button>

      <h2>Estadísticas</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App