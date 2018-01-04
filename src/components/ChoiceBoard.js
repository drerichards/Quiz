import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ChoiceBoard.css'

class ChoiceBoard extends Component {
    removeHighlight() {
        const boxes = document.getElementsByClassName('choice-box')
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove('choice-clicked')
        }
    }

    handleSelect(index) {
        this.removeHighlight()
        this[`box${index}`].classList.add('choice-clicked')
        this.props.onChoiceClick(this[`box${index}`].innerText)
    }

    handleNextClick() {
        this.props.nextQuestionClick()
        this.removeHighlight()
    }

    render() {
        const { choices, submitEnabled, onSubmitClick, elementShown } = this.props
        return (
            <footer className='ChoiceBoard'>
                <div className='choice-container'>
                    {choices.map((choice, i) => {
                        return <div ref={input => { this[`box${i}`] = input }} key={i}
                            className='choice-box'
                            onClick={() => this.handleSelect(i)}>
                            <img src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/wheel_icon.png" alt="icon" />
                            {choice}
                        </div>
                    })}
                </div>
                <button type='button' className={`submit-button ${submitEnabled ? '' : 'disabled-button'}
            ${elementShown ? '' : 'is-hidden'}`} onClick={onSubmitClick} disabled={submitEnabled ? '' : 'disabled'}>
                    Submit</button>
                <button type='button' className={`next-button ${elementShown ? 'is-hidden' : ''}`}
                    onClick={() => this.handleNextClick()}>Next >></button>
            </footer>
        )
    }
}

ChoiceBoard.propTypes = {
    choices: PropTypes.array.isRequired,
    submitEnabled: PropTypes.bool.isRequired,
    onChoiceClick: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
    nextQuestionClick: PropTypes.func.isRequired,
    elementShown: PropTypes.bool.isRequired
}

export default ChoiceBoard
