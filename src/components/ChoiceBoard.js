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
        const { choices, submitEnabled, onSubmitClick, elementShown, playButtonShown, hideElements, playButtonClick } = this.props
        const button = <span>
            <button type='button' className={`submit-button ${submitEnabled ? '' : 'disabled-button'}
            ${elementShown ? '' : 'is-hidden'}`} onClick={onSubmitClick} disabled={submitEnabled ? '' : 'disabled'}>
                Submit</button>
            <button type='button' className={`next-button ${elementShown ? 'is-hidden' : ''}`}
                onClick={() => this.handleNextClick()}>Next >></button>
        </span>

        return (
            <footer className='ChoiceBoard'>
                {!hideElements ? <div className='choice-container'>
                    {choices.map((choice, i) => {
                        return <div ref={input => { this[`box${i}`] = input }} key={i}
                            className='choice-box' onClick={() => this.handleSelect(i)}>
                            <div>
                                <img src='https://res.cloudinary.com/andrerichards/image/upload/c_scale,w_200/v1514879610/quiz/wheel_icon.png' alt="icon" />
                                {choice}</div>
                        </div>
                    })}
                </div> : ''}
                {!playButtonShown ? button :
                    <button type='button' className='play-button' onClick={playButtonClick}>Play Again?</button>
                }
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
    playButtonClick: PropTypes.func.isRequired,
    elementShown: PropTypes.bool.isRequired,
    playButtonShown: PropTypes.bool.isRequired,
    hideElements: PropTypes.bool.isRequired
}

export default ChoiceBoard
