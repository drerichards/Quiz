import React from 'react'
import PropTypes from 'prop-types'
import '../css/CountrySection.css'
import Results from './Results'
import Country from './Country'

const CountrySection = ({ currentQuestion, score, onLegendClick, legendShown, resultsShown }) => {
    return (
        <div className='board country-section'>
            {!resultsShown ? <Country currentQuestion={currentQuestion}
                onLegendClick={onLegendClick}
                legendShown={legendShown} /> :
                <Results score={score} />
            }
        </div>
    )
}

CountrySection.propTypes = {
    currentQuestion: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
    onLegendClick: PropTypes.func.isRequired,
    legendShown: PropTypes.bool.isRequired,
    resultsShown: PropTypes.bool.isRequired
}

export default CountrySection