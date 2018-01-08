import React from 'react'
import PropTypes from 'prop-types'
import '../css/CountrySection.css'
import Results from './Results'
import Country from './Country'

const CountrySection = ({ currentQuestion, score, onLegendClick, legendShown, resultsShown, playButtonShown, playButtonClick }) => {
    return (
        <div className='board country-section'>
            {!resultsShown ? <Country currentQuestion={currentQuestion}
                onLegendClick={onLegendClick}
                legendShown={legendShown} /> :
                <Results score={score}
                    playButtonShown={playButtonShown}
                    playButtonClick={playButtonClick} />
            }
        </div>
    )
}

CountrySection.propTypes = {
    currentQuestion: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
    onLegendClick: PropTypes.func.isRequired,
    legendShown: PropTypes.bool.isRequired,
    resultsShown: PropTypes.bool.isRequired,
    playButtonShown: PropTypes.bool.isRequired,
    playButtonClick: PropTypes.func.isRequired
}

export default CountrySection