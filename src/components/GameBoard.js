import React from 'react'
import PropTypes from 'prop-types'
import '../css/GameBoard.css'
import CountrySection from './CountrySection'
import ScoreSection from './ScoreSection'

const GameBoard = ({ currentQuestion }) => {
    return (
        <div className='GameBoard'>
            {/* <div className='board legend-section'>
                <h1>Instructions</h1>
                <p>Test your knowledge of the world by choosing from the four answers below.
                    To score, select the <strong>TWO facts</strong> about the country displayed.
                             Choose wisely and <strong>Win!</strong></p>
            </div> */}
            <CountrySection currentQuestion={currentQuestion}/>
            <ScoreSection addlInfo={currentQuestion.addlInfo}/>
        </div>
    )
}

GameBoard.propTypes = {
    currentQuestion: PropTypes.object.isRequired
}

export default GameBoard