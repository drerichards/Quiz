import React from 'react'
import PropTypes from 'prop-types'
import '../css/CountrySection.css'

const CountrySection = ({ currentQuestion}) => {
    const flagStyle = {
        backgroundImage: `url('${currentQuestion.flag}')`
    }, countryPicStyle = {
        backgroundImage: `url('${currentQuestion.pic}')`
    }
    return (
        <div className='board country-section'>
            <img className='legend-icon' src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/legend_icon.png" alt="legend"/>
            <header className="country-title">{currentQuestion.title}</header>
            <div className="country-flag" style={flagStyle}></div>
            <div className="country-image" style={countryPicStyle}></div>
        </div>
    )
}

CountrySection.propTypes = {
    currentQuestion: PropTypes.object.isRequired
}

export default CountrySection