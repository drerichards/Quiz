import React from 'react'
import PropTypes from 'prop-types'
import '../css/ScoreSection.css'


const ScoreSection = ({ progress, score, progressMessage, elementShown, addlInfo }) => {
    const numbers = [1, 2, 3, 4, 5]
    document.addEventListener("DOMContentLoaded",  (event) => {
    //     let markers = document.getElementsByClassName('image-marker')[progress-1],
    //         element = document.createElement("i")
    //     let good = <i class="fa fa-check" aria-hidden="true"></i>,
    //         neutral = <i class="fa fa-minus" aria-hidden="true"></i>,
    //         bad = <i class="fa fa-times" aria-hidden="true"></i>
    //     console.log(markers)
    //     markers.appendChild(element)
    //     element.classList.add('fa')
        // console.log(progressMessage)
        const text = document.getElementsByClassName('progress-counter')[0]
        const marker = document.getElementById(`marker${progress}`)
    //     if (progressMessage === 'Correct!' ){
        // console.log(text)
            // console.log(marker)
            
    //         element.classList.add('fa-check')
    //     } else if (progressMessage === 'Almost!' ){
    //         element.classList.add('fa-check')
    //     } else if (progressMessage === 'Sorry!' ) {
    //         element.classList.add('fa-check')
    //     }
        // progressMessage === 'Correct!' ? element.classList.add('fa-check') :
        //     (progressMessage === 'Almost!') ? element.classList.add('fa-minus') :
        //     (progressMessage === 'Sorry!') ? element.classList.add('fa-times') : ''
    })

    return (
        <div className='board score-section'>
            <div>
                <div className={`progress-counter ${progressMessage === 'Correct!' ? 'green' : (progressMessage === 'Sorry!') ? 'red': 'white'}`}>
                    {progressMessage}
                </div>
                <header className='score-banner'>
                    Score: <span className={score < 59 ? 'red' : (score >= 60 && score < 90) ? 'green' : 'blue'}>{score}</span> / 100
                    </header>
                <aside className='score-counter'>
                    {numbers.map((number) => <div key={number}>{number}
                        <div className='image-marker'>
                            <i id={'marker'+number} className={`fa ${progressMessage === 'Correct!' ? 'fa-check' : 'fa-minus'}`}></i></div></div>)}
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

ScoreSection.propTypes = {
    progress: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    progressMessage: PropTypes.string.isRequired,
    elementShown: PropTypes.bool.isRequired,
    addlInfo: PropTypes.array.isRequired
}

export default ScoreSection