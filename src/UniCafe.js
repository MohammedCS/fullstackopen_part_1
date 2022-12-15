import { useState } from "react"

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine  = ({ name, counter }) => {
    if (name === "positive") {
        return (
            <tr>
                <td>{name}&nbsp;  </td>
                <td>{counter} %</td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{name}&nbsp;  </td>
            <td>{counter}</td>
        </tr>
    )
}

const Statistics = ({options}) => {
    const [good, neutral, bad] = [options.good, options.neutral, options.bad]

    let sum = good + neutral + bad
    let avg = (good - bad) / sum
    let pos = (good * 100) / sum

    if (sum === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticLine name="good" counter={options.good} />
                <StatisticLine name="neutral" counter={options.neutral} />
                <StatisticLine name="bad" counter={options.bad} />
                <StatisticLine name="all" counter={sum} />
                <StatisticLine name="average" counter={avg} />
                <StatisticLine name="positive" counter={pos} />
            </tbody>
        </table>
    )
}

const App = () => {
    const [ options, setOption ] = useState({
        good: 0,
        bad: 0,
        neutral: 0
    })

    const handleGood = () => {
        setOption({...options, good: options.good + 1})
    }

    const handleNeutral = () => {
        setOption({...options, neutral: options.neutral + 1})
    }

    const handleBad = () => {
        setOption({...options, bad: options.bad + 1})
    }

    return (
        <div>
            <Header text="give feedback" />
            <Button onClick={handleGood} text="good"/>
            <Button onClick={handleNeutral} text="neutral"/>
            <Button onClick={handleBad} text="bad"/>
            <h2>Statistics</h2>
            <Statistics options={options}/> 
        </div>
    )
}

export default App