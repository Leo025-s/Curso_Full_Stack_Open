import { useState } from 'react'

// Componente botón
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}
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
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Estado para saber qué anécdota se está mostrando
  const [selected, setSelected] = useState(0)

  // Estado para contar los votos de cada anecdota con un array 
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Función para mostrar anecdota aleatorio
  const nextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  // Función para votar por la anecdota actula
  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // Anecdota con más votos
  const mostVotesCount = Math.max(...votes)
  const mostVotesIndex = votes.indexOf(mostVotesCount)

  return (
    <div>
      <h1>Anecdotas Aleatorias</h1>

      <div
        style={{
          padding: '10px 20px',
          margin: '5px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          cursor: 'pointer',
          backgroundColor: '#f0f0f0'
        }}>
        <p>{anecdotes[selected]}</p>
      </div>
      <div>
        <p>Esta anecdota tiene {votes[selected]} </p>
      </div>

      <div>
        <Button text='Votar' onClick={vote}></Button>
        <Button text='Siguiente Anecdota' onClick={nextAnecdote}></Button>
      </div>

      <div>
        <h3> Anecdota más votada </h3>
      </div>

      <div>
        {mostVotesCount === 0 ? (
          <p>
            No hay votos aún
          </p>
        ) : (
          <div>
            <p>{anecdotes[mostVotesIndex]}</p>
            <p> Tiene {mostVotesCount} votos </p>
          </div>
        )}
      </div>

    </div>
  )
}

export default App