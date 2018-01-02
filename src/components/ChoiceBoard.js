import React from 'react'
import PropTypes from 'prop-types'
import '../css/ChoiceBoard.css'


const ChoiceBoard = ({ choices }) => {
    console.log(choices)
    return (
        <footer className='ChoiceBoard'>
            <div className='choice-container'>
                {choices.map((choice, i) => {
                    return <div key={i} className='choice-box'>
                        <img src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/wheel_icon.png" alt="icon"/>
                        {choice}</div>
                })}
            </div>
            <button className='choice-button'>Submit</button>
        </footer>

    )
}

ChoiceBoard.propTypes = {
    choices: PropTypes.array.isRequired
}

export default ChoiceBoard