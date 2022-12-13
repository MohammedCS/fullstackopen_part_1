import { useState } from "react"

const Button = ({ onClick, text}) => <Button onClick={onClick}>{text}</Button>

const Program = () => {
    const [ clicks, setClicks ] = useState ({
        left: 0,
        right:0
    })

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left ,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }
    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
    }

    return (
        <div>
            {clicks.left}
            <Button onClick={handleLeftClick} text='Left'/>
            <Button onClick={handleRightClick} text='Right'/>
            {clicks.right}
        </div>
    )
}

export default Program  