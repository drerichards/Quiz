import React from 'react'
import PropTypes from 'prop-types'
import '../css/ScoreSection.css'


const ScoreSection = ({ addlInfo }) => {
    console.log(addlInfo)
    const numbers = [1, 2, 3, 4, 5]
    return (
        <div className='board score-section'>
            <div>
                <header className="score-banner">???</header>
                <aside className='progress-counter'>
                    {numbers.map((number) => <div key={number} >{number}</div>)}
                </aside>
            </div>
            <section className='addl-info'>
                <ul>
                    {addlInfo.map((bullet) => <li key={bullet}>- {bullet}</li>)}
                </ul>
            </section>
        </div>
    )
}

ScoreSection.propTypes = {
    addlInfo: PropTypes.array.isRequired
}

export default ScoreSection