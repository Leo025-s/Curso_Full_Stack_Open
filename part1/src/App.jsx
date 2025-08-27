// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react"


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)

  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          The app is used by pressing the buttons:
        </div>
      )
    }
    return (
      <div>
        Button press History: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({ handleClick, text }) => {
    <button onClick={handleClick} > {text} </button>
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick} text='left'> </button>
      <button onClick={handleRightClick} text='rigth'></button>
      {right}
      <History allClicks={allClicks} />
      {/* <p> Historial:  {allClicks.join(' ')} </p> */}
      <p> Total: {total} </p>
    </div >
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )

}


const Content = (props) => {
  console.log(props)

  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )

}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
      Number of excercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )

}

export default App