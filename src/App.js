import { useState } from "react"

const Header = ({ text }) => <h1>{ text }</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick }>{ text }</button>
  )
}

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      </>
    )
  }

  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const PrintStatistics = ({ optionsList }) => {
  let [good, neutral, bad] = optionsList
  let sum = good.counter + bad.counter + neutral.counter
  let realSum = good.counter - bad.counter
  let avg = realSum / sum
  let pos = (good.counter * 100) / sum

  if (sum === 0) {
    return (
      <div>
        No Feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text={good.name} value={good.counter} />
          <StatisticsLine text={neutral.name} value={neutral.counter} />
          <StatisticsLine text={bad.name} value={bad.counter} />
          <StatisticsLine text="all" value={sum} />
          <StatisticsLine text="average" value={avg} />
          <StatisticsLine text="positive" value={pos} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [ options, setOptions ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const optionsList = [
    {
      name: 'good',
      counter: options.good
    },
    {
      name: 'neutral',
      counter: options.neutral
    },
    {
      name: 'bad',
      counter: options.bad
    }
  ]

  const handleGood = () => {
    setOptions({...options, good: options.good + 1})
  }

  const handleNeutral = () => {
    setOptions({...options, neutral: options.neutral + 1})
  }

  const handleBad = () => {
    setOptions({...options, bad: options.bad + 1})
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <h2>Statistics</h2>
      <PrintStatistics optionsList={optionsList}/>
    </div>
  )
}

export default App