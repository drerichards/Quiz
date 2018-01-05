import React from 'react'
import PropTypes from 'prop-types'
import '../css/CountrySection.css'

const Country = ({ currentQuestion, onLegendClick, legendShown })  => {
    const flagStyle = {
        backgroundImage: `url('${currentQuestion.flag}')`
    }, countryPicStyle = {
        backgroundImage: `url('${currentQuestion.pic}')`
    }

    return (
        <div className='country-container'>
            <header className="country-title">{currentQuestion.title}</header>
            <div className="country-flag" style={flagStyle}></div>
            <div className="country-image" style={countryPicStyle}></div>
            <div className='legend'>
                <img className='legend-icon' onClick={onLegendClick}
                    src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/legend_icon.png" alt="legend" />
                <div className={`legend-text ${legendShown ? '' : 'is-hidden'}`}>
                    <h1>Instructions</h1>
                    <p>Test your knowledge of the world by choosing from the three answers below.</p>
                    <p>To score, select the correct fact about the country displayed.</p>
                    <p>Choose wisely and aim for the High Score!</p>
                </div>
            </div>
        </div>
    )
}

Country.propTypes = {
    currentQuestion: PropTypes.object.isRequired,
    onLegendClick: PropTypes.func.isRequired,
    legendShown: PropTypes.bool.isRequired
}

export default Country