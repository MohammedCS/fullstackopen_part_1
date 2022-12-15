const Header = ({ course }) => <h1>{course.name}</h1>
const Part = ({ name, exercise }) => <p>{name}: {exercise}</p>

const Contant = ({ course }) => {
    const [part1, part2, part3] = course.parts

    return (
        <div>
            <Part name={part1.name} exercise={part1.exercises} />
            <Part name={part2.name} exercise={part2.exercises} />
            <Part name={part3.name} exercise={part3.exercises} />
        </div>
    )

}

const Total = ({ course }) => {
    const [part1, part2, part3] = course.parts
    const total = part1.exercises + part2.exercises + part3.exercises

    return (
        <p>Number of exercises: {total}</p>
    )
}


const App = () => {
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
                name: 'State of a componant',
                exercises: 14
            },
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Contant course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default App