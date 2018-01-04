import React from 'react'
import PropTypes from 'prop-types'
import '../css/GameBoard.css'
import CountrySection from './CountrySection'
import ScoreSection from './ScoreSection'

const GameBoard = ({ progress, score, progressMessage, elementShown, currentQuestion }) => {
    return (
        <div className='GameBoard'>
            {/* <div className='board legend-section'>
                <h1>Instructions</h1>
                <p>Test your knowledge of the world by choosing from the four answers below.
                    To score, select the <strong>TWO facts</strong> about the country displayed.
                             Choose wisely and <strong>Win!</strong></p>
            </div> */}
            <CountrySection currentQuestion={currentQuestion} />
            <ScoreSection progress={progress}
                score={score} progressMessage={progressMessage}
                elementShown={elementShown}
                addlInfo={currentQuestion.addlInfo} />
        </div>
    )
}

GameBoard.propTypes = {
    progress: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    progressMessage: PropTypes.string.isRequired,
    elementShown: PropTypes.bool.isRequired,
    currentQuestion: PropTypes.object.isRequired
}

export default GameBoard