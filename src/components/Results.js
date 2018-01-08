import React from 'react'
import PropTypes from 'prop-types'
import '../css/Results.css'

const Results = ({ score, playButtonShown, playButtonClick }) => {
    return (
        <div className='Results'>
            <main>
                <h1 className="result-title">Results</h1>
                <h3 className="result-header">Thanks for Playing!</h3>
                You scored {score} points!
                <p>{score < 59 ? 'Time to brush up on our world knowledge, maybe?'
                    : score >= 60 && score < 80 ? 'Nice! Not too shabby!'
                        : score >= 80 && score < 90 ? 'Impressive! Looks like you really know your stuff!'
                            : 'Perfect Score! Way to go Genius!!!'}</p>
                    <button type='button' className='play-button' onClick={playButtonClick}>Play Again?</button>
                <img src="https://res.cloudinary.com/andrerichards/image/upload/v1514879610/quiz/wheel_icon.png" alt="icon" />
                <footer></footer>
            </main>
        </div>
    )
}

Results.propTypes = {
    playButtonShown: PropTypes.bool.isRequired,
    playButtonClick: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired
}

export default Results