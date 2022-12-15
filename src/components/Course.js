const Header = ({ course }) => <h1>{course.name}</h1>
const Part = ({ name, exercise }) => <p>{name}: {exercise}</p>

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => (
                <Part key={part.id} name={part.name} exercise={part.exercises} />
            ))}
        </div>
    )
}

const Total = ({ course }) => {
    let values = course.parts.map(value => value.exercises)
    const sum = values.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    return (
        <p><strong>total of {sum} exercises</strong></p>
    )
}

const Print = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            {course.map(part => <Print key={part.id} course={part} />)}
        </div>
    )
}

export default Course