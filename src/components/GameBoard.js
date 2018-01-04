import React from 'react'
import PropTypes from 'prop-types'
import '../css/GameBoard.css'
import CountrySection from './CountrySection'
import ScoreSection from './ScoreSection'

const GameBoard = ({ progress, score, progressMessage, elementShown, currentQuestion, onLegendClick, legendShown }) => {
    return (
        <div className='GameBoard'>
            <CountrySection currentQuestion={currentQuestion}
                onLegendClick={onLegendClick}
                legendShown={legendShown} />
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
    currentQuestion: PropTypes.object.isRequired,
    onLegendClick: PropTypes.func.isRequired,
    legendShown: PropTypes.bool.isRequired
}

export default GameBoard