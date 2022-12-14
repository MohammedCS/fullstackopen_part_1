import Course from './components/Course'

const App = () => {
    const course = [
        {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    id: 1,
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                {
                    id: 2,
                    name: 'Using props to pass data',
                    exercises: 7
                },
                {
                    id: 4,
                    name: 'State of a componant',
                    exercises: 25
                },
                {
                    id: 3,
                    name: 'State of a componant',
                    exercises: 14
                },
            ]
        },
        {
            id: 2,
            name: 'React Course',
            parts: [
                {
                    id: 1,
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                {
                    id: 2,
                    name: 'Using props to pass data',
                    exercises: 7
                },
                {
                    id: 4,
                    name: 'State of a componant',
                    exercises: 25
                },
                {
                    id: 3,
                    name: 'State of a componant',
                    exercises: 14
                },
            ]
        },
        {
            id: 3,
            name: 'Javascript Course',
            parts: [
                {
                    id: 1,
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                {
                    id: 4,
                    name: 'State of a componant',
                    exercises: 25
                },
                {
                    id: 3,
                    name: 'State of a componant',
                    exercises: 14
                },
            ]
        },
    ]

    return (
        <Course course={course} />
    )
}

export default App