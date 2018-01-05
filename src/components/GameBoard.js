import React from 'react'
import PropTypes from 'prop-types'
import '../css/GameBoard.css'
import CountrySection from './CountrySection'
import ScoreSection from './ScoreSection'

const GameBoard = ({ progress, score, progressMessage, elementShown, currentQuestion, onLegendClick, legendShown, resultsShown, hideElements }) => {
    const fullWidthStyle = {
        height: '100%'
    }
    const dummyStyle = {
        visibility: 'visible'
    }
    return (
        <div className='GameBoard' style={!hideElements? dummyStyle : fullWidthStyle}>
            <CountrySection currentQuestion={currentQuestion}
                score={score} onLegendClick={onLegendClick}
                legendShown={legendShown}
                resultsShown={resultsShown} />
            <ScoreSection progress={progress}
                score={score} progressMessage={progressMessage}
                elementShown={elementShown}
                addlInfo={currentQuestion.addlInfo}
                hideElements={hideElements} />
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
    legendShown: PropTypes.bool.isRequired,
    resultsShown: PropTypes.bool.isRequired,
    hideElements: PropTypes.bool.isRequired
}

export default GameBoard