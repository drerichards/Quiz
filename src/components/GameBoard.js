import React from 'react'
import PropTypes from 'prop-types'
import '../css/GameBoard.css'
import CountrySection from './CountrySection'
import ScoreSection from './ScoreSection'

const GameBoard = 
({ progress, score, progressMessage, elementShown, currentQuestion, onLegendClick, legendShown, resultsShown, hideElements, playButtonShown, playButtonClick }) => {
    const fullWidthStyle = {
        height: '90%'
    }
    const dummyStyle = {
        visibility: 'visible'
    }
    return (
        <div className='GameBoard' style={!hideElements? dummyStyle : fullWidthStyle}>
            <CountrySection currentQuestion={currentQuestion}
                score={score} onLegendClick={onLegendClick}
                legendShown={legendShown} 
                playButtonShown={playButtonShown}
                playButtonClick={playButtonClick}
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
    playButtonShown: PropTypes.bool.isRequired,
    playButtonClick: PropTypes.func.isRequired,
    hideElements: PropTypes.bool.isRequired
}

export default GameBoard