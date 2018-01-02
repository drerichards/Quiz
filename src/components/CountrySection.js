import React from 'react'
import PropTypes from 'prop-types'
import '../css/CountrySection.css'

const CountrySection = ({ currentQuestion}) => {
    console.log(currentQuestion)
    const flagStyle = {
        backgroundImage: `url('${currentQuestion.flag}')`
    }, countryPicStyle = {
        backgroundImage: `url('${currentQuestion.pic}')`
    }
    return (
        <div className='board country-section'>
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