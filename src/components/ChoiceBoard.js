import React from 'react'
import PropTypes from 'prop-types'
import '../css/ChoiceBoard.css'

const ChoiceBoard = ({ choices, choiceClicked, submitEnabled, onChoiceClick, onSubmitClick, nextQuestionClick }) => {
    return (
        <footer className='ChoiceBoard'>
            <div className='choice-container'>
                {choices.map((choice, i) => {
                    return <div key={i} className={`choice-box ${choiceClicked ? 'choice-clicked': ''}`} onClick={onChoiceClick}>
                        <img src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/wheel_icon.png" alt="icon" />
                        {choice}</div>
                })}
            </div>
            <button type='button' className={`submit-button ${submitEnabled ? '' : 'disabled-button'}`} onClick={onSubmitClick} disabled={submitEnabled ? '' : 'disabled'}>
                Submit</button>
            <button type='button' className="next-button" onClick={nextQuestionClick}>Next >></button>
        </footer>

    )
}

ChoiceBoard.propTypes = {
    choices: PropTypes.array.isRequired,
    choiceClicked: PropTypes.bool.isRequired,
    submitEnabled: PropTypes.bool.isRequired,
    onChoiceClick: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
    nextQuestionClick: PropTypes.func.isRequired
}

export default ChoiceBoard
