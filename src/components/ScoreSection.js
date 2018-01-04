import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ScoreSection.css'


class ScoreSection extends Component {
    markerFeedback() {
        const { progress, progressMessage } = this.props
        const markers = document.getElementsByClassName('fa')
        const markerArr = []
        for (let i = 0; i < markers.length; i++) {
            markerArr.push(markers[i])
        }
        const indexCount = progress - 1
        progressMessage === 'Correct!' ? markerArr[indexCount].classList.add('fa-check') :
            (progressMessage === 'Sorry!') ? markerArr[indexCount].classList.add('fa-times') : ''
    }

    render() {
        const { score, progressMessage, elementShown, addlInfo } = this.props
        const numbers = [1, 2, 3, 4, 5]
        this.markerFeedback()
        return (
            <div className='board score-section'>
                <div>
                    <div className={`progress-counter ${progressMessage === 'Correct!' ? 'green' : (progressMessage === 'Sorry!') ? 'red' : 'white'}`}>
                        {progressMessage}
                    </div>
                    <header className='score-banner'>
                        Score: <span className={score < 59 ? 'red' : (score >= 60 && score < 90) ? 'green' : 'blue'}>{score}</span> / 100
                    </header>
                    <aside className='score-counter'>
                        {numbers.map((number, i) => <div key={number}>{number}
                            <div className='image-marker'>
                                <i ref={input => { this[`marker${i}`] = input }} className={`fa `}></i></div></div>)}
                    </aside>
                </div>
                <section className={`addl-info ${elementShown ? 'is-hidden' : ''}`}>
                    <ul>
                        {addlInfo.map((bullet) => <li key={bullet}>- {bullet}</li>)}
                    </ul>
                </section>
            </div>
        )
    }
}

ScoreSection.propTypes = {
    progress: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    progressMessage: PropTypes.string.isRequired,
    elementShown: PropTypes.bool.isRequired,
    addlInfo: PropTypes.array.isRequired
}

export default ScoreSection